import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  showAuthModal: boolean;
  authMode: 'signin' | 'signup';
}

type AuthAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USER'; payload: User }
  | { type: 'LOGOUT' }
  | { type: 'SHOW_AUTH_MODAL'; payload: 'signin' | 'signup' }
  | { type: 'HIDE_AUTH_MODAL' }
  | { type: 'SWITCH_AUTH_MODE'; payload: 'signin' | 'signup' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };

    case 'SET_USER':
      return { 
        ...state, 
        user: action.payload, 
        isAuthenticated: true, 
        isLoading: false,
        showAuthModal: false 
      };

    case 'LOGOUT':
      return { 
        ...state, 
        user: null, 
        isAuthenticated: false, 
        isLoading: false 
      };

    case 'SHOW_AUTH_MODAL':
      return { 
        ...state, 
        showAuthModal: true, 
        authMode: action.payload 
      };

    case 'HIDE_AUTH_MODAL':
      return { ...state, showAuthModal: false };

    case 'SWITCH_AUTH_MODE':
      return { ...state, authMode: action.payload };

    default:
      return state;
  }
};

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  showAuthModal: false,
  authMode: 'signin',
};

const AuthContext = createContext<{
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, phone?: string) => Promise<void>;
  logout: () => void;
  showAuthModal: (mode: 'signin' | 'signup') => void;
  hideAuthModal: () => void;
  switchAuthMode: (mode: 'signin' | 'signup') => void;
} | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('srijna-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        dispatch({ type: 'SET_USER', payload: user });
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        localStorage.removeItem('srijna-user');
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any email/password combination
      const user: User = {
        id: Date.now().toString(),
        name: email.split('@')[0],
        email,
      };
      
      localStorage.setItem('srijna-user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Login failed. Please try again.');
    }
  };

  const signup = async (name: string, email: string, password: string, phone?: string) => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: Date.now().toString(),
        name,
        email,
        phone,
      };
      
      localStorage.setItem('srijna-user', JSON.stringify(user));
      dispatch({ type: 'SET_USER', payload: user });
    } catch (error) {
      dispatch({ type: 'SET_LOADING', payload: false });
      throw new Error('Signup failed. Please try again.');
    }
  };

  const logout = () => {
    localStorage.removeItem('srijna-user');
    dispatch({ type: 'LOGOUT' });
  };

  const showAuthModal = (mode: 'signin' | 'signup') => {
    dispatch({ type: 'SHOW_AUTH_MODAL', payload: mode });
  };

  const hideAuthModal = () => {
    dispatch({ type: 'HIDE_AUTH_MODAL' });
  };

  const switchAuthMode = (mode: 'signin' | 'signup') => {
    dispatch({ type: 'SWITCH_AUTH_MODE', payload: mode });
  };

  return (
    <AuthContext.Provider value={{ 
      state, 
      login, 
      signup, 
      logout, 
      showAuthModal, 
      hideAuthModal, 
      switchAuthMode 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};