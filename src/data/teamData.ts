export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
  experience: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Ritu Ritesh',
    role: 'Creative Director & Founder',
    bio: 'With over 15 years of experience in fashion design, Ritu Ritesh founded Srijna with a vision to blend traditional Indian craftsmanship with contemporary aesthetics. Her designs have been featured in leading fashion magazines and worn by celebrities across the globe.',
    image: '/images/Designer.jpg',
    specialties: ['Bridal Couture', 'Traditional Embroidery', 'Sustainable Fashion'],
    experience: '15+ years'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Head of Design',
    bio: 'Priya brings a fresh perspective to traditional Indian wear with her background in international fashion. She specializes in creating Indo-Western fusion pieces that appeal to the modern global Indian woman.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    specialties: ['Indo-Western Fusion', 'Contemporary Silhouettes', 'Color Theory'],
    experience: '8+ years'
  },
  {
    id: '3',
    name: 'Arjun Patel',
    role: 'Master Craftsman',
    bio: 'Coming from a family of traditional artisans, Arjun oversees all handwork and embroidery. His expertise in zardozi, thread work, and beadwork ensures that every piece meets the highest standards of craftsmanship.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    specialties: ['Zardozi Work', 'Hand Embroidery', 'Traditional Techniques'],
    experience: '20+ years'
  },
  {
    id: '4',
    name: 'Meera Joshi',
    role: 'Styling Consultant',
    bio: 'Meera helps our clients discover their personal style and creates complete looks for special occasions. Her expertise in color coordination and accessory selection ensures every client looks and feels their best.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    specialties: ['Personal Styling', 'Color Consultation', 'Occasion Dressing'],
    experience: '6+ years'
  }
];

export const companyValues = [
  {
    title: 'Craftsmanship Excellence',
    description: 'Every piece is meticulously crafted using traditional techniques passed down through generations.',
    icon: '✨'
  },
  {
    title: 'Sustainable Practices',
    description: 'We are committed to ethical fashion and supporting local artisan communities.',
    icon: '🌱'
  },
  {
    title: 'Cultural Heritage',
    description: 'Celebrating and preserving the rich textile traditions of India through contemporary design.',
    icon: '🏛️'
  },
  {
    title: 'Personal Touch',
    description: 'Each client receives personalized attention and bespoke solutions for their unique style.',
    icon: '💝'
  }
];