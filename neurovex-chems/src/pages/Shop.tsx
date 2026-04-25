import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ArrowUpDown, Beaker } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES, cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export const Shop: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'newest'>('featured');

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break;
      case 'price-high': result.sort((a, b) => b.price - a.price); break;
      case 'newest': result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0)); break;
      default: result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">Scientific Catalogue</p>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
            All research <span className="text-white/40 italic">compounds</span>
          </h1>
          <p className="text-white/50 max-w-2xl leading-relaxed">
            Browse our full array of synthesis-grade compounds. Use the interface below to filter by research discipline or analytical specification.
          </p>
        </div>

        {/* Toolbar */}
        <div className="glass-dark p-4 rounded-3xl border border-white/5 mb-12 sticky top-24 z-30 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-brand-cyan transition-colors" />
              <input
                type="text"
                placeholder="Search compounds or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-cyan/50 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              <button
                onClick={() => setSelectedCategory(null)}
                className={cn(
                  "px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
                  selectedCategory === null ? "bg-brand-cyan text-brand-black border-brand-cyan" : "bg-white/5 text-white/50 border-white/10 hover:border-white/20"
                )}
              >
                All
              </button>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all border",
                    selectedCategory === cat.name ? "bg-brand-cyan text-brand-black border-brand-cyan" : "bg-white/5 text-white/50 border-white/10 hover:border-white/20"
                  )}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <ArrowUpDown className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-10 text-xs font-bold uppercase tracking-widest appearance-none focus:outline-none focus:border-brand-cyan/50 transition-all cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Added</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <Beaker className="w-16 h-16 text-white/10 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-2">No compounds found</h3>
            <p className="text-white/50">Adjust your filters or try a different search term.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
              className="mt-8 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
