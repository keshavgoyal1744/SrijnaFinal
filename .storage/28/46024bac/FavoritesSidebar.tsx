import { Heart, ShoppingBag, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

export default function FavoritesSidebar() {
  const { state, removeFavorite, toggleFavorites } = useFavorites();
  const { addItem } = useCart();

  const handleAddToCart = (item: any) => {
    addItem({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={toggleFavorites}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Favorites ({state.itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">No favorites yet</h3>
                <p className="text-gray-500 mb-6">Save items you love to view them later</p>
                <Link to="/collections" onClick={toggleFavorites}>
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    Browse Collections
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto py-6">
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                    <Link to={`/product/${item.id}`} onClick={toggleFavorites}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg hover:opacity-80 transition-opacity"
                      />
                    </Link>
                    <div className="flex-1 min-w-0">
                      <Link to={`/product/${item.id}`} onClick={toggleFavorites}>
                        <h3 className="font-medium text-gray-800 line-clamp-2 hover:text-rose-600 transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-gray-500 mb-1">{item.subcategory}</p>
                      <p className="font-semibold text-gray-900 mb-3">₹{item.price.toLocaleString()}</p>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleAddToCart(item)}
                          className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                        >
                          <ShoppingBag className="w-3 h-3 mr-1" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFavorite(item.id)}
                          className="text-red-500 hover:text-red-700 hover:border-red-300"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}