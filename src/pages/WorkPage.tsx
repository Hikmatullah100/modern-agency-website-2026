import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { portfolioProjects, portfolioCategories } from '../data/projectsData';
import { ArrowRight, Filter, Layers, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

interface WorkPageProps {
  isCaseStudiesOnly?: boolean;
}

export const WorkPage: React.FC<WorkPageProps> = ({ isCaseStudiesOnly = false }) => {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'all' | 'case-studies'>(
    isCaseStudiesOnly ? 'case-studies' : 'all'
  );

  let filteredProjects = portfolioProjects;

  if (viewMode === 'case-studies') {
    filteredProjects = filteredProjects.filter((p) => p.featured || p.results);
  }

  if (activeCategory !== 'all') {
    filteredProjects = filteredProjects.filter((p) => p.categorySlug === activeCategory);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              ZOVRA PORTFOLIO
            </span>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#121620] border border-[#232B3E] text-[#83D9C1]">
              PROOF OF EXECUTION
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
            {viewMode === 'case-studies' ? 'In-Depth Case Studies' : 'Selected Projects & Case Studies'}
          </h1>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            Explore architectural blueprints, technical challenges, and verified execution methodologies across web applications, automated lead pipelines, and Answer Engine Optimization (AEO).
          </p>
        </div>

        {/* View Mode Segmented Control */}
        <div className="p-1 rounded-xl bg-[#121620] border border-[#232B3E] flex items-center gap-1 self-start md:self-auto shrink-0">
          <button
            type="button"
            onClick={() => {
              setViewMode('all');
              navigate('/work');
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              viewMode === 'all'
                ? 'bg-[#8B7CF6] text-white shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            All Work ({portfolioProjects.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setViewMode('case-studies');
              navigate('/work/case-studies');
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
              viewMode === 'case-studies'
                ? 'bg-[#8B7CF6] text-white shadow-sm'
                : 'text-[#94A3B8] hover:text-[#F8FAFC]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Case Studies Only</span>
          </button>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#232B3E]">
        {portfolioCategories.map((cat) => (
          <button
            key={cat.slug}
            type="button"
            onClick={() => setActiveCategory(cat.slug)}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.slug
                ? 'bg-[#B7F45B] text-[#0B0D12] shadow-md shadow-[#B7F45B]/20'
                : 'bg-[#121620] text-[#94A3B8] border border-[#232B3E] hover:text-[#F8FAFC] hover:border-[#8B7CF6]'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#121620] border border-[#232B3E] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#8B7CF6]/50 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0D12]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0B0D12]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#83D9C1] border border-[#232B3E]">
                  {project.category}
                </div>
              </div>

              <div className="p-6 space-y-3">
                <Link
                  to={`/work/${project.slug}`}
                  className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors block font-heading"
                >
                  {project.title}
                </Link>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-[#232B3E] mt-4 pt-4 flex items-center justify-between">
              <span className="text-xs text-[#83D9C1] font-mono">
                {project.results?.[1]?.metric || '<180ms Latency'}
              </span>
              <Link
                to={`/work/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline"
              >
                <span>Inspect Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#F8FAFC] font-heading">Have a Similar Project Scope?</h3>
          <p className="text-xs text-[#94A3B8]">Let ZOVRA LABS design, engineer, and deploy your digital platform.</p>
        </div>
        <Link
          to="/start-a-project"
          className="px-6 py-3.5 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shrink-0 shadow-lg shadow-[#8B7CF6]/20"
        >
          Start a Project with ZOVRA &rarr;
        </Link>
      </div>
    </div>
  );
};
