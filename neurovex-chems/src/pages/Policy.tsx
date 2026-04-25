import React from 'react';
import { Shield, Truck, RefreshCcw, Lock, FileText, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const PolicyLayout: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const currentPath = useLocation().pathname;
  
  const policies = [
    { name: 'Shipping Policy', path: '/shipping', icon: Truck },
    { name: 'Returns & Refunds', path: '/returns', icon: RefreshCcw },
    { name: 'Privacy Policy', path: '/privacy', icon: Lock },
    { name: 'Terms of Service', path: '/terms', icon: FileText },
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-display font-bold mb-8">Directives</h2>
            <div className="space-y-2">
              {policies.map((policy) => (
                <Link
                  key={policy.path}
                  to={policy.path}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${
                    currentPath === policy.path
                      ? 'bg-brand-cyan text-brand-black border-brand-cyan font-bold'
                      : 'bg-white/5 text-white/50 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <policy.icon className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">{policy.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            <div className="glass-dark rounded-[40px] border border-white/5 p-8 md:p-16">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-10">{title}</h1>
              <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-6">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ShippingPolicy = () => (
  <PolicyLayout title="Shipping & Logistics">
    <p>Neurovex Chems utilizes secure logistical protocols to ensure the integrity of research compounds during transit. Our fulfillment system is designed for professional laboratory requirements.</p>
    <h3 className="text-white font-bold text-xl mt-8">Fulfillment Window</h3>
    <p>Standard synthesis verification and packaging require 24-48 business hours. Orders are prepared in sterile environments and dispatched from our primary distribution hubs.</p>
    <h3 className="text-white font-bold text-xl mt-8">Transit & Tracking</h3>
    <p>All laboratory supplies are shipped via priority carriers with end-to-end tracking. Expected transit times are 3-5 business days for domestic destinations.</p>
    <h3 className="text-white font-bold text-xl mt-8">Neutral Packaging</h3>
    <p>To ensure privacy and professional handling, all items are shipped in neutral, industrial-grade packaging without branding or sensitive labeling on the exterior.</p>
  </PolicyLayout>
);

export const ReturnPolicy = () => (
  <PolicyLayout title="Returns & Analytical Discrepancies">
    <p>Due to the sensitive nature of research compounds and the risk of contamination, we maintain a strict return policy to ensure laboratory integrity.</p>
    <h3 className="text-white font-bold text-xl mt-8">Damaged Goods</h3>
    <p>If a product vial or container arrives with compromised structural integrity, please document the damage via photography and contact our laboratory administration immediately.</p>
    <h3 className="text-white font-bold text-xl mt-8">Analytical Variance</h3>
    <p>If your third-party analysis shows a discrepancy of &gt;1% from our published COA, we will initiate an institutional review of the batch and provide a replacement or credit.</p>
  </PolicyLayout>
);

export const PrivacyPolicy = () => (
  <PolicyLayout title="Data Integrity & Privacy">
    <p>Neurovex Chems implements high-level encryption for all institutional and personal data. We prioritize the anonymity of our research partners.</p>
    <h3 className="text-white font-bold text-xl mt-8">Information Shielding</h3>
    <p>We do not share researcher data with third-party marketing entities. Information is collected solely for logistical fulfillment and internal synthesis documentation.</p>
    <h3 className="text-white font-bold text-xl mt-8">Secure Transactions</h3>
    <p>Financial interactions are handled through encrypted gateways. We recommend the use of decentralized protocols for maximum transactional privacy.</p>
  </PolicyLayout>
);

export const TermsOfService = () => (
  <PolicyLayout title="Terms of Acquisition">
    <p>By acquiring compounds from Neurovex Chems, you acknowledge and agree to the following scientific and legal protocols.</p>
    <h3 className="text-white font-bold text-xl mt-8">Research Mandate</h3>
    <p>The purchaser warrants that they are a qualified researcher and that products will be used solely for laboratory and analytical purposes. Unauthorized use is strictly prohibited.</p>
    <h3 className="text-white font-bold text-xl mt-8">Indemnification</h3>
    <p>The researcher assumes all risks associated with the handling and investigation of biochemical agents and agrees to indemnify Neurovex Chems from any liability arising from use.</p>
  </PolicyLayout>
);
