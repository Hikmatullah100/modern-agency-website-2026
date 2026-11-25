import React from 'react';
import { Link } from '../context/RouterContext';
import { allServices, serviceCategories } from '../data/servicesData';
import { portfolioProjects } from '../data/projectsData';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Layers,
  Sparkles,
  AlertTriangle,
  FileCode,
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceSlug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ serviceSlug }) => {
  const service = allServices.find((s) => s.slug === serviceSlug);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Service Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The requested service specification could not be located.</p>
        <Link to="/services" className="text-xs font-semibold text-[#B7F45B] underline">
          View all services &rarr;
        </Link>
      </div>
    );
  }

  const relatedProjects = portfolioProjects.slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Hero Section */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 lg:p-14 space-y-6 shadow-xl">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            {service.categoryTitle}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
            {service.heroHeadline}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {service.shortDescription}
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center gap-4">
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-sm tracking-tight shadow-lg shadow-[#8B7CF6]/20 transition-all"
          >
            <span>Inquire About {service.title}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.2]" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] text-[#F8FAFC] font-semibold text-sm transition-all"
          >
            <span>Ask a Technical Question</span>
          </Link>
        </div>
      </div>

      {/* 2-Column: Business Problems Solved & Scope */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Business Problems Addressed */}
        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-5 shadow-md">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-[#B7F45B]" />
            <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">Business Problems Solved</h2>
          </div>
          <p className="text-xs text-[#94A3B8]">
            We build solutions aimed directly at eliminating commercial bottlenecks and operational inefficiencies:
          </p>
          <ul className="space-y-3">
            {service.businessProblems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B7F45B] shrink-0 mt-2" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Scope of Engagement */}
        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-5 shadow-md">
          <div className="flex items-center gap-2.5">
            <Layers className="w-5 h-5 text-[#83D9C1]" />
            <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">Scope of Engagement</h2>
          </div>
          <p className="text-xs text-[#94A3B8]">
            Every engagement follows a structured statement of work with distinct work streams:
          </p>
          <ul className="space-y-3">
            {service.scope.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#83D9C1] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Deliverables & Technology Stack */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            TANGIBLE HANDOVER
          </span>
          <h2 className="text-2xl font-bold text-[#F8FAFC] mt-1 font-heading">Verified Deliverables</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.deliverables.map((deliv, idx) => (
            <div
              key={idx}
              className="bg-[#181E2C] border border-[#232B3E] rounded-xl p-5 space-y-2"
            >
              <span className="text-[11px] font-mono text-[#83D9C1]">Deliverable 0{idx + 1}</span>
              <p className="text-xs sm:text-sm font-semibold text-[#F8FAFC]">{deliv}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#232B3E] flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold text-[#94A3B8]">Standard Stack / Tools:</span>
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-[#181E2C] border border-[#232B3E] text-xs font-mono text-[#B7F45B]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            METHODOLOGY
          </span>
          <h2 className="text-2xl font-bold text-[#F8FAFC] mt-1 font-heading">How ZOVRA Executes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.process.map((step) => (
            <div
              key={step.step}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 space-y-3"
            >
              <span className="text-xs font-mono font-bold text-[#B7F45B]">{step.step}</span>
              <h3 className="text-base font-bold text-[#F8FAFC] font-heading">{step.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Related Case Studies */}
      <div className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#232B3E] pb-3">
          <div>
            <h2 className="text-xl font-bold text-[#F8FAFC] font-heading">Related Work &amp; Case Studies</h2>
            <p className="text-xs text-[#94A3B8]">Sample demonstration projects showcasing this technical stack.</p>
          </div>
          <Link to="/work" className="text-xs font-semibold text-[#B7F45B] hover:underline">
            View All Work &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedProjects.map((proj) => (
            <Link
              key={proj.id}
              to={`/work/${proj.slug}`}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B7CF6]/50 transition-colors group"
            >
              <div className="space-y-2">
                <span className="text-[11px] text-[#83D9C1] font-medium">{proj.category}</span>
                <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors font-heading">
                  {proj.title}
                </h3>
                <p className="text-xs text-[#94A3B8] line-clamp-2">{proj.summary}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#232B3E] flex items-center justify-between text-xs text-[#B7F45B] font-semibold">
                <span>Inspect Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      {service.faqs && service.faqs.length > 0 && (
        <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              CLARITY
            </span>
            <h2 className="text-2xl font-bold text-[#F8FAFC] mt-1 font-heading">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#181E2C] border border-[#232B3E] rounded-xl p-5 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#83D9C1] shrink-0" />
                  <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">{faq.question}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Project CTA Bar */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 text-center space-y-5 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] font-heading">
          Ready to Discuss Your {service.title} Project?
        </h3>
        <p className="text-xs sm:text-sm text-[#94A3B8] max-w-xl mx-auto">
          Share your timeline, target deliverables, and requirements. ZOVRA LABS responds within 24 hours with a scoped technical recommendation.
        </p>
        <div>
          <Link
            to="/start-a-project"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-sm tracking-tight shadow-lg shadow-[#8B7CF6]/20 transition-all"
          >
            <span>Start a Project with ZOVRA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
