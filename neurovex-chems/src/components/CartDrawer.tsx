/// <reference types="vite/client" />
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ShieldCheck, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '');

export const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen, cartCount } = useCart();

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      if (stripe && session.id) {
        const { error } = await (stripe as any).redirectToCheckout({ sessionId: session.id });
        if (error) console.error(error);
      }
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md glass border-l border-white/10 z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/20">
                  <ShoppingBag className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white uppercase tracking-tight">Research Cart</h2>
                  <p className="text-[10px] text-brand-cyan uppercase tracking-widest font-bold">
                    {cartCount} item{cartCount !== 1 ? 's' : ''} staged
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-white/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-white/50" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <ShoppingBag className="w-10 h-10 text-white/10" />
                  </div>
                  <p className="text-slate-400 font-medium">Your research staging area is empty.</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-brand-cyan text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    Explore Compounds
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                    <div key={item.id + (item.selectedVariant?.id || '')} className="flex space-x-4 group">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-bold text-sm uppercase tracking-tight group-hover:text-brand-cyan transition-colors">
                            {item.name}
                          </h3>
                          {item.selectedVariant && (
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">
                              {item.selectedVariant.name}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.selectedVariant?.id)}
                          className="p-1 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                      <p className="text-[10px] text-brand-cyan uppercase tracking-widest font-bold">
                        {item.strength}
                      </p>
                      <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center space-x-2 bg-white/5 rounded-sm border border-white/5 px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedVariant?.id)}
                            className="p-1 hover:text-brand-cyan"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedVariant?.id)}
                            className="p-1 hover:text-brand-cyan"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm font-bold font-mono text-white">
                          ${((item.selectedVariant?.price || item.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 bg-slate-950/50 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Procurement</span>
                  <span className="text-2xl font-bold text-white font-mono">${cartTotal.toFixed(2)}</span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-4 bg-brand-cyan text-black font-bold uppercase text-xs tracking-widest rounded-sm hover:bg-brand-cyan/80 transition-all glow-blue flex items-center justify-center space-x-3"
                  >
                    <span>Secure Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[9px] text-slate-500 text-center uppercase tracking-widest font-semibold flex items-center justify-center space-x-2">
                    <ShieldCheck className="w-3 h-3 text-brand-cyan" />
                    <span>Encrypted Institutional Processing</span>
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
