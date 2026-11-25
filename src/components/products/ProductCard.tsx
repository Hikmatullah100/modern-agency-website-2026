import React from 'react';
import { Link, useRouter } from '../../context/RouterContext';
import { useCart } from '../../context/CartContext';
import { DigitalProduct } from '../../types';
import {
  ShoppingBag,
  ArrowRight,
  FolderArchive,
  ExternalLink,
  Code2,
  Sparkles,
} from 'lucide-react';

interface ProductCardProps {
  product: DigitalProduct;
  featuredLayout?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  featuredLayout = false,
}) => {
  const { navigate } = useRouter();
  const { addItem } = useCart();

  const handleBuyNow = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
    navigate('/checkout');
  };

  const handleCardClick = () => {
    navigate(`/digital-products/${product.slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`zovra-product-card group cursor-pointer bg-[#121620] border border-[#232B3E] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#8B7CF6]/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-black/70 hover:-translate-y-1 w-full min-w-0 box-border h-full ${
        featuredLayout ? 'lg:col-span-2 md:grid md:grid-cols-12 md:items-stretch' : ''
      }`}
    >
      {/* Top / Media Container */}
      <div className={featuredLayout ? 'md:col-span-6 flex flex-col min-w-0 w-full' : 'flex flex-col flex-1 min-w-0 w-full'}>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0D12] w-full shrink-0">
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />

          {/* Dark Vignette Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121620] via-transparent to-transparent opacity-80" />

          {/* Category Tag (Top Left) */}
          <div className="absolute top-3 left-3 bg-[#0B0D12]/85 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-[#83D9C1] border border-[#232B3E] tracking-wide uppercase max-w-[calc(100%-140px)] truncate">
            {product.category}
          </div>

          {/* Demo Content Badge (Top Right) */}
          <div className="absolute top-3 right-3 bg-[#181E2C]/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#B7F45B] border border-[#232B3E] tracking-tight flex items-center gap-1 shadow-sm shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7F45B] animate-pulse shrink-0" />
            <span className="truncate">DEMO TEMPLATE</span>
          </div>

          {/* Deliverables Format Chip (Bottom Left) */}
          <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 text-[10px] text-[#F8FAFC] font-semibold bg-[#0B0D12]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#232B3E]/60 max-w-[calc(100%-24px)]">
            <FolderArchive className="w-3 h-3 text-[#B7F45B] shrink-0" />
            <span className="truncate">ZIP Source + Live Copy Link</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between min-w-0 w-full">
          <div className="space-y-1.5 min-w-0">
            <Link
              to={`/digital-products/${product.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="text-base font-black text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors block font-heading line-clamp-1"
            >
              {product.title}
            </Link>

            <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
              {product.shortDescription}
            </p>
          </div>

          {/* Tech Stack Pills (quiet inline metadata) */}
          {product.techStack && product.techStack.length > 0 && (
            <div className="flex items-center gap-1.5 flex-wrap pt-1 text-[10px] font-mono text-[#94A3B8] min-w-0">
              <Code2 className="w-3 h-3 text-[#83D9C1] shrink-0" />
              {product.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="bg-[#181E2C] border border-[#232B3E] px-1.5 py-0.5 rounded text-[#F8FAFC] truncate max-w-[120px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer / Pricing & Actions */}
      <div
        className={`zovra-card-footer p-4 sm:p-5 pt-3.5 sm:pt-4 border-t border-[#232B3E] mt-auto w-full min-w-0 box-border ${
          featuredLayout
            ? 'zovra-featured-footer md:col-span-6 md:border-t-0 md:border-l md:flex md:flex-col md:justify-center md:items-start md:space-y-5 md:p-8'
            : ''
        }`}
      >
        {/* Pricing */}
        <div className="zovra-card-price flex items-baseline justify-between gap-2 w-full min-w-0">
          <div className="flex flex-col min-w-0">
            <span className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-wider font-heading leading-tight">
              Guest Price
            </span>
            <div className="flex items-baseline gap-2 flex-wrap mt-0.5">
              <span className="text-xl sm:text-2xl font-black text-[#B7F45B] tabular-nums font-mono leading-none">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#94A3B8] line-through tabular-nums font-mono">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Savings / Deliverable Tag */}
          {product.originalPrice && product.originalPrice > product.price ? (
            <span className="text-[10px] font-mono font-bold text-[#83D9C1] px-2 py-0.5 rounded bg-[#181E2C] border border-[#232B3E] shrink-0">
              SAVE ${product.originalPrice - product.price}
            </span>
          ) : (
            <span className="text-[10px] font-mono font-bold text-[#83D9C1] px-2 py-0.5 rounded bg-[#181E2C] border border-[#232B3E] shrink-0">
              INSTANT ZIP
            </span>
          )}
        </div>

        {/* Action Buttons: View Details & Buy Now */}
        <div className="zovra-card-actions w-full min-w-0">
          <Link
            to={`/digital-products/${product.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="w-full min-w-0 h-10 px-2 sm:px-3 rounded-xl bg-[#181E2C] hover:bg-[#232B3E] border border-[#232B3E] hover:border-[#83D9C1] text-xs font-semibold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors inline-flex items-center justify-center gap-1.5 text-center select-none box-border"
          >
            <span className="truncate">View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#83D9C1] shrink-0" />
          </Link>

          <button
            type="button"
            onClick={handleBuyNow}
            className="w-full min-w-0 h-10 px-2 sm:px-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white text-xs font-bold transition-all shadow-md shadow-[#8B7CF6]/20 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-1.5 text-center select-none box-border"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
