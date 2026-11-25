import React, { useState, useMemo } from 'react';
import { Link } from '../context/RouterContext';
import { blogPosts, resourceCategories } from '../data/blogData';
import {
  ArrowRight,
  BookOpen,
  ChevronRight,
  TrendingUp,
  Cpu,
  Share2,
  Code2,
  Search,
  Mail,
  CheckCircle2,
} from 'lucide-react';

interface ResourcesPageProps {
  filterCategorySlug?: string;
}

export const ResourcesPage: React.FC<ResourcesPageProps> = ({ filterCategorySlug }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const currentCategory = filterCategorySlug
    ? resourceCategories.find((c) => c.slug === filterCategorySlug)
    : null;

  const displayPosts = useMemo(() => {
    let list = filterCategorySlug
      ? blogPosts.filter((p) => p.category === filterCategorySlug)
      : blogPosts;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.keyTakeaways.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filterCategorySlug, searchQuery]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please provide a valid email address.');
      return;
    }
    setNewsletterError('');
    setNewsletterSuccess(true);
  };

  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'seo-guides':
        return <TrendingUp className="w-5 h-5 text-[#B7F45B]" />;
      case 'ai-automation':
        return <Cpu className="w-5 h-5 text-[#83D9C1]" />;
      case 'digital-marketing':
        return <Share2 className="w-5 h-5 text-[#8B7CF6]" />;
      case 'web-development':
      default:
        return <Code2 className="w-5 h-5 text-[#B7F45B]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#232B3E] pb-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            {currentCategory ? `CATEGORY: ${currentCategory.name}` : 'ZOVRA INSIGHTS & MANUALS'}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
            {currentCategory ? currentCategory.name : 'Technical Articles & AEO Playbooks'}
          </h1>
          <p className="text-base text-[#94A3B8] leading-relaxed">
            {currentCategory
              ? currentCategory.description
              : 'Actionable technical guides on Answer Engine Optimization (AEO), LLM pipelines, schema markup, and high-performance React architectures.'}
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles & guides..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121620] border border-[#232B3E] text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6]"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#232B3E]">
        <Link
          to="/blog"
          className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
            !filterCategorySlug
              ? 'bg-[#B7F45B] text-[#0B0D12]'
              : 'bg-[#121620] text-[#94A3B8] border border-[#232B3E] hover:text-[#F8FAFC]'
          }`}
        >
          All Articles
        </Link>
        {resourceCategories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/resources/${cat.slug}`}
            className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              filterCategorySlug === cat.slug
                ? 'bg-[#B7F45B] text-[#0B0D12]'
                : 'bg-[#121620] text-[#94A3B8] border border-[#232B3E] hover:text-[#F8FAFC]'
            }`}
          >
            {getCategoryIcon(cat.slug)}
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayPosts.map((post) => (
          <div
            key={post.id}
            className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 flex flex-col justify-between hover:border-[#8B7CF6]/50 transition-all group space-y-4 shadow-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] text-[#94A3B8]">
                <span className="text-[#83D9C1] font-bold">{post.categoryTitle}</span>
                <span>{post.readTime}</span>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors block leading-snug font-heading"
              >
                {post.title}
              </Link>

              <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#232B3E] flex items-center justify-between">
              <span className="text-xs text-[#94A3B8]">By {post.author}</span>
              <Link
                to={`/blog/${post.slug}`}
                className="text-xs font-bold text-[#B7F45B] hover:underline inline-flex items-center gap-1"
              >
                <span>Read Manual</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Box */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-8 sm:p-12 space-y-6 shadow-2xl">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
            ZOVRA DIGEST
          </span>
          <h2 className="text-2xl font-bold text-[#F8FAFC] font-heading">
            Subscribe to ZOVRA LABS Technical Briefings
          </h2>
          <p className="text-xs text-[#94A3B8]">
            Get monthly deep dives on Answer Engine Optimization (AEO), Schema updates, and React 19 performance patterns.
          </p>
        </div>

        {newsletterSuccess ? (
          <div className="p-4 rounded-xl bg-[#181E2C] border border-[#83D9C1]/40 text-xs text-[#83D9C1] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Subscribed successfully to ZOVRA LABS briefings.</span>
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 px-4 py-3 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6]"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shrink-0 cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
