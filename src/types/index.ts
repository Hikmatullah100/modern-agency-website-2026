export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: 'web-development-ai' | 'social-media-ai' | 'seo-aeo-growth';
  categoryTitle: string;
  shortDescription: string;
  heroHeadline: string;
  businessProblems: string[];
  scope: string[];
  deliverables: string[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export interface ServiceCategory {
  id: 'web-development-ai' | 'social-media-ai' | 'seo-aeo-growth';
  slug: string;
  title: string;
  tagline: string;
  description: string;
  services: ServiceItem[];
  icon: string;
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  clientIndustry: string;
  summary: string;
  challenge: string;
  objectives?: string[];
  strategy: string;
  deliverables: string[];
  implementationProcess?: { step: string; phase: string; details: string }[];
  technologies: string[];
  results?: { metric: string; label: string }[];
  lessonsLearned?: string;
  relatedServices?: { title: string; path: string }[];
  isDemoSample: boolean;
  image: string;
  featured?: boolean;
}

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  rating?: number;
  reviewsCount?: number;
  fileFormat: string;
  fileSize: string;
  includedFiles: string[];
  softwareCompatibility: string[];
  keyFeatures: string[];
  licenseType: string;
  hasLiveDemo?: boolean;
  demoUrl?: string;
  zipAssetFileName: string;
  zipAssetSize: string;
  hasCopyTemplate?: boolean;
  copyTemplateUrl?: string;
  galleryImages?: string[];
  featured?: boolean;
  isNew?: boolean;
  isPopular?: boolean;
  isDemoSample?: boolean;
  deliveryType?: string;
  techStack?: string[];
}

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  focusAreas: string[];
  keyCompetencies: string[];
  quote: string;
  image?: string;
  initials: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'seo-guides' | 'ai-automation' | 'digital-marketing' | 'web-development';
  categorySlug?: string;
  categoryTitle: string;
  excerpt: string;
  readTime: string;
  publishDate: string;
  author: string;
  authorRole: string;
  content: { heading: string; paragraphs: string[] }[];
  keyTakeaways: string[];
}

export interface CartItem {
  product: DigitalProduct;
  quantity: number;
}
