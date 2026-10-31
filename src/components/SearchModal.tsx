import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, setActiveProductModal } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(p => {
        const q = query.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.code.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.materials.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
        );
      })
    : PRODUCTS.slice(0, 4); // Trending / quick suggestions when empty

  const handleSelect = (prod: Product) => {
    setActiveProductModal(prod);
    setIsSearchOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-start justify-center pt-20 px-4 md:px-8">
      <div className="fixed inset-0" onClick={() => setIsSearchOpen(false)} />

      <div className="relative w-full max-w-3xl bg-[#0f0f0f] border border-white/15 shadow-2xl z-10 text-[#F3F1ED] overflow-hidden">
        {/* Search Input Bar */}
        <div className="p-6 border-b border-white/10 flex items-center gap-4">
          <Search className="w-5 h-5 text-[#929292]" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by piece, code (e.g. VD-01), material or category..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-lg md:text-xl font-display text-white placeholder:text-[#555555] focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            aria-label="Close search"
            className="p-1 text-[#929292] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          <div className="text-xs font-mono text-[#929292] uppercase tracking-widest mb-4">
            {query.trim() ? `FOUND ${results.length} MATCHING PIECES` : 'FEATURED ARCHIVAL PIECES'}
          </div>

          <div className="space-y-3">
            {results.map(prod => (
              <div
                key={prod.id}
                onClick={() => handleSelect(prod)}
                className="flex items-center justify-between p-3 bg-[#141414] border border-white/5 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-16 bg-[#1a1a1a] overflow-hidden shrink-0 border border-white/10">
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-white group-hover:text-white">
                      {prod.name}
                    </h4>
                    <div className="text-xs font-mono text-[#929292] mt-0.5">
                      {prod.code} · {prod.category.toUpperCase()} · {prod.weight}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-semibold text-white tabular-nums">
                    ${prod.price}
                  </span>
                  <div className="w-7 h-7 border border-white/10 rounded-full flex items-center justify-center text-[#929292] group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex justify-between items-center text-[11px] font-mono text-[#666666]">
          <span>TRY: "HOODIE", "DENIM", "PARKA", "SNEAKER"</span>
          <span>PRESS ESC TO CLOSE</span>
        </div>
      </div>
    </div>
  );
};
