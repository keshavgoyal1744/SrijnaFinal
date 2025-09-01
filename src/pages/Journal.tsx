import { useState } from 'react';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';
import { journalPosts, categories } from '@/data/journalPosts';
import { Link } from 'react-router-dom';

export default function Journal() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredPosts = selectedCategory === 'All' 
    ? journalPosts 
    : journalPosts.filter(post => post.category === selectedCategory);

  const featuredPost = journalPosts.find(post => post.featured);
  const regularPosts = journalPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-serif mb-8 bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent">
            Fashion Journal
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Insights, trends, and stories from the world of Indian fashion and craftsmanship
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4 text-gray-800">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-gradient-to-r from-rose-500 to-pink-600 text-white">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  
                  <h3 className="text-3xl font-serif mb-4 text-gray-800 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <User className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 w-fit">
                    Read Full Article
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category 
                  ? "bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700" 
                  : "border-rose-200 text-rose-600 hover:bg-rose-50"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Badge variant="outline" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-tight line-clamp-2 group-hover:text-rose-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">
                      Read More
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif mb-8">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest fashion insights, styling tips, and exclusive content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <Button className="bg-white text-rose-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}