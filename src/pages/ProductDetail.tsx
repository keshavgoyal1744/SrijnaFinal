import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Truck, RotateCcw, Shield, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { products } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { useAuth } from '@/contexts/AuthContext';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const { showAuthModal } = useAuth();

  if (!product) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-2xl font-semibold mb-4">Product not found</h1>
          <Link to="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const whatsappMessage = `Hi! I'm interested in the ${product.title} (₹${product.price.toLocaleString()}). Could you provide more details about availability, sizing, and delivery options?`;

  const handleAddToCart = () => {
    if (!selectedSize && product.sizes.length > 0) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor && product.colors.length > 1) {
      alert('Please select a color');
      return;
    }

    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor || product.colors[0],
      category: product.category,
      quantity
    });
  };

  const handleToggleFavorite = () => {
    if (isFavorite(product.id)) {
      removeFavorite(product.id);
    } else {
      addFavorite({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        category: product.category,
        subcategory: product.subcategory
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gray-900">Collections</Link>
          <span>/</span>
          <Link to={`/collections/${product.category}`} className="hover:text-gray-900">
            {product.category === 'indian' ? 'Indian Wear' : 
             product.category === 'western' ? 'Western Wear' : 'Indo-Western'}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-black' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.isNewIn && <Badge>New In</Badge>}
                {product.isBestseller && <Badge variant="secondary">Bestseller</Badge>}
              </div>
              <h1 className="text-3xl font-serif mb-2">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{product.subcategory}</p>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold">₹{product.price.toLocaleString()}</span>
                {product.comparePrice && (
                  <span className="text-xl text-gray-400 line-through">
                    ₹{product.comparePrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Product Options */}
            <div className="space-y-4">
              {/* Color Selection */}
              {product.colors.length > 1 && (
                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a color" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>{color}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Size Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a size" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size} value={size}>{size}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700"
                disabled={!product.inStock}
                onClick={handleAddToCart}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
              
              <WhatsAppButton 
                size="lg"
                variant="outline"
                className="w-full"
                message={whatsappMessage}
              />

              <div className="flex gap-4">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex-1"
                  onClick={handleToggleFavorite}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorite(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                  {isFavorite(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                </Button>
                <Button variant="ghost" size="sm" className="flex-1" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Product Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-b">
              <div className="text-center">
                <Truck className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">On orders above ₹15,000</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-500">15-day return policy</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Authentic</p>
                <p className="text-xs text-gray-500">100% genuine products</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="fabric">Fabric & Care</TabsTrigger>
              <TabsTrigger value="delivery">Delivery & Returns</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-6">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Handcrafted with attention to detail</li>
                      <li>• Premium quality materials</li>
                      <li>• Contemporary design with traditional elements</li>
                      <li>• Perfect for special occasions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Styling Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pair with statement jewelry</li>
                      <li>• Complete with matching accessories</li>
                      <li>• Professional styling consultation available</li>
                      <li>• Custom alterations offered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="fabric" className="mt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Fabric Composition</h4>
                  <p className="text-gray-700">{product.fabric}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Care Instructions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Dry clean only for best results</li>
                    <li>• Store in a cool, dry place</li>
                    <li>• Avoid direct sunlight when storing</li>
                    <li>• Handle embellishments with care</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="delivery" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Information</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free shipping on orders above ₹15,000</li>
                    <li>• Standard delivery: 5-7 business days</li>
                    <li>• Express delivery: 2-3 business days</li>
                    <li>• International shipping available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Returns & Exchanges</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 15-day return policy</li>
                    <li>• Items must be in original condition</li>
                    <li>• Free return pickup available</li>
                    <li>• Exchange for different size/color</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-serif mb-8 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium mb-2">{relatedProduct.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{relatedProduct.subcategory}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">₹{relatedProduct.price.toLocaleString()}</span>
                    </div>
                    <Link to={`/product/${relatedProduct.id}`}>
                      <Button className="w-full mt-4" variant="outline">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}