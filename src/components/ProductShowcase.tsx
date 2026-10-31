import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ArrowUpDown, Search, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { CategoryType, Product } from '../types';

interface ProductShowcaseProps {
  selectedCategory: CategoryType;
  onCategoryChange: (cat: CategoryType) => void;
  onOpenDetails: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategory,
  onCategoryChange,
  onOpenDetails
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'name'>('featured');
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('ALL');

  const availableSizes = ['ALL', 'XS', 'S', 'M', 'L', 'XL', 'ONE SIZE'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(prod => {
      // Category filter
      if (selectedCategory !== 'all' && prod.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(query);
        const matchesDesc = prod.description.toLowerCase().includes(query);
        const matchesCode = prod.code.toLowerCase().includes(query);
        const matchesMaterial = prod.materials.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCode && !matchesMaterial) {
          return false;
        }
      }
      // Size filter
      if (selectedSizeFilter !== 'ALL') {
        const hasSize = prod.sizes.some(s => s.toLowerCase().includes(selectedSizeFilter.toLowerCase()));
        if (!hasSize) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedSizeFilter, sortBy]);

  const resetFilters = () => {
    onCategoryChange('all');
    setSearchQuery('');
    setSelectedSizeFilter('ALL');
    setSortBy('featured');
  };

  return (
    <section id="catalog" className="py-24 md:py-32 bg-[#080808] px-6 md:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Title & Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#929292] uppercase">
              ARCHIVE // AUTUMN-WINTER
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F3F1ED] tracking-tight mt-2">
              Product Showcase
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[#929292]">
            <span>SHOWING {filteredProducts.length} OF {PRODUCTS.length} ITEMS</span>
            <span>·</span>
            <span>WORLDWIDE DELIVERY</span>
          </div>
        </div>

        {/* Filter Bar Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-12 bg-[#121212] p-4 md:p-6 border border-white/10">
          {/* Category Tabs (Segmented control button elements adhering to §1.A) */}
          <div className="flex flex-wrap items-center gap-1">
            {(['all', 'men', 'women', 'accessories'] as CategoryType[]).map(cat => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#F3F1ED] text-black font-bold'
                    : 'bg-black/40 text-[#929292] hover:text-[#F3F1ED] border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search & Size Selector */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Inline Search Input */}
            <div className="relative flex-1 sm:w-48">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#929292]" />
              <input
                type="text"
                placeholder="Filter by keyword..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-black/60 border border-white/10 text-xs text-[#F3F1ED] font-mono placeholder:text-[#666666] focus:outline-none focus:border-white/40"
              />
            </div>

            {/* Size Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#929292] uppercase hidden sm:inline">SIZE:</span>
              <select
                value={selectedSizeFilter}
                onChange={e => setSelectedSizeFilter(e.target.value)}
                className="bg-black/60 border border-white/10 text-xs text-[#F3F1ED] font-mono px-3 py-2 focus:outline-none focus:border-white/40"
              >
                {availableSizes.map(size => (
                  <option key={size} value={size}>
                    {size === 'ALL' ? 'ALL SIZES' : `SIZE ${size}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Sorting Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-[#929292] uppercase hidden sm:inline">SORT:</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="bg-black/60 border border-white/10 text-xs text-[#F3F1ED] font-mono px-3 py-2 focus:outline-none focus:border-white/40"
              >
                <option value="featured">FEATURED</option>
                <option value="price-asc">PRICE: LOW TO HIGH</option>
                <option value="price-desc">PRICE: HIGH TO LOW</option>
                <option value="name">NAME (A–Z)</option>
              </select>
            </div>

            {/* Reset Filters */}
            {(selectedCategory !== 'all' || searchQuery || selectedSizeFilter !== 'ALL' || sortBy !== 'featured') && (
              <button
                onClick={resetFilters}
                className="p-2 border border-white/10 text-[#929292] hover:text-[#F3F1ED] hover:bg-white/5 transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center border border-white/10 bg-[#121212] p-8">
            <p className="text-lg font-display text-[#F3F1ED] mb-2">No garments found matching criteria</p>
            <p className="text-xs font-mono text-[#929292] mb-6">Try resetting search filters or selecting all categories.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-[#F3F1ED] text-black font-mono text-xs tracking-widest font-bold"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
