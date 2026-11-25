import React from 'react';
import { Link } from '../context/RouterContext';
import { teamMembers } from '../data/teamData';
import { ArrowRight, CheckCircle2, ChevronRight, User } from 'lucide-react';

export const TeamPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
          ZOVRA TEAM
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          Core Leadership &amp; Engineering Leads
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          At ZOVRA LABS, client projects are led directly by principal specialists in full-stack architecture, automated lead pipelines, and technical search authority.
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 flex flex-col justify-between hover:border-[#8B7CF6]/50 transition-colors group shadow-xl"
          >
            <div className="space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#8B7CF6] via-[#83D9C1] to-[#B7F45B] p-0.5 flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-[#121620] rounded-[14px] flex items-center justify-center text-xl font-black text-[#B7F45B] font-heading">
                  {member.initials}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors font-heading">
                  {member.name}
                </h2>
                <p className="text-xs text-[#83D9C1] font-semibold mt-1">{member.role}</p>
              </div>

              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {member.shortBio}
              </p>

              <div className="pt-2 space-y-2 border-t border-[#232B3E]">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#F8FAFC] block font-heading">
                  Core Specializations:
                </span>
                <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                  {member.focusAreas.slice(0, 3).map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7F45B]" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#232B3E]">
              <Link
                to={`/team/${member.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline"
              >
                <span>Read Full Bio &amp; Competencies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
