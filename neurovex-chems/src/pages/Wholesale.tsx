import React from 'react';
import { Mail, Send, Building2, ShieldCheck, Globe, FlaskConical, MessageSquareCode, BadgeHelp } from 'lucide-react';
import { motion } from 'motion/react';

export const Wholesale: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-0 w-[800px] h-[800px] bg-brand-violet/5 blur-[200px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-cyan/5 blur-[200px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Info Side */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-violet/10 border border-brand-violet/20 text-brand-violet text-[10px] font-bold uppercase tracking-widest mb-6">
               <Building2 className="w-3 h-3 mr-2" />
               Institutional Partnership
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight mb-8">
              B2B & <span className="text-white/40 italic">Wholesale</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-xl">
              Scaling synthesis for laboratories, institutions, and verified resellers. Neurovex provides robust logistical support and volume-based pricing for professional environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
               {[
                 { title: 'Volume Tiering', desc: 'Custom pricing structures for bulk synthesis requirements.', icon: MessageSquareCode },
                 { title: 'Priority Logistics', desc: 'Secure, expedited distribution for large-scale inventory.', icon: Globe },
                 { title: 'Full Traceability', desc: 'Batch-specific documentation and logistical tracking.', icon: ShieldCheck },
                 { title: 'Synthesis Scaling', desc: 'Capacity to expand synthesis based on inquiry volume.', icon: FlaskConical }
               ].map((item, i) => (
                 <div key={i} className="glass p-6 rounded-2xl border border-white/5 space-y-3">
                   <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                     <item.icon className="w-5 h-5 text-brand-cyan" />
                   </div>
                   <h4 className="font-bold">{item.title}</h4>
                   <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>

            <div className="p-8 rounded-3xl glass border border-white/10 flex items-start space-x-6">
               <BadgeHelp className="w-8 h-8 text-brand-violet shrink-0 mt-1" />
               <div>
                  <h4 className="text-lg font-bold mb-2">Compliance Verification</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Wholesale partners must provide valid institutional credentials. We strictly enforce research-use-only protocols and do not partner with entities promoting unauthorized use.
                  </p>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-dark rounded-[40px] border border-white/5 p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-3xl -z-10" />
              
              <h2 className="text-3xl font-display font-bold mb-8">Institutional Inquiry</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Full Name</label>
                    <input type="text" placeholder="Dr. Alexander Vance" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-brand-cyan outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Email Address</label>
                    <input type="email" placeholder="vance@institution.edu" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-brand-cyan outline-none transition-colors" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Organization</label>
                    <input type="text" placeholder="Vance Bio-Research Ltd" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-brand-cyan outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Inquiry Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-brand-cyan outline-none transition-colors appearance-none cursor-pointer">
                      <option>Select Tier</option>
                      <option>Reseller Inquiry</option>
                      <option>Clinical Research (Large Volume)</option>
                      <option>Custom Synthesis</option>
                      <option>Logistical Partnership</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Inquiry Details</label>
                  <textarea rows={5} placeholder="Describe your institutional requirements, expected monthly volume, and specific compounds of interest..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:border-brand-cyan outline-none transition-colors resize-none" />
                </div>

                <button className="w-full py-5 bg-brand-cyan text-brand-black font-bold rounded-2xl flex items-center justify-center space-x-3 hover:scale-[1.02] transition-transform active:scale-[0.98] shadow-glow-cyan mt-4">
                  <Send className="w-5 h-5 lg:ml-2" />
                  <span>Submit Institutional Lead</span>
                </button>
              </form>
            </motion.div>
            
            {/* Status Indicator */}
            <div className="mt-8 flex items-center justify-center space-x-4 opacity-50">
               <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <span>System Ready</span>
               </div>
               <div className="w-1 h-1 bg-white/20 rounded-full" />
               <div className="text-[10px] font-mono tracking-widest uppercase">
                 Response Time: &lt; 12H
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
