import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import { fashionVisuals } from '../utils/fashionVisuals';

interface HeroProps {
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const titleWords = ['BEYOND', 'THE', 'ORDINARY'];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-14 overflow-hidden bg-[#080808]"
    >
      {/* Background Editorial Visual with Subtle Parallax & Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`w-full h-full transition-transform duration-1000 ease-out ${
            loaded ? 'scale-100 opacity-90' : 'scale-105 opacity-0'
          }`}
          style={{
            transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0)`
          }}
        >
          <img
            src={fashionVisuals.heroCampaign}
            alt="VOID Streetwear Campaign Editorial"
            className="w-full h-full object-cover object-center filter brightness-[0.75] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/80" />
        </div>
      </div>

      {/* Top micro metadata header */}
      <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#929292] uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <span>RUN 04</span>
          <span>·</span>
          <span>AUTUMN / WINTER 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-2 text-right">
          <span>PARIS</span>
          <span>·</span>
          <span>TOKYO</span>
          <span>·</span>
          <span>NEW YORK</span>
        </div>
      </div>

      {/* Center Cinematic Typography & Headlines */}
      <div className="relative z-10 max-w-5xl my-auto py-12">
        <div className="overflow-hidden mb-3">
          <p
            className={`text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-[#929292] transition-all duration-700 delay-200 ${
              loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            A New Perspective on Streetwear
          </p>
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-[#F3F1ED] mb-8">
          {titleWords.map((word, i) => (
            <span
              key={word}
              className={`inline-block mr-4 md:mr-8 transition-all duration-1000 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {word}
            </span>
          ))}
        </h1>

        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 delay-700 ${
            loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button
            onClick={onExplore}
            className="group relative px-8 py-4 bg-[#F3F1ED] text-[#080808] font-mono text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-all duration-300 flex items-center gap-3 active:scale-98"
          >
            <span>EXPLORE COLLECTION</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#080808] group-hover:scale-150 transition-transform" />
          </button>

          <div className="text-xs text-[#929292] font-mono max-w-xs leading-relaxed">
            Constructed with heavyweight textiles, architectural geometry, and disciplined silence.
          </div>
        </div>
      </div>

      {/* Bottom Row / Scroll Down Indicator */}
      <div className="relative z-10 flex items-end justify-between pt-8 border-t border-white/10 text-xs font-mono text-[#929292]">
        <div className="flex items-center gap-3">
          <span className="text-[#F3F1ED] font-bold">16 PIECES</span>
          <span>·</span>
          <span>LIMITED ARCHIVE RELEASE</span>
        </div>

        <button
          onClick={onExplore}
          className="flex items-center gap-2 text-[#F3F1ED] hover:text-white transition-colors group focus:outline-none"
        >
          <span className="text-[11px] tracking-widest uppercase">SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
