import React from 'react';
import { Link } from '../context/RouterContext';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Layers,
  Code2,
  Cpu,
  Search,
  Sparkles,
  Zap,
} from 'lucide-react';
import { ZovraLogo } from '../components/common/ZovraLogo';

export const AboutPage: React.FC = () => {
  const techStack = [
    { category: 'Frontend Architecture', tech: 'React 19, TypeScript, Tailwind CSS v4, Vite' },
    { category: 'AI Integration', tech: 'Gemini API, Webhook Workflows, Prompt Grounding' },
    { category: 'Search & Authority', tech: 'Schema.org JSON-LD, Google Search Console, Ahrefs' },
    { category: 'Automation & Routing', tech: 'Conditional Logic, Webhook Proxies, CRM Pipelines' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Hero */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121620] border border-[#232B3E] text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
          <Sparkles className="w-3.5 h-3.5 text-[#83D9C1]" />
          <span>ZOVRALABS.COM &middot; ABOUT OUR LABS</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          Building Digital Foundations That Drive Measurable Scale
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          <strong className="text-[#F8FAFC]">ZOVRA LABS</strong> (ZOVRALABS.COM) is a high-performance creative digital agency and software laboratory. We engineer bespoke web applications, Answer Engine Optimization (AEO) search strategies, and automated inbound pipelines that transform commercial opportunities into revenue.
        </p>
      </div>

      {/* Two-Pillar Business Model */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 space-y-5 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#181E2C] border border-[#232B3E] flex items-center justify-center text-[#B7F45B]">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#B7F45B] block">Pillar One</span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-1 font-heading">Bespoke Client Agency Engagements</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We partner directly with high-growth businesses to design custom web applications, deploy technical search strategies, and construct automated lead routing systems with zero junior intermediary overhead.
            </p>
            <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F45B] shrink-0" />
                <span>Web Development &amp; Custom AI Stack</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F45B] shrink-0" />
                <span>Social Media Marketing &amp; Content Automation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F45B] shrink-0" />
                <span>Technical SEO, AEO &amp; Entity Optimization</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#232B3E]">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#B7F45B] hover:underline"
            >
              <span>Explore Agency Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 space-y-5 flex flex-col justify-between shadow-xl">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#181E2C] border border-[#232B3E] flex items-center justify-center text-[#83D9C1]">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#83D9C1] block">Pillar Two</span>
              <h3 className="text-2xl font-bold text-[#F8FAFC] mt-1 font-heading">Digital Products Storefront</h3>
            </div>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              We package our internal design tokens, React 19 codebases, Figma component libraries, and AEO guides into commercial digital products available for instant download.
            </p>
            <ul className="space-y-2 text-xs text-[#94A3B8] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#83D9C1] shrink-0" />
                <span>Production React &amp; Tailwind CSS Templates</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#83D9C1] shrink-0" />
                <span>E-books, Manuals &amp; SOW Proposal Kits</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#83D9C1] shrink-0" />
                <span>Commercial Digital Asset Licensing</span>
              </li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#232B3E]">
            <Link
              to="/digital-products"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#83D9C1] hover:underline"
            >
              <span>Explore Digital Products Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            STACK &amp; STANDARDS
          </span>
          <h2 className="text-2xl font-bold text-[#F8FAFC] font-heading">Technical Foundations</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techStack.map((item, idx) => (
            <div key={idx} className="bg-[#181E2C] border border-[#232B3E] rounded-xl p-5 space-y-2">
              <span className="text-[11px] font-bold text-[#83D9C1] block font-heading">{item.category}</span>
              <p className="text-xs font-mono text-[#F8FAFC]">{item.tech}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-2xl">
        <ZovraLogo size="lg" showText={true} showDomain={true} className="justify-center mx-auto" />
        <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] font-heading">
          Ready to Partner with ZOVRA LABS?
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
          Start a project inquiry or contact our engineering leads to discuss your web application, search optimization, or automation scope.
        </p>
        <div className="pt-2">
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shadow-lg shadow-[#8B7CF6]/20 transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
