import React from 'react';
import { Link } from '../context/RouterContext';
import { teamMembers } from '../data/teamData';
import { blogPosts } from '../data/blogData';
import { ArrowRight, ChevronRight, CheckCircle2, Quote, ArrowLeft, BookOpen, Layers } from 'lucide-react';

interface TeamMemberPageProps {
  memberSlug: string;
}

export const TeamMemberPage: React.FC<TeamMemberPageProps> = ({ memberSlug }) => {
  const member = teamMembers.find((m) => m.slug === memberSlug);

  if (!member) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Team Member Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The requested team member profile could not be found.</p>
        <Link to="/team" className="text-xs font-semibold text-[#B7F45B] underline">
          Back to team list &rarr;
        </Link>
      </div>
    );
  }

  // Determine practice group linkage based on member
  const getPracticeGroup = () => {
    if (member.slug === 'hikmat-ullah') {
      return {
        title: 'Web Development & AI Stack',
        path: '/services/web-development-ai',
        description: 'Directing full-stack web applications, AI model integrations, and performance engineering.',
      };
    }
    if (member.slug === 'rao-abdul-rehman') {
      return {
        title: 'Social Media Marketing & AI',
        path: '/services/social-media-ai',
        description: 'Architecting automated lead qualification engines, content automation, and pipeline integration.',
      };
    }
    return {
      title: 'SEO, AEO & Growth Analytics',
      path: '/services/seo-aeo-growth',
      description: 'Leading technical search audits, Answer Engine Optimization (AEO), and high-authority link acquisition.',
    };
  };

  const practiceGroup = getPracticeGroup();
  const authoredPosts = blogPosts.filter((p) => p.author.toLowerCase() === member.name.toLowerCase());

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header Profile Box */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8B7CF6] via-[#83D9C1] to-[#B7F45B] p-0.5 flex items-center justify-center shrink-0">
            <div className="w-full h-full bg-[#121620] rounded-[14px] flex items-center justify-center text-2xl font-black text-[#B7F45B] font-heading">
              {member.initials}
            </div>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] font-heading">{member.name}</h1>
            <p className="text-xs sm:text-sm font-semibold text-[#83D9C1] mt-1">{member.role}</p>
            <span className="text-[11px] font-mono text-[#94A3B8] block mt-1">ZOVRA LABS Leadership Lead</span>
          </div>
        </div>

        <p className="text-sm text-[#94A3B8] leading-relaxed">
          {member.shortBio}
        </p>

        {member.quote && (
          <div className="p-4 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs text-[#F8FAFC] italic flex items-start gap-3">
            <Quote className="w-5 h-5 text-[#B7F45B] shrink-0 mt-0.5" />
            <p>&ldquo;{member.quote}&rdquo;</p>
          </div>
        )}
      </div>

      {/* Full Bio & Core Competencies */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-4">
          <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">Background &amp; Philosophy</h2>
          <div className="space-y-3 text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {member.fullBio.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        <div className="md:col-span-1 bg-[#121620] border border-[#232B3E] rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">Core Competencies</h3>
          <div className="flex flex-wrap gap-2">
            {member.keyCompetencies.map((comp) => (
              <span key={comp} className="px-2.5 py-1 rounded-md bg-[#181E2C] border border-[#232B3E] text-xs font-mono text-[#B7F45B]">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Practice Group Linkage */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">PRACTICE DIVISION LEAD</span>
        <h2 className="text-xl font-bold text-[#F8FAFC] font-heading">{practiceGroup.title}</h2>
        <p className="text-xs text-[#94A3B8]">{practiceGroup.description}</p>
        <Link
          to={practiceGroup.path}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline pt-2"
        >
          <span>Explore Practice Division &rarr;</span>
        </Link>
      </div>
    </div>
  );
};
