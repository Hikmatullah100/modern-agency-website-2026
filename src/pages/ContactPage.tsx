import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, CheckCircle2, Mail, MessageSquare, Clock, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Valid email is required.';
    if (!message.trim()) errs.message = 'Message is required.';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 text-left bg-[#0B0D12] text-[#F8FAFC]">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
          CONTACT ZOVRA LABS
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          Get in Touch with ZOVRA LABS
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          Have a question about our services, digital products storefront, or custom technical development? Send us a message or request a structured project proposal. Direct email: <strong className="text-[#83D9C1]">contact@zovralabs.com</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: General Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-[#121620] border border-[#232B3E] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="border-b border-[#232B3E] pb-3">
            <h2 className="text-base font-bold text-[#F8FAFC] font-heading">Send an Engineering Inquiry</h2>
            <p className="text-xs text-[#94A3B8]">We typically respond within 1 business day.</p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-[#181E2C] border border-[#B7F45B] text-[#B7F45B] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#F8FAFC] font-heading">Message Received by ZOVRA LABS</h3>
              <p className="text-xs text-[#94A3B8] max-w-sm mx-auto">
                Thank you, {name}. Your inquiry has been routed to our technical leads at <span className="text-[#83D9C1]">contact@zovralabs.com</span>.
              </p>
              <div className="pt-2">
                <Link
                  to="/start-a-project"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B7F45B] hover:underline"
                >
                  <span>Go to Project Scoping Form &rarr;</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Your Name <span className="text-[#B7F45B]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: '' }));
                  }}
                  placeholder="Jane Smith"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] ${
                    errors.name ? 'border-red-500' : 'border-[#232B3E]'
                  }`}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Email Address <span className="text-[#B7F45B]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="jane@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] ${
                    errors.email ? 'border-red-500' : 'border-[#232B3E]'
                  }`}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Product inquiry, licensing, or custom technical build"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6]"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Message <span className="text-[#B7F45B]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: '' }));
                  }}
                  placeholder="How can ZOVRA LABS help your business?"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] ${
                    errors.message ? 'border-red-500' : 'border-[#232B3E]'
                  }`}
                />
                {errors.message && (
                  <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs transition-all shadow-md shadow-[#8B7CF6]/20 cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Right: Quick Links & Scoping Callout (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-[#F8FAFC] font-heading">Planning a Full Client Build?</h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              If you have a defined project with budget expectations, timelines, and required deliverables, use our detailed Project Scoping funnel.
            </p>
            <div className="pt-2">
              <Link
                to="/start-a-project"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#8B7CF6] hover:bg-[#7664F4] text-white font-bold text-xs shadow-md"
              >
                <span>Open Project Scoping Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="bg-[#121620] border border-[#232B3E] rounded-3xl p-6 space-y-4 text-xs text-[#94A3B8] shadow-xl">
            <h4 className="font-bold text-[#F8FAFC] font-heading">Frequently Answered</h4>
            <div className="space-y-3">
              <div>
                <strong className="text-[#F8FAFC] block">Do you sign NDAs before discovery?</strong>
                <span>Yes, mutual NDAs can be executed prior to reviewing sensitive technical repositories or business plans.</span>
              </div>
              <div>
                <strong className="text-[#F8FAFC] block">Where are files delivered after digital purchase?</strong>
                <span>Customers receive immediate on-screen source ZIP download access plus permanent reference in their customer account.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
