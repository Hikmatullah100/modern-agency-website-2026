import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export const StartProjectPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('United States');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [budgetTier, setBudgetTier] = useState('');
  const [timeline, setTimeline] = useState('');
  const [projectDetails, setProjectDetails] = useState('');
  const [contactMethod, setContactMethod] = useState('email');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    { value: 'website-design', label: 'Website Design & UI/UX' },
    { value: 'website-development', label: 'Website Development (React / Next / Vite)' },
    { value: 'ai-development', label: 'AI Web Development & LLM Integration' },
    { value: 'automation', label: 'Website & Workflow Automation' },
    { value: 'social-media-marketing', label: 'Social Media Marketing' },
    { value: 'ai-content', label: 'AI Content & Video Creation' },
    { value: 'lead-generation', label: 'AI Lead Generation & Automated Outreach' },
    { value: 'seo', label: 'Organic Search Engine Optimization (SEO)' },
    { value: 'aeo-geo', label: 'Answer Engine (AEO) & Generative Search (GEO)' },
    { value: 'guest-posting', label: 'Guest Posting & High-Authority Backlinks' },
    { value: 'publishing', label: 'Turnkey Blog & Article Publishing' },
    { value: 'paid-ads', label: 'Paid Search & Social Advertising' },
    { value: 'digital-products', label: 'Custom Digital Products & Design Systems' },
    { value: 'other', label: 'Other Custom Scope' },
  ];

  const budgetOptions = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 – $15,000' },
    { value: '15k-30k', label: '$15,000 – $30,000' },
    { value: '30k-plus', label: '$30,000+' },
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Within 2–4 Weeks (Immediate)' },
    { value: '1-2-months', label: '1–2 Months' },
    { value: '3-months-plus', label: '3+ Months / Flexible' },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!email.trim()) {
      errs.email = 'Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!country.trim()) errs.country = 'Country is required.';
    if (!serviceCategory) errs.serviceCategory = 'Please select a primary service category.';
    if (!projectDetails.trim()) errs.projectDetails = 'Please provide brief details about your project.';
    if (!privacyConsent) errs.privacyConsent = 'You must agree to the privacy policy to submit.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12 text-left bg-[#0B0D12] text-[#F8FAFC]">
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-[#B7F45B]">
          PROJECT SCOPING INQUIRY
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight font-heading">
          Start a Project with ZOVRA LABS
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          Tell us what you want to build, optimize, or automate. Our engineering and strategy leads review every submission and respond with a structured technical recommendation.
        </p>
      </div>

      {isSuccess ? (
        <div className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-3xl p-8 sm:p-12 space-y-6 animate-in fade-in duration-300 text-left">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#E6E6E6] pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#F7F0FF] text-[#7A00DA] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A00DA] block">
                  Demonstration Submission
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#1B1A23]">
                  Project Inquiry Validated &amp; Logged
                </h2>
              </div>
            </div>
            <span className="text-xs font-mono text-[#55556A] px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#E6E6E6]">
              STATUS: DEMO OK
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#55556A] leading-relaxed">
            Thank you, <strong className="text-[#1B1A23]">{fullName}</strong>! In this frontend demonstration release, your scoping parameters have been validated. In production, our automated pipeline routes this directly to our leads with instant calendar dispatch to <strong className="text-[#1B1A23]">{email}</strong>.
          </p>

          {/* Submission Recap Card */}
          <div className="bg-[#FFFFFF] border border-[#E6E6E6] rounded-2xl p-5 space-y-3 text-xs">
            <h3 className="font-bold text-[#1B1A23] uppercase tracking-wider text-[11px] border-b border-[#E6E6E6] pb-2">
              Submitted Parameters (Client Snapshot)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#55556A]">
              <div>
                <span className="text-[#55556A] block text-[11px]">Client Name:</span>
                <strong className="text-[#1B1A23]">{fullName}</strong>
              </div>
              <div>
                <span className="text-[#55556A] block text-[11px]">Organization:</span>
                <strong className="text-[#1B1A23]">{companyName || 'Not specified'}</strong>
              </div>
              <div>
                <span className="text-[#55556A] block text-[11px]">Delivery Email:</span>
                <strong className="text-[#1B1A23]">{email}</strong>
              </div>
              <div>
                <span className="text-[#55556A] block text-[11px]">Country:</span>
                <strong className="text-[#1B1A23]">{country}</strong>
              </div>
              <div>
                <span className="text-[#55556A] block text-[11px]">Primary Service:</span>
                <strong className="text-[#7A00DA]">
                  {serviceOptions.find((o) => o.value === serviceCategory)?.label || serviceCategory}
                </strong>
              </div>
              <div>
                <span className="text-[#55556A] block text-[11px]">Budget Tier:</span>
                <strong className="text-[#1B1A23]">
                  {budgetOptions.find((o) => o.value === budgetTier)?.label || 'Not specified'}
                </strong>
              </div>
            </div>
            <div className="pt-2 border-t border-[#E6E6E6]/60">
              <span className="text-[#55556A] block text-[11px]">Project Brief:</span>
              <p className="text-[#1B1A23] mt-1 italic">&ldquo;{projectDetails}&rdquo;</p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => {
                setIsSuccess(false);
                setProjectDetails('');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FFFFFF] hover:bg-[#F7F0FF] border border-[#E6E6E6] text-xs font-semibold text-[#1B1A23]"
            >
              Submit Another Inquiry
            </button>
            <Link
              to="/services"
              className="px-5 py-2.5 rounded-xl bg-[#7A00DA] hover:bg-[#6400B4] text-white font-bold text-xs text-center"
            >
              Browse Agency Services &rarr;
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="bg-[#121620] border border-[#232B3E] rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          {/* Section 1: Contact Details */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-widest border-b border-[#232B3E] pb-2 font-heading">
              1. Contact &amp; Organization Details
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="inquiry-fullname" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Full Name <span className="text-[#B7F45B]">*</span>
                </label>
                <input
                  id="inquiry-fullname"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? 'inquiry-fullname-error' : undefined}
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                  }}
                  placeholder="Alexander Wright"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] ${
                    errors.fullName ? 'border-red-500' : 'border-[#232B3E]'
                  }`}
                />
                {errors.fullName && (
                  <p id="inquiry-fullname-error" role="alert" className="text-[11px] text-red-400 mt-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="inquiry-company" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Business or Company Name (Optional)
                </label>
                <input
                  id="inquiry-company"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Acme Technologies Ltd."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border border-[#232B3E] text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6]"
                />
              </div>

              <div>
                <label htmlFor="inquiry-email" className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                  Corporate Email Address <span className="text-[#B7F45B]">*</span>
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                  }}
                  placeholder="alexander@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#181E2C] border text-xs text-[#F8FAFC] placeholder-[#94A3B8] focus:outline-none focus:border-[#8B7CF6] ${
                    errors.email ? 'border-red-500' : 'border-[#232B3E]'
                  }`}
                />
                {errors.email && (
                  <p id="inquiry-email-error" role="alert" className="text-[11px] text-red-400 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="inquiry-country" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Country <span className="text-[#7A00DA]">*</span>
                </label>
                <input
                  id="inquiry-country"
                  type="text"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.country}
                  aria-describedby={errors.country ? 'inquiry-country-error' : undefined}
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    if (errors.country) setErrors((prev) => ({ ...prev, country: '' }));
                  }}
                  placeholder="United States"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA] ${
                    errors.country ? 'border-red-500' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.country && (
                  <p id="inquiry-country-error" role="alert" className="text-[11px] text-red-400 mt-1">
                    {errors.country}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="inquiry-website" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Current Website URL (Optional)
                </label>
                <input
                  id="inquiry-website"
                  type="url"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourcompany.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA]"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Project Scope & Requirements */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-[#1B1A23] uppercase tracking-wider border-b border-[#E6E6E6] pb-2">
              2. Project Scope &amp; Deliverables
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-3">
                <label htmlFor="inquiry-category" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Primary Service Category <span className="text-[#7A00DA]">*</span>
                </label>
                <select
                  id="inquiry-category"
                  required
                  aria-required="true"
                  aria-invalid={!!errors.serviceCategory}
                  aria-describedby={errors.serviceCategory ? 'inquiry-category-error' : undefined}
                  value={serviceCategory}
                  onChange={(e) => {
                    setServiceCategory(e.target.value);
                    if (errors.serviceCategory) setErrors((prev) => ({ ...prev, serviceCategory: '' }));
                  }}
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA] ${
                    errors.serviceCategory ? 'border-red-500' : 'border-[#E6E6E6]'
                  }`}
                >
                  <option value="">Select a service category...</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.serviceCategory && (
                  <p id="inquiry-category-error" role="alert" className="text-[11px] text-red-400 mt-1">
                    {errors.serviceCategory}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="inquiry-budget" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Estimated Budget (Optional)
                </label>
                <select
                  id="inquiry-budget"
                  value={budgetTier}
                  onChange={(e) => setBudgetTier(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA]"
                >
                  <option value="">Select budget tier...</option>
                  {budgetOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-timeline" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Expected Timeline (Optional)
                </label>
                <select
                  id="inquiry-timeline"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA]"
                >
                  <option value="">Select timeline...</option>
                  {timelineOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="inquiry-contact-pref" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Preferred Contact
                </label>
                <select
                  id="inquiry-contact-pref"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E6E6] text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA]"
                >
                  <option value="email">Email Scoping Brief</option>
                  <option value="video">Google Meet / Video Call</option>
                  <option value="phone">Direct Phone Call</option>
                </select>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="inquiry-details" className="block text-xs font-semibold text-[#1B1A23] mb-1">
                  Project Details &amp; Objectives <span className="text-[#7A00DA]">*</span>
                </label>
                <textarea
                  id="inquiry-details"
                  rows={4}
                  required
                  aria-required="true"
                  aria-invalid={!!errors.projectDetails}
                  aria-describedby={errors.projectDetails ? 'inquiry-details-error' : undefined}
                  value={projectDetails}
                  onChange={(e) => {
                    setProjectDetails(e.target.value);
                    if (errors.projectDetails) setErrors((prev) => ({ ...prev, projectDetails: '' }));
                  }}
                  placeholder="Outline your primary goals, technical requirements, existing pain points, and target outcome..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-[#FFFFFF] border text-xs text-[#1B1A23] focus:outline-none focus:border-[#7A00DA] ${
                    errors.projectDetails ? 'border-red-500' : 'border-[#E6E6E6]'
                  }`}
                />
                {errors.projectDetails && (
                  <p id="inquiry-details-error" role="alert" className="text-[11px] text-red-400 mt-1">
                    {errors.projectDetails}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Privacy Consent */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#55556A]">
              <input
                type="checkbox"
                required
                aria-required="true"
                aria-invalid={!!errors.privacyConsent}
                aria-describedby={errors.privacyConsent ? 'inquiry-privacy-error' : undefined}
                checked={privacyConsent}
                onChange={(e) => {
                  setPrivacyConsent(e.target.checked);
                  if (errors.privacyConsent) setErrors((prev) => ({ ...prev, privacyConsent: '' }));
                }}
                className="rounded border-[#E6E6E6] text-[#7A00DA] focus:ring-0 mt-0.5"
              />
              <span>
                I agree to the processing of this project inquiry in accordance with the{' '}
                <Link to="/privacy-policy" className="text-[#7A00DA] underline">
                  Privacy Policy
                </Link>
                . We do not sell or share confidential project briefs.
              </span>
            </label>
            {errors.privacyConsent && (
              <p id="inquiry-privacy-error" role="alert" className="text-[11px] text-red-400 mt-1">
                {errors.privacyConsent}
              </p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#7A00DA] hover:bg-[#6400B4] text-white font-extrabold text-xs transition-all shadow-lg shadow-[#7A00DA]/20 active:scale-95 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Validating Project Scope...</span>
              ) : (
                <>
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
