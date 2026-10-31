import React from 'react';
import { X, Heart, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    addToCart,
    setActiveProductModal
  } = useCart();

  if (!isWishlistOpen) return null;

  const wishlistedProducts = PRODUCTS.filter(p => wishlist.includes(p.id));

  const handleMoveToCart = (product: Product) => {
    // Open product modal or quick-add default size
    setActiveProductModal(product);
    setIsWishlistOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e0e] border-l border-white/10 text-[#F3F1ED] flex flex-col justify-between shadow-2xl">
          {/* Top Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#F3F1ED] fill-current" />
              <h3 className="font-display font-bold text-lg tracking-wider">SAVED PIECES</h3>
              <span className="text-xs font-mono text-[#929292]">({wishlistedProducts.length})</span>
            </div>
            <button
              onClick={() => setIsWishlistOpen(false)}
              aria-label="Close wishlist"
              className="p-1 text-[#929292] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {wishlistedProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <Heart className="w-12 h-12 text-[#444444] mb-4 stroke-1" />
                <h4 className="font-display font-semibold text-lg text-[#F3F1ED] mb-2">
                  No saved garments
                </h4>
                <p className="text-xs font-mono text-[#929292] max-w-xs mb-8">
                  Click the heart icon on any card to save pieces for future reference.
                </p>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-3 border border-white/20 text-xs font-mono tracking-widest text-[#F3F1ED] hover:bg-white hover:text-black transition-colors uppercase"
                >
                  BROWSE PIECES
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {wishlistedProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex gap-4 p-3 bg-[#131313] border border-white/5 hover:border-white/15 transition-colors"
                  >
                    <div className="w-20 h-24 bg-[#181818] overflow-hidden shrink-0 border border-white/10">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-display font-bold text-[#F3F1ED] line-clamp-1">
                            {product.name}
                          </h4>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            aria-label="Remove from wishlist"
                            className="text-[#666666] hover:text-red-400 transition-colors p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] font-mono text-[#929292] mt-0.5">
                          {product.code} · ${product.price}
                        </div>
                      </div>

                      <button
                        onClick={() => handleMoveToCart(product)}
                        className="mt-2 py-1.5 px-3 bg-[#1f1f1f] hover:bg-[#F3F1ED] hover:text-black text-[#F3F1ED] text-[10px] font-mono uppercase tracking-wider border border-white/10 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <Plus className="w-3 h-3" />
                        <span>SELECT SIZE & BUY</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer note */}
          <div className="p-6 bg-[#111111] border-t border-white/10 text-center">
            <p className="text-xs font-mono text-[#929292]">
              SAVED LOCALLY IN SESSION STORAGE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
