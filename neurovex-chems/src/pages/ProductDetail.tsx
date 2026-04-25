import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ShieldCheck, Beaker, Truck, FileText, CheckCircle2, FlaskConical, ArrowLeft, Info, HelpCircle } from 'lucide-react';
import { PRODUCTS, cn } from '../lib/utils';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <FlaskConical className="w-16 h-16 text-white/10 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Compound Not Found</h1>
        <p className="text-white/50 mb-8">The requested research specification does not exist in our library.</p>
        <Link to="/shop" className="px-8 py-4 bg-brand-cyan text-brand-black font-bold rounded-xl transition-transform hover:scale-105">
          Back to Catalogue
        </Link>
      </div>
    );
  }

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <Link to="/shop" className="inline-flex items-center text-xs font-bold text-white/30 hover:text-brand-cyan uppercase tracking-widest mb-12 transition-colors group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Archive Library
        </Link>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          {/* Gallery */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square rounded-[40px] overflow-hidden glass border border-white/10"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-8 left-8 flex flex-col gap-3">
                {product.featured && <span className="bg-brand-cyan text-black text-[10px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-glow-cyan">Featured Synthesis</span>}
              </div>
            </motion.div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, label: '3rd Party Verified' },
                { icon: Beaker, label: 'Scientific Grade' },
                { icon: Truck, label: 'Secure Chain' }
              ].map((item, i) => (
                <div key={i} className="glass p-4 rounded-2xl border border-white/5 flex flex-col items-center text-center">
                  <item.icon className="w-5 h-5 text-brand-cyan mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter text-white/40">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">{product.category}</p>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight">{product.name}</h1>
              <p className="text-2xl text-white/50">{product.strength}</p>
            </div>

            <div className="flex items-center space-x-6 mb-10">
              <div className="text-4xl font-mono font-medium text-white">
                 ${product.price.toFixed(2)}
              </div>
              <div className={cn(
                "px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest",
                product.stockStatus === 'In Stock' ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"
              )}>
                {product.stockStatus}
              </div>
            </div>

            <div className="space-y-6 mb-12">
               <div className="bg-red-500/5 border-l-2 border-red-500/40 p-5 rounded-r-2xl">
                 <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-red-500/80 leading-relaxed font-medium">
                      RESEARCH USE ONLY. THIS COUMPOUND IS STRICTLY FOR LABORATORY INVESTIGATION. NOT FOR HUMAN CONSUMPTION. NO MEDICAL CLAIMS OR DOSAGE GUIDANCE PROVIDED.
                    </p>
                 </div>
               </div>
               <p className="text-white/60 leading-relaxed text-lg italic">
                 {product.shortDescription}
               </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 pt-8 border-t border-white/10">
              <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <button className="px-6 py-4 hover:bg-white/10 transition-colors text-xl">-</button>
                <div className="px-6 py-4 font-mono font-bold text-xl">1</div>
                <button className="px-6 py-4 hover:bg-white/10 transition-colors text-xl">+</button>
              </div>
              <button className="flex-1 px-8 py-5 bg-brand-cyan text-brand-black font-bold rounded-2xl flex items-center justify-center space-x-4 transition-transform hover:scale-[1.02] active:scale-[0.98] glow-cyan">
                <ShoppingCart className="w-6 h-6" />
                <span className="text-lg">Add to Queue</span>
              </button>
            </div>

            {/* Specs Accordion */}
            <div className="space-y-4">
              {[
                { title: 'Technical Specification', content: product.fullDescription, icon: FileText },
                { title: 'Synthesis & Documentation', content: 'Each batch is synthesized in an ISO-certified environment. Detailed HPLC-MS reports are accessible via the verification portal using your batch ID.', icon: FileText },
                { title: 'Research Pairing Guidelines', content: 'Commonly investigated in conjunction with other biochemical agents for comparative analysis. No efficacy or synergy claims provided.', icon: FlaskConical }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-brand-cyan group-hover:scale-110 transition-transform" />
                      <h4 className="font-bold">{item.title}</h4>
                    </div>
                  </div>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-32" />

        {/* Research Pairings (Related Products) */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-bold">Related <span className="text-white/40 italic">Inquiries</span></h2>
            <Link to={`/category/${product.slug}`} className="text-brand-cyan text-xs font-bold uppercase tracking-widest flex items-center">
              View More {product.category} <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-brand-navy/30 rounded-[40px] border border-white/5 p-12 md:p-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <HelpCircle className="w-12 h-12 text-brand-violet mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-4">Technical Inquiries</h2>
            <p className="text-white/50 leading-relaxed">
              Standard compliance information regarding the investigation of this compound.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { q: 'Is this intended for human use?', a: 'Strictly no. All compounds are research chemicals intended for laboratory synthesis and analytical investigation only.' },
              { q: 'Where are the test results?', a: 'Batch-specific COAs are available in the testing portal. Use your lot number to download the HPLC-MS analysis.' },
              { q: 'What is the shelf life?', a: 'Stabilization varies by compound and format. Most lyophilized powders maintain integrity for 24 months when stored at standard laboratory temperatures.' },
              { q: 'Are there dosing instructions?', a: 'No. Dosing or therapeutic guidance constitutes medical advice which we do not provide. Consult research literature for analytical metering.' }
            ].map((faq, i) => (
              <div key={i} className="space-y-2">
                <p className="font-bold text-white flex items-center space-x-2">
                   <div className="w-1 h-1 bg-brand-cyan rounded-full" />
                   <span>{faq.q}</span>
                </p>
                <p className="text-sm text-white/50 leading-relaxed pl-3">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
