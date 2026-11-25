import { BlogPost } from '../types';

export interface ResourceCategoryInfo {
  slug: 'seo-guides' | 'ai-automation' | 'digital-marketing' | 'web-development';
  name: string;
  description: string;
}

export const resourceCategories: ResourceCategoryInfo[] = [
  { slug: 'seo-guides', name: 'SEO & Search Guides', description: 'Actionable manuals on technical crawl health, Core Web Vitals, and Answer Engine Optimization (AEO).' },
  { slug: 'ai-automation', name: 'AI & Automation', description: 'Practical workflows for integrating AI models, lead qualification bots, and webhook pipelines.' },
  { slug: 'digital-marketing', name: 'Digital Marketing Insights', description: 'B2B social distribution tactics, high-retention video formats, and multi-touch CAC attribution.' },
  { slug: 'web-development', name: 'Web Development Tutorials', description: 'Modern React 19 patterns, Tailwind CSS v4 token management, and accessible frontend systems.' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'post-01',
    slug: 'optimizing-websites-for-answer-engine-optimization-aeo',
    title: 'How to Optimize Your Website for Answer Engine Optimization (AEO)',
    category: 'seo-guides',
    categorySlug: 'seo-guides',
    categoryTitle: 'SEO & Search Guides',
    excerpt: 'As users query Perplexity and ChatGPT directly for solutions, learn how to structure your entities and schemas to win AI citations.',
    readTime: '6 min read',
    publishDate: 'October 2026',
    author: 'Ali',
    authorRole: 'SEO & Growth Lead',
    keyTakeaways: [
      'AI answer engines rely heavily on verified Knowledge Graph entities and authoritative factual statements.',
      'JSON-LD schema markup (FAQPage, Organization, ItemList) provides machine-readable context.',
      'Comparison tables and unambiguous definition headers increase LLM citation frequency.',
    ],
    content: [
      {
        heading: 'The Shift From 10 Blue Links to Direct Synthesis',
        paragraphs: [
          'For over twenty years, search optimization focused almost exclusively on getting your URL into the top three organic search results on Google. However, the rise of AI search engines—such as Perplexity, ChatGPT Search, and Google AI Overviews—has radically reshaped user research behavior.',
          'Instead of scanning multiple tabs, decision-makers increasingly prompt an AI model for direct recommendations and summaries. If your website is not engineered for machine citation, your brand remains invisible in these answers.',
        ],
      },
      {
        heading: 'Structuring Content for Large Language Models',
        paragraphs: [
          'LLMs thrive on clear semantic structure. Avoid burying key answers inside verbose conversational prose. Use explicit question-and-answer pairs, define technical terms in the first sentence, and present comparative criteria in structured HTML tables.',
          'When an answer engine parses a page, concise definition blocks with direct evidence are significantly more likely to be selected as the foundational source citation.',
        ],
      },
      {
        heading: 'Verifying Entity Authority in Structured Schema',
        paragraphs: [
          'Deploying comprehensive JSON-LD schemas tells answer engines exactly what entities exist on your page, how they relate to known organizations, and what services you deliver. Link your Organization schema directly to verified external profiles such as Wikidata and LinkedIn.',
        ],
      },
    ],
  },
  {
    id: 'post-02',
    slug: 'practical-ai-automation-for-inbound-lead-funnels',
    title: 'Building an Automated Inbound Lead Qualification Pipeline',
    category: 'ai-automation',
    categorySlug: 'ai-automation',
    categoryTitle: 'AI & Automation',
    excerpt: 'How we eliminate hours of manual lead review by qualifying, enriching, and booking prospective clients in real time.',
    readTime: '5 min read',
    publishDate: 'October 2026',
    author: 'Rao Abdul Rehman',
    authorRole: 'AI & Automation Lead',
    keyTakeaways: [
      'Speed-to-lead is the single biggest predictor of inbound enterprise conversion.',
      'Conditional form logic filters budget-mismatched inquiries before they reach executive calendars.',
      'Webhook fallbacks ensure no prospect submission is ever lost during API downtime.',
    ],
    content: [
      {
        heading: 'The 60-Second Inbound Response Imperative',
        paragraphs: [
          'Studies consistently demonstrate that contacting an inbound lead within the first five minutes yields a dramatically higher meeting conversion rate than following up an hour later.',
          'By connecting your inquiry forms directly to automated enrichment webhooks, you can verify corporate domain credibility and present direct meeting slots only to qualified prospects instantly.',
        ],
      },
      {
        heading: 'Designing Non-Intrusive Qualification Forms',
        paragraphs: [
          'Rather than forcing visitors through a 20-field interrogation, ask 4 high-signal questions: target timeline, core business category, estimated budget tier, and verified corporate email.',
          'Leads that meet your ideal client criteria get routed directly to a calendar selector, while early-stage prospects receive an automated educational resource bundle.',
        ],
      },
    ],
  },
  {
    id: 'post-03',
    slug: 'architecting-high-performance-agency-websites-with-react-19',
    title: 'Engineering High-Performance Agency Websites with React 19 & Tailwind',
    category: 'web-development',
    categorySlug: 'web-development',
    categoryTitle: 'Web Development Tutorials',
    excerpt: 'Architectural lessons learned building modular digital agency platforms with strict type safety and sub-200ms interactions.',
    readTime: '7 min read',
    publishDate: 'October 2026',
    author: 'Hikmat Ullah',
    authorRole: 'Full-Stack Lead',
    keyTakeaways: [
      'Strict separation of data modules and presentation components enables rapid redesigns and future database integration.',
      'Zero-dependency client routers prevent bundle bloat while ensuring instant page transitions.',
      'Accessible WCAG color tokens must be maintained even in dark-mode aesthetic interfaces.',
    ],
    content: [
      {
        heading: 'Why Agency Websites Demand Extreme Performance',
        paragraphs: [
          'When prospective enterprise clients evaluate an agency, the website is their primary technical sample. If an agency site lags on mobile or stutters during navigation, clients rightfully question the agency’s development capabilities.',
          'By leveraging React 19, modern bundlers like Vite, and scoped Tailwind CSS, we eliminate runtime overhead while maintaining full layout flexibility.',
        ],
      },
      {
        heading: 'Preserving Layout Integrity Across Viewports',
        paragraphs: [
          'A common failure in modern agency websites is shrinking desktop designs into narrow mobile cards without rethinking the layout. Navigation mega-menus must smoothly transition into accessible accordions, and typography scales should use fluid clamp calculations.',
        ],
      },
    ],
  },
  {
    id: 'post-04',
    slug: 'calculating-blended-cac-and-multi-touch-attribution',
    title: 'The Guide to Multi-Touch Attribution and Blended CAC for B2B',
    category: 'digital-marketing',
    categorySlug: 'digital-marketing',
    categoryTitle: 'Digital Marketing Insights',
    excerpt: 'Why last-click attribution misleads marketing leaders and how to implement realistic blended CAC models.',
    readTime: '6 min read',
    publishDate: 'September 2026',
    author: 'Ali',
    authorRole: 'SEO & Growth Lead',
    keyTakeaways: [
      'Last-click attribution over-credits branded search and retargeting ads while ignoring initial discovery touchpoints.',
      'Position-based attribution models assign balanced weight to first discovery, middle nurturing, and final conversion.',
      'Blended CAC provides a realistic financial baseline when balancing organic SEO investments with paid media.',
    ],
    content: [
      {
        heading: 'The Flaw in Single-Touch Attribution',
        paragraphs: [
          'In modern B2B buying cycles, a prospect rarely converts on their first visit. They might discover an article via organic search, see an executive carousel on LinkedIn two weeks later, and finally submit a project inquiry via direct URL after a team meeting.',
          'If your analytics platform only attributes the lead to "Direct Traffic", you will mistakenly cut budget from the top-of-funnel channels that originated the opportunity.',
        ],
      },
    ],
  },
];
