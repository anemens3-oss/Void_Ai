import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Heart, Menu, X, ArrowUpRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const { cartCount, wishlist, setIsCartOpen, setIsWishlistOpen, setIsSearchOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      const winHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (winHeight > 0) {
        setScrollProgress((scrollY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none">
        <div
          className="h-full bg-[#F3F1ED] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Top Header Bar adhering to Top Bar Contract */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="font-display font-extrabold text-2xl md:text-3xl tracking-[0.25em] text-[#F3F1ED] hover:opacity-80 transition-opacity whitespace-nowrap shrink-0 text-left focus:outline-none"
          >
            VOID
          </button>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#929292]">
            <button
              onClick={() => handleLinkClick('categories')}
              className="hover:text-[#F3F1ED] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Collections
            </button>
            <button
              onClick={() => handleLinkClick('catalog')}
              className="hover:text-[#F3F1ED] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Catalog
            </button>
            <button
              onClick={() => handleLinkClick('lookbook')}
              className="hover:text-[#F3F1ED] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Lookbook
            </button>
            <button
              onClick={() => handleLinkClick('manifesto')}
              className="hover:text-[#F3F1ED] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Manifesto
            </button>
            <button
              onClick={() => handleLinkClick('footer')}
              className="hover:text-[#F3F1ED] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: Primary Action & Interactive Affordances */}
          <div className="flex items-center gap-4 md:gap-6 shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search Catalog"
              className="p-2 text-[#929292] hover:text-[#F3F1ED] transition-colors focus:outline-none"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Saved Wishlist"
              className="relative p-2 text-[#929292] hover:text-[#F3F1ED] transition-colors focus:outline-none"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#F3F1ED]" />
              )}
            </button>

            {/* Cart Primary Bag Action */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 py-2 px-3 md:px-4 bg-[#141414] hover:bg-[#202020] text-[#F3F1ED] border border-white/10 rounded-none transition-colors text-xs font-mono tracking-widest whitespace-nowrap shrink-0 focus:outline-none"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">BAG</span>
              <span className="text-[#929292]">({cartCount})</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 text-[#F3F1ED] focus:outline-none"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-50 bg-[#080808] text-[#F3F1ED] flex flex-col justify-between p-8 md:p-12 transition-all duration-500 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <span className="font-display font-extrabold text-2xl tracking-[0.2em]">VOID</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
            className="p-2 text-[#929292] hover:text-[#F3F1ED] focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 my-auto text-left py-8">
          <button
            onClick={() => handleLinkClick('categories')}
            className="flex items-center justify-between text-3xl font-display font-bold tracking-tight text-[#929292] hover:text-[#F3F1ED] transition-colors"
          >
            <span>COLLECTIONS</span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleLinkClick('catalog')}
            className="flex items-center justify-between text-3xl font-display font-bold tracking-tight text-[#929292] hover:text-[#F3F1ED] transition-colors"
          >
            <span>CATALOG (16)</span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleLinkClick('lookbook')}
            className="flex items-center justify-between text-3xl font-display font-bold tracking-tight text-[#929292] hover:text-[#F3F1ED] transition-colors"
          >
            <span>LOOKBOOK</span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleLinkClick('manifesto')}
            className="flex items-center justify-between text-3xl font-display font-bold tracking-tight text-[#929292] hover:text-[#F3F1ED] transition-colors"
          >
            <span>MANIFESTO</span>
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </nav>

        <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-xs font-mono text-[#929292]">
          <div className="flex justify-between items-center">
            <span>CURRENCY: USD ($)</span>
            <span>EDITION 2026</span>
          </div>
          <div className="text-[11px] text-[#666666]">
            GLOBAL COURIER SHIPPING WORLDWIDE
          </div>
        </div>
      </div>
    </>
  );
};
