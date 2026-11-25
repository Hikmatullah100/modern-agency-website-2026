import React, { useMemo, useEffect } from 'react';
import { useRouter, Link, normalizePath } from '../../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';
import { allServices, serviceCategories } from '../../data/servicesData';
import { digitalProducts, productCategories } from '../../data/productsData';
import { portfolioProjects } from '../../data/projectsData';
import { teamMembers } from '../../data/teamData';
import { blogPosts, resourceCategories } from '../../data/blogData';

interface BreadcrumbItem {
  label: string;
  path: string;
  isLast: boolean;
}

export const Breadcrumbs: React.FC = () => {
  const { path } = useRouter();
  const currentPath = normalizePath(path);

  // Generate breadcrumb items
  const items: BreadcrumbItem[] = useMemo(() => {
    if (currentPath === '/') return [];
    const segments = currentPath.split('/').filter(Boolean);
    const breadcrumbList: BreadcrumbItem[] = [
      {
        label: 'Home',
        path: '/',
        isLast: segments.length === 0,
      },
    ];

    let accumulatedPath = '';

    segments.forEach((segment, index) => {
      accumulatedPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      let label = segment.replace(/-/g, ' ');

      // 1. Services Lookups
      if (segment === 'services') {
        label = 'Services';
      } else {
        const catMatch = serviceCategories.find((c) => c.slug === segment);
        if (catMatch) {
          label = catMatch.title;
        } else {
          const srvMatch = allServices.find((s) => s.slug === segment);
          if (srvMatch) {
            label = srvMatch.title;
          }
        }
      }

      // 2. Digital Products Lookups
      if (segment === 'digital-products') {
        label = 'Digital Products';
      } else {
        const prodCatMatch = productCategories.find((c) => c.slug === segment);
        if (prodCatMatch) {
          label = prodCatMatch.name;
        } else {
          const prodMatch = digitalProducts.find((p) => p.slug === segment);
          if (prodMatch) {
            label = prodMatch.title;
          }
        }
      }

      // 3. Work & Portfolio Lookups
      if (segment === 'work') {
        label = 'Work';
      } else if (segment === 'case-studies') {
        label = 'Case Studies';
      } else {
        const projMatch = portfolioProjects.find((p) => p.slug === segment);
        if (projMatch) {
          label = projMatch.title;
        }
      }

      // 4. Team Lookups
      if (segment === 'team') {
        label = 'Team';
      } else {
        const teamMatch = teamMembers.find((m) => m.slug === segment);
        if (teamMatch) {
          label = teamMatch.name;
        }
      }

      // 5. Resources & Blog Lookups
      if (segment === 'resources') {
        label = 'Resources';
      } else if (segment === 'blog') {
        label = 'Articles';
      } else {
        const resCatMatch = resourceCategories.find((c) => c.slug === segment);
        if (resCatMatch) {
          label = resCatMatch.name;
        } else {
          const blogMatch = blogPosts.find((b) => b.slug === segment);
          if (blogMatch) {
            label = blogMatch.title;
          }
        }
      }

      // 6. Direct Pages
      if (segment === 'about') label = 'About';
      if (segment === 'contact') label = 'Contact';
      if (segment === 'start-a-project') label = 'Start a Project';
      if (segment === 'cart') label = 'Shopping Cart';
      if (segment === 'checkout') label = 'Checkout';
      if (segment === 'account') label = 'Customer Portal';
      if (segment === 'downloads') label = 'My Downloads';
      if (segment === 'orders') label = 'Order History';
      if (segment === 'profile') label = 'Profile';
      if (segment === 'privacy-policy') label = 'Privacy Policy';
      if (segment === 'terms-of-service') label = 'Terms of Service';
      if (segment === 'refund-policy') label = 'Refund Policy';
      if (segment === 'digital-product-license') label = 'Product License';
      if (segment === '404') label = 'Page Not Found';

      breadcrumbList.push({
        label,
        path: accumulatedPath,
        isLast,
      });
    });

    return breadcrumbList;
  }, [currentPath]);

  // Inject BreadcrumbList JSON-LD Schema for Search Engines (SEO)
  useEffect(() => {
    const existingScript = document.getElementById('zovra-breadcrumbs-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://zovralabs.com';

    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: item.label,
        item: `${origin}${item.path}`,
      })),
    };

    const script = document.createElement('script');
    script.id = 'zovra-breadcrumbs-jsonld';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('zovra-breadcrumbs-jsonld');
      if (el) el.remove();
    };
  }, [items]);

  if (currentPath === '/') {
    return null;
  }

  return (
    <div className="w-full bg-[#0B0D12]/90 backdrop-blur-sm border-b border-[#232B3E] py-2.5 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="overflow-x-auto scrollbar-none">
          <ol className="flex items-center gap-1.5 text-xs text-[#94A3B8] whitespace-nowrap min-w-max">
            {items.map((item, index) => (
              <li key={item.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight
                    className="w-3.5 h-3.5 text-[#232B3E] shrink-0"
                    aria-hidden="true"
                  />
                )}

                {item.isLast ? (
                  <span
                    className="font-semibold text-[#B7F45B] truncate max-w-[240px] sm:max-w-md block"
                    aria-current="page"
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 text-[#94A3B8] hover:text-[#83D9C1] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#B7F45B] rounded px-1 py-0.5"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5 text-[#94A3B8]" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};
