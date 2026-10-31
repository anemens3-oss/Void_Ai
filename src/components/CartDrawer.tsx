import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, CheckCircle2, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen,
    clearCart
  } = useCart();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const freeShippingThreshold = 300;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);
  const shippingPercent = Math.min(100, Math.floor((cartTotal / freeShippingThreshold) * 100));

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'VOID10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "VOID10"');
    }
  };

  const discountAmount = Math.round((cartTotal * discountPercent) / 100);
  const finalTotal = cartTotal - discountAmount;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrderId = 'VD-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(newOrderId);
    setOrderComplete(true);
    clearCart();
  };

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop scrim with blur */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => {
          setIsCartOpen(false);
          setIsCheckingOut(false);
          setOrderComplete(false);
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e0e] border-l border-white/10 text-[#F3F1ED] flex flex-col justify-between shadow-2xl">
          {/* Drawer Top Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#F3F1ED]" />
              <h3 className="font-display font-bold text-lg tracking-wider">YOUR BAG</h3>
              <span className="text-xs font-mono text-[#929292]">({cartCount})</span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckingOut(false);
                setOrderComplete(false);
              }}
              aria-label="Close cart drawer"
              className="p-1 text-[#929292] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Shipping Threshold Progress */}
          {cart.length > 0 && !orderComplete && (
            <div className="px-6 py-3 bg-[#141414] border-b border-white/5 text-xs font-mono">
              <div className="flex justify-between text-[#929292] mb-1.5">
                <span>
                  {amountToFreeShipping === 0
                    ? 'COMPLIMENTARY EXPRESS SHIPPING UNLOCKED'
                    : `ADD $${amountToFreeShipping} FOR FREE EXPRESS SHIPPING`}
                </span>
                <span>{shippingPercent}%</span>
              </div>
              <div className="w-full h-1 bg-[#222222]">
                <div
                  className="h-full bg-[#F3F1ED] transition-all duration-300"
                  style={{ width: `${shippingPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-6">
            {orderComplete ? (
              /* Order Confirmation Screen */
              <div className="h-full flex flex-col items-center justify-center text-center p-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mb-4" />
                <span className="text-xs font-mono tracking-widest text-[#929292] uppercase">
                  ORDER CONFIRMED
                </span>
                <h4 className="text-2xl font-display font-bold text-[#F3F1ED] mt-2 mb-2">
                  Shipment Preparing
                </h4>
                <p className="text-sm font-mono text-white/90 bg-white/5 py-2 px-4 border border-white/10 mb-6">
                  {orderId}
                </p>
                <p className="text-xs text-[#929292] leading-relaxed max-w-xs mb-8">
                  Your order has been recorded. Dispatch tracking and cryptographic authenticity certificate will be sent to your email.
                </p>
                <button
                  onClick={() => {
                    setOrderComplete(false);
                    setIsCheckingOut(false);
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
                >
                  CONTINUE BROWSING
                </button>
              </div>
            ) : isCheckingOut ? (
              /* Simulated Direct Checkout Form */
              <form onSubmit={handleCheckout} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-xs font-mono tracking-widest text-[#929292] uppercase">
                    SECURE EXPRESS CHECKOUT
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCheckingOut(false)}
                    className="text-xs font-mono text-[#929292] hover:text-white underline"
                  >
                    Back to bag
                  </button>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#929292] uppercase mb-1">
                    Customer Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alexei Vance"
                    className="w-full px-3 py-2 bg-[#161616] border border-white/15 text-xs text-white font-mono focus:border-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#929292] uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="client@void-fashion.com"
                    className="w-full px-3 py-2 bg-[#161616] border border-white/15 text-xs text-white font-mono focus:border-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-[#929292] uppercase mb-1">
                    Delivery Address
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="740 Broadway, Penthouse 4"
                    className="w-full px-3 py-2 bg-[#161616] border border-white/15 text-xs text-white font-mono focus:border-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-[#929292] uppercase mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="New York"
                      className="w-full px-3 py-2 bg-[#161616] border border-white/15 text-xs text-white font-mono focus:border-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-[#929292] uppercase mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="10003"
                      className="w-full px-3 py-2 bg-[#161616] border border-white/15 text-xs text-white font-mono focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#929292]">
                  <Shield className="w-4 h-4 text-[#F3F1ED]" />
                  <span>256-bit Encrypted Tokenization</span>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-3.5 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-white transition-colors"
                >
                  CONFIRM & PLACE ORDER · ${finalTotal}
                </button>
              </form>
            ) : cart.length === 0 ? (
              /* Empty Cart State */
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <ShoppingBag className="w-12 h-12 text-[#444444] mb-4 stroke-1" />
                <h4 className="font-display font-semibold text-lg text-[#F3F1ED] mb-2">
                  Your bag is empty
                </h4>
                <p className="text-xs font-mono text-[#929292] max-w-xs mb-8">
                  Examine our curated streetwear drops and reserve your size before archival stock ends.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-3 border border-white/20 text-xs font-mono tracking-widest text-[#F3F1ED] hover:bg-white hover:text-black transition-colors uppercase"
                >
                  DISCOVER CATALOG
                </button>
              </div>
            ) : (
              /* Itemized List */
              <div className="space-y-4">
                {cart.map(item => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 p-3 bg-[#131313] border border-white/5 hover:border-white/15 transition-colors"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-[#181818] overflow-hidden shrink-0 border border-white/10">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover filter grayscale"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-xs font-display font-bold text-[#F3F1ED] leading-tight line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.cartId)}
                            aria-label="Remove item"
                            className="text-[#666666] hover:text-red-400 transition-colors p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 text-[11px] font-mono text-[#929292] mt-1">
                          <span>SIZE: <strong className="text-white">{item.size}</strong></span>
                          <span>·</span>
                          <span className="truncate">{item.color}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-white/15 bg-black/40">
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#929292] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-7 text-center font-mono text-xs tabular-nums text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#929292] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-mono text-xs font-semibold text-[#F3F1ED] tabular-nums">
                          ${item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code input */}
                <form onSubmit={applyPromo} className="pt-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="PROMO CODE (VOID10)"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-black/60 border border-white/10 text-xs font-mono text-white placeholder:text-[#666666] focus:outline-none uppercase"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 border border-white/20 text-xs font-mono text-white hover:bg-white hover:text-black transition-colors"
                    >
                      APPLY
                    </button>
                  </div>
                  {promoApplied && (
                    <p className="text-xs text-emerald-400 font-mono mt-1">
                      10% Archival discount applied.
                    </p>
                  )}
                  {promoError && (
                    <p className="text-xs text-red-400 font-mono mt-1">
                      {promoError}
                    </p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Drawer Bottom Summary / Checkout CTA */}
          {cart.length > 0 && !isCheckingOut && !orderComplete && (
            <div className="p-6 bg-[#111111] border-t border-white/10 space-y-4">
              <div className="space-y-1.5 text-xs font-mono text-[#929292]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-[#F3F1ED] tabular-nums">${cartTotal}.00</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span className="tabular-nums">-${discountAmount}.00</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Express Courier</span>
                  <span className="text-[#F3F1ED]">
                    {amountToFreeShipping === 0 ? 'FREE' : '$25.00'}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-white/10 text-sm font-bold text-[#F3F1ED]">
                  <span>Total</span>
                  <span className="tabular-nums">${finalTotal}.00</span>
                </div>
              </div>

              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full py-4 bg-[#F3F1ED] text-black font-mono text-xs uppercase tracking-[0.25em] font-bold hover:bg-white transition-all active:scale-98 flex items-center justify-center gap-3"
              >
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center font-mono text-[#666666]">
                COMPLIMENTARY RETURNS WITHIN 14 DAYS
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
