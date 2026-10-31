import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { fashionVisuals } from '../utils/fashionVisuals';
import { CategoryType } from '../types';

interface CategoriesProps {
  onSelectCategory: (cat: CategoryType) => void;
}

const CATEGORIES_DATA: {
  id: CategoryType;
  title: string;
  subtitle: string;
  description: string;
  piecesCount: number;
  image: string;
  tag: string;
}[] = [
  {
    id: 'men',
    title: 'MEN',
    subtitle: 'ARCHITECTURAL APPAREL',
    description: 'Ultra-dense drop-shoulder hoodies, technical storm parkas, modular cargo pants and rigid Okayama selvedge denim.',
    piecesCount: 8,
    image: fashionVisuals.categoryMen,
    tag: 'RUN 04'
  },
  {
    id: 'women',
    title: 'WOMEN',
    subtitle: 'AVANT-GARDE TAILORING',
    description: 'Sculptural sharp blazers, cocoon pleated trousers, flowing giza poplin overshirts and cocoon coats.',
    piecesCount: 5,
    image: fashionVisuals.categoryWomen,
    tag: 'NEW RELEASE'
  },
  {
    id: 'accessories',
    title: 'ACCESSORIES',
    subtitle: 'BRUTALIST HARDWARE',
    description: 'Vibram-lug chunky low trainers, AustriAlpin Cobra buckle bridle belts, 1000D harness bags and beveled acetate optics.',
    piecesCount: 3,
    image: fashionVisuals.categoryAccessories,
    tag: 'HARDWARE'
  }
];

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-[#080808] px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#929292] uppercase">
              DIVISIONS // THREE DISCIPLINES
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F3F1ED] tracking-tight mt-2">
              Curated Collections
            </h2>
          </div>
          <p className="text-xs md:text-sm font-mono text-[#929292] max-w-sm">
            Distinctive architectural garments developed without compromise in silhouette, mass, or materiality.
          </p>
        </div>

        {/* 3 Large Category Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES_DATA.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative cursor-pointer bg-[#121212] border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-white/30"
              style={{ minHeight: '580px' }}
            >
              {/* Image with zoom and mask reveal */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center filter grayscale brightness-90 contrast-110 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-black/30 transition-all duration-500" />
              </div>

              {/* Top Card Badge / Tag */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest text-[#F3F1ED] px-2.5 py-1 bg-black/60 border border-white/10">
                  {cat.tag}
                </span>
                <span className="text-xs font-mono text-[#929292]">
                  {cat.piecesCount} PIECES
                </span>
              </div>

              {/* Bottom Information & Interactive Action */}
              <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end">
                <span className="text-xs font-mono tracking-[0.2em] text-[#929292] uppercase">
                  {cat.subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-[#F3F1ED] mt-1 mb-3 tracking-tight">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#b8b8b8] leading-relaxed mb-6 opacity-80 group-hover:opacity-100 transition-opacity line-clamp-2">
                  {cat.description}
                </p>

                {/* Explore Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-white/15 text-xs font-mono text-[#F3F1ED] tracking-widest uppercase group-hover:border-white/40 transition-colors">
                  <span>DISCOVER {cat.title}</span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
