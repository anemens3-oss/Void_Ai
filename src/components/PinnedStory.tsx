import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, Shield, Layers, Compass } from 'lucide-react';
import { fashionVisuals } from '../utils/fashionVisuals';

const CHAPTERS = [
  {
    index: '01',
    title: 'Monolithic Heavyweight Textiles',
    subtitle: 'RAW 480–600 GSM FLEECE',
    description: 'We reject gossamer fast-fashion cottons. Every VOID knit is milled at extreme yarn density, creating a self-supporting drape that shields the wearer and matures with wear.',
    metric: '600 GSM',
    metricLabel: 'French Terry Density',
    icon: Layers,
    accent: 'PORTUGUESE MILLS'
  },
  {
    index: '02',
    title: 'Tactical Brutalist Hardware',
    subtitle: 'FORGED METALS & BONDED SEAMS',
    description: 'Custom cold-forged aluminum buckles, waterproof tape-sealed chambers, and military-spec Cordura. Every zipper pull and rivet is custom-engineered for lifelong reliability.',
    metric: '20,000 MM',
    metricLabel: 'Hydrostatic Water Head',
    icon: Shield,
    accent: 'AUSTRIAN COBRA BUCKLES'
  },
  {
    index: '03',
    title: 'Architectural Volumes',
    subtitle: 'DISCIPLINED AVANT-GARDE GEOMETRY',
    description: 'Patterning derived from brutalist concrete forms. Forward-shifted shoulder seams, articulated knee darting, and wide sculptural silhouettes that redefine modern proportions.',
    metric: '100%',
    metricLabel: 'Zero Synthetic Fillers',
    icon: Compass,
    accent: 'OKAYAMA & BIELLA YARNS'
  }
];

export const PinnedStory: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextChapter = () => {
    setActiveChapter(prev => (prev + 1) % CHAPTERS.length);
  };

  const prevChapter = () => {
    setActiveChapter(prev => (prev - 1 + CHAPTERS.length) % CHAPTERS.length);
  };

  const current = CHAPTERS[activeChapter];
  const IconComponent = current.icon;

  return (
    <section id="manifesto" className="relative py-24 md:py-32 bg-[#0c0c0c] border-y border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#929292] uppercase">
              PHILOSOPHY // PINNED EXHIBITION
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F3F1ED] tracking-tight mt-2">
              The Geometry of Absence
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#929292]">
              CHAPTER {current.index} / 03
            </span>
            <div className="flex gap-1 ml-4">
              <button
                onClick={prevChapter}
                aria-label="Previous Chapter"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-[#F3F1ED] hover:bg-white hover:text-black transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextChapter}
                aria-label="Next Chapter"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-[#F3F1ED] hover:bg-white hover:text-black transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Pinned / Controlled Exhibition Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Visual Presentation */}
          <div className="lg:col-span-7 relative min-h-[420px] lg:min-h-[520px] bg-[#141414] border border-white/10 overflow-hidden group">
            <img
              src={fashionVisuals.campaignStory}
              alt="VOID Campaign Architecture Story"
              className="w-full h-full object-cover object-center filter grayscale brightness-90 contrast-125 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* Inner Floating Specs */}
            <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#929292] uppercase">SPECIFICATION MATRIX</span>
                <p className="text-sm font-mono text-[#F3F1ED] font-semibold mt-1">{current.accent}</p>
              </div>
              <div className="text-right">
                <span className="text-2xl md:text-3xl font-mono font-bold text-[#F3F1ED] tabular-nums">{current.metric}</span>
                <p className="text-[11px] font-mono text-[#929292]">{current.metricLabel}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#111111] p-8 md:p-12 border border-white/10">
            <div>
              {/* Stepper Tabs */}
              <div className="flex gap-2 mb-8">
                {CHAPTERS.map((ch, idx) => (
                  <button
                    key={ch.index}
                    onClick={() => setActiveChapter(idx)}
                    className={`flex-1 py-2 text-xs font-mono border-b-2 transition-all ${
                      activeChapter === idx
                        ? 'border-[#F3F1ED] text-[#F3F1ED] font-bold'
                        : 'border-white/10 text-[#666666] hover:text-[#929292]'
                    }`}
                  >
                    CH.{ch.index}
                  </button>
                ))}
              </div>

              <div className="w-12 h-12 bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-[#F3F1ED] mb-6">
                <IconComponent className="w-5 h-5" />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#929292]">
                {current.subtitle}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F3F1ED] mt-2 mb-4 leading-tight">
                {current.title}
              </h3>
              <p className="text-sm text-[#929292] leading-relaxed mb-8">
                {current.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#929292]">
              <span>AUTHENTICITY GUARANTEE</span>
              <span className="text-[#F3F1ED]">ARCHIVE 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
