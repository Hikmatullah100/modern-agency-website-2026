import React from 'react';
import { Link } from '../context/RouterContext';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'refund' | 'license';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          lastUpdated: 'October 2026',
          sections: [
            {
              heading: '1. Information We Collect & Data Sources',
              text: 'We collect information you directly provide when submitting a project scoping inquiry, subscribing to engineering dispatches, or purchasing digital products from ZOVRA LABS (ZOVRALABS.COM). This includes full name, corporate email address, organization identity, country of residence, project briefs, and technical requirements.',
            },
            {
              heading: '2. Purpose & Legal Basis for Processing',
              text: 'Your information is processed exclusively by our engineering and growth leads to formulate technical proposals, deliver purchased digital ZIP packages, and manage client communications. We do not sell, rent, monetize, or disclose your personal data or project briefs to third-party data brokers.',
            },
            {
              heading: '3. Digital Product Checkout & Transaction Records',
              text: 'During this demonstration phase, transactions operate in demo mode without processing real credit card data. In production, billing data will be handled directly by PCI-DSS Level 1 certified gateways with encrypted tokenization.',
            },
            {
              heading: '4. Confidentiality & Project Brief Protection',
              text: 'We treat all prospective project briefs, architectural outlines, and trade secrets with strict confidentiality. Mutual Non-Disclosure Agreements (NDAs) are routinely executed prior to reviewing proprietary source repositories.',
            },
            {
              heading: '5. Your Rights & Data Retention',
              text: 'You may request an export or complete erasure of your project inquiry history and registered email from our records at any time by contacting our lead engineering team at contact@zovralabs.com.',
            },
          ],
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          lastUpdated: 'October 2026',
          sections: [
            {
              heading: '1. Acceptance of Terms & Agency Scope',
              text: 'By accessing the ZOVRA LABS (ZOVRALABS.COM) platform, inquiring about custom development, or downloading marketplace assets, you agree to comply with and be bound by these Terms of Service.',
            },
            {
              heading: '2. Bespoke Client Engineering Engagements',
              text: 'All custom agency services—including web development, AI workflow automation, social lead generation, and technical SEO campaigns—are executed pursuant to formal Statements of Work (SOWs) and Master Services Agreements (MSAs). Each SOW defines deliverables, milestone acceptance criteria, and revision cycles.',
            },
            {
              heading: '3. Intellectual Property Handover',
              text: 'Upon full payment for completed client engineering milestones, full intellectual property rights, copyright, and source code ownership for custom deliverables transfer unconditionally to the client, subject to standard open-source framework licenses (MIT, Apache 2.0).',
            },
            {
              heading: '4. Digital Marketplace Purchases',
              text: 'All digital templates, design systems, and playbooks purchased from the ZOVRA LABS marketplace are licensed—not sold—under the terms of the ZOVRA LABS Digital Product License Agreement.',
            },
            {
              heading: '5. Limitation of Liability',
              text: 'In no event shall ZOVRA LABS, its founders, or engineering leads be liable for any indirect, incidental, or consequential damages resulting from platform uptime, third-party API deprecations, or search engine algorithm updates.',
            },
          ],
        };
      case 'refund':
        return {
          title: 'Refund & Cancellation Policy',
          lastUpdated: 'October 2026',
          sections: [
            {
              heading: '1. Digital Marketplace Assets',
              text: 'Due to the intangible and irrevocable nature of digital downloads (source code ZIP archives, vector Figma kits, and PDF guides), marketplace sales are generally non-refundable once download links or cloud duplication access have been granted.',
            },
            {
              heading: '2. Corrupt or Defective Asset Guarantee',
              text: 'If a purchased archive is corrupted or contains verifiable technical defects that prevent extraction or build initialization, our engineering team will provide updated replacement source packages within 2 business days.',
            },
            {
              heading: '3. Custom Agency Project Engagements',
              text: 'Custom agency projects are billed against distinct milestone achievements. Payments made toward approved milestones are non-refundable. If an active milestone does not satisfy agreed technical specifications, our leads will execute revisions according to the project SOW.',
            },
            {
              heading: '4. Dispute Resolution & Contact',
              text: 'Before initiating payment disputes, clients and customers are encouraged to reach out to our team at contact@zovralabs.com to resolve technical difficulties or billing inquiries amicably.',
            },
          ],
        };
      case 'license':
      default:
        return {
          title: 'Digital Product License Agreement',
          lastUpdated: 'October 2026',
          sections: [
            {
              heading: '1. Standard Commercial License Grant',
              text: 'Each standard marketplace purchase grants the licensee a non-exclusive, perpetual, worldwide right to use the template, UI components, and codebases in personal and commercial client deployments.',
            },
            {
              heading: '2. Prohibited Redistribution & Resale',
              text: 'You may NOT resell, redistribute, sub-license, bundle, or share raw source code, Figma design files, or playbooks as a standalone digital asset or competing template marketplace product.',
            },
            {
              heading: '3. Agency Multi-Client Deployments',
              text: 'Digital products labeled as "Agency Commercial License" permit unlimited end-client deployments without additional per-project seat fees, provided the underlying source files are not distributed to third parties as uncompiled stock assets.',
            },
            {
              heading: '4. Warranty Disclaimer',
              text: 'All digital templates are provided "as-is" without warranty of any kind. ZOVRA LABS tests codebases on modern LTS runtime environments (Node.js 18+, React 19, Tailwind CSS v4) but does not guarantee compatibility with obsolete third-party libraries.',
            },
          ],
        };
    }
  };

  const { title, lastUpdated, sections } = getContent();

  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left">
        {/* Header */}
        <div className="space-y-3 border-b border-[#232B3E] pb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            Legal &amp; Compliance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
            {title}
          </h1>
          <p className="text-xs text-[#94A3B8]">Official ZOVRA LABS documentation · Last reviewed: {lastUpdated}</p>
        </div>

        {/* Notice */}
        <div className="p-4 rounded-xl bg-[#121620] border border-[#232B3E] flex items-start gap-3 text-xs text-[#94A3B8]">
          <ShieldAlert className="w-4 h-4 text-[#B7F45B] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F8FAFC]">ZOVRA LABS Compliance Note:</strong> This legal document is structured for the ZOVRALABS.COM agency release and should be customized with your organization's specific jurisdiction before commercial deployment.
          </p>
        </div>

        {/* Document Sections */}
        <div className="space-y-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-2">
              <h2 className="text-base font-bold text-[#F8FAFC] font-heading">{sec.heading}</h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{sec.text}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#232B3E] flex flex-wrap gap-4 text-xs text-[#94A3B8]">
          <Link to="/privacy-policy" className="hover:text-[#B7F45B] transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link to="/terms-of-service" className="hover:text-[#B7F45B] transition-colors">Terms of Service</Link>
          <span>·</span>
          <Link to="/refund-policy" className="hover:text-[#B7F45B] transition-colors">Refund Policy</Link>
          <span>·</span>
          <Link to="/digital-product-license" className="hover:text-[#B7F45B] transition-colors">Digital Product License</Link>
        </div>
      </div>
    </div>
  );
};
