export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const journalPosts: JournalPost[] = [
  {
    id: '1',
    title: 'The Art of Bridal Lehenga Selection: A Designer\'s Guide',
    excerpt: 'Discover the secrets behind choosing the perfect bridal lehenga that reflects your personality and celebrates your special day.',
    content: `
      <p>Your wedding day is one of the most important days of your life, and choosing the perfect bridal lehenga is a decision that deserves careful consideration. As a designer who has worked with hundreds of brides, I've learned that the perfect lehenga is not just about following trends—it's about finding a piece that truly reflects who you are.</p>
      
      <h3>Understanding Your Body Type</h3>
      <p>The first step in selecting your bridal lehenga is understanding your body type and what silhouettes work best for you. A-line lehengas are universally flattering, while mermaid cuts work beautifully for those who want to accentuate their curves.</p>
      
      <h3>Color Psychology in Bridal Wear</h3>
      <p>While red remains the traditional choice, modern brides are exploring a spectrum of colors. Deep maroons, rich burgundies, and even unconventional shades like emerald green and royal blue are making their mark in contemporary bridal fashion.</p>
      
      <h3>The Importance of Craftsmanship</h3>
      <p>When investing in a bridal lehenga, pay attention to the quality of embroidery, the weight of the fabric, and the finishing details. Hand-embroidered pieces with intricate zardozi work or delicate thread embroidery will stand the test of time.</p>
    `,
    author: 'Ritu Ritesh',
    publishDate: '2024-08-15',
    readTime: '8 min read',
    category: 'Bridal Fashion',
    tags: ['bridal', 'lehenga', 'wedding', 'fashion tips'],
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&h=600&fit=crop',
    featured: true
  },
  {
    id: '2',
    title: 'Indo-Western Fusion: Where Tradition Meets Modernity',
    excerpt: 'Explore how contemporary designers are reimagining traditional Indian wear for the modern woman.',
    content: `
      <p>The Indo-Western trend has revolutionized how we perceive traditional Indian fashion. It's not just about mixing Eastern and Western elements—it's about creating a new language of style that speaks to the global Indian woman.</p>
      
      <h3>The Evolution of Fusion Wear</h3>
      <p>From cape lehengas to dhoti pants paired with crop tops, Indo-Western fashion has given us the freedom to experiment while staying rooted in our cultural heritage.</p>
      
      <h3>Styling Tips for Indo-Western Outfits</h3>
      <p>The key to nailing the Indo-Western look is balance. If your outfit has heavy traditional elements, keep the accessories minimal and contemporary. Conversely, if your outfit is more Western in silhouette, you can add traditional jewelry to complete the look.</p>
    `,
    author: 'Ritu Ritesh',
    publishDate: '2024-08-10',
    readTime: '6 min read',
    category: 'Fashion Trends',
    tags: ['indo-western', 'fusion', 'contemporary', 'styling'],
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: '3',
    title: 'Sustainable Fashion: The Future of Indian Couture',
    excerpt: 'How traditional craftsmanship and sustainable practices are shaping the future of Indian fashion.',
    content: `
      <p>Sustainability in fashion is no longer just a trend—it's a necessity. In Indian couture, we have the advantage of centuries-old traditions that are inherently sustainable.</p>
      
      <h3>Traditional Techniques, Modern Approach</h3>
      <p>Hand-weaving, natural dyeing, and artisanal embroidery techniques not only create beautiful garments but also support local communities and reduce environmental impact.</p>
      
      <h3>Investing in Timeless Pieces</h3>
      <p>Instead of fast fashion, invest in well-crafted pieces that can be worn for years. A beautifully made lehenga can be styled differently for various occasions, making it a sustainable choice.</p>
    `,
    author: 'Ritu Ritesh',
    publishDate: '2024-08-05',
    readTime: '7 min read',
    category: 'Sustainability',
    tags: ['sustainable', 'eco-friendly', 'traditional', 'craftsmanship'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    featured: false
  },
  {
    id: '4',
    title: 'The Renaissance of Handloom Textiles in Contemporary Fashion',
    excerpt: 'Celebrating the revival of traditional handloom techniques in modern designer wear.',
    content: `
      <p>Handloom textiles are experiencing a renaissance in contemporary fashion. These age-old techniques are being reimagined to create stunning modern pieces that honor our textile heritage.</p>
      
      <h3>The Beauty of Imperfection</h3>
      <p>Unlike machine-made fabrics, handloom textiles have a unique character. The slight irregularities and variations in texture add to their charm and make each piece truly one-of-a-kind.</p>
      
      <h3>Supporting Artisan Communities</h3>
      <p>When you choose handloom, you're not just buying a fabric—you're supporting entire communities of skilled artisans who have preserved these techniques for generations.</p>
    `,
    author: 'Ritu Ritesh',
    publishDate: '2024-07-28',
    readTime: '5 min read',
    category: 'Textiles',
    tags: ['handloom', 'textiles', 'artisans', 'heritage'],
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=600&fit=crop',
    featured: false
  }
];

export const categories = [
  'All',
  'Bridal Fashion',
  'Fashion Trends',
  'Sustainability',
  'Textiles',
  'Styling Tips'
];