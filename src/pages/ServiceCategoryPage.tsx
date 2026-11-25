import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { serviceCategories } from '../data/servicesData';
import { ArrowRight, CheckCircle2, ChevronRight, Code2, Share2, TrendingUp } from 'lucide-react';

interface ServiceCategoryPageProps {
  categorySlug: string;
}

export const ServiceCategoryPage: React.FC<ServiceCategoryPageProps> = ({ categorySlug }) => {
  const category = serviceCategories.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Category Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The requested service category does not exist.</p>
        <Link to="/services" className="text-xs font-semibold text-[#B7F45B] underline">
          Back to all services &rarr;
        </Link>
      </div>
    );
  }

  const getIcon = () => {
    switch (category.id) {
      case 'web-development-ai':
        return <Code2 className="w-8 h-8 text-[#B7F45B]" />;
      case 'social-media-ai':
        return <Share2 className="w-8 h-8 text-[#83D9C1]" />;
      case 'seo-aeo-growth':
      default:
        return <TrendingUp className="w-8 h-8 text-[#8B7CF6]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Category Hero */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 lg:p-14 space-y-6 shadow-xl">
        <div className="w-16 h-16 rounded-2xl bg-[#181E2C] border border-[#232B3E] flex items-center justify-center">
          {getIcon()}
        </div>

        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            PRACTICE DIVISION
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
            {category.title}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="pt-4 flex flex-wrap gap-4">
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shadow-lg shadow-[#8B7CF6]/20 transition-all"
          >
            <span>Inquire About {category.title}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] text-[#F8FAFC] text-xs font-semibold transition-all"
          >
            <span>View Related Case Studies</span>
          </Link>
        </div>
      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <div className="border-b border-[#232B3E] pb-4">
          <h2 className="text-xl font-bold text-[#F8FAFC] font-heading">
            Included Practice Capabilities ({category.services.length})
          </h2>
          <p className="text-xs text-[#94A3B8] mt-1">
            Detailed deliverables and engineering specifications across this division.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service) => (
            <div
              key={service.id}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B7CF6]/50 transition-all group"
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors font-heading">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#232B3E]">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#83D9C1]">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((deliv, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B7F45B] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#232B3E] flex items-center justify-between">
                <Link
                  to={`/services/${category.slug}/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline"
                >
                  <span>Explore Service Specification</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
