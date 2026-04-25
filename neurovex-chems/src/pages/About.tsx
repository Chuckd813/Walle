import React from 'react';
import { motion } from 'motion/react';
import { Target, Microscope, ShieldCheck, Zap, Globe, Users, FlaskConical, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-8">
                The Institution: Est. 2024
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Synthesis <br /><span className="text-white/40 italic">at Scale</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-xl">
                Neurovex Chems was established to bridge the gap between digital synthesis logistics and empirical scientific investigation. We are an institution dedicated to the distribution of ultra-pure compounds.
              </p>
              <div className="flex gap-4">
                 <Link to="/shop" className="px-8 py-4 bg-brand-cyan text-brand-black font-bold rounded-2xl hover:scale-105 transition-all">
                   Explore Collection
                 </Link>
                 <Link to="/testing" className="px-8 py-4 glass border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
                   View Documentation
                 </Link>
              </div>
            </div>

            <div className="relative">
               <div className="rounded-[40px] overflow-hidden glass border border-white/5 p-4 transform -rotate-3">
                  <div className="rounded-[32px] overflow-hidden aspect-video relative">
                     <img 
                       src="https://picsum.photos/seed/science/1200/800" 
                       alt="Laboratory" 
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                     />
                     <div className="absolute inset-0 bg-brand-cyan/10 mix-blend-overlay" />
                  </div>
               </div>
               {/* Decorative Element */}
               <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[32px] border border-white/10 hidden md:block">
                  <p className="text-4xl font-display font-bold text-brand-cyan">99.8%</p>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Minimum Purity Goal</p>
               </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="bg-brand-navy/30 rounded-[60px] border border-white/5 p-12 md:p-24 mb-32 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-violet/5 blur-[120px] -z-10" />
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {[
                { title: 'The Standard', desc: 'Operating with the rigorous protocols expected of modern biochemical synthesis labs.', icon: Target },
                { title: 'The Methodology', desc: 'Utilizing HPLC-MS and spectroscopy to verify molecular fidelity at every stage.', icon: Microscope },
                { title: 'The Commitment', desc: 'Providing high-trust documentation without medical bias or human-use framing.', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="space-y-6">
                   <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                     <item.icon className="w-8 h-8 text-brand-cyan" />
                   </div>
                   <h3 className="text-2xl font-display font-bold">{item.title}</h3>
                   <p className="text-white/50 leading-relaxed italic">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Global Distribution */}
        <section className="mb-32">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">Global <span className="text-brand-cyan italic">Research Reach</span></h2>
             <p className="text-white/50 text-lg leading-relaxed">
               While our central synthesis facilities are restricted-access, our logistical network spans the globe, ensuring that institutions can access critical compounds with predictable lead times and secure documentation.
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {[
               { label: 'Syntheses', count: '10,000+' },
               { label: 'Active Batches', count: '450+' },
               { label: 'Verification Logs', count: '1,200+' },
               { label: 'Laboratory Partners', count: '500+' }
             ].map((stat, i) => (
               <div key={i} className="glass p-8 rounded-[32px] border border-white/5 text-center group hover:border-brand-cyan/40 transition-all">
                  <p className="text-4xl font-display font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">{stat.count}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{stat.label}</p>
               </div>
             ))}
          </div>
        </section>

        {/* Scientific Ethics */}
        <section className="py-24 border-t border-white/5 flex flex-col items-center text-center">
           <Beaker className="w-12 h-12 text-brand-violet mb-8" />
           <h2 className="text-3xl font-display font-bold mb-6">Foundational Compliance</h2>
           <p className="text-white/40 max-w-2xl leading-relaxed italic mb-12">
             "Neurovex operates under a strict non-therapeutic mandate. We do not engage in activities that promote the unauthorized use of research compounds. Our mission is purely analytical."
           </p>
           <button className="px-10 py-5 glass border border-white/10 rounded-2xl font-bold uppercase tracking-widest text-xs hover:border-brand-cyan hover:text-brand-cyan transition-all">
             Read Full Compliance Policy
           </button>
        </section>
      </div>
    </div>
  );
};
