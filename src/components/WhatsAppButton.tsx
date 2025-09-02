import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function WhatsAppButton({ 
  message = "Hi, I'm interested in your collection. Can you help me?", 
  className = "",
  variant = "default",
  size = "md"
}: WhatsAppButtonProps) {
  const phoneNumber = "919815660666"; // Replace with actual WhatsApp Business number
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button 
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      WhatsApp Us
    </Button>
  );
}