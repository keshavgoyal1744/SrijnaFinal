import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { lookbookImages, products } from '@/data/products';

export default function Lookbook() {
  const [selectedLook, setSelectedLook] = useState<string | null>(null);

  const getLookProducts = (productIds: string[]) => {
    return products.filter(p => productIds.includes(p.id));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <img
          src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1920&h=600&fit=crop"
          alt="Lookbook"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-serif mb-4">Lookbook</h1>
          <p className="text-xl">Curated styles for every occasion</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Shop the Look</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover complete ensembles curated by our design team. Click on any look to explore 
            the pieces and add them directly to your cart.
          </p>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {lookbookImages.map((look, index) => (
            <div key={look.id} className="space-y-6">
              {/* Look Image */}
              <div className="relative group">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg cursor-pointer">
                      <img
                        src={look.image}
                        alt={look.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <ZoomIn className="w-6 h-6 text-black" />
                        </div>
                      </div>
                      
                      {/* Hotspots */}
                      <div className="absolute top-1/3 left-1/4">
                        <button 
                          className="w-6 h-6 bg-white rounded-full border-2 border-black animate-pulse hover:scale-110 transition-transform"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLook(look.id);
                          }}
                        />
                      </div>
                      <div className="absolute bottom-1/3 right-1/3">
                        <button 
                          className="w-6 h-6 bg-white rounded-full border-2 border-black animate-pulse hover:scale-110 transition-transform"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLook(look.id);
                          }}
                        />
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={look.image}
                      alt={look.title}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>

              {/* Look Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif mb-2">{look.title}</h3>
                  <p className="text-gray-600">
                    A carefully curated ensemble featuring {getLookProducts(look.products).length} pieces 
                    that work harmoniously together.
                  </p>
                </div>

                {/* Featured Products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {getLookProducts(look.products).map((product) => (
                    <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="flex">
                        <div className="w-24 h-24 overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="flex-1 p-3">
                          <h4 className="font-medium text-sm mb-1">{product.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{product.subcategory}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-sm">₹{product.price.toLocaleString()}</span>
                            <div className="flex gap-1">
                              <Button size="sm" variant="ghost" className="p-1 h-auto">
                                <Heart className="w-3 h-3" />
                              </Button>
                              <Link to={`/product/${product.id}`}>
                                <Button size="sm" variant="ghost" className="p-1 h-auto">
                                  <ShoppingBag className="w-3 h-3" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Shop the Look Button */}
                <div className="flex gap-4">
                  <Button className="flex-1">
                    Shop Complete Look
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Individual Pieces
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Looks Coming Soon */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-lg p-12">
            <h3 className="text-2xl font-serif mb-4">More Looks Coming Soon</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Our design team is constantly creating new looks and styling combinations. 
              Follow us for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections">
                <Button variant="outline">Browse All Collections</Button>
              </Link>
              <Link to="/designer-consult">
                <Button>Book Personal Styling</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Styling Tips */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <h4 className="font-semibold mb-2">Mix & Match</h4>
            <p className="text-sm text-gray-600">
              Create multiple looks by mixing pieces from different ensembles in your wardrobe.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="font-semibold mb-2">Complete Sets</h4>
            <p className="text-sm text-gray-600">
              Shop complete looks for effortless styling and guaranteed coordination.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ZoomIn className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="font-semibold mb-2">Styling Consultation</h4>
            <p className="text-sm text-gray-600">
              Book a personal consultation for customized styling advice and recommendations.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}