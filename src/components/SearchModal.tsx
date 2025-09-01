import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(products.slice(0, 6));

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered.slice(0, 8));
    } else {
      setSearchResults(products.slice(0, 6));
    }
  }, [searchQuery]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Search Header */}
          <div className="flex items-center gap-4 p-6 border-b">
            <Search className="w-5 h-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for products, categories, or styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-0 focus:ring-0 text-lg"
              autoFocus
            />
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto p-6">
            {searchQuery && (
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                >
                  <Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1 text-gray-800 group-hover:text-rose-600 transition-colors line-clamp-1">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{product.subcategory}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-900">₹{product.price.toLocaleString()}</span>
                        {product.comparePrice && (
                          <span className="text-sm text-gray-400 line-through">
                            ₹{product.comparePrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {searchResults.length === 0 && searchQuery && (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No results found</h3>
                <p className="text-gray-500">Try searching with different keywords or browse our collections.</p>
                <Link to="/collections" onClick={onClose}>
                  <Button className="mt-4 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    Browse Collections
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}