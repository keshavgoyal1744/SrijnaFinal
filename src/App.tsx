import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { FavoritesProvider } from '@/contexts/FavoritesContext';
import { AuthProvider } from '@/contexts/AuthContext';
import Index from './pages/Index';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import Lookbook from './pages/Lookbook';
import About from './pages/About';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import DesignerConsult from './pages/DesignerConsult';
import AuthModal from './components/AuthModal';
import CartSidebar from './components/CartSidebar';
import FavoritesSidebar from './components/FavoritesSidebar';
import { Analytics } from '@vercel/analytics/react';
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/collections/:category" element={<Collections />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/designer-consult" element={<DesignerConsult />} />
                <Route path="/lookbook" element={<Lookbook />} />
                <Route path="/about" element={<About />} />
                <Route path="/journal" element={<Journal />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <AuthModal />
              <CartSidebar />
              <FavoritesSidebar />
            </BrowserRouter>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
    <Analytics />
  </QueryClientProvider>
);

export default App;