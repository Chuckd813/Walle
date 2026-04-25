import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';

export const ComplianceModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('neurovex_compliance_accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('neurovex_compliance_accepted', 'true');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="max-w-xl w-full glass p-6 md:p-10 rounded-lg border border-white/10 relative overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)]"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-cyan/5 blur-[100px] -z-10" />

            <div className="flex flex-col items-center text-center space-y-8">
              <div className="w-12 h-12 rounded-full bg-brand-cyan/10 flex items-center justify-center border border-brand-cyan/30 glow-blue">
                <ShieldAlert className="w-6 h-6 text-brand-cyan" />
              </div>
              
              <div className="space-y-2">
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-cyan">Protocol Verification</div>
                <h2 className="text-3xl font-bold tracking-tight text-white uppercase italic">
                  Research Compliance
                </h2>
              </div>
              
              <div className="space-y-6 text-slate-400 leading-relaxed text-sm">
                <p className="bg-red-500/10 p-4 border border-red-500/20 text-red-200 font-bold uppercase tracking-widest text-[10px]">
                  FOR LABORATORY AND RESEARCH USE ONLY. NOT FOR HUMAN CONSUMPTION.
                </p>
                
                <p>
                  Accessing Neurovex Chems infrastructure requires institutional acknowledgement of research protocols. Compounds are strictly for analytical investigation.
                </p>

                <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                  Must be 21+ for procurement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-8 py-5 bg-brand-cyan text-black font-bold uppercase text-[11px] tracking-widest rounded-sm hover:bg-brand-cyan/80 transition-all glow-blue"
                >
                  Confirm Protocols
                </button>
                <button
                  onClick={() => window.location.href = 'https://google.com'}
                  className="flex-1 px-8 py-5 glass text-white font-bold uppercase text-[11px] tracking-widest rounded-sm hover:bg-white/10 transition-all"
                >
                  Exit Node
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
