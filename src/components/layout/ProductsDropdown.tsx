import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '../../context/RouterContext';
import { productCategories } from '../../data/productsData';
import { ArrowRight, Sparkles, FolderArchive } from 'lucide-react';

interface ProductsDropdownProps {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ProductsDropdown: React.FC<ProductsDropdownProps> = ({
  onClose,
  triggerRef,
  onMouseEnter,
  onMouseLeave,
}) => {
  // Exclude 'all' from inner categories grid, highlight it at top
  const categoriesList = productCategories.filter((c) => c.slug !== 'all');

  const calculatePosition = (): React.CSSProperties => {
    if (!triggerRef?.current || typeof window === 'undefined') {
      return {
        position: 'fixed',
        top: '88px',
        left: '16px',
        width: 'calc(100vw - 32px)',
        maxHeight: 'calc(100vh - 104px)',
        zIndex: 100,
      };
    }

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxWidth = 896; // max-w-4xl
    const margin = 16;
    const width = Math.min(maxWidth, viewportWidth - margin * 2);

    const triggerCenter = triggerRect.left + triggerRect.width / 2;
    let left = triggerCenter - width / 2;

    // Clamp horizontally to stay completely within viewport
    if (left < margin) {
      left = margin;
    } else if (left + width > viewportWidth - margin) {
      left = viewportWidth - width - margin;
    }

    const top = triggerRect.bottom + 8;
    const maxHeight = Math.max(260, viewportHeight - top - margin);

    return {
      position: 'fixed',
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      width: `${Math.round(width)}px`,
      maxHeight: `${Math.round(maxHeight)}px`,
      zIndex: 100,
    };
  };

  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>(calculatePosition);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleUpdate = () => {
      setMenuStyle(calculatePosition());
    };

    handleUpdate();
    window.addEventListener('resize', handleUpdate);
    window.addEventListener('scroll', handleUpdate, true);

    return () => {
      window.removeEventListener('resize', handleUpdate);
      window.removeEventListener('scroll', handleUpdate, true);
    };
  }, [triggerRef]);

  const content = (
    <div
      ref={menuRef}
      data-zovra-dropdown="true"
      style={menuStyle}
      className="dropdown-fade-in bg-[#0B0D12]/98 backdrop-blur-2xl border border-[#232B3E] rounded-2xl shadow-2xl shadow-black/80 p-6 lg:p-7 text-left transition-all duration-200 overflow-y-auto before:absolute before:-top-2.5 before:left-0 before:right-0 before:h-2.5 before:content-['']"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left 2 columns: Category grid */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b border-[#232B3E] pb-3">
            <div>
              <h4 className="text-sm font-bold text-[#F8FAFC] font-heading">Digital Products Storefront</h4>
              <p className="text-xs text-[#94A3B8]">Production website templates, design systems, and developer codebases.</p>
            </div>
            <Link
              to="/digital-products"
              onClick={onClose}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B7F45B] hover:underline"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 max-h-[340px] overflow-y-auto pr-1">
            {categoriesList.map((cat) => (
              <Link
                key={cat.slug}
                to={`/digital-products/${cat.slug}`}
                onClick={onClose}
                className="group flex flex-col p-2.5 rounded-[8px] bg-[#121620] hover:bg-[#181E2C] border border-[#232B3E] hover:border-[#8B7CF6]/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#F8FAFC] group-hover:text-[#B7F45B] transition-colors truncate font-heading">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-[#83D9C1] tabular-nums font-mono shrink-0 ml-1">
                    {cat.count}
                  </span>
                </div>
                <p className="text-[11px] text-[#94A3B8] line-clamp-1 mt-0.5">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right column: Featured bundle promo */}
        <div className="md:col-span-1 bg-[#181E2C] border border-[#232B3E] rounded-[16px] p-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[6px] text-[11px] font-bold text-[#B7F45B] bg-[#121620] border border-[#232B3E] mb-3">
              <Sparkles className="w-3 h-3 text-[#83D9C1]" />
              <span>Agency Asset Pass</span>
            </div>
            <h5 className="text-sm font-bold text-[#F8FAFC] font-heading">ZOVRA Master Bundle</h5>
            <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
              Get all React codebases, Figma systems, AEO playbooks, and contract proposals in a single 450+ MB archive.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-[#232B3E]">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-[#94A3B8]">Bundle price</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm line-through text-[#94A3B8]">$249</span>
                <span className="text-base font-bold text-[#B7F45B] tabular-nums">$149</span>
              </div>
            </div>
            <Link
              to="/digital-products/zovra-modern-agency-react-template"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-[8px] text-xs font-bold text-white bg-[#8B7CF6] hover:bg-[#7664F4] transition-all shadow-sm"
            >
              <FolderArchive className="w-3.5 h-3.5" />
              <span>Get Master Bundle</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
};
