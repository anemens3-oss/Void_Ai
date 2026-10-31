import React, { useState } from 'react';
import { Heart, Plus, ArrowUpRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const isWishlisted = wishlist.includes(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedSize, product.colors[0].name);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleWishlist(product.id);
  };

  // Image flipping on hover if secondary image exists
  const currentImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div
      onClick={() => onOpenDetails(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col justify-between bg-[#111111] border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer text-left relative"
    >
      {/* Visual Container */}
      <div className="relative aspect-[3/4] w-full bg-[#141414] overflow-hidden">
        <img
          src={currentImage}
          alt={product.name}
          className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />

        {/* Top Badges / Wishlist Action */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-[#929292] uppercase">
            <span>{product.code}</span>
            {product.tag && (
              <>
                <span>/</span>
                <span className="text-[#F3F1ED]">{product.tag}</span>
              </>
            )}
          </div>

          <button
            onClick={handleWishlistToggle}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className="w-8 h-8 rounded-none bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-[#F3F1ED] hover:bg-white hover:text-black transition-colors"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                isWishlisted ? 'fill-current text-white' : 'text-[#929292]'
              }`}
            />
          </button>
        </div>

        {/* Quick Add Overlay on Hover (Desktop) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex flex-col gap-2">
          {/* Quick Size Selector */}
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10px] font-mono text-[#929292] uppercase">SIZE:</span>
            <div className="flex items-center gap-1">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedSize(size);
                  }}
                  className={`px-2 py-0.5 text-[10px] font-mono border transition-colors ${
                    selectedSize === size
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-black/60 text-[#929292] border-white/10 hover:border-white/30'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleQuickAdd}
            className="w-full py-2.5 bg-[#F3F1ED] text-black font-mono text-[11px] uppercase tracking-widest font-bold hover:bg-white flex items-center justify-center gap-2 transition-colors active:scale-98"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>ADD TO BAG · ${product.price}</span>
          </button>
        </div>
      </div>

      {/* Card Metadata (Zero-Pill discipline: unboxed text with typographic separators) */}
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-[#929292] font-mono">
          <span className="uppercase tracking-wider">{product.category}</span>
          <span className="text-[11px] text-[#777777]">{product.weight}</span>
        </div>

        <div className="flex items-baseline justify-between gap-2">
          <h4 className="font-display font-bold text-base md:text-lg text-[#F3F1ED] group-hover:text-white transition-colors truncate">
            {product.name}
          </h4>
          <span className="font-mono text-sm md:text-base font-semibold text-[#F3F1ED] tabular-nums whitespace-nowrap">
            ${product.price}
          </span>
        </div>

        <p className="text-xs text-[#888888] line-clamp-1 font-sans">
          {product.materials}
        </p>

        {/* View Details link cue */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#929292] group-hover:text-[#F3F1ED] transition-colors">
          <span>VIEW SPECIFICATIONS</span>
          <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
};
