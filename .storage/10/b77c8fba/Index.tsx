import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Sparkles, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import WhatsAppButton from '@/components/WhatsAppButton';
import { collections, products } from '@/data/products';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  
  const featuredProducts = products.filter(p => p.isNewIn || p.isBestseller || p.isExclusive).slice(0, 8);
  const heroImages = [
    '/images/landscape.jpg',
    'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1920&h=1080&fit=crop',
    '/images/nature.jpg'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <Layout>
      {/* Enhanced Hero Section with Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
        
        {/* Image Carousel */}
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Luxury Fashion ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce"></div>
        
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <img 
              src="/assets/ritu_logo.png" 
              alt="Srijna by Ritu Ritesh" 
              className="h-32 w-auto mx-auto mb-8 brightness-0 invert drop-shadow-2xl"
            />
          </div>
          <p className="text-2xl md:text-3xl font-light mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 text-rose-100">
            Where tradition meets contemporary elegance
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 leading-relaxed">
            Handcrafted luxury fashion for the modern woman. Discover our exquisite collection of bridal lehengas, 
            designer wear, and indo-western ensembles that celebrate your unique style.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
            <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link to="/collections" className="flex items-center gap-2">
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <WhatsAppButton 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl transform hover:scale-105 transition-all duration-300"
              message="Hello! I'm interested in your luxury collections. Could you help me find the perfect piece for my special occasion?"
            />
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Enhanced USP Badges */}
      <section className="py-20 bg-gradient-to-r from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Handcrafted Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Every piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Bespoke Design</h3>
              <p className="text-gray-600 leading-relaxed">Personalized consultations to create pieces that reflect your unique style and celebrate your individuality.</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Worldwide Shipping</h3>
              <p className="text-gray-600 leading-relaxed">Secure delivery to your doorstep, anywhere in the world, with premium packaging and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Collections Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-6 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our curated selection of bridal lehengas, designer wear, and indo-western ensembles, 
              each piece telling a story of craftsmanship and elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <Card key={collection.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-amber-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif mb-2">{collection.title}</h3>
                    <p className="text-sm mb-4 opacity-90 leading-relaxed">{collection.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {collection.productCount} pieces
                      </span>
                      <Link to={`/collections/${collection.category}`}>
                        <Button 
                          size="sm" 
                          className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                        >
                          Explore
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Products */}
      <section className="py-24 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif mb-6 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">Featured Pieces</h2>
            <p className="text-xl text-gray-600">Handpicked favorites from our latest collection</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNewIn && (
                      <Badge className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white border-0 shadow-lg">
                        NEW IN
                      </Badge>
                    )}
                    {product.isBestseller && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white border-0 shadow-lg">
                        BESTSELLER
                      </Badge>
                    )}
                    {product.isExclusive && (
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-600 text-white border-0 shadow-lg">
                        EXCLUSIVE
                      </Badge>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white shadow-lg">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white shadow-lg">
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-gray-800 group-hover:text-rose-600 transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{product.subcategory}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.comparePrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ₹{product.comparePrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg transition-all duration-300">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Designer Note */}
      <section className="py-24 bg-gradient-to-r from-gray-900 via-rose-900 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-12">
            <div className="relative inline-block">
              <img
                src="/images/Portrait.jpg"
                alt="Ritu Ritesh"
                className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 to-amber-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
          <blockquote className="text-3xl font-light italic text-rose-100 mb-8 leading-relaxed">
            "Fashion is not just about clothing; it's about expressing your inner self with confidence and grace. 
            Each piece I create is a celebration of the woman who wears it, her dreams, and her unique journey."
          </blockquote>
          <p className="text-xl font-medium mb-12 text-amber-200">— Ritu Ritesh, Creative Director & Founder</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/designer-consult">
              <Button size="lg" className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
                Book a Personal Consultation
              </Button>
            </Link>
            <WhatsAppButton 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl transform hover:scale-105 transition-all duration-300"
              message="Hi! I'd love to learn more about Ritu Ritesh's design philosophy and book a consultation."
            />
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-bounce"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-serif mb-8">Ready to Find Your Perfect Piece?</h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Connect with our design team for personalized styling advice, exclusive access to new collections, 
            and bespoke consultation services tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <WhatsAppButton 
              size="lg"
              className="bg-green-600 hover:bg-green-700 shadow-2xl transform hover:scale-105 transition-all duration-300"
              message="Hi! I'd love to explore your collections and learn more about your design process. Could we schedule a consultation?"
            />
            <Link to="/collections">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-rose-600 shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Browse All Collections
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}