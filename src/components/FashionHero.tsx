import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-fashion.jpg";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from '@/components/WhatsAppButton';
const FashionHero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Srijna By Ritu Ritesh
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Timeless Indian, Western & Indo-Western Apparel
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          10+ Years of Craftsmanship • Unlimited Customization • Worldwide Shipping
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button variant="hero" size="lg" onClick={() => navigate('/Collections')}>
            Explore Collections
          </Button>
          <Button 
            variant="gold" 
            size="lg"
            onClick={() => window.open('https://maps.google.com', '_blank')}
          >
            Visit Store for Customization
          </Button>
          <WhatsAppButton 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 shadow-2xl transform hover:scale-105 transition-all duration-300"
              message="Hello! I'm interested in your luxury collections. Could you help me find the perfect piece for my special occasion?"
            />
        </div>
        
      
      </div>
    </section>
  );
};

export default FashionHero;