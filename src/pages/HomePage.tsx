import React from 'react';
import { Link } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { serviceCategories } from '../data/servicesData';
import { digitalProducts } from '../data/productsData';
import { portfolioProjects } from '../data/projectsData';
import { teamMembers } from '../data/teamData';
import { blogPosts } from '../data/blogData';
import { ZovraLogo } from '../components/common/ZovraLogo';
import { ProductCard } from '../components/products/ProductCard';
import {
  ArrowRight,
  Code2,
  Share2,
  TrendingUp,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  ShoppingBag,
  ExternalLink,
  ShieldCheck,
  Zap,
  Flame,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { addItem } = useCart();
  const featuredProducts = digitalProducts.filter((p) => p.featured).slice(0, 4);
  const featuredWork = portfolioProjects.filter((p) => p.featured).slice(0, 3);
  const recentArticles = blogPosts.slice(0, 3);

  const getServiceIcon = (id: string) => {
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

  const processSteps = [
    { num: '01', title: 'Discover', desc: 'Deep dive into your product, market positioning, and growth trajectories.' },
    { num: '02', title: 'Research', desc: 'Competitor gap analysis, technical audits, and entity-level search mapping.' },
    { num: '03', title: 'Strategize', desc: 'Defining explicit architectural scopes, keyword clusters, and automation paths.' },
    { num: '04', title: 'Design', desc: 'Crafting accessible UI systems, responsive frames, and brand tokens in Figma.' },
    { num: '05', title: 'Build', desc: 'Writing clean TypeScript, performant React components, and serverless endpoints.' },
    { num: '06', title: 'Optimize', desc: 'Schema validation, Core Web Vitals tuning, and AEO answer engine calibration.' },
    { num: '07', title: 'Automate', desc: 'Connecting webhooks, lead scoring routines, and programmatic LLM workflows.' },
    { num: '08', title: 'Measure', desc: 'Attribution modeling, conversion analytics, and iterative growth scaling.' },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* A. Hero Section with ZOVRA Ethereal Gradient Glow */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden border-b border-[#232B3E]">
        {/* Background Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, rgba(139,124,246,0.18) 0%, rgba(183,244,91,0.1) 35%, rgba(131,217,193,0.05) 60%, transparent 80%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121620] border border-[#232B3E] text-xs font-bold uppercase tracking-widest text-[#B7F45B] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#B7F45B] animate-pulse" />
                <span>ZOVRALABS.COM &middot; CREATIVE DIGITAL AGENCY</span>
              </div>

              <h1 className="text-[38px] sm:text-5xl lg:text-[62px] font-black text-[#F8FAFC] tracking-tight leading-[1.02] text-balance font-heading">
                Build. Rank. <br />
                <span className="text-gradient-zovra">
                  Automate. Scale.
                </span>
              </h1>

              <p className="text-[15px] sm:text-[18px] text-[#94A3B8] leading-[1.6] max-w-xl">
                <strong className="text-[#F8FAFC]">ZOVRA LABS</strong> combines high-performance web development, AI automation workflows, digital marketing, and Answer Engine Optimization (AEO) to engineer market-dominant digital experiences.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-[8px] bg-[#8B7CF6] hover:bg-[#7664F4] border border-[#8B7CF6] text-white font-bold text-sm sm:text-[15px] tracking-tight transition-all duration-300 shadow-xl shadow-[#8B7CF6]/25 hover:shadow-[#B7F45B]/20 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Start a Project with ZOVRA</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[8px] bg-[#121620] hover:bg-[#181E2C] border border-[#232B3E] hover:border-[#B7F45B] text-[#F8FAFC] hover:text-[#B7F45B] font-bold text-sm sm:text-[15px] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Explore Capabilities</span>
                </Link>
              </div>

              {/* Verified Trust Marker */}
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#94A3B8]">
                <CheckCircle2 className="w-4 h-4 text-[#83D9C1] shrink-0" />
                <span>Guaranteed Production Performance &middot; Full Source Code Delivery</span>
              </div>
            </div>

            {/* Right Showcase Banner (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-[#121620] border border-[#232B3E] p-6 shadow-2xl shadow-black/80 space-y-6 glow-violet">
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[#232B3E] pb-4">
                  <ZovraLogo size="sm" showText={true} />
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#181E2C] text-[#83D9C1] border border-[#232B3E]">
                    SYSTEM ACTIVE
                  </span>
                </div>

                {/* Hero Showcase Image */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0B0D12] border border-[#232B3E] group">
                  <img
                    src="/src/assets/images/project_saas_dashboard_1792998376013.jpg"
                    alt="ZOVRA LABS Digital Architecture Showcase"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D12] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F8FAFC] font-semibold">
                    <span>Lumina AI Platform</span>
                    <span className="text-[#B7F45B] font-mono text-[11px]">&lt;180ms Latency</span>
                  </div>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 text-center pt-1">
                  <div className="p-2.5 rounded-lg bg-[#181E2C] border border-[#232B3E]">
                    <div className="text-sm font-extrabold text-[#B7F45B] font-heading">100%</div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">Core Vitals</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181E2C] border border-[#232B3E]">
                    <div className="text-sm font-extrabold text-[#83D9C1] font-heading">3.8x</div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">AEO Citations</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#181E2C] border border-[#232B3E]">
                    <div className="text-sm font-extrabold text-[#8B7CF6] font-heading">24/7</div>
                    <div className="text-[10px] text-[#94A3B8] uppercase tracking-wider font-semibold">Automated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B. Core Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#232B3E] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
              Engineered Services Built for Measurable Impact
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:text-[#83D9C1] hover:underline"
          >
            <span>Explore All Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {serviceCategories.map((category) => {
            const theme = (() => {
              switch (category.id) {
                case 'web-development-ai':
                  return {
                    icon: <Code2 className="w-6 h-6 text-[#B7F45B]" />,
                    iconBorder: 'border-[#B7F45B]/30',
                    cardHoverBorder: 'hover:border-[#B7F45B]/50',
                    hoverTitle: 'group-hover:text-[#B7F45B]',
                    badge: 'bg-[#B7F45B]/10 text-[#B7F45B] border-[#B7F45B]/30',
                    dot: 'bg-[#B7F45B]',
                    accentText: 'text-[#B7F45B]',
                    hoverText: 'group-hover/item:text-[#B7F45B]',
                    hoverItemBorder: 'hover:border-[#B7F45B]/50',
                    linkHover: 'hover:text-[#83D9C1]',
                    badgeLabel: '5 Core Stacks',
                  };
                case 'social-media-ai':
                  return {
                    icon: <Share2 className="w-6 h-6 text-[#83D9C1]" />,
                    iconBorder: 'border-[#83D9C1]/30',
                    cardHoverBorder: 'hover:border-[#83D9C1]/50',
                    hoverTitle: 'group-hover:text-[#83D9C1]',
                    badge: 'bg-[#83D9C1]/10 text-[#83D9C1] border-[#83D9C1]/30',
                    dot: 'bg-[#83D9C1]',
                    accentText: 'text-[#83D9C1]',
                    hoverText: 'group-hover/item:text-[#83D9C1]',
                    hoverItemBorder: 'hover:border-[#83D9C1]/50',
                    linkHover: 'hover:text-[#B7F45B]',
                    badgeLabel: '7 Specializations',
                  };
                case 'seo-aeo-growth':
                default:
                  return {
                    icon: <TrendingUp className="w-6 h-6 text-[#8B7CF6]" />,
                    iconBorder: 'border-[#8B7CF6]/30',
                    cardHoverBorder: 'hover:border-[#8B7CF6]/50',
                    hoverTitle: 'group-hover:text-[#8B7CF6]',
                    badge: 'bg-[#8B7CF6]/10 text-[#8B7CF6] border-[#8B7CF6]/30',
                    dot: 'bg-[#8B7CF6]',
                    accentText: 'text-[#8B7CF6]',
                    hoverText: 'group-hover/item:text-[#8B7CF6]',
                    hoverItemBorder: 'hover:border-[#8B7CF6]/50',
                    linkHover: 'hover:text-[#83D9C1]',
                    badgeLabel: '13 Specializations',
                  };
              }
            })();

            return (
              <div
                key={category.id}
                className={`bg-[#121620] border border-[#232B3E] rounded-2xl p-6 lg:p-7 flex flex-col justify-between group ${theme.cardHoverBorder} transition-all duration-300 hover:-translate-y-1 shadow-lg`}
              >
                <div className="space-y-5">
                  {/* Card Header: Icon & Category Count Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-[#181E2C] border ${theme.iconBorder} flex items-center justify-center shrink-0 shadow-inner`}>
                      {theme.icon}
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${theme.badge}`}>
                      {theme.badgeLabel}
                    </span>
                  </div>

                  {/* Title & Description with balanced vertical cadence */}
                  <div className="space-y-2">
                    <h3 className={`text-xl font-bold text-[#F8FAFC] font-heading ${theme.hoverTitle} transition-colors min-h-[3rem] flex items-center`}>
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed min-h-[3.5rem] line-clamp-3">
                      {category.description}
                    </p>
                  </div>

                  {/* Service List Header */}
                  <div className="pt-3 border-t border-[#232B3E] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    <span>Capabilities &amp; Scope</span>
                    <span className="text-[10px] font-semibold text-[#94A3B8] normal-case tracking-normal">
                      {category.services.length} services
                    </span>
                  </div>

                  {/* Services Distribution: Balanced layout for each card */}
                  {category.id === 'web-development-ai' && (
                    <div className="space-y-2">
                      {category.services.map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/services/${category.slug}/${srv.slug}`}
                          className={`group/item flex items-start justify-between p-2.5 rounded-xl bg-[#161B28]/80 hover:bg-[#1A2234] border border-[#232B3E] ${theme.hoverItemBorder} transition-all duration-200`}
                        >
                          <div className="space-y-0.5 min-w-0 pr-2">
                            <div className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0 group-hover/item:scale-125 transition-transform`} />
                              <span className={`text-xs font-semibold text-[#F8FAFC] ${theme.hoverText} transition-colors truncate`}>
                                {srv.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#94A3B8] line-clamp-1 pl-3.5 leading-snug">
                              {srv.shortDescription}
                            </p>
                          </div>
                          <ArrowUpRight className={`w-3.5 h-3.5 text-[#64748B] ${theme.hoverText} group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0 mt-0.5`} />
                        </Link>
                      ))}
                    </div>
                  )}

                  {category.id === 'social-media-ai' && (
                    <div className="space-y-2">
                      {category.services.map((srv) => (
                        <Link
                          key={srv.id}
                          to={`/services/${category.slug}/${srv.slug}`}
                          className={`group/item flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#161B28]/80 hover:bg-[#1A2234] border border-[#232B3E] ${theme.hoverItemBorder} transition-all duration-200`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0 group-hover/item:scale-125 transition-transform`} />
                            <span className={`text-xs font-medium text-[#E2E8F0] ${theme.hoverText} transition-colors truncate`}>
                              {srv.title}
                            </span>
                          </div>
                          <ArrowUpRight className={`w-3.5 h-3.5 text-[#64748B] ${theme.hoverText} group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0 ml-2`} />
                        </Link>
                      ))}
                    </div>
                  )}

                  {category.id === 'seo-aeo-growth' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">
                      {category.services.map((srv, idx) => (
                        <Link
                          key={srv.id}
                          to={`/services/${category.slug}/${srv.slug}`}
                          title={srv.title}
                          className={`group/item flex items-center justify-between px-2.5 py-2 rounded-xl bg-[#161B28]/80 hover:bg-[#1A2234] border border-[#232B3E] ${theme.hoverItemBorder} transition-all duration-200 min-w-0 ${
                            idx === category.services.length - 1 && category.services.length % 2 !== 0
                              ? 'sm:col-span-2 lg:col-span-2'
                              : ''
                          }`}
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} shrink-0 group-hover/item:scale-125 transition-transform`} />
                            <span className={`text-[11px] font-medium text-[#CBD5E1] ${theme.hoverText} transition-colors truncate`}>
                              {srv.title}
                            </span>
                          </div>
                          <ArrowUpRight className={`w-3 h-3 text-[#64748B] ${theme.hoverText} group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 transition-all shrink-0 ml-1.5`} />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Link Pinned Consistently */}
                <div className="pt-5 mt-6 border-t border-[#232B3E] flex items-center justify-between">
                  <Link
                    to={`/services/${category.slug}`}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.accentText} ${theme.linkHover} transition-colors group/link`}
                  >
                    <span>Explore Stack</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-[10px] font-semibold text-[#64748B] uppercase tracking-wider">
                    {category.services.length} Total
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* C. Digital Products Marketplace Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-6 sm:p-10 lg:p-12 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#232B3E] pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181E2C] border border-[#232B3E] text-xs font-bold text-[#B7F45B]">
                <Sparkles className="w-3.5 h-3.5 text-[#83D9C1]" />
                <span>DIGITAL PRODUCTS MARKETPLACE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
                Agency-Grade Codebases &amp; Systems
              </h2>
            </div>

            <Link
              to="/digital-products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[8px] bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shadow-md shadow-[#8B7CF6]/20 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Visit Storefront</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full min-w-0">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* D. Work & Case Studies Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#232B3E] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              PROOF OF IMPACT
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
              Featured Case Studies &amp; Projects
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:text-[#83D9C1] hover:underline"
          >
            <span>View All Client Work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredWork.map((project) => (
            <div
              key={project.id}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-[#8B7CF6]/50 transition-all duration-300"
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
                    className="text-lg font-bold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors block font-heading"
                  >
                    {project.title}
                  </Link>
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-[#232B3E] mt-4 pt-4 flex items-center justify-between">
                <div className="text-xs text-[#83D9C1] font-semibold">
                  {project.results?.[1]?.metric || '<180ms Latency'}
                </div>
                <Link
                  to={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#B7F45B] hover:underline"
                >
                  <span>Read Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* E. 8-Step Engineering & Growth Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            OUR METHODOLOGY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
            The ZOVRA 8-Step Execution Framework
          </h2>
          <p className="text-xs sm:text-sm text-[#94A3B8]">
            From initial technical discovery to automated scale, our engineering methodology ensures zero guesswork and total clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.num}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 space-y-3 hover:border-[#B7F45B]/40 transition-colors"
            >
              <div className="text-2xl font-black text-[#B7F45B] font-mono">{step.num}</div>
              <h3 className="text-base font-bold text-[#F8FAFC] font-heading">{step.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* F. Team & Leadership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#232B3E] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              LEADERSHIP &amp; ENGINEERING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
              The Minds Behind ZOVRA LABS
            </h2>
          </div>
          <Link
            to="/team"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:text-[#83D9C1] hover:underline"
          >
            <span>Meet Full Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 lg:p-8 space-y-4 flex flex-col justify-between hover:border-[#8B7CF6]/40 transition-all"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B7CF6] via-[#83D9C1] to-[#B7F45B] p-0.5 flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-[#121620] rounded-[14px] flex items-center justify-center text-base font-extrabold text-[#B7F45B] font-heading">
                    {member.initials}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">{member.name}</h3>
                  <p className="text-xs font-semibold text-[#83D9C1] mt-0.5">{member.role}</p>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {member.shortBio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232B3E]">
                <Link
                  to={`/team/${member.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline"
                >
                  <span>View Leadership Bio</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* G. Latest Articles & Industry Insights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#232B3E] pb-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              INSIGHTS &amp; MANUALS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#F8FAFC] tracking-tight font-heading">
              Technical Guides &amp; AEO Playbooks
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:text-[#83D9C1] hover:underline"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {recentArticles.map((article) => (
            <div
              key={article.id}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 flex flex-col justify-between hover:border-[#B7F45B]/40 transition-all space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                  <span className="text-[#83D9C1] font-bold">{article.categoryTitle}</span>
                  <span>{article.readTime}</span>
                </div>

                <Link
                  to={`/blog/${article.slug}`}
                  className="text-base font-bold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors block line-clamp-2 font-heading"
                >
                  {article.title}
                </Link>

                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#232B3E] flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">By {article.author}</span>
                <Link
                  to={`/blog/${article.slug}`}
                  className="text-xs font-bold text-[#B7F45B] hover:underline inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* H. Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="relative rounded-3xl bg-[#121620] border border-[#232B3E] p-8 sm:p-12 lg:p-16 overflow-hidden space-y-6 glow-lime">
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
              START YOUR TRANSFORMATION
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading leading-tight">
              Ready to Engineer Your Digital Advantage with <span className="text-gradient-zovra">ZOVRA LABS</span>?
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl">
              Partner with ZOVRA LABS (ZOVRALABS.COM) to deploy custom software architectures, AI workflows, and AEO search engines.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/start-a-project"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[8px] bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-sm tracking-tight transition-all shadow-xl shadow-[#8B7CF6]/25"
              >
                <span>Initiate Project Scoping</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-[8px] bg-[#0B0D12] hover:bg-[#181E2C] border border-[#232B3E] text-[#F8FAFC] hover:text-[#B7F45B] font-bold text-sm transition-all"
              >
                <span>Contact Engineering Leads</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
