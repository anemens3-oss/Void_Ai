import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { fashionVisuals } from '../utils/fashionVisuals';

interface LookbookProps {
  onExplore: () => void;
}

export const LookbookMarquee: React.FC<LookbookProps> = ({ onExplore }) => {
  return (
    <section id="lookbook" className="py-24 bg-[#080808] border-t border-white/10 overflow-hidden">
      {/* Editorial Running Marquee */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-6 mb-20 bg-[#0e0e0e]">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite] select-none text-4xl md:text-6xl font-display font-extrabold tracking-[0.2em] text-[#222222]">
          <span className="mx-6">VOID ARCHIVAL 2026</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6 text-white/60">BEYOND THE ORDINARY</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6">RAW TEXTILE DISCIPLINE</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6 text-white/60">BRUTALIST STREETWEAR</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6">VOID ARCHIVAL 2026</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6 text-white/60">BEYOND THE ORDINARY</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6">RAW TEXTILE DISCIPLINE</span>
          <span className="mx-6 text-white/20">/</span>
          <span className="mx-6 text-white/60">BRUTALIST STREETWEAR</span>
          <span className="mx-6 text-white/20">/</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-14">
        {/* Full-bleed Lookbook Campaign Feature */}
        <div className="relative bg-[#111111] border border-white/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual */}
            <div className="lg:col-span-8 min-h-[420px] lg:min-h-[560px] relative overflow-hidden bg-[#161616]">
              <img
                src={fashionVisuals.heroCampaign}
                alt="VOID Campaign Editorial Lookbook"
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/80 hidden lg:block" />
              <div className="absolute bottom-6 left-6 text-xs font-mono tracking-widest text-[#929292] bg-black/60 px-3 py-1.5 border border-white/10">
                LOOK 04 // MONOLITHIC TAILORING
              </div>
            </div>

            {/* Editorial Copy & Manifesto */}
            <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-[#111111]">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-[#929292] uppercase">
                  EDITORIAL // VOL. 04
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-[#F3F1ED] mt-2 mb-4 leading-tight">
                  Form Follows Silence
                </h3>
                <p className="text-xs md:text-sm text-[#929292] leading-relaxed mb-6">
                  In a landscape crowded with transient logos and plastic embellishments, VOID stands for tactile permanence. Heavyweight fabrics fall naturally with structural gravity, shielding the wearer while retaining sharp, architectural balance.
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-mono text-[#b0b0b0]">
                  <div className="flex justify-between">
                    <span className="text-[#666666]">CREATIVE DIRECTION</span>
                    <span>STUDIO VOID</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">LOCATION</span>
                    <span>KYOTO & BERLIN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#666666]">PRODUCTION</span>
                    <span>LIMITED EDITION RUN</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={onExplore}
                  className="w-full py-3.5 px-4 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors flex items-center justify-between"
                >
                  <span>SHOP THE EDITORIAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
