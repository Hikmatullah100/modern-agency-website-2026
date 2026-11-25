import React from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, Home, Compass, ShoppingBag } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-[#F8FAFC] flex items-center justify-center px-4 py-24">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="text-6xl sm:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#B7F45B] via-[#83D9C1] to-[#8B7CF6] font-mono tracking-tight">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-4xl font-black text-[#F8FAFC] font-heading">Page Not Found</h1>
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            The route you requested could not be located on ZOVRALABS.COM. Navigate back to one of our main portals below:
          </p>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7C6BE6] text-white font-bold text-xs shadow-lg shadow-[#8B7CF6]/20 transition-all hover:scale-105"
          >
            <Home className="w-3.5 h-3.5" />
            <span>ZOVRA Home</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121620] hover:bg-[#1A202C] border border-[#232B3E] text-[#F8FAFC] font-semibold text-xs transition-all hover:border-[#B7F45B]/50"
          >
            <Compass className="w-3.5 h-3.5 text-[#B7F45B]" />
            <span>Our Services</span>
          </Link>
          <Link
            to="/digital-products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#121620] hover:bg-[#1A202C] border border-[#232B3E] text-[#F8FAFC] font-semibold text-xs transition-all hover:border-[#83D9C1]/50"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#83D9C1]" />
            <span>Digital Marketplace</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
