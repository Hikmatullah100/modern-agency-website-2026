import React from 'react';
import { Link } from '../../context/RouterContext';
import { ArrowUpRight } from 'lucide-react';
import { ZovraLogo } from '../common/ZovraLogo';

export const Footer: React.FC = () => {
  const linkClass =
    'inline-block text-[#94A3B8] hover:text-[#B7F45B] transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F45B] focus-visible:rounded';

  return (
    <footer className="w-full bg-[#0B0D12] border-t border-[#232B3E] text-[#94A3B8] text-sm pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#232B3E]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F45B] focus-visible:rounded-lg p-0.5 overflow-visible"
            >
              <ZovraLogo size="lg" showText={true} showDomain={true} />
            </Link>
            <p className="text-xs sm:text-sm text-[#94A3B8] max-w-sm leading-relaxed">
              ZOVRA LABS (ZOVRALABS.COM) combines web development, AI automation, high-performance software engineering, and strategic search optimization to help ambitious brands build dominant digital presence.
            </p>
            <div className="pt-2">
              <Link
                to="/start-a-project"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:text-[#83D9C1] hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7F45B] focus-visible:rounded"
              >
                <span>Have a project in mind? Start a project with ZOVRA LABS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Agency Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-heading">Services</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className={linkClass}>
                  Services Overview
                </Link>
              </li>
              <li>
                <Link to="/services/web-development-ai" className={linkClass}>
                  Web Development &amp; AI Stack
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-ai" className={linkClass}>
                  Social Media &amp; Content AI
                </Link>
              </li>
              <li>
                <Link to="/services/seo-aeo-growth" className={linkClass}>
                  SEO, AEO &amp; Analytics
                </Link>
              </li>
              <li>
                <Link to="/work" className={linkClass}>
                  Work &amp; Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Digital Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-heading">Digital Templates</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/digital-products" className={linkClass}>
                  All Website Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/agency-website-templates" className={linkClass}>
                  Agency Website Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/business-website-templates" className={linkClass}>
                  Business Website Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/saas-website-templates" className={linkClass}>
                  SaaS Website Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/landing-page-templates" className={linkClass}>
                  Landing Page Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/ecommerce-templates" className={linkClass}>
                  E-Commerce Templates
                </Link>
              </li>
              <li>
                <Link to="/digital-products/portfolio-templates" className={linkClass}>
                  Portfolio Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources, Blog & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider font-heading">Resources &amp; Company</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/resources" className={linkClass}>
                  Resources Overview
                </Link>
              </li>
              <li>
                <Link to="/blog" className={linkClass}>
                  Articles &amp; Blog
                </Link>
              </li>
              <li>
                <Link to="/resources/seo-guides" className={linkClass}>
                  SEO &amp; AEO Guides
                </Link>
              </li>
              <li>
                <Link to="/resources/ai-automation" className={linkClass}>
                  AI Automation Guides
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkClass}>
                  About ZOVRA LABS
                </Link>
              </li>
              <li>
                <Link to="/team" className={linkClass}>
                  Team Members
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Account Links Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/privacy-policy" className={linkClass}>
              Privacy Policy
            </Link>
            <span className="text-[#232B3E] select-none" aria-hidden="true">·</span>
            <Link to="/terms-of-service" className={linkClass}>
              Terms of Service
            </Link>
            <span className="text-[#232B3E] select-none" aria-hidden="true">·</span>
            <Link to="/refund-policy" className={linkClass}>
              Refund Policy
            </Link>
            <span className="text-[#232B3E] select-none" aria-hidden="true">·</span>
            <Link to="/digital-product-license" className={linkClass}>
              Digital Product License
            </Link>
            <span className="text-[#232B3E] select-none" aria-hidden="true">·</span>
            <Link to="/account/downloads" className={linkClass}>
              Customer Downloads
            </Link>
          </div>

          <p className="text-[11px] text-[#94A3B8]">
            &copy; 2026 ZOVRA LABS (ZOVRALABS.COM). All rights reserved.
          </p>
        </div>

        {/* Clear Phase Boundary Notice */}
        <div className="mt-6 pt-4 border-t border-[#232B3E] text-center">
          <p className="text-[11px] text-[#94A3B8]/80 max-w-3xl mx-auto">
            ZOVRA LABS digital agency release. Digital product purchases and project inquiry forms operate in preview mode. Contact support at <span className="text-[#83D9C1]">contact@zovralabs.com</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
