import React from 'react';
import { Mail, MessageSquare, MapPin, Send, Instagram, Twitter, Github, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
          {/* Content */}
          <div className="flex flex-col py-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
               Support Interface
            </div>
            <h1 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight mb-8">
              Connect <br /><span className="text-white/40 italic">with Neutrality</span>
            </h1>
            <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-xl">
              For analytical questions, batch verification delays, or logistical inquiries. Please note our support team cannot answer health-related questions.
            </p>

            <div className="space-y-10 mt-auto">
               <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                    <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Electronic Mail</h4>
                    <p className="text-white/40 text-sm mb-2 italic">Standard Inquiry Response: &lt; 24H</p>
                    <p className="text-xl font-mono text-brand-cyan">admin@neurovex.com</p>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-cyan transition-colors">
                    <Globe className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Global HQ</h4>
                    <p className="text-white/40 text-sm mb-2 italic">Institutional Records Only</p>
                    <p className="text-xl text-white/80">Neurovex Laboratory District<br />Research Park One, LV</p>
                  </div>
               </div>

               <div className="pt-8 border-t border-white/5 flex items-center space-x-6">
                 {[Twitter, Instagram, Github].map((Icon, i) => (
                   <a key={i} href="#" className="p-3 glass rounded-xl border border-white/10 hover:border-brand-cyan hover:text-brand-cyan transition-all">
                     <Icon className="w-5 h-5" />
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 top-0 bg-brand-cyan/5 blur-[100px] -z-10" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-dark rounded-[40px] border border-white/5 p-8 md:p-12 h-full"
            >
              <form className="h-full flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-8">Send a Secured Message</h3>
                
                <div className="space-y-6 flex-grow">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Subject Category</label>
                     <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:border-brand-cyan outline-none transition-colors appearance-none cursor-pointer">
                        <option>General Administration</option>
                        <option>Batch Verification Assistance</option>
                        <option>Order Status Inquiry</option>
                        <option>Payment Issue</option>
                        <option>Compliance Question</option>
                     </select>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Protocol Name</label>
                        <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:border-brand-cyan outline-none transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Digital Signal (Email)</label>
                        <input type="email" placeholder="research@email.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:border-brand-cyan outline-none transition-colors" />
                      </div>
                   </div>

                   <div className="space-y-2 flex-grow flex flex-col">
                     <label className="text-[10px] font-bold text-white/40 uppercase tracking-widest pl-2">Message Payload</label>
                     <textarea rows={6} placeholder="State your inquiry clearly for our laboratory administrators..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-sm focus:border-brand-cyan outline-none transition-colors resize-none flex-grow" />
                   </div>
                </div>

                <button className="w-full py-5 bg-brand-cyan text-brand-black font-bold rounded-2xl flex items-center justify-center space-x-3 transition-transform hover:scale-[1.02] active:scale-[0.98] glow-cyan mt-10">
                  <Send className="w-5 h-5" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
