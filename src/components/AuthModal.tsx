import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Phone, Lock } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthModal() {
  const { state, login, signup, hideAuthModal, switchAuthMode } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (state.authMode === 'signin') {
        await login(formData.email, formData.password);
      } else {
        await signup(formData.name, formData.email, formData.password, formData.phone);
      }
      setFormData({ name: '', email: '', phone: '', password: '' });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={state.showAuthModal} onOpenChange={hideAuthModal}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            {state.authMode === 'signin' ? 'Welcome Back' : 'Create Account'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {state.authMode === 'signup' && (
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="pl-10"
                required
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="pl-10"
              required
            />
          </div>

          {state.authMode === 'signup' && (
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="pl-10"
              />
            </div>
          )}

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
            disabled={state.isLoading}
          >
            {state.isLoading ? 'Please wait...' : (state.authMode === 'signin' ? 'Sign In' : 'Create Account')}
          </Button>
        </form>

        <div className="text-center pt-4 border-t">
          <p className="text-sm text-gray-600">
            {state.authMode === 'signin' ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => switchAuthMode(state.authMode === 'signin' ? 'signup' : 'signin')}
              className="ml-2 text-rose-600 hover:text-rose-700 font-medium"
            >
              {state.authMode === 'signin' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}