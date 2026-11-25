import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from '../context/RouterContext';
import { digitalProducts, productCategories, categoryAliases } from '../data/productsData';
import { ProductCard } from '../components/products/ProductCard';
import {
  Search,
  Filter,
  Sparkles,
  FolderArchive,
  Lock,
  ArrowRight,
  Globe2,
  CheckCircle2,
  X,
  Layers,
  Code2,
} from 'lucide-react';

interface MarketplacePageProps {
  initialCategorySlug?: string;
}

export const MarketplacePage: React.FC<MarketplacePageProps> = ({ initialCategorySlug }) => {
  const { navigate } = useRouter();

  // Resolve category if an alias was passed
  const resolvedInitialSlug = useMemo(() => {
    if (!initialCategorySlug) return 'all';
    return categoryAliases[initialCategorySlug] || initialCategorySlug;
  }, [initialCategorySlug]);

  const [selectedCategory, setSelectedCategory] = useState<string>(resolvedInitialSlug);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'newest' | 'popular'>('featured');

  useEffect(() => {
    const slug = initialCategorySlug ? (categoryAliases[initialCategorySlug] || initialCategorySlug) : 'all';
    setSelectedCategory(slug);
  }, [initialCategorySlug]);

  const handleSelectCategory = (slug: string) => {
    setSelectedCategory(slug);
    if (slug === 'all') {
      navigate('/digital-products');
    } else {
      navigate(`/digital-products/${slug}`);
    }
  };

  // Filter products
  const filteredProducts = useMemo(() => {
    let list = [...digitalProducts];

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'all') {
      list = list.filter((p) => p.categorySlug === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          (p.techStack && p.techStack.some((t) => t.toLowerCase().includes(q)))
      );
    }

    // Sort
    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    } else if (sortBy === 'popular') {
      list.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    } else {
      // Default: Featured first
      list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Featured flagship templates (shown in dedicated featured row)
  const featuredFlagships = useMemo(() => {
    return digitalProducts.filter((p) => p.featured).slice(0, 3);
  }, []);

  const clearAllFilters = () => {
    setSearchQuery('');
    handleSelectCategory('all');
    setSortBy('featured');
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-24 text-left bg-[#0B0D12] text-[#F8FAFC] w-full min-w-0 overflow-x-hidden">
      {/* 1. Premium Storefront Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-14 border-b border-[#232B3E] overflow-hidden">
        {/* Subtle Brand Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background:
              'radial-gradient(circle at 50% 15%, rgba(139,124,246,0.18) 0%, rgba(183,244,91,0.08) 35%, rgba(131,217,193,0.04) 60%, transparent 80%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121620] border border-[#232B3E] text-xs font-bold uppercase tracking-wider text-[#B7F45B]">
              <Sparkles className="w-3.5 h-3.5 text-[#83D9C1]" />
              <span>ZOVRA LABS &middot; DIGITAL PRODUCTS STOREFRONT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-[1.08] font-heading">
              Agency-Grade Website Templates &amp;{' '}
              <span className="text-gradient-zovra">Digital Systems</span>
            </h1>

            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl">
              Production-ready website templates, design tokens, and developer codebases engineered by ZOVRA LABS (ZOVRALABS.COM). Complete with guest checkout and instant delivery of full ZIP source files plus live template copy links upon verification.
            </p>
          </div>

          {/* Business Model & Delivery Guarantees Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
            <div className="bg-[#121620] border border-[#232B3E] rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] flex items-center justify-center shrink-0">
                <Lock className="w-4 h-4 text-[#8B7CF6]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-[#F8FAFC] block font-heading">Guest Checkout</span>
                <p className="text-[11px] text-[#94A3B8]">No account or password needed to buy.</p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#232B3E] rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] flex items-center justify-center shrink-0">
                <FolderArchive className="w-4 h-4 text-[#B7F45B]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-[#F8FAFC] block font-heading">Dual Delivery Format</span>
                <p className="text-[11px] text-[#94A3B8]">ZIP source archive + live template link.</p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#232B3E] rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] flex items-center justify-center shrink-0">
                <Globe2 className="w-4 h-4 text-[#83D9C1]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-[#F8FAFC] block font-heading">Payment Channels</span>
                <p className="text-[11px] text-[#94A3B8]">International cards &amp; Pakistan local options.</p>
              </div>
            </div>

            <div className="bg-[#121620] border border-[#232B3E] rounded-xl p-3.5 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4 text-[#B7F45B]" />
              </div>
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-[#F8FAFC] block font-heading">Clean Codebases</span>
                <p className="text-[11px] text-[#94A3B8]">React 19, TypeScript, Tailwind CSS v4.</p>
              </div>
            </div>
          </div>

          {/* Demo Content Status Notice */}
          <div className="p-3 rounded-xl bg-[#181E2C]/80 border border-[#232B3E] flex items-center justify-between gap-3 text-xs text-[#94A3B8]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B7F45B] animate-pulse shrink-0" />
              <span>
                <strong className="text-[#F8FAFC]">Stage 1 Storefront Preview:</strong> Template specifications, pricing, and category filters are active for demonstration. Payment processing unlocks in upcoming phases.
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#83D9C1] shrink-0 font-bold hidden sm:inline-block">
              STAGE 1 ACTIVE
            </span>
          </div>
        </div>
      </section>

      {/* 2. Featured Flagship Products Section (Highlighted Spotlight) */}
      {selectedCategory === 'all' && !searchQuery.trim() && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#232B3E] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#B7F45B] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CURATED SPOTLIGHT</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-heading">
                Featured Agency Templates
              </h2>
            </div>
            <span className="text-xs text-[#94A3B8] font-mono">
              3 Flagships
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full min-w-0">
            {featuredFlagships.map((product) => (
              <ProductCard key={`featured-${product.id}`} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Catalog Controls: Search, Sort, and Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search & Sort Bar */}
        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 shadow-xl">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search templates by title, stack (React, Tailwind), or category..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs sm:text-sm text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94A3B8] hover:text-[#F8FAFC] p-0.5"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Control */}
          <div className="flex items-center gap-2 justify-end text-xs text-[#94A3B8] shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#83D9C1]" />
            <span className="font-semibold">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3.5 py-2.5 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs font-semibold text-[#F8FAFC] focus:outline-none focus:border-[#8B7CF6] cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest Releases</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Product Category Filter Tabs */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-[#94A3B8]">
            <span className="font-bold text-[#F8FAFC] uppercase tracking-wider">
              Template Categories ({productCategories.length})
            </span>
            <span className="font-mono text-[11px]">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'template' : 'templates'}
            </span>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {productCategories.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => handleSelectCategory(cat.slug)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-2 border select-none ${
                    isActive
                      ? 'bg-[#B7F45B] text-[#0B0D12] border-[#B7F45B] shadow-md shadow-[#B7F45B]/20 font-black'
                      : 'bg-[#121620] text-[#94A3B8] border-[#232B3E] hover:border-[#8B7CF6] hover:text-[#F8FAFC]'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-[#0B0D12]/20 text-[#0B0D12] font-black' : 'bg-[#181E2C] text-[#83D9C1]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Indicator / Quick Reset */}
        {(selectedCategory !== 'all' || searchQuery.trim()) && (
          <div className="flex items-center justify-between text-xs bg-[#181E2C] border border-[#232B3E] px-4 py-2.5 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-[#94A3B8]">Filtered by:</span>
              {selectedCategory !== 'all' && (
                <span className="px-2 py-0.5 rounded bg-[#121620] border border-[#232B3E] text-[#B7F45B] font-semibold text-[11px]">
                  Category: {productCategories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
                </span>
              )}
              {searchQuery.trim() && (
                <span className="px-2 py-0.5 rounded bg-[#121620] border border-[#232B3E] text-[#83D9C1] font-semibold text-[11px]">
                  Keyword: "{searchQuery}"
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={clearAllFilters}
              className="text-[#B7F45B] hover:underline font-bold text-xs inline-flex items-center gap-1"
            >
              <span>Reset Filters</span>
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* 4. Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 w-full min-w-0">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-12 text-center space-y-4 max-w-lg mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-[#181E2C] border border-[#232B3E] flex items-center justify-center mx-auto text-[#94A3B8]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">
              No matching templates found
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              We couldn't find any digital templates matching "{searchQuery}". Try searching for broader terms like "React", "SaaS", or browse all categories.
            </p>
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white text-xs font-bold transition-all shadow-md"
            >
              <span>Reset &amp; View All Products</span>
            </button>
          </div>
        )}
      </section>

      {/* 5. Guest Delivery & Verification Information Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-8 lg:p-10 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#232B3E] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#B7F45B] uppercase tracking-wider">
                STAGE 1 SPECIFICATION
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-heading">
                How Digital Delivery Works at ZOVRA LABS
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181E2C] border border-[#232B3E] text-xs font-mono text-[#83D9C1]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>GUEST CHECKOUT &middot; NO REGISTRATION REQUIRED</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] text-[#B7F45B] font-mono font-bold flex items-center justify-center text-xs">
                01
              </div>
              <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">
                Frictionless Guest Checkout
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Add any template to your cart and proceed directly with your email address. No forced account creation or verification passwords.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] text-[#83D9C1] font-mono font-bold flex items-center justify-center text-xs">
                02
              </div>
              <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">
                Payment Verification
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Transactions will support international card processing alongside verified Pakistan local payment rails (Easypaisa, JazzCash, direct bank transfer).
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#181E2C] border border-[#232B3E] text-[#8B7CF6] font-mono font-bold flex items-center justify-center text-xs">
                03
              </div>
              <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">
                Dual Digital Delivery
              </h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Upon verified payment, you immediately receive temporary signed download links for the complete ZIP package and private copy links for Figma / GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
