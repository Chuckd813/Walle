import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Github, Twitter, Instagram, Mail, MapPin, ShieldCheck, Beaker, AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="z-10 px-6 md:px-10 py-12 border-t border-white/5 bg-slate-950/50 flex flex-col justify-center space-y-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-8 mb-8">
           <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center glow-blue">
                <span className="text-xs font-bold">NX</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight uppercase leading-none">Neurovex</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-cyan font-semibold">Chems</span>
              </div>
           </div>
           
           <div className="text-[10px] text-slate-500 uppercase tracking-widest flex flex-wrap gap-x-8 gap-y-4 font-bold">
              <span className="text-white/40">&copy; 2026 NEUROVEX CHEMS - SECURE INFRASTRUCTURE</span>
              <Link to="/shipping" className="hover:text-brand-cyan transition-colors">Shipping</Link>
              <Link to="/privacy" className="hover:text-brand-cyan transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-brand-cyan transition-colors">Terms</Link>
           </div>

           <div className="flex space-x-4">
              <div className="h-8 w-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <div className="w-6 h-4 bg-brand-cyan/20 rounded-sm" />
              </div>
              <div className="h-8 w-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <div className="w-6 h-4 bg-brand-violet/20 rounded-sm" />
              </div>
           </div>
        </div>

        <div className="bg-red-500/5 border border-red-500/20 px-6 py-4 rounded-lg flex items-start space-x-4">
           <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
           <p className="text-[10px] text-red-200/60 uppercase tracking-wider leading-relaxed font-semibold">
             Institutional Disclaimer: All products are strictly for laboratory and research use only. Not for human consumption. No medical claims are made. Purchase assumes full responsibility for chemical research protocols.
           </p>
        </div>
      </div>
    </footer>
  );
};
