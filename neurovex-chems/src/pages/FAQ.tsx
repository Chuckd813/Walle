import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Beaker, ShieldCheck, Truck, CreditCard, MessageSquare, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn(
      "glass rounded-3xl border border-white/5 overflow-hidden transition-all duration-300",
      isOpen ? "border-brand-cyan/30 bg-white/10" : "hover:border-white/20"
    )}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between group"
      >
        <span className={cn(
          "font-bold transition-colors",
          isOpen ? "text-brand-cyan" : "text-white group-hover:text-brand-cyan"
        )}>
          {question}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-cyan" /> : <ChevronDown className="w-5 h-5 text-white/30" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-6 pb-6"
          >
            <p className="text-sm text-white/50 leading-relaxed pt-2 border-t border-white/5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const categories = [
    { title: 'Research Compliance', icon: Beaker },
    { title: 'Orders & Shipping', icon: Truck },
    { title: 'Documentation', icon: ShieldCheck },
    { title: 'Support & Billing', icon: CreditCard }
  ];

  const faqs = [
    {
      cat: 'Research Compliance',
      q: 'What does "Research Use Only" strictly mean?',
      a: 'It denotes that the compound is intended solely for laboratory experiments, in-vitro studies, or chemical analysis. These products are not manufactured for human intake, pharmacological treatment, or personal supplementation.'
    },
    {
      cat: 'Research Compliance',
      q: 'Do you provide dosing guidance?',
      a: 'Absolutely not. Providing dosing instructions for research compounds is outside the scope of our operations and would violate our compliance protocols. Please refer to established scientific literature for research methodologies.'
    },
    {
      cat: 'Orders & Shipping',
      q: 'Is your packaging discreet for laboratory privacy?',
      a: 'Yes. All shipments are dispatched in professional, neutral packaging to ensure privacy and secure transit to your research facility.'
    },
    {
      cat: 'Orders & Shipping',
      q: 'How long does fulfillment take?',
      a: 'Standard fulfillment window is 24-48 hours post-synthesis verification. Domestic transit usually takes 3-5 business days depending on the selected carrier.'
    },
    {
      cat: 'Documentation',
      q: 'Where can I access the COA for my specific batch?',
      a: 'Visit our Verification Portal and enter the Lot Number found on your product vial. This will provide a downloadable HPLC-MS report for that specific synthesis batch.'
    },
    {
      cat: 'Support & Billing',
      q: 'What payment methods do you accept?',
      a: 'We accept a variety of secure payment methods including major credit institutions and cryptocurrency for institutional privacy. All transactions are encrypted.'
    },
  ];

  const [activeCat, setActiveCat] = useState('Research Compliance');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <HelpCircle className="w-16 h-16 text-brand-violet mx-auto mb-8 animate-pulse" />
          <h1 className="text-4xl md:text-7xl font-display font-bold text-white tracking-tight mb-6">
             Information <span className="text-white/40 italic">& FAQ</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto italic leading-relaxed">
            Technical guidance and institutional protocols. Learn about our synthesis standards and logistical systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           {/* Sidebar */}
           <div className="lg:col-span-1 space-y-4">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-6 pl-2">Inquiry Categories</p>
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => setActiveCat(cat.title)}
                  className={cn(
                    "w-full flex items-center space-x-4 p-5 rounded-2xl border transition-all text-left",
                    activeCat === cat.title ? "bg-brand-cyan text-brand-black border-brand-cyan font-bold" : "bg-white/5 text-white/50 border-white/5 hover:bg-white/10"
                  )}
                >
                  <cat.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm tracking-wide">{cat.title}</span>
                </button>
              ))}
           </div>

           {/* Content */}
           <div className="lg:col-span-3">
              <div className="space-y-6">
                {faqs.filter(f => f.cat === activeCat).map((faq, i) => (
                  <FAQItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
              
              {/* Help Box */}
              <div className="mt-12 glass p-10 rounded-[40px] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center flex-shrink-0 border border-brand-cyan/20">
                      <MessageSquare className="w-6 h-6 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">Still need technical support?</h4>
                      <p className="text-sm text-white/50 leading-relaxed">Our support administrators are available for complex institutional inquiries.</p>
                    </div>
                 </div>
                 <Link to="/wholesale" className="px-10 py-5 bg-white text-brand-black font-bold rounded-2xl hover:bg-brand-cyan transition-all flex items-center justify-center shadow-glow-cyan">
                    Contact Support
                 </Link>
              </div>
           </div>
        </div>

        {/* Legal Banner */}
        <div className="mt-32 p-8 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-center">
           <div className="flex items-center space-x-4">
              <Info className="w-5 h-5 text-white/20" />
              <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold italic">
                Regulatory Notice: The information provided above is for logistical orientation and does not constitute medical or therapeutic advice.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};
