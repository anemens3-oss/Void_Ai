import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PinnedStory } from './components/PinnedStory';
import { Categories } from './components/Categories';
import { ProductShowcase } from './components/ProductShowcase';
import { LookbookMarquee } from './components/LookbookMarquee';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ToastContainer } from './components/Toast';
import { CategoryType, Product } from './types';

function MainShop() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const { activeProductModal, setActiveProductModal } = useCart();

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (cat: CategoryType) => {
    setSelectedCategory(cat);
    handleNavigate('catalog');
  };

  const handleOpenProductDetails = (product: Product) => {
    setActiveProductModal(product);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F1ED] flex flex-col selection:bg-[#F3F1ED] selection:text-[#080808]">
      {/* Preloader */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main Top Header */}
      <Header onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* Hero Cinematic Section */}
        <Hero onExplore={() => handleNavigate('categories')} />

        {/* Pinned / Chapter Exhibition Section */}
        <PinnedStory />

        {/* Three Curated Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* Full 16-Piece Catalog Showcase */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onOpenDetails={handleOpenProductDetails}
        />

        {/* Lookbook Campaign & Manifesto */}
        <LookbookMarquee onExplore={() => handleNavigate('catalog')} />
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Overlays, Drawers & Modals */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
      />
      <CartDrawer />
      <WishlistDrawer />
      <SearchModal />
      <ToastContainer />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainShop />
    </CartProvider>
  );
}
