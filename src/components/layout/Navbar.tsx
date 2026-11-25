import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../../context/RouterContext';
import { useCart } from '../../context/CartContext';
import { ServicesMegaMenu } from './ServicesMegaMenu';
import { ProductsDropdown } from './ProductsDropdown';
import { serviceCategories } from '../../data/servicesData';
import { productCategories } from '../../data/productsData';
import { ZovraLogo } from '../common/ZovraLogo';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ShoppingBag,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { path, isPathActive } = useRouter();
  const { itemCount } = useCart();

  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileProductsExpanded, setMobileProductsExpanded] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);
  const servicesTriggerRef = useRef<HTMLDivElement>(null);
  const productsTriggerRef = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleOpenDropdown = (type: 'services' | 'products') => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveDropdown(type);
  };

  const handleScheduleClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  const handleCancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  // Close menus on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const isInsideNav = navRef.current && navRef.current.contains(target as Node);
      const isInsideDropdown = target?.closest?.('[data-zovra-dropdown]');
      if (!isInsideNav && !isInsideDropdown) {
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  // Close mobile menu whenever path changes or when resized to desktop (>= 1024px)
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      } else {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [path]);

  const toggleDropdown = (type: 'services' | 'products') => {
    handleCancelClose();
    setActiveDropdown((prev) => (prev === type ? null : type));
  };

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full bg-[#0B0D12]/92 backdrop-blur-xl border-b border-[#232B3E] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-1.5 sm:gap-4 w-full min-w-0">
          {/* 1. Left: Official ZOVRA LABS Brand Lockup */}
          <div className="flex items-center justify-start min-w-0 shrink">
            <Link
              to="/"
              className="flex items-center group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7F45B] rounded-[8px] p-0.5 sm:p-1 min-w-0 overflow-visible"
            >
              {/* Responsive sizing: compact on mobile screens (<640px) to give breathing room to cart & controls, full size on tablet/desktop */}
              <div className="block sm:hidden">
                <ZovraLogo size="sm" showText={true} />
              </div>
              <div className="hidden sm:block">
                <ZovraLogo size="md" showText={true} />
              </div>
            </Link>
          </div>

          {/* 2. Center: Desktop Navigation Links */}
          <nav className="navbar hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2 text-sm font-semibold">
            {/* Home */}
            <Link
              to="/"
              exact
              className={`relative px-3.5 py-2 rounded-md transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                isPathActive('/', true)
                  ? 'text-[#B7F45B]'
                  : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              <span>Home</span>
              {isPathActive('/', true) && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
            </Link>

            {/* Services with dropdown */}
            <div
              ref={servicesTriggerRef}
              className="relative"
              onMouseEnter={() => handleOpenDropdown('services')}
              onMouseLeave={handleScheduleClose}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('services')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md transition-colors duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                  isPathActive('/services') || activeDropdown === 'services'
                    ? 'text-[#B7F45B]'
                    : 'text-[#F8FAFC] hover:text-[#83D9C1]'
                }`}
                aria-expanded={activeDropdown === 'services'}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'services' ? 'rotate-180 text-[#B7F45B]' : 'text-[#94A3B8]'
                  }`}
                />
              </button>
              {isPathActive('/services') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
              {activeDropdown === 'services' && (
                <ServicesMegaMenu
                  triggerRef={servicesTriggerRef}
                  onClose={() => {
                    handleCancelClose();
                    setActiveDropdown(null);
                  }}
                  onMouseEnter={handleCancelClose}
                  onMouseLeave={handleScheduleClose}
                />
              )}
            </div>

            {/* Work */}
            <Link
              to="/work"
              className={`relative px-3.5 py-2 rounded-md transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                isPathActive('/work')
                  ? 'text-[#B7F45B]'
                  : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              <span>Work</span>
              {isPathActive('/work') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
            </Link>

            {/* Digital Products with dropdown */}
            <div
              ref={productsTriggerRef}
              className="relative"
              onMouseEnter={() => handleOpenDropdown('products')}
              onMouseLeave={handleScheduleClose}
            >
              <button
                type="button"
                onClick={() => toggleDropdown('products')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md transition-colors duration-200 ease-out cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                  isPathActive('/digital-products') || activeDropdown === 'products'
                    ? 'text-[#B7F45B]'
                    : 'text-[#F8FAFC] hover:text-[#83D9C1]'
                }`}
                aria-expanded={activeDropdown === 'products'}
              >
                <span>Digital Products</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeDropdown === 'products' ? 'rotate-180 text-[#B7F45B]' : 'text-[#94A3B8]'
                  }`}
                />
              </button>
              {isPathActive('/digital-products') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
              {activeDropdown === 'products' && (
                <ProductsDropdown
                  triggerRef={productsTriggerRef}
                  onClose={() => {
                    handleCancelClose();
                    setActiveDropdown(null);
                  }}
                  onMouseEnter={handleCancelClose}
                  onMouseLeave={handleScheduleClose}
                />
              )}
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`relative px-3.5 py-2 rounded-md transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                isPathActive('/about')
                  ? 'text-[#B7F45B]'
                  : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              <span>About</span>
              {isPathActive('/about') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
            </Link>

            {/* Team */}
            <Link
              to="/team"
              className={`relative px-3.5 py-2 rounded-md transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                isPathActive('/team')
                  ? 'text-[#B7F45B]'
                  : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              <span>Team</span>
              {isPathActive('/team') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative px-3.5 py-2 rounded-md transition-colors duration-200 ease-out focus-visible:outline-2 focus-visible:outline-[#B7F45B] ${
                isPathActive('/contact')
                  ? 'text-[#B7F45B]'
                  : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              <span>Contact</span>
              {isPathActive('/contact') && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] rounded-full" />
              )}
            </Link>
          </nav>

          {/* 3. Right: Shopping Cart, "Start a Project" CTA, and Mobile menu toggle */}
          <div className="flex items-center justify-end shrink-0 gap-1.5 min-[360px]:gap-2 sm:gap-3">
            {/* Cart Link - visible across mobile, tablet, and desktop */}
            <Link
              to="/cart"
              className="relative p-1.5 min-[360px]:p-2 rounded-[8px] bg-[#121620] border border-[#232B3E] text-[#F8FAFC] hover:text-[#B7F45B] hover:border-[#B7F45B]/50 transition-colors flex items-center justify-center gap-1 sm:gap-1.5 text-xs font-semibold shrink-0 group focus-visible:outline-2 focus-visible:outline-[#B7F45B]"
              aria-label={`Shopping Cart${itemCount > 0 ? ` (${itemCount})` : ''}`}
            >
              <ShoppingBag className="w-4 h-4 text-[#83D9C1] group-hover:text-[#B7F45B] transition-colors shrink-0" />
              {itemCount > 0 && (
                <span className="bg-[#B7F45B] text-[#0B0D12] text-[10px] font-bold px-1.5 py-0.2 rounded-full leading-none shrink-0">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Primary CTA Button: Electric Violet with Lime hover highlight */}
            <Link
              to="/start-a-project"
              className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1.5 min-[360px]:px-3 min-[360px]:py-2 sm:px-5 sm:py-2.5 rounded-[8px] bg-[#8B7CF6] hover:bg-[#7664F4] border border-[#8B7CF6] text-white font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 shadow-lg shadow-[#8B7CF6]/25 hover:shadow-[#B7F45B]/30 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B7F45B]"
            >
              <span>
                <span className="hidden min-[400px]:inline">Start a </span>Project
              </span>
              <ArrowRight className="hidden min-[340px]:inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.4] shrink-0" />
            </Link>

            {/* Mobile menu hamburger toggle - strictly hidden on desktop (>=1024px) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden flex items-center justify-center w-8 h-8 min-[360px]:w-9 min-[360px]:h-9 sm:w-10 sm:h-10 rounded-[8px] bg-[#121620] border border-[#232B3E] text-[#F8FAFC] hover:text-[#B7F45B] hover:border-[#B7F45B]/50 focus:outline-none focus:ring-2 focus:ring-[#B7F45B] transition-all cursor-pointer shrink-0 p-0"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-[#F8FAFC] stroke-[2.2] shrink-0" />
              ) : (
                <Menu className="w-5 h-5 text-[#F8FAFC] stroke-[2.2] shrink-0" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer - strictly hidden on desktop (>=1024px) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-menu"
          className="mobile-drawer-slide lg:hidden block bg-[#0B0D12] border-b border-[#232B3E] max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-5 space-y-4 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-[8px] text-base font-semibold transition-colors ${
                isPathActive('/', true) ? 'text-[#B7F45B] bg-[#121620]' : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              Home
            </Link>

            {/* Services Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] text-base font-semibold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesExpanded ? 'rotate-180 text-[#B7F45B]' : 'text-[#94A3B8]'
                  }`}
                />
              </button>

              {mobileServicesExpanded && (
                <div className="ml-3 pl-3 border-l-2 border-[#232B3E] space-y-3 py-2">
                  <Link
                    to="/services"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-[#B7F45B] py-1"
                  >
                    Browse All Services &rarr;
                  </Link>

                  {serviceCategories.map((cat) => (
                    <div key={cat.id} className="space-y-1.5">
                      <Link
                        to={`/services/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-xs font-bold text-[#F8FAFC] hover:text-[#B7F45B]"
                      >
                        {cat.title}
                      </Link>
                      <div className="space-y-1 pl-2">
                        {cat.services.slice(0, 4).map((srv) => (
                          <Link
                            key={srv.id}
                            to={`/services/${cat.slug}/${srv.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[11px] text-[#94A3B8] hover:text-[#83D9C1] py-0.5"
                          >
                            {srv.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/work"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-[8px] text-base font-semibold transition-colors ${
                isPathActive('/work') ? 'text-[#B7F45B] bg-[#121620]' : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              Work &amp; Portfolio
            </Link>

            {/* Digital Products Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsExpanded(!mobileProductsExpanded)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-[8px] text-base font-semibold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors cursor-pointer"
              >
                <span>Digital Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileProductsExpanded ? 'rotate-180 text-[#B7F45B]' : 'text-[#94A3B8]'
                  }`}
                />
              </button>

              {mobileProductsExpanded && (
                <div className="ml-3 pl-3 border-l-2 border-[#232B3E] space-y-2 py-2">
                  <Link
                    to="/digital-products"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs font-bold text-[#B7F45B] py-1"
                  >
                    View Storefront &rarr;
                  </Link>
                  <div className="grid grid-cols-2 gap-1.5">
                    {productCategories.slice(1).map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/digital-products/${cat.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] py-1 truncate"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-[8px] text-base font-semibold transition-colors ${
                isPathActive('/about') ? 'text-[#B7F45B] bg-[#121620]' : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              About
            </Link>

            <Link
              to="/team"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-[8px] text-base font-semibold transition-colors ${
                isPathActive('/team') ? 'text-[#B7F45B] bg-[#121620]' : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              Team
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2.5 rounded-[8px] text-base font-semibold transition-colors ${
                isPathActive('/contact') ? 'text-[#B7F45B] bg-[#121620]' : 'text-[#F8FAFC] hover:text-[#83D9C1]'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-[#232B3E] space-y-2">
            <Link
              to="/start-a-project"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-[8px] bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-sm transition-all shadow-lg shadow-[#8B7CF6]/25"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </Link>

            <Link
              to="/cart"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[8px] bg-[#121620] border border-[#232B3E] text-[#F8FAFC] text-sm font-semibold"
            >
              <ShoppingBag className="w-4 h-4 text-[#83D9C1]" />
              <span>Shopping Cart ({itemCount})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
