import React from 'react';
import { Link } from '../context/RouterContext';
import { blogPosts } from '../data/blogData';
import { ChevronRight, ArrowLeft, ArrowRight, CheckCircle2, Bookmark, Share2 } from 'lucide-react';

interface BlogDetailPageProps {
  postSlug: string;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ postSlug }) => {
  const post = blogPosts.find((p) => p.slug === postSlug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Article Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The requested publication could not be found.</p>
        <Link to="/blog" className="text-xs font-semibold text-[#B7F45B] underline">
          Back to all articles &rarr;
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Article Header */}
      <div className="space-y-4 border-b border-[#232B3E] pb-8">
        <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
          <span className="text-[#83D9C1] font-bold">{post.categoryTitle}</span>
          <span>&middot;</span>
          <span>{post.readTime}</span>
          <span>&middot;</span>
          <span>Published {post.publishDate}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-[#F8FAFC] tracking-tight leading-tight font-heading">
          {post.title}
        </h1>

        <p className="text-base text-[#94A3B8] leading-relaxed">
          {post.excerpt}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs text-[#94A3B8]">
          <span>Written by <strong className="text-[#F8FAFC]">{post.author}</strong> ({post.authorRole})</span>
        </div>
      </div>

      {/* Key Takeaways Box */}
      <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center gap-2">
          <Bookmark className="w-4 h-4 text-[#B7F45B]" />
          <h2 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-widest font-heading">
            Executive Summary &amp; Takeaways
          </h2>
        </div>
        <ul className="space-y-2.5 text-xs sm:text-sm text-[#94A3B8]">
          {post.keyTakeaways.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#B7F45B] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Content */}
      <div className="space-y-8">
        {post.content.map((sec, idx) => (
          <div key={idx} className="space-y-3">
            <h2 className="text-xl font-bold text-[#F8FAFC] font-heading">{sec.heading}</h2>
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className="text-sm text-[#94A3B8] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Related Posts */}
      <div className="pt-8 border-t border-[#232B3E] space-y-6">
        <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">Related Technical Briefings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <Link
              key={rel.id}
              to={`/blog/${rel.slug}`}
              className="bg-[#121620] border border-[#232B3E] rounded-xl p-5 space-y-2 block hover:border-[#8B7CF6]/50 transition-colors"
            >
              <span className="text-[11px] text-[#83D9C1] font-bold">{rel.categoryTitle}</span>
              <h4 className="text-sm font-bold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors line-clamp-2 font-heading">
                {rel.title}
              </h4>
              <p className="text-xs text-[#94A3B8] line-clamp-2">{rel.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
