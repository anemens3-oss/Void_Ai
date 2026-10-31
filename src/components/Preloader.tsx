import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1400; // 1.4 seconds smooth luxury reveal

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setIsExiting(true);
        setTimeout(() => {
          onComplete();
        }, 600); // Wait for transition fade
      }
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-8 md:p-14 bg-[#080808] text-[#F3F1ED] transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-auto ${
        isExiting ? '-translate-y-full opacity-90' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Top Bar indicator */}
      <div className="flex items-center justify-between text-xs tracking-widest text-[#929292] font-mono">
        <span>ARCHIVAL COLLECTION</span>
        <span>INITIALIZING SYSTEM</span>
      </div>

      {/* Center Hero Logo & Typographic Animation */}
      <div className="flex flex-col items-center justify-center text-center my-auto">
        <div className="relative overflow-hidden mb-6">
          <h1 className="font-display font-extrabold text-7xl md:text-9xl tracking-[0.2em] text-[#F3F1ED] select-none">
            VOID
          </h1>
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#F3F1ED] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#929292] font-medium max-w-md">
          Beyond The Ordinary — Architectural Streetwear
        </p>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex items-end justify-between text-xs font-mono text-[#929292]">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#F3F1ED] animate-ping" />
          <span>AUTUMN / WINTER</span>
        </div>
        <div className="text-3xl md:text-4xl font-mono tabular-nums font-bold text-[#F3F1ED]">
          {progress.toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
};
