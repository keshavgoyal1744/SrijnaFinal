import { Minus, Plus, X, ShoppingBag, Trash2 } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

export default function CartSidebar() {
  const { state, removeItem, updateQuantity, toggleCart, clearCart } = useCart();

  const handleCheckout = () => {
    const itemsList = state.items.map(item => 
      `${item.title} (${item.size ? `Size: ${item.size}, ` : ''}${item.color ? `Color: ${item.color}, ` : ''}Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toLocaleString()}`
    ).join('\n');
    
    const message = `Hi! I'd like to proceed with checkout for the following items:\n\n${itemsList}\n\nTotal: ₹${state.total.toLocaleString()}\n\nCould you please help me complete the purchase?`;
    
    const whatsappUrl = `https://wa.me/919815660666?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Sheet open={state.isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            Shopping Cart ({state.itemCount})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-600 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some beautiful pieces to get started</p>
                <Link to="/collections" onClick={toggleCart}>
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700">
                    Browse Collections
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto py-6">
                <div className="space-y-4">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-800 line-clamp-1">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                        {item.color && <p className="text-sm text-gray-500">Color: {item.color}</p>}
                        <p className="font-semibold text-gray-900">₹{item.price.toLocaleString()}</p>
                        
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Footer */}
              <div className="border-t pt-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total:</span>
                  <span>₹{state.total.toLocaleString()}</span>
                </div>
                
                <div className="space-y-3">
                  <Button
                    onClick={handleCheckout}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                  >
                    Proceed to Checkout
                  </Button>
                  
                  <WhatsAppButton
                    className="w-full bg-green-600 hover:bg-green-700 justify-center"
                    message={`Hi! I have ${state.itemCount} item${state.itemCount > 1 ? 's' : ''} in my cart (Total: ₹${state.total.toLocaleString()}). Can you help me with the purchase?`}
                  />
                  
                  <Button
                    variant="outline"
                    onClick={clearCart}
                    className="w-full text-gray-600 hover:text-red-600 hover:border-red-300"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}