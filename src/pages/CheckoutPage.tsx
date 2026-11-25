import React, { useState } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Download,
  ExternalLink,
  FolderArchive,
  CreditCard,
  X,
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { navigate } = useRouter();
  const { items, total, clearCart } = useCart();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [orderReference, setOrderReference] = useState('');
  const [copiedProductIds, setCopiedProductIds] = useState<Record<string, boolean>>({});

  if (items.length === 0 && !orderConfirmed) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-[#1B1A23]">No Items in Cart</h1>
        <p className="text-sm text-[#55556A]">Please add digital products to your cart before proceeding to checkout.</p>
        <Link to="/digital-products" className="text-xs font-semibold text-[#7A00DA] underline">
          Browse Digital Products &rarr;
        </Link>
      </div>
    );
  }

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!agreedToTerms) errs.terms = 'You must agree to the Terms of Service and Digital Product License.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCompleteOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ref = `ZVR-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderReference(ref);
      setOrderConfirmed(true);
    }, 1200);
  };

  const handleSimulatedDownload = (title: string, zipFileName?: string) => {
    const fileName = zipFileName || `${title.toLowerCase().replace(/[^a-z0-9]/g, '_')}_package.zip`;
    // Simulated browser download trigger
    const element = document.createElement('a');
    const file = new Blob([
      `ZOVRA LABS (ZOVRALABS.COM) - Purchased Asset Package\nProduct: ${title}\nArchive: ${fileName}\nOrder Ref: ${orderReference}\nLicensed To: ${fullName} (${email})\n\nThis is a demonstration package manifest. In production, your secure signed S3/Cloud Storage ZIP link will stream the full ${fileName} archive.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = fileName.endsWith('.zip') ? fileName.replace('.zip', '_manifest.txt') : `${fileName}_manifest.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyTemplateUrl = (productId: string, copyUrl?: string) => {
    const targetUrl = copyUrl || `https://zovralabs.com/templates/${productId}`;
    navigator.clipboard?.writeText(targetUrl);
    setCopiedProductIds((prev) => ({ ...prev, [productId]: true }));
    setTimeout(() => {
      setCopiedProductIds((prev) => ({ ...prev, [productId]: false }));
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left">
      <div className="border-b border-[#E6E6E6] pb-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1B1A23]">
          Demo Checkout &amp; Asset Delivery
        </h1>
        <p className="text-xs text-[#55556A] mt-1">
          Complete this demonstration order to preview instant ZIP downloads and template copy links.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Customer Information & Billing Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#E6E6E6] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-3">
            <h2 className="text-sm font-bold text-[#1B1A23] uppercase tracking-wider">
              1. Customer Delivery Details
            </h2>
            <div className="flex items-center gap-1.5 text-[11px] text-[#55556A]">
              <Lock className="w-3.5 h-3.5 text-[#7A00DA]" />
              <span>Simulated Secure Session</span>
            </div>
          </div>

          <form onSubmit={handleCompleteOrder} className="space-y-4">
            <div>
              <label htmlFor="checkout-name" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                Full Name <span className="text-[#7A00DA]">*</span>
              </label>
              <input
                id="checkout-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA] transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#E6E6E6]'
                }`}
              />
              {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="checkout-email" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                Delivery Email Address <span className="text-[#7A00DA]">*</span>
              </label>
              <input
                id="checkout-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA] transition-colors ${
                  errors.email ? 'border-red-500' : 'border-[#E6E6E6]'
                }`}
              />
              <p className="text-[10px] text-[#55556A] mt-1">
                Download links and license keys will be dispatched to this email address.
              </p>
              {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="checkout-country" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                Country / Region <span className="text-[#7A00DA]">*</span>
              </label>
              <select
                id="checkout-country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA]"
              >
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Germany">Germany</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="Singapore">Singapore</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Simulated Payment Selector */}
            <div className="pt-4 border-t border-[#E6E6E6] space-y-3">
              <label className="block text-xs font-semibold text-[#1B1A23]">
                2. Payment Method (Demonstration Mode)
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-colors ${
                    paymentMethod === 'card'
                      ? 'bg-[#FFFFFF] border-[#7A00DA] text-[#1B1A23]'
                      : 'bg-[#FFFFFF]/40 border-[#E6E6E6] text-[#55556A]'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-[#7A00DA]" />
                  <span>Credit / Debit Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-semibold transition-colors ${
                    paymentMethod === 'paypal'
                      ? 'bg-[#FFFFFF] border-[#7A00DA] text-[#1B1A23]'
                      : 'bg-[#FFFFFF]/40 border-[#E6E6E6] text-[#55556A]'
                  }`}
                >
                  <span className="font-bold text-[#7A00DA] font-mono">P</span>
                  <span>PayPal Checkout</span>
                </button>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-[11px] text-[#55556A] leading-relaxed">
                Demo Notice: Real credit card inputs are disabled in this frontend preview phase. Clicking the complete button below simulates successful authorization without charging any card.
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#55556A]">
                <input
                  type="checkbox"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="rounded border-[#E6E6E6] text-[#7A00DA] focus:ring-0 mt-0.5"
                />
                <span>
                  I agree to the{' '}
                  <Link to="/terms-of-service" className="text-[#7A00DA] underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/digital-product-license" className="text-[#7A00DA] underline">
                    Digital Product License
                  </Link>
                  .
                </span>
              </label>
              {errors.terms && <p className="text-[11px] text-red-400 mt-1">{errors.terms}</p>}
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#7A00DA] hover:bg-[#6400B4] text-white font-extrabold text-xs transition-all shadow-lg shadow-[#7A00DA]/20 active:scale-95 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <span>Authorizing Simulated Order...</span>
                ) : (
                  <>
                    <span>Complete Demo Order (${total})</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Items in Order (5 cols) */}
        <div className="lg:col-span-5 bg-[#FFFFFF] border border-[#E6E6E6] rounded-2xl p-6 space-y-5">
          <h2 className="text-sm font-bold text-[#1B1A23] border-b border-[#E6E6E6] pb-3 uppercase tracking-wider">
            Order Items ({items.length})
          </h2>

          <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between gap-3 text-xs py-2 border-b border-[#E6E6E6]/60"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-10 rounded-lg overflow-hidden bg-[#FFFFFF] border border-[#E6E6E6] shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-[#1B1A23] line-clamp-1">
                      {item.product.title}
                    </span>
                    <span className="text-[11px] text-[#55556A]">
                      Qty: {item.quantity} · {item.product.fileFormat.split('+')[0]}
                    </span>
                  </div>
                </div>
                <span className="font-bold font-mono text-[#7A00DA] tabular-nums shrink-0">
                  ${item.product.price * item.quantity}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-[#E6E6E6] text-xs">
            <div className="flex justify-between text-[#55556A]">
              <span>Subtotal</span>
              <span className="font-mono text-[#1B1A23] tabular-nums">${total}</span>
            </div>
            <div className="flex justify-between text-[#55556A]">
              <span>Delivery</span>
              <span className="font-mono text-[#7A00DA]">FREE (Direct Download)</span>
            </div>
            <div className="flex justify-between items-baseline pt-2 border-t border-[#E6E6E6]">
              <span className="text-sm font-bold text-[#1B1A23]">Total Due</span>
              <span className="text-xl font-bold font-mono text-[#7A00DA] tabular-nums">
                ${total}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 text-left animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-[#E6E6E6] pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F7F0FF] text-[#7A00DA] flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1B1A23]">Order Confirmed (Demo)</h3>
                  <p className="text-xs text-[#55556A]">Reference: <strong className="text-[#7A00DA] font-mono">{orderReference}</strong></p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOrderConfirmed(false);
                  clearCart();
                  navigate('/account/downloads');
                }}
                className="p-1 rounded-lg text-[#55556A] hover:text-[#1B1A23]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs text-[#55556A]">
                Thank you, <strong className="text-[#1B1A23]">{fullName}</strong>! In accordance with the dual-delivery requirements, your purchased source files and copy links are ready below:
              </p>

              <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                {items.map((item) => {
                  const isCopied = copiedProductIds[item.product.id];
                  return (
                    <div
                      key={item.product.id}
                      className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E6E6E6] space-y-3 text-xs"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E6E6E6]/60 pb-2.5">
                        <div>
                          <span className="font-bold text-[#1B1A23] block">
                            {item.product.title}
                          </span>
                          <span className="text-[11px] text-[#55556A] font-mono">
                            ZIP File: {item.product.zipAssetFileName} ({item.product.zipAssetSize})
                          </span>
                        </div>
                        <span className="text-[11px] text-[#7A00DA] font-semibold">
                          Qty: {item.quantity} · ${item.product.price * item.quantity}
                        </span>
                      </div>

                      {/* Dual Delivery Action Row */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => handleSimulatedDownload(item.product.title, item.product.zipAssetFileName)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#7A00DA] hover:bg-[#6400B4] text-white font-bold text-xs transition-colors shadow-sm"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>Download ZIP Package</span>
                        </button>

                        {item.product.hasCopyTemplate && (
                          <button
                            type="button"
                            onClick={() => handleCopyTemplateUrl(item.product.id, item.product.copyTemplateUrl)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F0FF] border border-[#E6E6E6] text-xs font-semibold text-[#1B1A23] transition-colors"
                          >
                            {isCopied ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="text-emerald-400">Copied Template Link!</span>
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-3.5 h-3.5 text-[#7A00DA]" />
                                <span>Copy Template URL</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-[11px] text-[#55556A] leading-relaxed">
              <strong className="text-[#1B1A23] block mb-0.5">Future Production Workflow:</strong>
              The backend will automatically generate cryptographically signed download tokens and deliver an order confirmation receipt to <strong className="text-[#1B1A23]">{email}</strong>.
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setOrderConfirmed(false);
                  clearCart();
                  navigate('/account/downloads');
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#7A00DA] hover:bg-[#6400B4] text-white font-bold text-xs"
              >
                Go to My Downloads &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
