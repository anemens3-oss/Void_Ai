import React, { useState, useEffect } from 'react';
import { X, Heart, Plus, Minus, Check, Truck, ShieldCheck, RefreshCw, Ruler } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [showFitGuide, setShowFitGuide] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedSize(product.sizes.length === 1 ? product.sizes[0] : '');
      setSelectedColor(product.colors[0]?.name || '');
      setQuantity(1);
      setSizeError(false);
      setShowFitGuide(false);
    }
  }, [product]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      {/* Background click dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-5xl bg-[#0f0f0f] border border-white/15 shadow-2xl text-[#F3F1ED] z-10 flex flex-col md:flex-row overflow-hidden max-h-[92vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Product Details"
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 border border-white/10 flex items-center justify-center text-[#929292] hover:text-white hover:bg-black transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Gallery & View Angles */}
        <div className="w-full md:w-1/2 p-6 md:p-8 bg-[#141414] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
          {/* Main Large Image View */}
          <div className="relative aspect-[3/4] w-full bg-[#161616] overflow-hidden border border-white/5 mb-4">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={`${product.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 transition-all duration-500"
            />
            {/* View identifier badge */}
            <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/70 text-[10px] font-mono tracking-widest text-[#929292] border border-white/10 uppercase">
              {activeImageIndex === 0 ? 'FRONT PERSPECTIVE' : activeImageIndex === 1 ? 'BACK DETAILS' : 'TEXTILE MACRO'}
            </div>
          </div>

          {/* Thumbnail Selector Strip */}
          <div className="grid grid-cols-3 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[4/3] bg-[#1a1a1a] border overflow-hidden transition-all ${
                  activeImageIndex === idx
                    ? 'border-white opacity-100 ring-1 ring-white'
                    : 'border-white/10 opacity-60 hover:opacity-90'
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover filter grayscale"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: PDP Purchase Module */}
        <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
          <div>
            {/* Tag & Category */}
            <div className="flex items-center justify-between text-xs font-mono text-[#929292] mb-3">
              <span className="uppercase tracking-widest">{product.category} · {product.code}</span>
              {product.tag && (
                <span className="text-[#F3F1ED] font-semibold">{product.tag}</span>
              )}
            </div>

            {/* Title & Price */}
            <h3 className="font-display font-bold text-2xl md:text-3xl text-[#F3F1ED] mb-2">
              {product.name}
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-2xl font-bold text-[#F3F1ED] tabular-nums">
                ${product.price}.00
              </span>
              <span className="text-xs font-mono text-[#929292]">TAX INCLUDED</span>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-[#b0b0b0] leading-relaxed mb-6 font-sans">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#929292] mb-2">
                  <span>COLOR: <strong className="text-[#F3F1ED]">{selectedColor}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map(c => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-none border flex items-center justify-center transition-all ${
                        selectedColor === c.name ? 'border-white scale-110' : 'border-white/20'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check className="w-3.5 h-3.5 text-white mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection (MANDATORY REQUIREMENT) */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono mb-2">
                <span className={sizeError ? 'text-red-400 font-bold' : 'text-[#929292]'}>
                  SELECT SIZE {sizeError && '*(MANDATORY)*'}
                </span>
                <button
                  onClick={() => setShowFitGuide(!showFitGuide)}
                  className="flex items-center gap-1 text-[11px] text-[#929292] hover:text-[#F3F1ED] underline underline-offset-4"
                >
                  <Ruler className="w-3 h-3" />
                  <span>Fit & Dimensions</span>
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setSizeError(false);
                    }}
                    className={`py-3 text-xs font-mono tracking-wider transition-all border ${
                      selectedSize === size
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-[#181818] text-[#929292] border-white/10 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {sizeError && (
                <p className="text-xs text-red-400 font-mono mt-2 flex items-center gap-1">
                  Please choose a size before adding to bag.
                </p>
              )}

              {/* Fit Guide collapsible drawer */}
              {showFitGuide && (
                <div className="mt-3 p-4 bg-[#141414] border border-white/10 text-xs font-mono text-[#929292] space-y-1">
                  <div className="text-[#F3F1ED] font-bold mb-1">ARCHITECTURAL CUT MATRIX</div>
                  <div>· Model is 188cm / 6'2" wearing size L</div>
                  <div>· Intentionally engineered boxy drop shoulder silhouette</div>
                  <div>· Take your standard size for editorial drape; size down for standard fit</div>
                </div>
              )}
            </div>

            {/* Quantity Stepper & Actions */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-white/15 bg-[#141414]">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-11 flex items-center justify-center text-[#929292] hover:text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-mono text-sm text-[#F3F1ED] tabular-nums font-bold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-11 flex items-center justify-center text-[#929292] hover:text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 px-6 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-white transition-all active:scale-98 flex items-center justify-center gap-3"
              >
                <span>ADD TO BAG</span>
                <span>·</span>
                <span className="tabular-nums">${product.price * quantity}</span>
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                aria-label="Wishlist toggle"
                className="w-11 h-11 border border-white/15 bg-[#141414] flex items-center justify-center text-[#929292] hover:text-white hover:border-white/40 transition-colors"
              >
                <Heart
                  className={`w-4 h-4 ${isWishlisted ? 'fill-current text-white' : ''}`}
                />
              </button>
            </div>

            {/* Key Specifications list */}
            <div className="space-y-2 pt-6 border-t border-white/10 mb-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#929292] mb-3">
                MATERIAL ARCHITECTURE
              </h4>
              <ul className="text-xs text-[#999999] space-y-1.5 font-mono">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#F3F1ED]">·</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logistics Trust Strip */}
          <div className="pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-[10px] font-mono text-[#777777]">
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#F3F1ED]" />
              <span>EXPRESS DHL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-[#F3F1ED]" />
              <span>14-DAY RETURNS</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#F3F1ED]" />
              <span>GENUINE ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
