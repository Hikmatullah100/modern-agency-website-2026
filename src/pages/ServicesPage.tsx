import React from 'react';
import { Link } from '../context/RouterContext';
import { serviceCategories } from '../data/servicesData';
import { ArrowRight, Code2, Share2, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'web-development-ai':
        return <Code2 className="w-6 h-6 text-[#B7F45B]" />;
      case 'social-media-ai':
        return <Share2 className="w-6 h-6 text-[#83D9C1]" />;
      case 'seo-aeo-growth':
      default:
        return <TrendingUp className="w-6 h-6 text-[#8B7CF6]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-20 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
          ZOVRA CAPABILITIES
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          Comprehensive Services for Modern Digital Dominance
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          From architectural web engineering and AI integration to multi-channel social distribution and Answer Engine Optimization (AEO), explore ZOVRA LABS&apos; 3 core divisions and 25 specialized deliverables.
        </p>
      </div>

      {/* 3 Major Category Pillars */}
      <div className="space-y-16">
        {serviceCategories.map((category) => (
          <div
            key={category.id}
            className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#232B3E]">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#181E2C] border border-[#232B3E] flex items-center justify-center shrink-0">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#F8FAFC] font-heading">{category.title}</h2>
                  <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">{category.tagline}</p>
                </div>
              </div>

              <Link
                to={`/services/${category.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] text-xs font-bold text-[#B7F45B] shrink-0"
              >
                <span>Category Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#181E2C] border border-[#232B3E] rounded-xl p-6 flex flex-col justify-between hover:border-[#8B7CF6]/50 transition-colors group"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors font-heading">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <div className="pt-2 space-y-1">
                      {service.deliverables.slice(0, 2).map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-[#94A3B8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#83D9C1] shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-[#232B3E]">
                    <Link
                      to={`/services/${category.slug}/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F8FAFC] group-hover:text-[#B7F45B]"
                    >
                      <span>Explore Scope &amp; Deliverables</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scoping CTA */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">Need a Custom Technical Combination?</h3>
          <p className="text-xs text-[#94A3B8]">We engineer tailored web solutions, LLM workflows, and growth pipelines.</p>
        </div>
        <Link
          to="/start-a-project"
          className="px-6 py-3 rounded-lg bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shrink-0 shadow-lg shadow-[#8B7CF6]/20"
        >
          Start a Project with ZOVRA LABS &rarr;
        </Link>
      </div>
    </div>
  );
};
