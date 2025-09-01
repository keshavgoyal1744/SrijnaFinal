import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface FavoriteItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
}

interface FavoritesState {
  items: FavoriteItem[];
  isOpen: boolean;
  itemCount: number;
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'TOGGLE_FAVORITES' }
  | { type: 'LOAD_FAVORITES'; payload: FavoriteItem[] };

const favoritesReducer = (state: FavoritesState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      if (state.items.find(item => item.id === action.payload.id)) {
        return state; // Item already in favorites
      }
      const newItems = [...state.items, action.payload];
      return { ...state, items: newItems, itemCount: newItems.length };
    }

    case 'REMOVE_FAVORITE': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      return { ...state, items: newItems, itemCount: newItems.length };
    }

    case 'TOGGLE_FAVORITES':
      return { ...state, isOpen: !state.isOpen };

    case 'LOAD_FAVORITES': {
      return { ...state, items: action.payload, itemCount: action.payload.length };
    }

    default:
      return state;
  }
};

const initialState: FavoritesState = {
  items: [],
  isOpen: false,
  itemCount: 0,
};

const FavoritesContext = createContext<{
  state: FavoritesState;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
  toggleFavorites: () => void;
  isFavorite: (id: string) => boolean;
} | null>(null);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('srijna-favorites');
    if (savedFavorites) {
      try {
        const favoriteItems = JSON.parse(savedFavorites);
        dispatch({ type: 'LOAD_FAVORITES', payload: favoriteItems });
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('srijna-favorites', JSON.stringify(state.items));
  }, [state.items]);

  const addFavorite = (item: FavoriteItem) => {
    dispatch({ type: 'ADD_FAVORITE', payload: item });
  };

  const removeFavorite = (id: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  const toggleFavorites = () => {
    dispatch({ type: 'TOGGLE_FAVORITES' });
  };

  const isFavorite = (id: string) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ state, addFavorite, removeFavorite, toggleFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};