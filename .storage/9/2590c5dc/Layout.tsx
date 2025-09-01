import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, User, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import WhatsAppButton from './WhatsAppButton';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'Collections', 
    href: '/collections',
    submenu: [
      { name: 'Bridal Lehengas', href: '/collections/indian', category: 'Bridal Collection' },
      { name: 'Designer Lehengas', href: '/collections/indian', category: 'Designer Wear' },
      { name: 'Indo-Western', href: '/collections/indo-western', category: 'Fusion Wear' },
      { name: 'Western Wear', href: '/collections/western', category: 'Contemporary' }
    ]
  },
  { name: 'Designer Consult', href: '/designer-consult' },
  { name: 'Lookbook', href: '/lookbook' },
  { name: 'About', href: '/about' },
  { name: 'Journal', href: '/journal' },
  { name: 'Contact', href: '/contact' }
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100 shadow-sm">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/assets/ritu_logo.png" 
                    alt="Srijna by Ritu Ritesh" 
                    className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute -inset-2 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-all duration-300 relative ${
                      location.pathname === item.href
                        ? 'text-rose-600'
                        : 'text-gray-700 hover:text-rose-600'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-rose-500 to-amber-500 transition-all duration-300 ${
                      location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                  
                  {/* Enhanced Mega Menu */}
                  {item.submenu && hoveredMenu === item.name && (
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-80 bg-white border border-rose-100 rounded-xl shadow-xl p-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="grid gap-4">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-rose-50 hover:to-amber-50 transition-all duration-200"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-rose-400 to-amber-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                            <div>
                              <div className="font-medium text-gray-900 group-hover:text-rose-600 transition-colors">{subitem.name}</div>
                              <div className="text-xs text-gray-500">{subitem.category}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-rose-100">
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Sparkles className="w-3 h-3" />
                          <span>Handcrafted with love</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hover:bg-rose-50 hover:text-rose-600 transition-colors">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-rose-50 hover:text-rose-600 transition-colors relative">
                <Heart className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-400 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-rose-50 hover:text-rose-600 transition-colors relative">
                <ShoppingBag className="h-4 w-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm" className="hover:bg-rose-50 hover:text-rose-600 transition-colors">
                <User className="h-4 w-4" />
              </Button>
              
              {/* Mobile menu button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="lg:hidden hover:bg-rose-50">
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-gradient-to-b from-rose-50 to-amber-50">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navigation.map((item) => (
                      <div key={item.name} className="space-y-2">
                        <Link
                          to={item.href}
                          className="block text-lg font-medium text-gray-900 py-2 hover:text-rose-600 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.submenu && (
                          <div className="ml-4 space-y-2">
                            {item.submenu.map((subitem) => (
                              <Link
                                key={subitem.name}
                                to={subitem.href}
                                className="block text-sm text-gray-600 py-1 hover:text-rose-600 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subitem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="pt-6 border-t border-rose-200">
                      <WhatsAppButton 
                        message="Hi, I found you through your website. I'd like to know more about your collections." 
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-rose-900 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
              <div>
                <img 
                  src="/assets/ritu_logo.png" 
                  alt="Srijna by Ritu Ritesh" 
                  className="h-16 w-auto mb-4 brightness-0 invert"
                />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Handcrafted luxury fashion that celebrates the modern woman's elegance and grace.
                </p>
              </div>
              <div className="flex space-x-3">
                <WhatsAppButton 
                  size="sm" 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600"
                  message="Hello! I'd like to connect with Srijna team."
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Collections</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/collections/indian" className="hover:text-rose-300 transition-colors">Bridal Lehengas</Link></li>
                <li><Link to="/collections/indian" className="hover:text-rose-300 transition-colors">Designer Lehengas</Link></li>
                <li><Link to="/collections/indo-western" className="hover:text-rose-300 transition-colors">Indo-Western</Link></li>
                <li><Link to="/collections/western" className="hover:text-rose-300 transition-colors">Western Wear</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/designer-consult" className="hover:text-rose-300 transition-colors">Designer Consultation</Link></li>
                <li><Link to="/lookbook" className="hover:text-rose-300 transition-colors">Lookbook</Link></li>
                <li><a href="#" className="hover:text-rose-300 transition-colors">Bespoke Orders</a></li>
                <li><a href="#" className="hover:text-rose-300 transition-colors">Personal Styling</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Support</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/contact" className="hover:text-rose-300 transition-colors">Contact Us</Link></li>
                <li><a href="#" className="hover:text-rose-300 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-rose-300 transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-rose-300 transition-colors">Care Instructions</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Srijna by Ritu Ritesh. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-rose-300 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-rose-300 transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}