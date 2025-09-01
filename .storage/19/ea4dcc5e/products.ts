export interface Product {
  id: string;
  title: string;
  category: 'indian' | 'western' | 'indo-western';
  subcategory: string;
  price: number;
  comparePrice?: number;
  images: string[];
  description: string;
  fabric: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  isNewIn?: boolean;
  isBestseller?: boolean;
  isExclusive?: boolean;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'indian' | 'western' | 'indo-western';
  productCount: number;
}

export const collections: Collection[] = [
  {
    id: 'bridal-lehengas',
    title: 'Bridal Lehengas',
    description: 'Exquisite bridal ensembles for your special day',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1200&fit=crop',
    category: 'indian',
    productCount: 35
  },
  {
    id: 'designer-lehengas',
    title: 'Designer Lehengas',
    description: 'Contemporary lehengas with traditional elegance',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop',
    category: 'indian',
    productCount: 28
  },
  {
    id: 'indo-western',
    title: 'Indo-Western',
    description: 'Where tradition meets modern sophistication',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop',
    category: 'indo-western',
    productCount: 22
  },
  {
    id: 'western-wear',
    title: 'Western Wear',
    description: 'Elegant western silhouettes for every occasion',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop',
    category: 'western',
    productCount: 18
  }
];

export const products: Product[] = [
  // Bridal Lehengas
  {
    id: 'bridal-lehenga-royal-red',
    title: 'Royal Red Bridal Lehenga',
    category: 'indian',
    subcategory: 'Bridal Lehengas',
    price: 125000,
    comparePrice: 145000,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop'
    ],
    description: 'A magnificent royal red bridal lehenga featuring intricate gold zardozi work, hand-embroidered with pearls and crystals. This timeless piece includes a heavily embellished blouse and matching dupatta.',
    fabric: 'Pure Silk with Heavy Zardozi Embroidery',
    colors: ['Royal Red', 'Deep Maroon', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
    isExclusive: true,
    isBestseller: true
  },
  {
    id: 'bridal-lehenga-golden-glory',
    title: 'Golden Glory Bridal Set',
    category: 'indian',
    subcategory: 'Bridal Lehengas',
    price: 98000,
    comparePrice: 115000,
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop'
    ],
    description: 'Radiant golden lehenga with mirror work and thread embroidery. Perfect for the modern bride who wants to shine on her special day.',
    fabric: 'Silk with Mirror Work and Thread Embroidery',
    colors: ['Golden', 'Champagne Gold', 'Rose Gold'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNewIn: true
  },
  {
    id: 'bridal-lehenga-emerald-dream',
    title: 'Emerald Dream Bridal Lehenga',
    category: 'indian',
    subcategory: 'Bridal Lehengas',
    price: 135000,
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop'
    ],
    description: 'Stunning emerald green bridal lehenga with gold threadwork and sequin detailing. A unique choice for the bride who dares to be different.',
    fabric: 'Raw Silk with Gold Thread and Sequin Work',
    colors: ['Emerald Green', 'Forest Green', 'Jade Green'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isExclusive: true
  },
  
  // Designer Lehengas
  {
    id: 'designer-lehenga-rose-blush',
    title: 'Rose Blush Designer Lehenga',
    category: 'indian',
    subcategory: 'Designer Lehengas',
    price: 75000,
    comparePrice: 85000,
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop'
    ],
    description: 'Delicate rose pink lehenga with floral embroidery and pearl work. Perfect for engagement ceremonies and pre-wedding functions.',
    fabric: 'Georgette with Floral Embroidery',
    colors: ['Rose Pink', 'Blush Pink', 'Dusty Rose'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isBestseller: true
  },
  {
    id: 'designer-lehenga-midnight-blue',
    title: 'Midnight Blue Elegance',
    category: 'indian',
    subcategory: 'Designer Lehengas',
    price: 68000,
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=1200&fit=crop'
    ],
    description: 'Sophisticated midnight blue lehenga with silver threadwork and crystal embellishments. Ideal for evening functions.',
    fabric: 'Crepe Silk with Silver Thread Work',
    colors: ['Midnight Blue', 'Navy Blue', 'Royal Blue'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNewIn: true
  },
  {
    id: 'designer-lehenga-coral-charm',
    title: 'Coral Charm Lehenga',
    category: 'indian',
    subcategory: 'Designer Lehengas',
    price: 58000,
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop'
    ],
    description: 'Vibrant coral lehenga with contemporary cut and traditional embroidery. A perfect blend of modern and classic.',
    fabric: 'Net with Contemporary Embroidery',
    colors: ['Coral', 'Peach', 'Salmon Pink'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },

  // Indo-Western
  {
    id: 'indo-western-cape-set',
    title: 'Designer Cape Set',
    category: 'indo-western',
    subcategory: 'Cape Sets',
    price: 45000,
    comparePrice: 52000,
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop'
    ],
    description: 'Contemporary cape set with dhoti pants and embellished crop top. Modern silhouette with traditional embroidery.',
    fabric: 'Crepe with Embellished Cape',
    colors: ['Wine', 'Teal', 'Mustard'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNewIn: true
  },
  {
    id: 'indo-western-jacket-lehenga',
    title: 'Jacket Style Lehenga',
    category: 'indo-western',
    subcategory: 'Jacket Sets',
    price: 52000,
    images: [
      'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=1200&fit=crop'
    ],
    description: 'Innovative jacket-style lehenga with contemporary cuts and traditional motifs. Perfect for cocktail parties.',
    fabric: 'Silk with Jacket Overlay',
    colors: ['Black', 'Deep Purple', 'Emerald'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isBestseller: true
  },
  {
    id: 'indo-western-sharara-set',
    title: 'Contemporary Sharara Set',
    category: 'indo-western',
    subcategory: 'Sharara Sets',
    price: 38000,
    images: [
      'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=1200&fit=crop'
    ],
    description: 'Modern sharara set with asymmetrical kurta and embroidered dupatta. Comfortable yet elegant.',
    fabric: 'Georgette with Mirror Work',
    colors: ['Ivory', 'Mint Green', 'Lavender'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true
  },

  // Western Wear
  {
    id: 'western-evening-gown',
    title: 'Silk Evening Gown',
    category: 'western',
    subcategory: 'Evening Gowns',
    price: 35000,
    images: [
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1200&fit=crop'
    ],
    description: 'Luxurious silk evening gown with elegant draping and sophisticated silhouette.',
    fabric: 'Pure Silk Crepe',
    colors: ['Black', 'Navy', 'Burgundy'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    isNewIn: true
  },
  {
    id: 'western-cocktail-dress',
    title: 'Sequined Cocktail Dress',
    category: 'western',
    subcategory: 'Cocktail Dresses',
    price: 28000,
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0ae2e4d4c4f?w=800&h=1200&fit=crop'
    ],
    description: 'Glamorous cocktail dress with hand-sewn sequins and flattering fit.',
    fabric: 'Silk with Sequin Embellishment',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    isBestseller: true
  }
];

export const lookbookImages = [
  {
    id: 'bridal-collection-look',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1200&h=800&fit=crop',
    title: 'Bridal Elegance Collection',
    products: ['bridal-lehenga-royal-red', 'bridal-lehenga-golden-glory']
  },
  {
    id: 'indo-western-look',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=1200&h=800&fit=crop',
    title: 'Contemporary Fusion',
    products: ['indo-western-cape-set', 'indo-western-jacket-lehenga']
  },
  {
    id: 'designer-collection-look',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1200&h=800&fit=crop',
    title: 'Designer Showcase',
    products: ['designer-lehenga-rose-blush', 'designer-lehenga-midnight-blue']
  }
];