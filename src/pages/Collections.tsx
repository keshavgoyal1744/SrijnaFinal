import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid, List, Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Layout from '@/components/Layout';
import { products, collections } from '@/data/products';

export default function Collections() {
  const { category } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [filters, setFilters] = useState({
    priceRange: '',
    sizes: [] as string[],
    colors: [] as string[],
    subcategories: [] as string[]
  });

  // Filter products based on category and filters
  const filteredProducts = useMemo(() => {
    let filtered = category ? products.filter(p => p.category === category) : products;
    
    // Apply filters
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }
    
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(p => p.sizes.some(size => filters.sizes.includes(size)));
    }
    
    if (filters.colors.length > 0) {
      filtered = filtered.filter(p => p.colors.some(color => filters.colors.includes(color)));
    }
    
    if (filters.subcategories.length > 0) {
      filtered = filtered.filter(p => filters.subcategories.includes(p.subcategory));
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => (b.isNewIn ? 1 : 0) - (a.isNewIn ? 1 : 0));
        break;
      default:
        break;
    }
    
    return filtered;
  }, [category, filters, sortBy]);

  const currentCollection = category ? collections.find(c => c.category === category) : null;
  
  const allSizes = [...new Set(products.flatMap(p => p.sizes))];
  const allColors = [...new Set(products.flatMap(p => p.colors))];
  const allSubcategories = [...new Set(products.map(p => p.subcategory))];
  const priceRanges = [
    { label: 'Under ₹20,000', value: '0-20000' },
    { label: '₹20,000 - ₹40,000', value: '20000-40000' },
    { label: '₹40,000 - ₹60,000', value: '40000-60000' },
    { label: 'Above ₹60,000', value: '60000-999999' }
  ];

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [type]: Array.isArray(prev[type])
        ? (prev[type] as string[]).includes(value)
          ? (prev[type] as string[]).filter(item => item !== value)
          : [...(prev[type] as string[]), value]
        : value
    }));
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map(range => (
            <div key={range.value} className="flex items-center space-x-2">
              <Checkbox
                id={range.value}
                checked={filters.priceRange === range.value}
                onCheckedChange={() => 
                  setFilters(prev => ({ 
                    ...prev, 
                    priceRange: prev.priceRange === range.value ? '' : range.value 
                  }))
                }
              />
              <label htmlFor={range.value} className="text-sm">{range.label}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold mb-3">Size</h3>
        <div className="grid grid-cols-3 gap-2">
          {allSizes.map(size => (
            <div key={size} className="flex items-center space-x-2">
              <Checkbox
                id={`size-${size}`}
                checked={filters.sizes.includes(size)}
                onCheckedChange={() => toggleFilter('sizes', size)}
              />
              <label htmlFor={`size-${size}`} className="text-sm">{size}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-3">Color</h3>
        <div className="space-y-2">
          {allColors.slice(0, 8).map(color => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={filters.colors.includes(color)}
                onCheckedChange={() => toggleFilter('colors', color)}
              />
              <label htmlFor={`color-${color}`} className="text-sm">{color}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Subcategories */}
      <div>
        <h3 className="font-semibold mb-3">Category</h3>
        <div className="space-y-2">
          {allSubcategories.map(subcategory => (
            <div key={subcategory} className="flex items-center space-x-2">
              <Checkbox
                id={`sub-${subcategory}`}
                checked={filters.subcategories.includes(subcategory)}
                onCheckedChange={() => toggleFilter('subcategories', subcategory)}
              />
              <label htmlFor={`sub-${subcategory}`} className="text-sm">{subcategory}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      {/* Hero Section */}
      {currentCollection && (
        <section className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" />
          <img
            src={currentCollection.image}
            alt={currentCollection.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl font-serif mb-4">{currentCollection.title}</h1>
            <p className="text-xl">{currentCollection.description}</p>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <span>/</span>
          <Link to="/collections" className="hover:text-gray-900">Collections</Link>
          {currentCollection && (
            <>
              <span>/</span>
              <span className="text-gray-900">{currentCollection.title}</span>
            </>
          )}
        </nav>

        {/* Filters and Sort Bar */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter and Sort Bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Button */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                <span className="text-sm text-gray-600">
                  {filteredProducts.length} products
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex border rounded-md">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product) => (
                <Card key={product.id} className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className={`${viewMode === 'list' ? 'flex' : ''}`}>
                    <div className={`relative overflow-hidden ${
                      viewMode === 'list' ? 'w-48 h-48' : 'aspect-[3/4]'
                    }`}>
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.isNewIn && (
                        <div className="absolute top-4 left-4 bg-black text-white px-2 py-1 text-xs font-medium">
                          NEW IN
                        </div>
                      )}
                      {product.isBestseller && (
                        <div className="absolute top-4 right-4 bg-amber-500 text-white px-2 py-1 text-xs font-medium">
                          BESTSELLER
                        </div>
                      )}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="ghost" className="bg-white/80 hover:bg-white">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <h3 className="font-medium mb-2 group-hover:text-gray-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{product.subcategory}</p>
                      <p className="text-sm text-gray-600 mb-3">{product.fabric}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">₹{product.price.toLocaleString()}</span>
                          {product.comparePrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ₹{product.comparePrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        {!product.inStock && (
                          <span className="text-sm text-red-500 font-medium">Out of Stock</span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to={`/product/${product.id}`} className="flex-1">
                          <Button className="w-full" variant="outline">
                            View Details
                          </Button>
                        </Link>
                        <Button size="sm" variant="ghost">
                          <ShoppingBag className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <Button onClick={() => setFilters({ priceRange: '', sizes: [], colors: [], subcategories: [] })}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}