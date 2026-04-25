import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Beaker, ShieldCheck, Zap, Truck, Users, MessageSquareCode, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../lib/utils';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured || p.bestSeller).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 px-6 md:px-10 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.15)_0%,transparent_70%)]" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-7 space-y-8"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-cyan">
                Institutional Grade Quality
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] md:leading-[1.05] tracking-tight text-white mb-4">
                PREMIUM RESEARCH<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">COMPOUNDS.</span>
              </h1>
              
              <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                Strictly for laboratory and analytical research purposes. Neurovex provides documented purity for scientific excellence.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/shop"
                  className="px-10 py-5 bg-brand-cyan text-black font-bold uppercase text-[11px] tracking-widest rounded-sm hover:bg-brand-cyan/80 transition-colors glow-blue"
                >
                  Explore Catalog
                </Link>
                <Link
                  to="/testing"
                  className="px-10 py-5 glass text-white font-bold uppercase text-[11px] tracking-widest rounded-sm hover:bg-white/10 transition-colors"
                >
                  View Lab COAs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-5 relative flex justify-center"
            >
              <div className="absolute w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px]" />
              {featuredProducts[0] && (
                <div className="relative w-full max-w-sm glass rounded-3xl border border-white/10 flex flex-col items-center justify-center p-10 text-center shadow-2xl">
                  <div className="absolute -top-4 right-8 bg-brand-cyan text-black text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest">NEW</div>
                  <div className="w-40 h-40 mb-8 bg-gradient-to-b from-white/10 to-transparent rounded-2xl flex items-center justify-center border border-white/5 group overflow-hidden">
                    <img 
                      src={featuredProducts[0].image} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{featuredProducts[0].name}</h3>
                  <p className="text-xs text-brand-cyan uppercase tracking-widest font-bold mb-4">{featuredProducts[0].strength} Lyophilized</p>
                  <p className="text-sm text-slate-400 mb-8 leading-relaxed line-clamp-2">High-stability peptide sequence for analytical use.</p>
                  <div className="text-3xl font-bold text-white font-mono">${featuredProducts[0].price.toFixed(2)}</div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar / Features Grid */}
      <section className="px-6 md:px-10 py-20 bg-slate-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { icon: ShieldCheck, label: 'Testing Standard', val: 'Third Party Verified' },
               { icon: Beaker, label: 'Compliance', val: 'Research Use Only' },
               { icon: Truck, label: 'Logistics', val: 'Fast Secure Transit' },
               { icon: Users, label: 'Assistance', val: 'Dedicated Lab Support' }
             ].map((item, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 className="glass p-6 flex flex-col space-y-3 cyan-border"
                >
                 <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">{item.label}</div>
                 <div className="text-sm font-bold text-white flex items-center space-x-2">
                   <item.icon className="w-4 h-4 text-brand-cyan" />
                   <span>{item.val}</span>
                 </div>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 px-6 relative">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">Scientific Catalog</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                  Featured <span className="text-white/40 italic">Disciplines</span>
                </h2>
              </div>
              <Link to="/categories" className="text-white/50 hover:text-brand-cyan font-bold uppercase tracking-widest text-xs flex items-center">
                 View All Categories <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CATEGORIES.slice(0, 6).map((category, i) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative h-80 rounded-3xl overflow-hidden glass hover:border-brand-cyan/40 transition-all duration-500"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-2">Category</p>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-sm text-white/50 mb-6 line-clamp-2 max-w-[240px]">
                      {category.description}
                    </p>
                    <Link
                      to={`/category/${category.slug}`}
                      className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white group-hover:text-brand-cyan transition-colors"
                    >
                      Explore Library <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-24 px-6 bg-brand-navy/50">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs font-bold text-brand-violet uppercase tracking-widest mb-4">Precision Inventory</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">
                Elite Research <span className="text-glow-blue text-brand-blue">Compounds</span>
              </h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                High-purity formulations for laboratory investigations. Every batch is documented and verified.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/shop"
                className="inline-flex items-center px-10 py-4 glass border border-white/10 rounded-2xl text-sm font-bold uppercase tracking-widest hover:border-brand-cyan hover:text-brand-cyan transition-all"
              >
                Browse Full Catalog
              </Link>
            </div>
         </div>
      </section>

      {/* Why Neurovex Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none opacity-20" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-4">The Standard</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-10 leading-tight">
              A Future-First<br />
              Scientific <span className="text-white/40 italic">Institution</span>
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Rigorous Verification',
                  desc: 'Every batch undergoes third-party verification to ensure absolute fidelity to the product datasheet.',
                  icon: ShieldCheck
                },
                {
                  title: 'Neutral Documentation',
                  desc: 'Providing scientific clarity without claims. Our documentation is purely objective and data-driven.',
                  icon: FileText
                },
                {
                  title: 'Laboratory Logistics',
                  desc: 'Premium packaging and secure fulfillment protocols designed for professional research environments.',
                  icon: Zap
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 border border-brand-cyan/20">
                    <item.icon className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-dark border border-white/5 p-2 rounded-[40px] transform rotate-3">
              <div className="rounded-[32px] overflow-hidden aspect-[4/5] relative">
                <img
                  src="https://picsum.photos/seed/laboratory/800/1000"
                  alt="Laboratory"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-cyan/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent" />
                
                <div className="absolute bottom-8 left-8 p-6 glass rounded-2xl border border-white/20 max-w-[280px]">
                  <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-2">Research Protocol</p>
                  <p className="text-sm font-medium leading-relaxed">
                    "Neurovex represents the intersection of digital luxury and precise molecular science."
                  </p>
                </div>
              </div>
            </div>
            {/* Floating Element */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-40 h-40 glass rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center p-6 transform -rotate-6 hidden md:flex"
            >
              <Users className="w-8 h-8 text-brand-violet mb-2" />
              <p className="text-xl font-bold font-display">500+</p>
              <p className="text-[10px] text-white/50 uppercase tracking-widest">Active Labs</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COA Testing Block */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto glass-dark rounded-[40px] border border-white/5 p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-cyan/5 blur-[120px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold text-brand-cyan uppercase tracking-widest mb-6">Documentation Infrastructure</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                 Scientific <span className="text-white/40 italic">Transparency</span>
              </h2>
              <p className="text-lg text-white/50 mb-10 leading-relaxed">
                Access a central repository of every batch's documentation. We prioritize analytical chemistry and verifiable purity.
              </p>
              <Link
                to="/testing"
                className="px-8 py-5 bg-white text-brand-black font-bold rounded-2xl hover:bg-brand-cyan transition-all flex items-center justify-center sm:inline-flex space-x-3 shadow-glow-cyan"
              >
                 <span>Enterprise Testing Portal</span>
                 <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/10 group cursor-pointer hover:border-brand-cyan/40 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileText className="w-5 h-5 text-white/40 group-hover:text-brand-cyan" />
                  </div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 italic">Vial #NVX-994{i}</p>
                  <p className="text-sm font-bold truncate">Analytical Report</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 md:py-32 relative text-center">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-violet/10 to-transparent -z-10" />
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
            Advance Your <span className="text-brand-violet">Inquiry.</span>
          </h2>
          <p className="text-white/60 mb-12 text-lg">
            Join the elite circle of research institutions utilizing Neurovex synthesis protocols.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <Link
               to="/shop"
               className="w-full sm:w-auto px-10 py-5 bg-brand-violet text-white font-bold rounded-2xl hover:scale-105 transition-all glow-violet"
             >
               Explore Catalogue
             </Link>
             <Link
               to="/wholesale"
               className="w-full sm:w-auto px-10 py-5 glass hover:bg-white/10 border border-white/20 rounded-2xl text-white font-bold transition-all"
             >
               Wholesale Inquiry
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
