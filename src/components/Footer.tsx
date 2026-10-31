import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-[#050505] text-[#F3F1ED] pt-24 pb-12 px-6 md:px-14 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Top Newsletter & Archival Dispatch Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#929292] uppercase">
              ARCHIVE DISPATCHES
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-[#F3F1ED] mt-2 mb-3">
              Privileged Drop Access
            </h3>
            <p className="text-xs md:text-sm text-[#929292] max-w-md leading-relaxed">
              Subscribe to receive private preview codes 24 hours prior to global public releases. No promotional marketing spam.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {subscribed ? (
              <div className="flex items-center gap-3 p-4 bg-[#111111] border border-white/20 text-xs font-mono text-[#F3F1ED]">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Enrolled in Archival Dispatch. Welcome to the collective.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="ENTER YOUR EMAIL..."
                    className="flex-1 px-4 py-3.5 bg-[#121212] border border-white/15 text-xs font-mono text-white placeholder:text-[#666666] focus:outline-none focus:border-white transition-colors uppercase"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors whitespace-nowrap"
                  >
                    SUBSCRIBE
                  </button>
                </div>
                {error && (
                  <p className="text-xs font-mono text-red-400">{error}</p>
                )}
                <span className="text-[10px] font-mono text-[#666666] block">
                  BY SUBSCRIBING YOU AGREE TO OUR PRIVACY POLICY AND TERMS.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Navigation & Brand Links Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/10 text-xs font-mono">
          <div>
            <h4 className="text-[#F3F1ED] font-bold tracking-widest uppercase mb-4">
              COLLECTIONS
            </h4>
            <ul className="space-y-2.5 text-[#929292]">
              <li><a href="#catalog" className="hover:text-white transition-colors">Men's Apparel</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Women's Tailoring</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Hardware & Bags</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Vibram Footwear</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Archival Pieces</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F3F1ED] font-bold tracking-widest uppercase mb-4">
              CUSTOMER CARE
            </h4>
            <ul className="space-y-2.5 text-[#929292]">
              <li><span className="hover:text-white cursor-pointer transition-colors">Global Express Courier</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">14-Day Returns & Exchanges</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Sizing & Architectural Fit</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Care & Textile Preservation</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Authenticity Verification</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F3F1ED] font-bold tracking-widest uppercase mb-4">
              STUDIO
            </h4>
            <ul className="space-y-2.5 text-[#929292]">
              <li><span className="hover:text-white cursor-pointer transition-colors">Manifesto</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Materiality & Mills</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Press Inquiries</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Careers & Internships</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors">Sustainability Report</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#F3F1ED] font-bold tracking-widest uppercase mb-4">
              COMMUNITY
            </h4>
            <ul className="space-y-2.5 text-[#929292]">
              <li className="flex items-center justify-between">
                <span className="hover:text-white cursor-pointer">Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666]" />
              </li>
              <li className="flex items-center justify-between">
                <span className="hover:text-white cursor-pointer">Are.na Channel</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666]" />
              </li>
              <li className="flex items-center justify-between">
                <span className="hover:text-white cursor-pointer">Discord Collective</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666]" />
              </li>
              <li className="flex items-center justify-between">
                <span className="hover:text-white cursor-pointer">Soundcloud Sessions</span>
                <ArrowUpRight className="w-3 h-3 text-[#666666]" />
              </li>
            </ul>
          </div>
        </div>

        {/* Massive Brand Typographic Watermark & Bottom Bar */}
        <div className="pt-16 pb-8">
          <div className="font-display font-extrabold text-[18vw] leading-none text-[#121212] select-none text-center tracking-[0.1em] pointer-events-none">
            VOID
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] font-mono text-[#666666]">
            <div>
              © 2026 VOID ATELIER CORP. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <span>PRIVACY POLICY</span>
              <span>TERMS OF SERVICE</span>
              <span>LEGAL NOTICE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
