import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ShieldCheck, CheckCircle2, Search, ExternalLink, Beaker, FlaskConical } from 'lucide-react';
import { cn } from '../lib/utils';

export const COA: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const coas = [
    { id: 'NVX-101', product: 'Retatrutide 10mg', date: '2026-03-12', purity: '99.8%', method: 'HPLC-MS', status: 'Verified' },
    { id: 'NVX-102', product: 'Methylene Blue 1% Solution', date: '2026-03-15', purity: '100% Aqueous', method: 'Spectroscopy', status: 'Verified' },
    { id: 'NVX-103', product: 'MOTS-C 10mg', date: '2026-03-18', purity: '99.4%', method: 'HPLC', status: 'Verified' },
    { id: 'NVX-104', product: 'BPC-157 5mg', date: '2026-04-01', purity: '99.9%', method: 'HPLC', status: 'Verified' },
    { id: 'NVX-105', product: 'NAD+ 500mg', date: '2026-04-05', purity: '99.2%', method: 'LC-MS', status: 'Verified' },
    { id: 'NVX-106', product: 'Selank 5mg', date: '2026-04-08', purity: '99.7%', method: 'HPLC', status: 'Verified' },
  ];

  const filteredCoas = coas.filter(c => 
    c.product.toLowerCase().includes(searchQuery.toLowerCase()) || 
    c.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Pane */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[10px] font-bold uppercase tracking-widest mb-6">
               <ShieldCheck className="w-3 h-3 mr-2" />
               Analytical Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight mb-6">
              Batch <span className="text-white/40 italic">Verification</span>
            </h1>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              Transparency is the bedrock of scientific inquiry. We provide comprehensive analytical reports for every synthesis batch, verified by third-party laboratories.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>HPLC-MS Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>3rd Party Scrutiny</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/50">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan" />
                <span>Batch-Specific Data</span>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-[40px] border border-white/5 p-8 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 blur-[60px]" />
            <div className="flex items-center justify-between mb-8">
               <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                 <FlaskConical className="w-6 h-6 text-brand-cyan" />
               </div>
               <div className="text-right">
                 <p className="text-[10px] font-bold text-brand-cyan uppercase tracking-widest mb-1">Status</p>
                 <p className="text-xs font-mono">LAB-CORE: ONLINE</p>
               </div>
            </div>
            <div className="space-y-4">
               {[
                 { label: 'Avg Purity', val: '99.64%' },
                 { label: 'Batch Variance', val: '< 0.05%' },
                 { label: 'Active Reports', val: '1,420+' }
               ].map((stat, i) => (
                 <div key={i} className="flex items-center justify-between p-4 glass rounded-2xl border border-white/5">
                    <span className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</span>
                    <span className="text-lg font-bold font-display">{stat.val}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* Verification Portal */}
        <div className="glass-dark rounded-[40px] border border-white/5 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
             <h2 className="text-2xl font-display font-bold">Report Archive</h2>
             <div className="relative group w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-brand-cyan transition-colors" />
                <input
                  type="text"
                  placeholder="Enter Lot # or Product Name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-sm focus:outline-none focus:border-brand-cyan/50 transition-all"
                />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCoas.map((coa, i) => (
              <motion.div
                key={coa.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group glass p-6 rounded-3xl border border-white/10 hover:border-brand-cyan/30 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                   <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-cyan/10 transition-colors">
                     <FileText className="w-6 h-6 text-white/30 group-hover:text-brand-cyan" />
                   </div>
                   <div className="px-3 py-1 bg-brand-cyan/10 rounded-full border border-brand-cyan/20">
                     <span className="text-[10px] font-bold text-brand-cyan">VERIFIED</span>
                   </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 italic">ID: {coa.id}</p>
                    <h3 className="text-lg font-bold truncate group-hover:text-brand-cyan transition-colors">{coa.product}</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/5">
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Purity</p>
                      <p className="text-sm font-mono text-brand-cyan font-bold">{coa.purity}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Method</p>
                      <p className="text-sm font-mono">{coa.method}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-[10px] text-white/30">{coa.date}</p>
                    <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-cyan group-hover:underline">
                      <span>Download</span>
                      <Download className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredCoas.length === 0 && (
            <div className="py-20 text-center">
               <Beaker className="w-12 h-12 text-white/10 mx-auto mb-4" />
               <p className="text-white/40">No reports matching your search parameters.</p>
            </div>
          )}
        </div>

        {/* Documentation Section */}
        <section className="mt-32 py-24 text-center">
           <div className="max-w-3xl mx-auto">
             <h2 className="text-3xl font-display font-bold mb-8">Can't find your batch?</h2>
             <p className="text-white/50 mb-10 leading-relaxed">
               Batch reports are uploaded within 48 hours of laboratory synthesis. If your reference number is currently unavailable, please contact our analytical support team.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 glass hover:bg-white/10 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Request Report</span>
                </button>
                <button className="px-8 py-4 glass hover:bg-white/10 rounded-xl text-sm font-bold uppercase tracking-widest flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span>Laboratory Portal</span>
                </button>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
};

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
);
