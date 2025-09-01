import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Collections from './pages/Collections';
import ProductDetail from './pages/ProductDetail';
import DesignerConsult from './pages/DesignerConsult';
import Lookbook from './pages/Lookbook';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:category" element={<Collections />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/designer-consult" element={<DesignerConsult />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;