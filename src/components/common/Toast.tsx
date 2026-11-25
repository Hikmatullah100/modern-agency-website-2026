import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from '../../context/RouterContext';

export const Toast: React.FC = () => {
  const { toastMessage, dismissToast } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-[#121620] border border-[#232B3E] text-[#F8FAFC] p-4 rounded-[12px] shadow-2xl shadow-black/80 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <CheckCircle2 className="w-5 h-5 text-[#83D9C1] shrink-0 mt-0.5" />
      <div className="flex-1 text-xs">
        <p className="font-bold text-[#F8FAFC] font-heading">{toastMessage}</p>
        <div className="mt-1.5 flex items-center gap-3">
          <Link
            to="/cart"
            onClick={dismissToast}
            className="font-bold text-[#B7F45B] hover:underline"
          >
            View Cart &rarr;
          </Link>
          <Link
            to="/checkout"
            onClick={dismissToast}
            className="text-[#94A3B8] hover:text-[#F8FAFC]"
          >
            Checkout
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={dismissToast}
        className="text-[#94A3B8] hover:text-[#F8FAFC] p-1 rounded-md"
        aria-label="Dismiss notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
