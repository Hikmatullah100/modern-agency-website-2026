import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from '../../context/RouterContext';
import { serviceCategories } from '../../data/servicesData';
import { ArrowRight, Code2, Share2, TrendingUp } from 'lucide-react';

interface ServicesMegaMenuProps {
  onClose: () => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({
  onClose,
  triggerRef,
  onMouseEnter,
  onMouseLeave,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'web-development-ai':
        return <Code2 className="w-4 h-4 text-[#B7F45B]" />;
      case 'social-media-ai':
        return <Share2 className="w-4 h-4 text-[#83D9C1]" />;
      case 'seo-aeo-growth':
      default:
        return <TrendingUp className="w-4 h-4 text-[#8B7CF6]" />;
    }
  };

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

    const maxWidth = 1152; // max-w-6xl
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
      className="dropdown-fade-in bg-[#0B0D12]/98 backdrop-blur-2xl border border-[#232B3E] rounded-2xl shadow-2xl shadow-black/80 p-6 lg:p-8 text-left transition-all duration-200 overflow-y-auto before:absolute before:-top-2.5 before:left-0 before:right-0 before:h-2.5 before:content-['']"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {serviceCategories.map((category) => (
          <div key={category.id} className="flex flex-col space-y-4">
            {/* Category Header */}
            <div className="border-b border-[#232B3E] pb-3">
              <Link
                to={`/services/${category.slug}`}
                onClick={onClose}
                className="group flex items-center justify-between text-base font-bold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-[8px] bg-[#121620] border border-[#232B3E] flex items-center justify-center shrink-0">
                    {getIcon(category.id)}
                  </div>
                  <span className="truncate font-heading">{category.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#B7F45B] group-hover:translate-x-1 transition-all shrink-0" />
              </Link>
              <p className="text-xs text-[#94A3B8] mt-1.5 line-clamp-1">{category.tagline}</p>
            </div>

            {/* Sub-services list */}
            <ul className="space-y-1.5">
              {category.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${category.slug}/${service.slug}`}
                    onClick={onClose}
                    className="group block px-2.5 py-1.5 rounded-[8px] text-xs font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#181E2C] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="truncate">{service.title}</span>
                      <span className="opacity-0 group-hover:opacity-100 text-[#B7F45B] text-[10px] ml-2 transition-opacity font-bold">
                        View
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Quick Category Action */}
            <div className="mt-auto pt-2">
              <Link
                to={`/services/${category.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs text-[#B7F45B] hover:underline font-bold"
              >
                <span>View {category.title} overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom helper strip */}
      <div className="mt-6 pt-4 border-t border-[#232B3E] flex flex-wrap items-center justify-between gap-4 text-xs text-[#94A3B8]">
        <div>
          <span>Need a tailored combination of services? </span>
          <Link to="/start-a-project" onClick={onClose} className="text-[#B7F45B] hover:underline font-bold ml-1">
            Request a custom scope with ZOVRA LABS &rarr;
          </Link>
        </div>
        <Link
          to="/services"
          onClick={onClose}
          className="text-xs text-[#F8FAFC] hover:text-[#B7F45B] font-semibold"
        >
          Browse All Services
        </Link>
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(content, document.body) : null;
};
