import React from 'react';
import { Link } from '../context/RouterContext';
import { portfolioProjects } from '../data/projectsData';
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Cpu,
  Layers,
  ArrowUpRight,
  Target,
  Clock,
  Sparkles,
} from 'lucide-react';

interface CaseStudyDetailPageProps {
  projectSlug: string;
}

export const CaseStudyDetailPage: React.FC<CaseStudyDetailPageProps> = ({ projectSlug }) => {
  const project = portfolioProjects.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Case Study Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The requested case study could not be found.</p>
        <Link to="/work" className="text-xs font-semibold text-[#B7F45B] underline">
          Back to all work &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Case Study Hero */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            {project.category}
          </span>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#121620] border border-[#232B3E] text-[#83D9C1]">
            Industry: {project.clientIndustry}
          </span>
          {project.isDemoSample && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#181E2C] border border-[#8B7CF6]/40 text-[#8B7CF6]">
              Demonstration Study
            </span>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {project.summary}
        </p>

        {/* Featured Banner Image */}
        <div className="rounded-2xl overflow-hidden border border-[#232B3E] bg-[#121620] shadow-2xl relative aspect-[16/9]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Challenge & Objectives Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#B7F45B]">
            <AlertTriangle className="w-5 h-5" />
            <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">The Challenge</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {project.challenge}
          </p>
        </div>

        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-4">
          <div className="flex items-center gap-2 text-[#83D9C1]">
            <Target className="w-5 h-5" />
            <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">Key Objectives</h2>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-[#94A3B8]">
            {(project.objectives || []).map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#83D9C1] shrink-0 mt-0.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategy & Deliverables */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            ZOVRA SOLUTION ARCHITECTURE
          </span>
          <h2 className="text-2xl font-bold text-[#F8FAFC] font-heading">Technical Strategy</h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {project.strategy}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">Engineering Deliverables:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs font-semibold text-[#F8FAFC] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F45B]" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#232B3E] flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-[#94A3B8]">Technology Stack:</span>
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 rounded-md bg-[#181E2C] border border-[#232B3E] text-xs font-mono text-[#B7F45B]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#F8FAFC] font-heading">Need a Similar Solution Built?</h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto">
          Contact ZOVRA LABS to scope custom web applications, AI automation pipelines, or search infrastructure.
        </p>
        <Link
          to="/start-a-project"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs"
        >
          <span>Start a Project with ZOVRA</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
