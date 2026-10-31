import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Check, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, dismissToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#141414] border border-white/20 p-4 shadow-2xl flex items-center justify-between gap-3 text-[#F3F1ED] transition-all animate-slideUp"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black/60 border border-white/10 flex items-center justify-center shrink-0">
              {toast.type === 'cart' ? (
                <ShoppingBag className="w-4 h-4 text-emerald-400" />
              ) : toast.type === 'wishlist' ? (
                <Heart className="w-4 h-4 text-white fill-current" />
              ) : (
                <Check className="w-4 h-4 text-[#F3F1ED]" />
              )}
            </div>
            <div>
              <p className="text-xs font-mono font-bold tracking-wider uppercase">
                {toast.message}
              </p>
              {toast.subtitle && (
                <p className="text-[11px] font-mono text-[#929292] line-clamp-1">
                  {toast.subtitle}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => dismissToast(toast.id)}
            className="p-1 text-[#666666] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
