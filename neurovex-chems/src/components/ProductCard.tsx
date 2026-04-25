import React from 'react';
import { motion } from 'motion/react';
import { ShoppingCart, FlaskConical, Beaker, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-brand-cyan/30 transition-all duration-500 overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-cyan/5 blur-[60px] group-hover:bg-brand-cyan/10 transition-all" />

      {/* Badges */}
      <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
        {product.newArrival && (
          <span className="px-2 py-0.5 bg-brand-cyan text-brand-black text-[9px] font-black uppercase tracking-widest rounded-sm">
            New
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/5 mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-brand-cyan font-bold mb-1">
            {product.strength} Lyophilized
          </p>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-sm text-slate-400 mb-6 leading-relaxed line-clamp-2">
          {product.shortDescription || 'High-stability peptide sequence for analytical use.'}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-white font-mono">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {/* Actions - Rectangular Buttons for Sleek Theme */}
        <div className="flex gap-2 pt-2">
          <Link
            to={`/product/${product.slug}`}
            className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-widest text-white text-center transition-all"
          >
            Details
          </Link>
          <button className="flex-1 px-4 py-3 bg-brand-cyan text-brand-black rounded-sm hover:bg-brand-cyan/80 transition-all text-[10px] font-bold uppercase tracking-widest glow-blue">
            Acquire
          </button>
        </div>
      </div>
      
      {/* Compliance Indicator */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-2 text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
        <Beaker className="w-3 h-3" />
        <span>Molecular Integrity Guaranteed</span>
      </div>
    </motion.div>
  );
};
