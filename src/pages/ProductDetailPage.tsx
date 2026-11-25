import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { digitalProducts } from '../data/productsData';
import {
  ShoppingBag,
  ArrowRight,
  ChevronRight,
  Star,
  CheckCircle2,
  FileCode2,
  HardDrive,
  Cpu,
  ShieldCheck,
  ExternalLink,
  Layers,
  HelpCircle,
  X,
} from 'lucide-react';

interface ProductDetailPageProps {
  productSlug: string;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productSlug }) => {
  const { navigate } = useRouter();
  const { addItem } = useCart();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copiedLink, setCopiedLink] = useState(false);

  const product = digitalProducts.find((p) => p.slug === productSlug);
  const [activeImage, setActiveImage] = useState<string>(product?.image || '');

  // Reset active image if product changes
  React.useEffect(() => {
    if (product) {
      setActiveImage(product.image);
    }
  }, [productSlug, product]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4 bg-[#0B0D12] text-[#F8FAFC]">
        <h1 className="text-2xl font-bold text-[#F8FAFC] font-heading">Product Not Found</h1>
        <p className="text-sm text-[#94A3B8]">The digital product you requested could not be located.</p>
        <Link to="/digital-products" className="text-xs font-semibold text-[#B7F45B] underline">
          Back to Marketplace &rarr;
        </Link>
      </div>
    );
  }

  const relatedProducts = digitalProducts
    .filter((p) => p.id !== product.id && p.categorySlug === product.categorySlug)
    .slice(0, 3);

  // If no same-category products, pick other popular ones
  const fallbackRelated = relatedProducts.length > 0
    ? relatedProducts
    : digitalProducts.filter((p) => p.id !== product.id).slice(0, 3);

  const handleBuyNow = () => {
    addItem(product, 1);
    navigate('/checkout');
  };

  const handleCopyTemplateUrl = () => {
    const url = product.copyTemplateUrl || `https://zovralabs.com/templates/${product.slug}`;
    navigator.clipboard?.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const gallery = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Main Product Showcase: 2-Column Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Image Gallery & Live Preview Link (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Active Main Display Image */}
          <div className="rounded-2xl overflow-hidden border border-[#232B3E] bg-[#121620] shadow-2xl relative group">
            <img
              src={activeImage || product.image}
              alt={product.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover max-h-[500px] transition-all duration-300"
            />
            {product.hasLiveDemo && (
              <button
                type="button"
                onClick={() => setDemoModalOpen(true)}
                className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0B0D12]/90 backdrop-blur-md border border-[#232B3E] text-xs font-semibold text-[#B7F45B] hover:bg-[#121620] shadow-lg transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-[#83D9C1]" />
                <span>Launch Live Preview Sandbox</span>
              </button>
            )}
          </div>

          {/* Interactive Thumbnail Gallery Strip */}
          {gallery.length > 1 && (
            <div className="space-y-1.5">
              <span className="text-[11px] text-[#94A3B8] font-semibold block">Gallery Views ({gallery.length})</span>
              <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
                {gallery.map((imgSrc, idx) => {
                  const isActive = (activeImage || product.image) === imgSrc;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(imgSrc)}
                      className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        isActive
                          ? 'border-[#B7F45B] scale-102 ring-2 ring-[#B7F45B]/20 shadow-md'
                          : 'border-[#232B3E] opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`View gallery image ${idx + 1}`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${product.title} preview view ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.2 text-[9px] font-mono text-white rounded">
                        {idx + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Dual Delivery Technical Specs Bar */}
          <div className="p-4 rounded-xl bg-[#121620] border border-[#232B3E] space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-[#83D9C1] shrink-0" />
                <span>ZIP Asset: <strong className="text-[#F8FAFC] font-mono">{product.zipAssetFileName}</strong> ({product.zipAssetSize})</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-[#8B7CF6] shrink-0" />
                <span>Format: <strong className="text-[#F8FAFC]">{product.fileFormat}</strong></span>
              </div>
            </div>

            {product.hasCopyTemplate && (
              <div className="pt-2 border-t border-[#232B3E] flex items-center justify-between flex-wrap gap-2 text-xs">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Layers className="w-3.5 h-3.5 text-[#B7F45B]" />
                  <span>Dual Delivery: <strong className="text-[#F8FAFC]">Online Workspace Copy Link Included</strong></span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyTemplateUrl}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] text-[11px] font-semibold text-[#B7F45B] transition-colors"
                >
                  {copiedLink ? (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-[#83D9C1]" />
                      <span className="text-[#83D9C1]">Copied Template URL</span>
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-3 h-3" />
                      <span>Copy Template Link</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Purchasing & Specifications (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#B7F45B] uppercase tracking-widest font-heading">
                {product.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#181E2C] text-[#B7F45B] border border-[#232B3E] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7F45B] animate-pulse" />
                  <span>DEMO TEMPLATE</span>
                </span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight leading-snug font-heading">
              {product.title}
            </h1>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-[#121620] border border-[#232B3E] space-y-4 shadow-xl">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-xs text-[#94A3B8] block">Price</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black text-[#B7F45B] tabular-nums font-mono">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm line-through text-[#94A3B8] font-mono">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#83D9C1] px-2.5 py-1 rounded bg-[#181E2C] border border-[#232B3E]">
                Instant ZIP + Copy Link
              </span>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                onClick={() => addItem(product, 1)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] text-xs font-bold text-[#F8FAFC] transition-colors cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#83D9C1]" />
                <span>Add to Cart</span>
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white text-xs font-extrabold transition-all active:scale-95 shadow-md shadow-[#8B7CF6]/20 cursor-pointer"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </button>
            </div>

            <p className="text-[11px] text-[#94A3B8]/80 text-center">
              Guest checkout mode. Dual delivery: Full ZIP source archive and live template copy link delivered upon payment verification.
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="space-y-3 pt-2 text-xs">
            <div className="flex justify-between py-2 border-b border-[#232B3E]">
              <span className="text-[#94A3B8]">License Type:</span>
              <span className="font-semibold text-[#F8FAFC] text-right">{product.licenseType}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#232B3E]">
              <span className="text-[#94A3B8]">Compatible With:</span>
              <span className="font-mono text-[#F8FAFC] text-right">{product.softwareCompatibility.join(', ')}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#232B3E]">
              <span className="text-[#94A3B8]">Delivery Mode:</span>
              <span className="text-[#F8FAFC] text-right">Instant ZIP &amp; Live Copy Link</span>
            </div>
            <div className="flex justify-between py-2 border-b border-[#232B3E]">
              <span className="text-[#94A3B8]">Direct ZIP Asset:</span>
              <span className="font-mono text-[#B7F45B] text-right">{product.zipAssetFileName}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Specs Tabs */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-[#121620] border border-[#232B3E] rounded-2xl p-8 space-y-6">
          <h2 className="text-lg font-bold text-[#F8FAFC] font-heading">Product Overview &amp; Architecture</h2>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            {product.fullDescription}
          </p>

          <div className="space-y-3 pt-4 border-t border-[#232B3E]">
            <h3 className="text-sm font-bold text-[#F8FAFC] font-heading">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#94A3B8]">
                  <CheckCircle2 className="w-4 h-4 text-[#B7F45B] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Included Files */}
        <div className="space-y-6">
          <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 space-y-4">
            <h3 className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2 font-heading">
              <Layers className="w-4 h-4 text-[#B7F45B]" />
              <span>What&apos;s Included in ZIP</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-[#94A3B8]">
              {product.includedFiles.map((f, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#B7F45B] font-mono text-[10px] mt-0.5">&bull;</span>
                  <span className="text-[#F8FAFC]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#121620] border border-[#232B3E] rounded-2xl p-6 space-y-3">
            <h3 className="text-sm font-bold text-[#F8FAFC] flex items-center gap-2 font-heading">
              <ShieldCheck className="w-4 h-4 text-[#83D9C1]" />
              <span>Licensing Guarantee</span>
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Every asset includes perpetual commercial rights for client deployments by ZOVRA LABS customers.
            </p>
            <Link to="/digital-product-license" className="text-xs text-[#B7F45B] font-semibold hover:underline block pt-1">
              Read Digital Product License &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
