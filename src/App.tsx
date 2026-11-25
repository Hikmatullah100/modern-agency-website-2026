/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { RouterProvider, useRouter, normalizePath } from './context/RouterContext';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Breadcrumbs } from './components/layout/Breadcrumbs';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/common/Toast';

// Pages
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceCategoryPage } from './pages/ServiceCategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyDetailPage } from './pages/CaseStudyDetailPage';
import { MarketplacePage } from './pages/MarketplacePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { TeamMemberPage } from './pages/TeamMemberPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { StartProjectPage } from './pages/StartProjectPage';
import { LegalPage } from './pages/LegalPage';
import { AccountPage } from './pages/AccountPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Data lookups
import { allServices } from './data/servicesData';
import { digitalProducts, productCategories } from './data/productsData';

const AppContent: React.FC = () => {
  const { path } = useRouter();
  const currentPath = normalizePath(path);

  const renderRoute = () => {
    // 1. Home
    if (currentPath === '/') {
      return <HomePage />;
    }

    // 2. Services Overview
    if (currentPath === '/services') {
      return <ServicesPage />;
    }

    // 3. Service Category Pages
    if (currentPath === '/services/web-development-ai') {
      return <ServiceCategoryPage categorySlug="web-development-ai" />;
    }
    if (currentPath === '/services/social-media-ai') {
      return <ServiceCategoryPage categorySlug="social-media-ai" />;
    }
    if (currentPath === '/services/seo-aeo-growth') {
      return <ServiceCategoryPage categorySlug="seo-aeo-growth" />;
    }

    // 4. Nested Service Details: /services/:catSlug/:srvSlug or /services/:srvSlug
    if (currentPath.startsWith('/services/')) {
      const parts = currentPath.split('/').filter(Boolean);
      const serviceSlug = parts[parts.length - 1];
      const match = allServices.find((s) => s.slug === serviceSlug);
      if (match) {
        return <ServiceDetailPage serviceSlug={serviceSlug} />;
      }
    }

    // 5. Work & Case Studies
    if (currentPath === '/work/case-studies') {
      return <WorkPage isCaseStudiesOnly={true} />;
    }
    if (currentPath === '/work') {
      return <WorkPage />;
    }
    if (currentPath.startsWith('/work/')) {
      const projectSlug = currentPath.replace('/work/', '');
      return <CaseStudyDetailPage projectSlug={projectSlug} />;
    }

    // 6. Digital Products Marketplace & Categories
    if (currentPath === '/digital-products') {
      return <MarketplacePage initialCategorySlug="all" />;
    }

    const validCategorySlugs = [
      'all',
      'business-website-templates',
      'agency-website-templates',
      'portfolio-templates',
      'landing-page-templates',
      'ecommerce-templates',
      'saas-website-templates',
      // Legacy aliases
      'website-templates',
      'business-templates',
      'fashion-templates',
      'travel-templates',
      'hospitality-templates',
      'social-media-templates',
      'marketing-templates',
      'banners-graphics',
      'downloads',
      'ebooks',
    ];

    if (currentPath.startsWith('/digital-products/')) {
      const subPath = currentPath.replace('/digital-products/', '');
      const isCategory =
        productCategories.some((c) => c.slug === subPath) ||
        validCategorySlugs.includes(subPath);

      if (isCategory) {
        return <MarketplacePage initialCategorySlug={subPath} />;
      }
      const productMatch = digitalProducts.find((p) => p.slug === subPath);
      if (productMatch) {
        return <ProductDetailPage productSlug={subPath} />;
      }
    }

    // 7. Cart & Checkout
    if (currentPath === '/cart') {
      return <CartPage />;
    }
    if (currentPath === '/checkout') {
      return <CheckoutPage />;
    }

    // 8. About & Team
    if (currentPath === '/about') {
      return <AboutPage />;
    }
    if (currentPath === '/team') {
      return <TeamPage />;
    }
    if (currentPath.startsWith('/team/')) {
      const memberSlug = currentPath.replace('/team/', '');
      return <TeamMemberPage memberSlug={memberSlug} />;
    }

    // 9. Resources & Blog
    if (currentPath === '/resources' || currentPath === '/blog') {
      return <ResourcesPage />;
    }
    if (currentPath === '/resources/seo-guides') {
      return <ResourcesPage filterCategorySlug="seo-guides" />;
    }
    if (currentPath === '/resources/ai-automation') {
      return <ResourcesPage filterCategorySlug="ai-automation" />;
    }
    if (currentPath === '/resources/digital-marketing') {
      return <ResourcesPage filterCategorySlug="digital-marketing" />;
    }
    if (currentPath === '/resources/web-development') {
      return <ResourcesPage filterCategorySlug="web-development" />;
    }
    if (currentPath.startsWith('/blog/')) {
      const postSlug = currentPath.replace('/blog/', '');
      return <BlogDetailPage postSlug={postSlug} />;
    }

    // 10. Contact & Start a Project
    if (currentPath === '/contact') {
      return <ContactPage />;
    }
    if (currentPath === '/start-a-project') {
      return <StartProjectPage />;
    }

    // 11. Customer Account
    if (currentPath === '/account' || currentPath === '/account/downloads') {
      return <AccountPage initialTab="downloads" />;
    }
    if (currentPath === '/account/orders') {
      return <AccountPage initialTab="orders" />;
    }
    if (currentPath === '/account/profile') {
      return <AccountPage initialTab="profile" />;
    }

    // 12. Legal Pages
    if (currentPath === '/privacy-policy') {
      return <LegalPage type="privacy" />;
    }
    if (currentPath === '/terms-of-service') {
      return <LegalPage type="terms" />;
    }
    if (currentPath === '/refund-policy') {
      return <LegalPage type="refund" />;
    }
    if (currentPath === '/digital-product-license') {
      return <LegalPage type="license" />;
    }

    // 13. 404
    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0D12] text-[#F8FAFC] selection:bg-[#B7F45B] selection:text-[#0B0D12] font-sans">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </RouterProvider>
  );
}
