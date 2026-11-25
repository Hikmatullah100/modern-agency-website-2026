import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  HardDrive,
  FolderArchive,
} from 'lucide-react';

export const CartPage: React.FC = () => {
  const { navigate } = useRouter();
  const { items, updateQuantity, removeItem, clearCart, subtotal, total, itemCount } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-6 bg-[#0B0D12] text-[#F8FAFC]">
        <div className="w-16 h-16 rounded-full bg-[#121620] border border-[#232B3E] flex items-center justify-center mx-auto text-[#94A3B8]">
          <ShoppingBag className="w-8 h-8 text-[#83D9C1]" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] font-heading">Your Cart is Empty</h1>
          <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            You haven&apos;t added any ZOVRA LABS agency templates, e-books, or design codebases to your cart yet.
          </p>
        </div>
        <div>
          <Link
            to="/digital-products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shadow-lg shadow-[#8B7CF6]/20 transition-all"
          >
            <span>Explore Marketplace</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-10 text-left bg-[#0B0D12] text-[#F8FAFC]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#232B3E] pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] font-heading">
            Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </h1>
          <p className="text-xs text-[#94A3B8] mt-1">Review your digital assets before proceeding to checkout.</p>
        </div>
        <button
          type="button"
          onClick={clearCart}
          className="text-xs text-[#94A3B8] hover:text-[#B7F45B] hover:underline"
        >
          Clear Cart
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Cart Items List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="bg-[#121620] border border-[#232B3E] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row gap-5 items-start sm:items-center justify-between shadow-xl"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-[#0B0D12] border border-[#232B3E] shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] text-[#B7F45B] font-bold uppercase tracking-wider">{item.product.category}</span>
                  <Link
                    to={`/digital-products/${item.product.slug}`}
                    className="text-sm font-bold text-[#F8FAFC] hover:text-[#B7F45B] transition-colors block line-clamp-1 font-heading"
                  >
                    {item.product.title}
                  </Link>
                  <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
                    <span>Format: {item.product.fileFormat.split('+')[0]}</span>
                    <span>&middot;</span>
                    <span>Size: {item.product.fileSize}</span>
                  </div>
                </div>
              </div>

              {/* Quantity Controls & Price */}
              <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-[#232B3E]">
                <div className="flex items-center border border-[#232B3E] rounded-lg bg-[#181E2C]">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="p-2 text-[#94A3B8] hover:text-[#F8FAFC]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-mono font-bold text-[#F8FAFC]">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="p-2 text-[#94A3B8] hover:text-[#F8FAFC]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-base font-bold text-[#B7F45B] tabular-nums font-mono">
                    ${item.product.price * item.quantity}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="p-2 text-[#94A3B8] hover:text-red-400 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary (4 cols) */}
        <div className="lg:col-span-4 bg-[#121620] border border-[#232B3E] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <h2 className="text-lg font-bold text-[#F8FAFC] font-heading border-b border-[#232B3E] pb-4">Order Summary</h2>

          <div className="space-y-3 text-xs text-[#94A3B8]">
            <div className="flex justify-between">
              <span>Subtotal ({itemCount} items)</span>
              <span className="font-mono font-bold text-[#F8FAFC]">${subtotal}</span>
            </div>
            <div className="flex justify-between text-[#83D9C1]">
              <span>Instant Digital Delivery</span>
              <span className="font-bold">FREE</span>
            </div>
            <div className="pt-3 border-t border-[#232B3E] flex justify-between text-base font-bold text-[#F8FAFC]">
              <span>Total</span>
              <span className="text-[#B7F45B] font-mono tabular-nums">${total}</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/checkout')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs tracking-tight transition-all shadow-lg shadow-[#8B7CF6]/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
