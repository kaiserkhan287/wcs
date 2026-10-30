import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// STRICT BRAND RULE: Always "Web Connect Solutions"
const BRAND_NAME = "Web Connect Solutions";
const PHONE_NUMBER = "+91 86299 27995";
const PHONE_CLEAN = "+918629927995";
const WA_BASE = "https://wa.me/918629927995";
const LOCATION_TEXT = "Indore, Madhya Pradesh, India";
const SITE_DOMAIN = "https://webconnectsolutions.in";

// Service Taxonomy (6 main categories + 34 children)
const SERVICES_DATA = [
  {
    id: "website-design-development",
    title: "Website Design and Development",
    shortTitle: "Website Development",
    slug: "services/website-design-development.html",
    folder: "services/website-design-development",
    metaTitle: "Best Website Design and Development in Indore | Web Connect Solutions",
    metaDescription: "Custom website design and development services in Indore by Web Connect Solutions. Fast, mobile-first, conversion-focused websites engineered for business growth.",
    badge: "Core Engineering",
    iconSvg: `<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
    overview: "We engineer high-performance, responsive websites built with clean code and conversion-driven design. From corporate portals to high-velocity e-commerce stores, our web platforms turn visitors into loyal clients.",
    problemSolution: {
      problem: "Slow, bloated templates fail on mobile phones, hurt search rankings, and lose potential leads before they even contact you.",
      solution: "Web Connect Solutions develops bespoke, lightweight websites optimized for 95+ Core Web Vitals, mobile devices, and direct customer conversion."
    },
    features: [
      "Mobile-first responsive architecture tested across all screen sizes",
      "Clean semantic HTML5 structure for superior Google crawlability",
      "Direct WhatsApp and call integration for instant lead capture",
      "Lightning-fast load times under 2 seconds with zero code bloat",
      "On-page technical SEO foundations and schema markup",
      "Secure, SSL-ready configuration with cross-browser reliability"
    ],
    deliverables: [
      { name: "Bespoke Web Interface", desc: "Custom designed desktop and mobile layouts tailored to your brand." },
      { name: "Intuitive Information Architecture", desc: "Clean menu structures and logical page hierarchies." },
      { name: "Instant Lead Capture Channels", desc: "Frictionless enquiry forms with automated WhatsApp routing." },
      { name: "Speed & Technical SEO Suite", desc: "Pre-rendered metadata, OpenGraph tags, and asset optimization." }
    ],
    children: [
      {
        slug: "ecommerce-website-development.html",
        title: "E-commerce Website Development",
        metaTitle: "Best E-commerce Website Development in Indore | Web Connect Solutions",
        metaDescription: "Build high-converting online stores in Indore with Web Connect Solutions. Product catalogs, secure checkouts, payment gateways, and mobile commerce.",
        overview: "End-to-end e-commerce storefronts engineered to showcase products, streamline shopping carts, and maximize customer checkout conversion.",
        details: "At Web Connect Solutions, we build high-converting e-commerce platforms tailored for smooth shopping experiences. We engineer clean product discovery, fast filtering, secure payment gateways, and frictionless mobile checkouts.",
        topics: ["Product catalogue and category structure", "Shopping cart and checkout experience", "Payment gateway integration setup", "Mobile commerce usability", "Order workflow & inventory management preparation", "Security best practices and analytics tracking"],
        deliverables: [
          { name: "Product Catalogue System", desc: "Structured category trees, search filtering, and variant management." },
          { name: "Streamlined Checkout Funnel", desc: "Frictionless checkout paths designed to reduce cart abandonment." },
          { name: "Payment Gateway Integration", desc: "Support for leading Indian and global payment gateways." },
          { name: "Mobile Shopping Optimization", desc: "Fast thumb-friendly interface built for mobile shoppers." }
        ]
      },
      {
        slug: "business-corporate-websites.html",
        title: "Business and Corporate Websites",
        metaTitle: "Best Corporate Website Development in Indore | Web Connect Solutions",
        metaDescription: "Professional corporate website development by Web Connect Solutions in Indore. Establish market authority and attract B2B and institutional clients.",
        overview: "Authoritative, elegant, and secure corporate websites designed to build institutional trust and present service capabilities with absolute clarity.",
        details: "Web Connect Solutions develops corporate websites for established enterprises, B2B firms, and emerging regional companies. We ensure your corporate presence communicates operational excellence and provides clear enquiry paths.",
        topics: ["Executive brand positioning and credibility", "Structured multi-page service architecture", "Lead qualification funnels", "Compliance and institutional presentation", "Speed optimization and enterprise security"],
        deliverables: [
          { name: "Corporate Identity Architecture", desc: "Cohesive visual hierarchy reflecting industry leadership." },
          { name: "Department & Service Outlines", desc: "Dedicated landing pages for each corporate capability." },
          { name: "Inbound Lead Qualification", desc: "Targeted forms designed to capture high-value enterprise leads." },
          { name: "Security & Accessibility Compliance", desc: "WCAG-conscious design with clean static performance." }
        ]
      },
      {
        slug: "ai-integrated-websites.html",
        title: "AI Integrated Websites",
        metaTitle: "Best AI Integrated Websites in Indore | Web Connect Solutions",
        metaDescription: "Modern AI-integrated websites by Web Connect Solutions in Indore. Smart automation, intelligent search, and interactive business workflows.",
        overview: "Next-generation web platforms engineered with intelligent search, smart customer interactions, and automated business workflows.",
        details: "Web Connect Solutions creates modern digital interfaces capable of integrating with cutting-edge AI APIs, automated customer assistance, smart search indexing, and real-time content tools.",
        topics: ["AI API workflow architecture", "Intelligent search & semantic recommendations", "Interactive client intake workflows", "Automated response systems", "Data privacy & user security"],
        deliverables: [
          { name: "AI Workflow Integration", desc: "Secure proxy endpoints connecting web frontends to leading AI models." },
          { name: "Smart Content & Filter Tools", desc: "Dynamic filtering and predictive user interactions." },
          { name: "Custom Interactive Utilities", desc: "Interactive calculators, configurators, and smart forms." },
          { name: "Performance Guardrails", desc: "Asynchronous processing ensuring page speeds remain ultra-fast." }
        ]
      },
      {
        slug: "erp-management-systems.html",
        title: "ERP Management Systems",
        metaTitle: "Best ERP Management Systems in Indore | Web Connect Solutions",
        metaDescription: "Custom ERP management systems developed by Web Connect Solutions in Indore. Centralize operations, inventory, client billing, and internal workflows.",
        overview: "Tailored enterprise resource planning web systems engineered to streamline operational processes, team collaboration, and financial tracking.",
        details: "Web Connect Solutions designs and constructs purpose-built web-based ERP modules tailored to your specific organizational workflows, inventory tracking rules, employee task allocation, and operational metrics.",
        topics: ["Custom operational workflow mapping", "Inventory and order tracking modules", "Role-based user permissions and access control", "Financial overview and invoicing dashboards", "Data integrity and internal reporting"],
        deliverables: [
          { name: "Centralized Operations Portal", desc: "Custom administrative dashboards with real-time operational views." },
          { name: "Role-Based Access Management", desc: "Granular permissions for admins, managers, and staff." },
          { name: "Inventory & Task Modules", desc: "Real-time stock tracking and internal task delegation." },
          { name: "Auditable Reporting Engine", desc: "Exportable data logs, metrics, and summary statements." }
        ]
      },
      {
        slug: "shopify-store-development.html",
        title: "Shopify Store Development",
        metaTitle: "Best Shopify Store Development in Indore | Web Connect Solutions",
        metaDescription: "Professional Shopify store setup and theme customization in Indore by Web Connect Solutions. High-converting ecommerce stores built for growth.",
        overview: "Expert Shopify store setup, theme architecture, product catalog configuration, and conversion-optimized storefronts.",
        details: "Web Connect Solutions builds scalable Shopify stores designed for high sales velocity. From custom Liquid theme adaptations to app ecosystem curation, shipping configuration, and regional payment integration, we ensure your Shopify storefront operates smoothly.",
        topics: ["Shopify theme setup and custom styling", "Product catalog taxonomy and tagging", "App curation and checkout optimization", "Payment gateway & logistics integration", "Mobile-first shopping responsiveness"],
        deliverables: [
          { name: "Complete Shopify Store Setup", desc: "Full store configuration, settings, taxes, and shipping zones." },
          { name: "Custom Theme Architecture", desc: "Tailored brand typography, colors, and responsive page sections." },
          { name: "Payment & Logistics Connections", desc: "Integration with verified Indian and international payment gateways." },
          { name: "Conversion Rate Optimization", desc: "Optimized product pages and cart workflows designed for conversions." }
        ]
      },
      {
        slug: "portfolio-personal-websites.html",
        title: "Portfolio and Personal Websites",
        metaTitle: "Best Portfolio and Personal Websites in Indore | Web Connect Solutions",
        metaDescription: "Standout personal and executive portfolio websites designed by Web Connect Solutions in Indore. Showcase professional work and credentials.",
        overview: "Bespoke personal and executive websites that combine clean typography, high-impact project showcases, and clear contact avenues.",
        details: "Your personal website should reflect your unique professional voice. Web Connect Solutions creates bespoke personal and portfolio websites that combine clean typography, high-impact project galleries, and clear contact avenues to attract high-tier consulting opportunities and clientele.",
        topics: ["Personal brand positioning", "High-resolution case study presentations", "Media, press, and speaking engagement archives", "Fast mobile responsiveness", "Direct enquiry and booking funnels"],
        deliverables: [
          { name: "Bespoke Portfolio Interface", desc: "Distinctive layout highlighting your selected case studies and projects." },
          { name: "Media & Press Archive", desc: "Organized sections for thought leadership, credentials, and articles." },
          { name: "Direct Contact Integration", desc: "Direct WhatsApp and email channels for executive consultation." },
          { name: "Performance & Responsive Polish", desc: "Lightning-fast static performance across all screen sizes." }
        ]
      }
    ]
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    slug: "services/graphic-design.html",
    folder: "services/graphic-design",
    metaTitle: "Best Graphic Design in Indore | Web Connect Solutions",
    metaDescription: "Creative graphic design services in Indore by Web Connect Solutions. Logo design, brand identity systems, social media creatives, and packaging.",
    badge: "Brand Identity",
    iconSvg: `<svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/></svg>`,
    overview: "Memorable visual identities, scalable vector logos, and high-impact marketing graphics crafted to elevate brand authority across digital and physical touchpoints.",
    problemSolution: {
      problem: "Inconsistent branding, amateur visual assets, and generic clip-art logos diminish perceived value and fail to build customer confidence.",
      solution: "Web Connect Solutions creates cohesive identity systems, precision vector logos, and social creative toolkits that command respect and brand recall."
    },
    features: [
      "Custom vector logo marks designed for favicon to billboard scalability",
      "Cohesive brand color theory, typography scales, and guidelines",
      "High-engagement social media posts, carousel decks, and story assets",
      "Print-ready product packaging and label artwork with exact dielines",
      "Comprehensive digital asset libraries across SVG, AI, EPS, and PNG",
      "Consistent visual storytelling across every customer touchpoint"
    ],
    deliverables: [
      { name: "Master Vector Logo Suite", desc: "Primary, horizontal, monochrome, and icon-only formats." },
      { name: "Brand Guidelines Document", desc: "Strict typography, color codes (HEX, RGB, CMYK), and clear usage rules." },
      { name: "Corporate Stationery Package", desc: "Print-ready business cards, letterheads, and digital presentation decks." },
      { name: "Social Media Design Kit", desc: "Reusable templates and custom-crafted announcement graphics." }
    ],
    children: [
      {
        slug: "social-media-post-design.html",
        title: "Social Media Post Design",
        metaTitle: "Best Social Media Post Design in Indore | Web Connect Solutions",
        metaDescription: "Engaging social media post design services in Indore by Web Connect Solutions. Custom carousels, promotional posts, and branded campaign creatives.",
        overview: "Creative, high-stopping-power social media graphics tailored to Instagram, LinkedIn, Facebook, and Twitter.",
        details: "Web Connect Solutions designs branded social media post graphics that capture attention within crowded feeds. We craft carousel sets, announcement banners, product spotlights, and educational infographics adhering strictly to brand identity standards.",
        topics: ["Feed stopping power and visual contrast", "Platform-specific aspect ratios (1:1, 4:5, 9:16)", "Carousel narrative architecture", "Brand typography and color consistency", "Campaign themes and promotional layouts"],
        deliverables: [
          { name: "Multi-Format Post Creatives", desc: "Square and vertical graphics optimized for mobile feeds." },
          { name: "Multi-Slide Carousels", desc: "Educational and storytelling slide decks designed for engagement." },
          { name: "Story & Reel Covers", desc: "Consistent highlight and story cover graphics." },
          { name: "Master Source Templates", desc: "Layered files for rapid seasonal variations." }
        ]
      },
      {
        slug: "logo-design-branding.html",
        title: "Logo Design and Branding",
        metaTitle: "Best Logo Design Services in Indore | Web Connect Solutions",
        metaDescription: "Distinctive logo design and branding in Indore by Web Connect Solutions. Iconic vector logos, scalable marks, and comprehensive brand guidelines.",
        overview: "Iconic, memorable, and scalable logo marks engineered to anchor your brand identity for years to come.",
        details: "At Web Connect Solutions, our logo design process begins with in-depth brand analysis. We explore typographic voice, geometric symbolism, and color psychology to create distinctive marks that look equally compelling on a mobile screen, storefront signage, or business stationery.",
        topics: ["Brand recognition and visual distinctiveness", "Scalability from 16px favicon to outdoor billboard", "Monochrome and reverse-contrast adaptability", "Custom typography vs wordmark balance", "Vector delivery formats (SVG, EPS, PDF)"],
        deliverables: [
          { name: "Primary & Secondary Logo Marks", desc: "Horizontal, vertical, and icon-only lockups." },
          { name: "Full Vector Master Files", desc: "Crisp vector files prepared for any scale without quality loss." },
          { name: "Monochrome & Reverse Sets", desc: "Pure black, pure white, and single-color variations." },
          { name: "Favicon & App Icon Formats", desc: "Sized assets for digital web and mobile applications." }
        ]
      },
      {
        slug: "brand-identity-design.html",
        title: "Brand Identity Design",
        metaTitle: "Best Brand Identity Design in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive brand identity design by Web Connect Solutions in Indore. Typography systems, color theory, stationery, and brand guidelines.",
        overview: "Holistic brand identity frameworks defining typography, color palettes, visual motifs, and brand guidelines.",
        details: "A brand is far more than a logo. Web Connect Solutions creates complete brand identity guidelines that specify primary and secondary type pairings, precise color harmonies, photography art direction, and stationery layouts, ensuring complete cohesion across your business.",
        topics: ["Comprehensive brand ecosystem planning", "Curated primary and complementary typography pairings", "Full color palettes (HEX, RGB, CMYK, Pantone)", "Stationery suite: business cards, letterhead, envelopes", "Comprehensive Brand Guidelines manual"],
        deliverables: [
          { name: "Brand Guidelines Document", desc: "Comprehensive PDF manual governing brand usage and rules." },
          { name: "Corporate Stationery Suite", desc: "Print-ready business cards, letterheads, and presentation decks." },
          { name: "Iconography & Pattern System", desc: "Custom graphic patterns and icon styles unique to your brand." },
          { name: "Digital Asset Library", desc: "Organized folder structure of all identity elements." }
        ]
      },
      {
        slug: "youtube-thumbnail-design.html",
        title: "YouTube Thumbnail Design",
        metaTitle: "Best YouTube Thumbnail Design in Indore | Web Connect Solutions",
        metaDescription: "High-CTR YouTube thumbnail design by Web Connect Solutions in Indore. Eye-catching layouts, bold typography, and visual hooks that drive clicks.",
        overview: "High-click-through-rate YouTube thumbnail designs crafted to maximize video impressions and viewer engagement.",
        details: "In video streaming, thumbnails are the single most influential factor driving organic click-through rates. Web Connect Solutions designs high-contrast, visually arresting thumbnails with readable mobile typography, facial emotion focal points, and clear curiosity triggers.",
        topics: ["Click-through rate (CTR) optimization", "Mobile screen readability (scaled down to 80px)", "Subject cutout separation and rim lighting", "Expressive typography hooks", "A/B testing concept variations"],
        deliverables: [
          { name: "High-Resolution 1920x1080 Thumbnails", desc: "Crisp, optimized thumbnails ready for direct upload." },
          { name: "Contrast & Scale Tested Graphics", desc: "Verified for legibility in YouTube dark mode and mobile apps." },
          { name: "A/B Testing Variants", desc: "Alternative thumbnail compositions to optimize CTR." },
          { name: "Editable Master Templates", desc: "Reusable templates for consistent episodic video series." }
        ]
      },
      {
        slug: "product-label-packaging-design.html",
        title: "Product Label and Packaging Design",
        metaTitle: "Best Product Label and Packaging Design in Indore | Web Connect Solutions",
        metaDescription: "Custom product label and packaging design services in Indore by Web Connect Solutions. Retail-ready packaging, dielines, and print specifications.",
        overview: "Retail-ready product packaging, box packaging, and label artwork designed for shelf impact and regulatory compliance.",
        details: "Web Connect Solutions creates premium packaging and product label artwork that elevates perceived value on physical retail shelves and e-commerce listings. We work with accurate manufacturer dielines to ensure precise alignment, print clarity, and barcode legibility.",
        topics: ["Retail shelf visibility and tactile appeal", "Precise manufacturer dieline alignment", "Regulatory ingredient and barcode placement", "Material finish considerations (matte, gloss, foil, emboss)", "Print-ready CMYK production files with bleed margins"],
        deliverables: [
          { name: "Dieline-Fitted Packaging Art", desc: "Vector graphics precisely aligned to manufacturer cutter guides." },
          { name: "Print-Ready Production Files", desc: "High-res PDF/X files with color separations and bleeds." },
          { name: "3D Packaging Preview Mockups", desc: "Realistic digital renders for marketing and pitch presentations." },
          { name: "Barcode & Nutrition Grid Layout", desc: "Clear formatting of statutory information and certifications." }
        ]
      }
    ]
  },
  {
    id: "seo-services",
    title: "Search Engine Optimization",
    shortTitle: "SEO Services",
    slug: "services/seo-services.html",
    folder: "services/seo-services",
    metaTitle: "Best SEO Services in Indore | Web Connect Solutions",
    metaDescription: "Strategic SEO services in Indore by Web Connect Solutions. Technical audits, on-page optimization, local Indore search, and sustainable organic traffic.",
    badge: "Organic Growth",
    iconSvg: `<svg class="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="m11 8 3 3-3 3"/></svg>`,
    overview: "Data-driven Search Engine Optimization focused on capturing high-intent commercial searches in Indore and across India for lasting business visibility.",
    problemSolution: {
      problem: "Without strategic optimization, potential customers searching for your services find competitors ranking on page one instead.",
      solution: "Web Connect Solutions executes rigorous technical audits, structured on-page content alignment, and local search signals to compete effectively on Google."
    },
    features: [
      "In-depth keyword research mapped to genuine commercial buying intent",
      "Comprehensive technical audits resolving indexation and crawl errors",
      "On-page optimization across meta tags, schema markup, and internal links",
      "Local SEO tailored to Indore and surrounding business hubs",
      "White-hat citation building and digital brand mentions",
      "Clear Google Search Console insights tracking real impressions and clicks"
    ],
    deliverables: [
      { name: "Keyword Blueprint Matrix", desc: "Targeted primary and long-tail query clusters assigned per page." },
      { name: "Technical Audit & Fix Log", desc: "Elimination of broken redirects, crawl blocks, and slow assets." },
      { name: "On-Page Schema Suite", desc: "Rich JSON-LD markup for LocalBusiness, Service, and FAQs." },
      { name: "Monthly Performance Report", desc: "Transparent ranking trends, search visibility, and organic clicks." }
    ],
    children: [
      {
        slug: "on-page-seo.html",
        title: "On-Page SEO",
        metaTitle: "Best On-Page SEO Services in Indore | Web Connect Solutions",
        metaDescription: "Expert on-page SEO services by Web Connect Solutions in Indore. Optimize content, headings, meta tags, internal links, and search intent alignment.",
        overview: "Granular on-page optimization ensuring every page communicates its topic with precision to search engine crawlers and visitors.",
        details: "Web Connect Solutions optimizes the visible content and HTML elements of your web pages. From descriptive title tags and meta descriptions to semantic heading structures, natural keyword distribution, and strategic internal links, we make sure your content satisfies search intent.",
        topics: ["Search intent matching and content depth", "Title tags, meta descriptions, and header hierarchy (H1-H4)", "Image alt text and descriptive asset filenames", "Strategic internal linking with relevant anchor text", "Schema.org structured data deployment"],
        deliverables: [
          { name: "Page-by-Page Metadata Optimization", desc: "Unique, compelling title tags and meta descriptions." },
          { name: "Heading & Content Refinement", desc: "Reorganized semantic hierarchy to improve topic clarity." },
          { name: "Internal Linking Framework", desc: "Structured link paths connecting parent and child pages." },
          { name: "JSON-LD Schema Implementation", desc: "Rich structured data configured for key page types." }
        ]
      },
      {
        slug: "off-page-seo-link-building.html",
        title: "Off-Page SEO and Link Building",
        metaTitle: "Best Off-Page SEO and Link Building in Indore | Web Connect Solutions",
        metaDescription: "Ethical off-page SEO and digital authority building by Web Connect Solutions in Indore. High-quality citations, digital PR, and brand mentions.",
        overview: "Sustainable off-page optimization strategies designed to establish domain authority and brand credibility across the web.",
        details: "Search engines evaluate your website's authority based on how the broader web references your business. Web Connect Solutions helps build organic brand mentions, verified business citations, and collaborative industry references using strictly white-hat, ethical methodologies.",
        topics: ["Domain authority and trust signals", "Quality industry directory and citation audits", "Digital PR and brand mention strategies", "Competitor backlink profile gap analysis", "Strict avoidance of spam networks or link schemes"],
        deliverables: [
          { name: "Backlink Profile Health Audit", desc: "Evaluation of existing links and identification of toxic links." },
          { name: "Local & Industry Citation Submissions", desc: "Accurate listings across verified business directories." },
          { name: "Competitor Link Gap Analysis", desc: "Identified link acquisition opportunities within your sector." },
          { name: "Authority Growth Roadmap", desc: "Long-term strategy for earning natural organic references." }
        ]
      },
      {
        slug: "technical-seo-audit.html",
        title: "Technical SEO Audit",
        metaTitle: "Best Technical SEO Audit Services in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive technical SEO audits by Web Connect Solutions in Indore. Uncover crawl issues, canonical errors, site speed bottlenecks, and indexation gaps.",
        overview: "Deep-dive diagnostic technical audits resolving crawl bottlenecks, indexing failures, and performance hurdles.",
        details: "If search engine robots cannot crawl and index your site effectively, superior content cannot rank. Web Connect Solutions conducts rigorous technical audits examining XML sitemaps, robots.txt directives, canonical tags, redirects, crawl depth, and mobile rendering.",
        topics: ["Crawlability and indexation status analysis", "Canonicalization and duplicate content resolution", "Redirect chain analysis (301, 302, 404)", "Core Web Vitals and page speed profiling", "Structured data and schema syntax validation"],
        deliverables: [
          { name: "Comprehensive Technical Audit Report", desc: "Prioritized issues categorized by business impact." },
          { name: "Robots.txt & Sitemap Optimization", desc: "Corrected directives guiding Googlebot efficiently." },
          { name: "Broken Link & Redirect Remediation", desc: "Elimination of 404 dead ends and redirect loops." },
          { name: "Core Web Vitals Optimization Guide", desc: "Targeted recommendations for LCP, INP, and CLS." }
        ]
      },
      {
        slug: "keyword-research-strategy.html",
        title: "Keyword Research and Strategy",
        metaTitle: "Best Keyword Research and Strategy in Indore | Web Connect Solutions",
        metaDescription: "In-depth keyword research and search intent strategy by Web Connect Solutions in Indore. Uncover high-value commercial and local search terms.",
        overview: "Comprehensive search query analysis identifying high-intent keywords, customer pain points, and commercial opportunities.",
        details: "Successful SEO begins with understanding how your ideal buyers search. Web Connect Solutions conducts exhaustive keyword research to identify search volumes, keyword difficulty, search intent classifications (informational, navigational, commercial, transactional), and regional queries.",
        topics: ["Search intent categorization (Informational vs Commercial)", "High-converting long-tail keyword discovery", "Competitor keyword ranking gap analysis", "Keyword-to-URL mapping matrix", "Seasonal and regional search volume analysis"],
        deliverables: [
          { name: "Master Keyword Master Spreadsheet", desc: "Categorized search queries with intent and priority scoring." },
          { name: "Keyword-to-Page Mapping Plan", desc: "Clear allocation of primary and secondary keywords to URLs." },
          { name: "Content Gap Opportunity List", desc: "New page suggestions targeting unmet customer queries." },
          { name: "Search Intent Alignment Guidelines", desc: "Instructions for crafting content that matches user expectations." }
        ]
      },
      {
        slug: "local-seo.html",
        title: "Local SEO",
        metaTitle: "Best Local SEO Services in Indore | Web Connect Solutions",
        metaDescription: "Targeted Local SEO services in Indore by Web Connect Solutions. Dominate local map packs, capture nearby customer searches, and grow regional footfall.",
        overview: "Hyper-local search engine optimization designed to capture Indore customers seeking your services locally.",
        details: "Local buyers use search engines to find nearby providers. Web Connect Solutions builds comprehensive local SEO foundations, aligning your website content with Indore geographic relevance, managing Name-Address-Phone (NAP) consistency, and optimizing your Google Business Profile.",
        topics: ["Indore local search intent and geographic signals", "Google Maps and Local Pack visibility factors", "Consistent Name, Address, and Phone (NAP) citations", "Local business schema markup (LocalBusiness JSON-LD)", "Geo-targeted service pages and localized FAQs"],
        deliverables: [
          { name: "Indore Local Search Foundation", desc: "Geographic schema markup and on-page location indicators." },
          { name: "Local Citation Consistency Audit", desc: "Verification and correction of business details across directories." },
          { name: "Google Business Profile Synergy", desc: "Seamless alignment between your website and your map profile." },
          { name: "Local Landing Page Strategy", desc: "High-value local content tailored to regional customer needs." }
        ]
      }
    ]
  },
  {
    id: "social-media-optimization",
    title: "Social Media Optimization",
    shortTitle: "Social Media Optimization",
    slug: "services/social-media-optimization.html",
    folder: "services/social-media-optimization",
    metaTitle: "Best Social Media Optimization in Indore | Web Connect Solutions",
    metaDescription: "Strategic social media optimization in Indore by Web Connect Solutions. Content calendars, profile enhancements, community engagement, and analytics.",
    badge: "Brand Engagement",
    iconSvg: `<svg class="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    overview: "We turn passive social accounts into active brand channels. Consistent publishing schedules, custom carousels, and engagement protocols that build customer trust.",
    problemSolution: {
      problem: "Inconsistent posting, low-quality stock visuals, and dormant profiles fail to engage customers and waste social media potential.",
      solution: "Web Connect Solutions develops curated content pillars, polished editorial post designs, and active community handling that foster real audience relationships."
    },
    features: [
      "Custom monthly content calendar based on proven business pillars",
      "Professional social profile overhauls for Instagram, LinkedIn, and Facebook",
      "Eye-catching carousel slide designs formatted for maximum engagement",
      "Prompt comment moderation and direct lead forwarding workflows",
      "Transparent monthly analytics tracking real reach and audience interaction",
      "Hashtag strategy and posting times synchronized with audience activity"
    ],
    deliverables: [
      { name: "Monthly Content Calendar", desc: "Scheduled post themes, visual concepts, and publication dates." },
      { name: "Branded Profile Kit", desc: "High-resolution banners, optimized bios, and highlight icons." },
      { name: "Finished Creative Posts", desc: "Custom designed carousels, static posts, and story templates." },
      { name: "Monthly Engagement Review", desc: "Clear reporting on follower growth, comments, and website visits." }
    ],
    children: [
      {
        slug: "social-media-strategy.html",
        title: "Social Media Strategy",
        metaTitle: "Best Social Media Strategy Services in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive social media strategy by Web Connect Solutions in Indore. Define audience personas, content pillars, tone of voice, and growth roadmap.",
        overview: "A deliberate strategic roadmap establishing your brand narrative, target audience personas, and content pillars.",
        details: "Effective social media requires deliberate strategy before publishing. Web Connect Solutions conducts competitive social research, defines your unique brand voice, builds distinct content pillars, and establishes measurable engagement KPIs.",
        topics: ["Target audience persona development", "Core content pillars and storytelling themes", "Platform selection matrix (Instagram, LinkedIn, YouTube, Facebook)", "Competitive landscape analysis", "Measurement framework and growth benchmarks"],
        deliverables: [
          { name: "Comprehensive Social Strategy Deck", desc: "Detailed roadmap covering brand voice, themes, and target segments." },
          { name: "Content Pillar Blueprint", desc: "Four to five recurring themes that guide all future content creation." },
          { name: "Platform Distribution Guide", desc: "Tailored guidelines for each social platform." },
          { name: "KPI Tracking Dashboard", desc: "Clear benchmarks for evaluating engagement and growth." }
        ]
      },
      {
        slug: "content-creation-posting.html",
        title: "Content Creation and Posting",
        metaTitle: "Best Content Creation and Posting in Indore | Web Connect Solutions",
        metaDescription: "Consistent social media content creation and scheduled posting services in Indore by Web Connect Solutions. Carousels, reels, graphics, and captions.",
        overview: "End-to-end content production, persuasive copywriting, graphic formatting, and scheduled publishing.",
        details: "Maintaining an active, high-quality social media presence demands consistent execution. Web Connect Solutions produces eye-catching visual assets, writes compelling captions with clear calls to action, and manages scheduled posting at optimal audience activity times.",
        topics: ["High-impact visual asset production", "Persuasive caption copywriting", "Hashtag research and categorization", "Publishing schedules optimized for peak reach", "Multi-format content: static, carousel, stories"],
        deliverables: [
          { name: "Finished Creative Assets", desc: "Ready-to-publish graphics, carousels, and stories." },
          { name: "Engaging Copy & Hashtag Sets", desc: "Tailored captions with clear conversational hooks." },
          { name: "Automated Scheduling Setup", desc: "Reliable publishing across all authorized business accounts." },
          { name: "Content Asset Archive", desc: "Organized storage of all published media assets." }
        ]
      },
      {
        slug: "profile-optimization.html",
        title: "Social Profile Optimization",
        metaTitle: "Best Social Media Profile Optimization in Indore | Web Connect Solutions",
        metaDescription: "Transform social media profiles into high-converting storefronts. Profile optimization services in Indore by Web Connect Solutions.",
        overview: "Complete profile overhauls ensuring maximum brand credibility, clear value statements, and friction-free contact avenues.",
        details: "Your social media profile is often the first landing page a prospect reviews. Web Connect Solutions optimizes your bio copy, profile imagery, header banners, action buttons, highlight covers, and link-in-bio architecture to maximize conversion into enquiries.",
        topics: ["Bio copywriting with clear value propositions", "High-resolution branded avatar and cover banners", "Strategic CTA link trees and WhatsApp direct buttons", "Story highlight categorization and cover design", "Verification preparation and business account configuration"],
        deliverables: [
          { name: "Branded Cover & Banner Graphics", desc: "Custom banners sized for desktop and mobile displays." },
          { name: "Optimized Bio & Handle Setup", desc: "Concise, keyword-rich copy stating who you serve and what you do." },
          { name: "Action Link Architecture", desc: "Direct links connecting visitors to WhatsApp or website." },
          { name: "Highlight Covers Set", desc: "Clean icons categorizing services, portfolio, and FAQs." }
        ]
      },
      {
        slug: "community-management.html",
        title: "Community Management",
        metaTitle: "Best Social Media Community Management in Indore | Web Connect Solutions",
        metaDescription: "Active social media community management and engagement services by Web Connect Solutions in Indore. Build trust and handle customer conversations.",
        overview: "Proactive interaction, comment moderation, direct message triage, and audience relationship nurturing.",
        details: "Social media is a two-way dialogue. Web Connect Solutions provides structured community management, promptly responding to customer queries, engaging with relevant industry conversations, and redirecting sales opportunities to your primary contact team.",
        topics: ["Prompt comment moderation and polite replies", "Direct message triage and lead forwarding", "Engagement with related industry accounts", "Brand reputation monitoring and sentiment management", "Standard Operating Procedures (SOPs) for common inquiries"],
        deliverables: [
          { name: "Response Protocol Playbook", desc: "Documented guidelines for handling positive and negative feedback." },
          { name: "Daily Engagement Monitoring", desc: "Regular oversight of comments, mentions, and tags." },
          { name: "Lead Handoff Workflow", desc: "Direct routing of sales inquiries to your sales contact." },
          { name: "Monthly Sentiment Summary", desc: "Overview of customer feedback and common questions." }
        ]
      },
      {
        slug: "social-media-analytics.html",
        title: "Social Media Analytics",
        metaTitle: "Best Social Media Analytics in Indore | Web Connect Solutions",
        metaDescription: "Data-driven social media analytics and monthly performance reporting in Indore by Web Connect Solutions. Track real engagement and business outcomes.",
        overview: "Transparent, actionable performance reports measuring reach, engagement rates, click-throughs, and audience demographics.",
        details: "We believe in numbers over guesswork. Web Connect Solutions tracks key performance metrics across all active social platforms, analyzing which content types drive the highest business engagement and continuously refining your content strategy.",
        topics: ["Engagement rate and reach analysis", "Audience demographic and growth insights", "Top-performing post retrospectives", "Referral traffic to website and WhatsApp", "Iterative monthly strategy recommendations"],
        deliverables: [
          { name: "Monthly Analytics Report", desc: "Easy-to-digest PDF report highlighting key growth metrics." },
          { name: "Content Performance Breakdown", desc: "Analysis of top and underperforming posts." },
          { name: "Audience Demographics Review", desc: "Insights into age, location, and activity times." },
          { name: "Strategic Action Items", desc: "Data-backed recommendations for the following month." }
        ]
      }
    ]
  },
  {
    id: "google-business-profile-management",
    title: "Google Business Profile Management",
    shortTitle: "Google Business Profile",
    slug: "services/google-business-profile-management.html",
    folder: "services/google-business-profile-management",
    metaTitle: "Best Google Business Profile Management in Indore | Web Connect Solutions",
    metaDescription: "Expert Google Business Profile management in Indore by Web Connect Solutions. Profile optimization, weekly Google Posts, review management & Maps rank signals.",
    badge: "Local Authority",
    iconSvg: `<svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    overview: "Optimize and maintain your Google Business Profile to capture high-intent local map searchers in Indore. Turn Google Maps views into verified calls, visits, and enquiries.",
    problemSolution: {
      problem: "Incomplete listings, wrong categories, unaddressed reviews, and dormant profiles forfeit high-value local calls to competing businesses.",
      solution: "Web Connect Solutions configures verified profile data, primary categories, weekly localized Google Posts, and structured review generation workflows."
    },
    features: [
      "Complete profile configuration with verified NAP data and hours",
      "Strategic primary and secondary business category classification",
      "Weekly Google Posts promoting key services and special announcements",
      "Ethical customer review acquisition workflows and professional replies",
      "Geo-tagged photo uploads showcasing your team and completed work",
      "Monthly performance insights tracking phone calls and direction requests"
    ],
    deliverables: [
      { name: "Optimized Business Profile", desc: "Keyword-aligned description, attributes, and category selections." },
      { name: "Service & Product Menus", desc: "Organized service cards with clear descriptions and pricing ranges." },
      { name: "Weekly Google Updates", desc: "Consistent photo posts with direct call and enquiry buttons." },
      { name: "Review Management Playbook", desc: "Templates for ethical customer review requests and replies." }
    ],
    children: [
      {
        slug: "profile-setup.html",
        title: "Google Business Profile Setup",
        metaTitle: "Best Google Business Profile Setup in Indore | Web Connect Solutions",
        metaDescription: "Professional Google Business Profile setup and verification guidance by Web Connect Solutions in Indore. Get your business on Google Maps properly.",
        overview: "Initial setup, verification guidance, category taxonomy, and foundational accuracy for new Google Business Profiles.",
        details: "Setting up your Google Business Profile accurately from day one is critical to avoiding suspension and establishing local authority. Web Connect Solutions guides your business through accurate information submission, official category selection, and operational detail mapping.",
        topics: ["Accurate business registration and verification protocols", "Primary category selection based on search intent", "Accurate service area mapping without keyword stuffing", "NAP (Name, Address, Phone) consistency verification", "Statutory business information and service hours"],
        deliverables: [
          { name: "Verified Profile Configuration", desc: "Correctly registered profile aligned with Google guidelines." },
          { name: "Category & Service Mapping", desc: "Optimal primary category and relevant secondary tags." },
          { name: "Core Business Information Audit", desc: "Accurate phone, website, and operating hours." },
          { name: "Initial Brand Assets Upload", desc: "High-resolution logo and cover photo additions." }
        ]
      },
      {
        slug: "profile-optimization.html",
        title: "Google Business Profile Optimization",
        metaTitle: "Best Google Business Profile Optimization in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive Google Business Profile optimization services in Indore by Web Connect Solutions. Maximize local search signals and customer calls.",
        overview: "Deep optimization of existing profiles to improve local relevance, customer conversion, and informational completeness.",
        details: "Already have a Google Business Profile? Web Connect Solutions conducts a comprehensive optimization overhaul. We refine your business description with relevant local terms, flesh out the complete service menu, configure special attributes, and upload curated photography.",
        topics: ["Business description enhancement with natural local keywords", "Comprehensive service catalog and pricing indications", "Attributes configuration (Accessibility, Amenities, Payment types)", "Visual asset optimization with clean descriptive filenames", "Messaging and call button optimization"],
        deliverables: [
          { name: "Optimized Business Description", desc: "Compelling 750-character narrative explaining your value." },
          { name: "Complete Service Item Directory", desc: "Dedicated cards for every service offered." },
          { name: "Attributes & Feature Activation", desc: "Accurate operational attributes configured." },
          { name: "Media Gallery Enhancement", desc: "High-impact visual photos reflecting business operations." }
        ]
      },
      {
        slug: "profile-growth-management.html",
        title: "Profile Growth and Management",
        metaTitle: "Best Google Business Profile Growth Management in Indore | Web Connect Solutions",
        metaDescription: "Ongoing Google Business Profile growth management services in Indore by Web Connect Solutions. Continuous updates, performance tracking, and local visibility.",
        overview: "Ongoing monthly management keeping your profile active, compliant, and continuously competitive in local search results.",
        details: "Local search algorithms favor businesses that actively maintain their profiles. Web Connect Solutions provides monthly stewardship: scheduling regular updates, monitoring profile health, updating holiday hours, and tracking local performance metrics.",
        topics: ["Continuous algorithmic activity signals", "Holiday and special operating hours updates", "Q&A section curation and authoritative answers", "Monthly performance insights (Calls, Discovery, Views)", "Duplicate listing and suspension monitoring"],
        deliverables: [
          { name: "Active Profile Stewardship", desc: "Ongoing maintenance ensuring information stays current." },
          { name: "FAQ / Q&A Curation", desc: "Proactive addition and answering of frequent customer inquiries." },
          { name: "Monthly Insights Reporting", desc: "Clear analysis of customer actions and search queries." },
          { name: "Compliance & Safety Oversight", desc: "Vigilance against rogue edits and unauthorized changes." }
        ]
      },
      {
        slug: "review-management.html",
        title: "Review Management",
        metaTitle: "Best Google Review Management Services in Indore | Web Connect Solutions",
        metaDescription: "Ethical Google review management and reputation building by Web Connect Solutions in Indore. Professional replies and customer feedback workflows.",
        overview: "Structured review generation workflows, professional public responses, and customer sentiment management.",
        details: "Customer reviews are a vital ranking and trust factor on Google Maps. Web Connect Solutions assists you in building ethical, systematic review request workflows for satisfied clients, and crafts thoughtful, professional responses to all incoming reviews.",
        topics: ["Ethical review generation workflows for genuine customers", "Direct short-link generation for easy customer review submission", "Prompt and professional replies to positive feedback", "De-escalation frameworks for addressing negative reviews", "Strict adherence to Google review policies (no fake reviews)"],
        deliverables: [
          { name: "Customer Review Request Templates", desc: "Tested message templates for WhatsApp and email follow-ups." },
          { name: "Direct Review Link Generator", desc: "One-click short URL leading straight to the review box." },
          { name: "Professional Response Service", desc: "Customized, respectful replies to all customer feedback." },
          { name: "Sentiment & Reputation Log", desc: "Quarterly review of customer themes and satisfaction signals." }
        ]
      },
      {
        slug: "posts-updates-management.html",
        title: "Google Posts and Updates Management",
        metaTitle: "Best Google Posts and Updates Management in Indore | Web Connect Solutions",
        metaDescription: "Weekly Google Business Profile posts and updates management by Web Connect Solutions in Indore. Promote offers, updates, and services directly on Maps.",
        overview: "Weekly localized Google Posts highlighting company announcements, new projects, service features, and promotional offers.",
        details: "Google Posts allow your business to publish mini-announcements directly on your Google Maps listing. Web Connect Solutions drafts and publishes engaging weekly posts with high-resolution imagery and direct action buttons (Call Now, Learn More, WhatsApp).",
        topics: ["Weekly Google Post cadence and thematic planning", "Offer posts with start and end date parameters", "New service and project announcement posts", "High-contrast visual imagery matching Google card dimensions", "Direct call and enquiry button integrations"],
        deliverables: [
          { name: "Weekly Google Post Publishing", desc: "Four to five curated posts per month with custom graphics." },
          { name: "Call-to-Action Link Tracking", desc: "Direct buttons driving phone calls and website enquiries." },
          { name: "Seasonal & Event Promotions", desc: "Timely updates for festival and holiday campaigns." },
          { name: "Post Engagement Tracking", desc: "Measurement of post views and click-throughs." }
        ]
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    slug: "services/digital-marketing.html",
    folder: "services/digital-marketing",
    metaTitle: "Best Digital Marketing in Indore | Web Connect Solutions",
    metaDescription: "Results-oriented digital marketing in Indore by Web Connect Solutions. Google Ads (PPC), Meta Ads, lead generation funnels, and conversion optimization.",
    badge: "Paid Growth",
    iconSvg: `<svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>`,
    overview: "Precision paid advertising campaigns across Google Search, Instagram, and Facebook designed to generate high-quality sales leads with transparent ROI.",
    problemSolution: {
      problem: "Unfocused ad spending, broad keywords, and poor landing pages burn marketing budgets with negligible qualified sales enquiries.",
      solution: "Web Connect Solutions deploys tightly targeted ad groups, high-converting dedicated landing pages, and strict negative keyword lists to maximize ad spend."
    },
    features: [
      "Intent-driven Google Search (PPC) and Performance Max advertising",
      "High-engagement Meta Ads on Instagram and Facebook with creative testing",
      "Tailored lead generation funnels with instant qualification forms",
      "Conversion Rate Optimization (CRO) to maximize return on ad spend",
      "Strategic remarketing workflows reconnecting with interested visitors",
      "Transparent conversion tracking across calls, forms, and WhatsApp chats"
    ],
    deliverables: [
      { name: "Targeted Campaign Architecture", desc: "Precise audience segmentation, ad groups, and keyword lists." },
      { name: "High-Converting Ad Creatives", desc: "Persuasive ad copy and professional visual assets." },
      { name: "Full Tracking & Pixel Suite", desc: "Accurate conversion event measurement for forms and calls." },
      { name: "Bi-Weekly ROI & Lead Reports", desc: "Transparent metrics tracking cost-per-lead and acquisition volume." }
    ],
    children: [
      {
        slug: "google-ads-ppc.html",
        title: "Google Ads and PPC",
        metaTitle: "Best Google Ads and PPC Services in Indore | Web Connect Solutions",
        metaDescription: "Expert Google Ads (PPC) management by Web Connect Solutions in Indore. Search campaigns, intent-based keywords, negative keyword filters, and ROI.",
        overview: "High-intent Google Search advertising campaigns targeting buyers actively seeking your services.",
        details: "Google Ads provides immediate exposure at the exact moment a customer searches for your solution. Web Connect Solutions designs, manages, and optimizes search campaigns with strict negative keyword controls, high-relevance ad copy, and landing page alignment.",
        topics: ["High-intent search keyword bidding", "Negative keyword lists preventing wasted spend", "Responsive Search Ad (RSA) copywriting", "Quality Score and ad rank optimization", "Conversion tracking across forms and phone calls"],
        deliverables: [
          { name: "Targeted Search Campaign Setup", desc: "Structured ad groups aligned with specific search intents." },
          { name: "Ad Copy & Extension Suite", desc: "Sitelinks, callouts, and call extensions to maximize CTR." },
          { name: "Budget & Bid Optimization", desc: "Smart bidding strategies focused on target cost-per-lead." },
          { name: "Conversion Event Auditing", desc: "Verification of phone call and form submission tracking." }
        ]
      },
      {
        slug: "meta-ads.html",
        title: "Meta Ads (Facebook and Instagram)",
        metaTitle: "Best Meta Ads (Facebook and Instagram) in Indore | Web Connect Solutions",
        metaDescription: "Targeted Meta Ads management for Facebook & Instagram in Indore by Web Connect Solutions. Lead generation, creative testing, and audience targeting.",
        overview: "Visual, persuasive advertising across Instagram and Facebook designed to generate qualified leads and brand awareness.",
        details: "Meta's advertising platform allows businesses to reach hyper-targeted customer demographics. Web Connect Solutions produces compelling image and video ads, tests creative hooks, and builds automated lead generation forms directly inside the platform.",
        topics: ["Custom audience and lookalike audience targeting", "Creative variation testing (hook, angle, format)", "Instant Lead Form configuration", "Meta Pixel and Conversion API (CAPI) implementation", "Retargeting audiences who engaged with previous posts"],
        deliverables: [
          { name: "Campaign Setup & Targeting", desc: "Audience segmentation by location, interest, and behavior." },
          { name: "Visual Ad Assets & Copy", desc: "High-stopping-power ad visuals with persuasive captions." },
          { name: "Lead Form Integration", desc: "Frictionless in-app forms connected to your notification channels." },
          { name: "Weekly Performance Optimization", desc: "Budget reallocation to top-performing ad creatives." }
        ]
      },
      {
        slug: "lead-generation.html",
        title: "Lead Generation",
        metaTitle: "Best Lead Generation Services in Indore | Web Connect Solutions",
        metaDescription: "Predictable lead generation systems engineered by Web Connect Solutions in Indore. High-converting funnels, qualification forms, and instant routing.",
        overview: "End-to-end customer acquisition funnels designed to deliver predictable, qualified sales enquiries.",
        details: "Lead generation is not just about clicks; it is about qualified conversations. Web Connect Solutions engineers multi-channel acquisition funnels combining targeted advertising, focused landing pages, qualification questions, and instant WhatsApp handoffs.",
        topics: ["Multi-step lead qualification forms", "Landing page conversion architecture", "Value propositions that address immediate buyer pain", "Instant lead notification protocols via WhatsApp/Email", "Lead nurturing and follow-up guidance"],
        deliverables: [
          { name: "Dedicated Landing Page", desc: "Focused, distraction-free page designed solely to capture leads." },
          { name: "Multi-Step Qualification Form", desc: "Smart form filtering out unqualified submissions." },
          { name: "Instant Alert Routing", desc: "Immediate SMS, WhatsApp, or email notification of new leads." },
          { name: "Funnel Conversion Analytics", desc: "Clear reporting on visitor-to-lead conversion percentages." }
        ]
      },
      {
        slug: "conversion-rate-optimization.html",
        title: "Conversion Rate Optimization (CRO)",
        metaTitle: "Best Conversion Rate Optimization (CRO) in Indore | Web Connect Solutions",
        metaDescription: "Turn existing traffic into paying clients with Conversion Rate Optimization by Web Connect Solutions in Indore. UX audits, copy testing, and funnel tuning.",
        overview: "Systematic auditing and refining of your digital touchpoints to convert a higher percentage of visitors into paying clients.",
        details: "Getting traffic to your website is only half the battle. Web Connect Solutions analyzes user session behavior, identifies friction points in your navigation and checkout paths, and implements strategic copy, layout, and CTA enhancements.",
        topics: ["Heuristic UX and layout friction audits", "Headline clarity and value proposition testing", "Form friction reduction and mobile input optimization", "Trust signals, micro-copy, and security indicators", "Quantitative funnel drop-off analysis"],
        deliverables: [
          { name: "Comprehensive CRO Friction Audit", desc: "Annotated review of obstacles preventing visitor conversions." },
          { name: "Landing Page Redesign Recommendations", desc: "High-impact layout adjustments to improve conversion rates." },
          { name: "Optimized Form & CTA Protocols", desc: "Refined input sequences reducing abandonment." },
          { name: "Before/After Metric Analysis", desc: "Tracking conversion rate improvements over 60-90 days." }
        ]
      },
      {
        slug: "marketing-strategy.html",
        title: "Marketing Strategy",
        metaTitle: "Best Digital Marketing Strategy Consulting in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive marketing strategy consulting by Web Connect Solutions in Indore. Channel roadmaps, competitive positioning, and growth plans.",
        overview: "Holistic marketing planning that aligns your budget, channels, and messaging with clear business growth targets.",
        details: "Before investing in tactical campaigns, every organization needs a cohesive marketing strategy. Web Connect Solutions assesses your competitive landscape, defines clear customer acquisition channels, and builds a sustainable 12-month digital growth blueprint.",
        topics: ["Market landscape and competitor analysis", "Customer journey mapping from discovery to purchase", "Multi-channel budget allocation model", "Messaging matrix and brand positioning", "Milestone roadmap with quarterly goals"],
        deliverables: [
          { name: "Master Marketing Strategy Document", desc: "Actionable roadmap outlining budget, channels, and milestones." },
          { name: "Channel Mix Recommendations", desc: "Balanced allocation across SEO, paid ads, and content." },
          { name: "Competitor Benchmark Report", desc: "Analysis of competitor positioning and untapped opportunities." },
          { name: "Execution Timeline & Milestones", desc: "Quarterly deliverables with clear accountability metrics." }
        ]
      },
      {
        slug: "remarketing-retargeting.html",
        title: "Remarketing and Retargeting",
        metaTitle: "Best Remarketing and Retargeting Services in Indore | Web Connect Solutions",
        metaDescription: "Re-engage interested visitors and recover lost sales. Retargeting campaign management by Web Connect Solutions in Indore.",
        overview: "Targeted campaigns re-engaging website visitors who showed interest but did not complete an initial enquiry.",
        details: "Most first-time visitors leave a website without taking action. Web Connect Solutions implements sophisticated remarketing campaigns across Google Display, YouTube, Facebook, and Instagram to remind interested buyers of your value and bring them back.",
        topics: ["Cookie-less and pixel-based retargeting architecture", "Audience segmentation based on page depth and intent", "Sequential storytelling ad sequences", "Frequency capping to avoid audience ad fatigue", "Special offers and objection-handling creatives"],
        deliverables: [
          { name: "Custom Audience Segment Setup", desc: "Specific audiences for high-value pages and cart drop-offs." },
          { name: "Sequential Ad Creatives", desc: "Targeted messages addressing common buying hesitations." },
          { name: "Cross-Platform Retargeting Pixels", desc: "Correct implementation across Google and Meta." },
          { name: "Frequency Cap Guardrails", desc: "Balanced impressions that stay top-of-mind without being intrusive." }
        ]
      },
      {
        slug: "email-marketing.html",
        title: "Email Marketing",
        metaTitle: "Best Email Marketing Services in Indore | Web Connect Solutions",
        metaDescription: "Strategic email marketing and automation by Web Connect Solutions in Indore. Welcome sequences, client newsletters, and lead nurturing.",
        overview: "Automated email sequences, client nurturing newsletters, and re-engagement campaigns that drive repeat business.",
        details: "Email marketing remains one of the highest-ROI direct marketing channels. Web Connect Solutions builds compliant email capture systems, designs clean responsive email templates, and scripts automated welcome and onboarding sequences.",
        topics: ["Permission-based list building strategies", "Automated welcome and onboarding email flows", "Mobile-responsive email design templates", "Subject line testing and open-rate optimization", "Deliverability best practices (DKIM, SPF, DMARC)"],
        deliverables: [
          { name: "Automated Email Sequences", desc: "Custom welcome and lead nurture workflows." },
          { name: "Responsive Newsletter Templates", desc: "Branded HTML email layouts tested across mail clients." },
          { name: "Domain Deliverability Audit", desc: "Configuration advice for SPF, DKIM, and DMARC records." },
          { name: "Engagement & Click Tracking", desc: "Monthly performance monitoring of open rates and click rates." }
        ]
      },
      {
        slug: "marketing-analytics.html",
        title: "Marketing Analytics",
        metaTitle: "Best Marketing Analytics and Attribution in Indore | Web Connect Solutions",
        metaDescription: "Comprehensive marketing analytics and attribution setup by Web Connect Solutions in Indore. Google Analytics 4, Tag Manager, and ROI dashboards.",
        overview: "Rigorous measurement frameworks, Google Analytics 4 configuration, conversion tracking, and unified performance dashboards.",
        details: "Without reliable analytics, marketing decisions are blind. Web Connect Solutions implements custom tracking through Google Tag Manager, sets up Google Analytics 4 event models, and creates intuitive dashboards showing exactly where your leads originate.",
        topics: ["Google Analytics 4 (GA4) custom event configuration", "Google Tag Manager (GTM) container architecture", "Multi-touch lead attribution modeling", "UTM parameter tracking discipline across all channels", "Executive-ready monthly performance dashboards"],
        deliverables: [
          { name: "Clean GA4 & GTM Setup", desc: "Configured triggers tracking clicks, forms, and WhatsApp chats." },
          { name: "Standardized UTM Tracking Sheet", desc: "Consistent campaign naming conventions across all ads." },
          { name: "Executive KPI Dashboard", desc: "Single-view report tracking acquisition costs and lead volume." },
          { name: "Attribution Insight Analysis", desc: "Clear breakdown of channel contribution to final enquiries." }
        ]
      }
    ]
  }
];

// Blog Articles Data
const BLOG_ARTICLES = [
  {
    slug: "website-design-trends-local-businesses-indore.html",
    title: "Modern Website Design Trends That Help Indore Businesses Win Customers",
    metaTitle: "Website Design Trends for Indore Businesses | Web Connect Solutions",
    metaDescription: "Discover practical website design trends that help local businesses in Indore build trust, engage mobile visitors, and generate more qualified enquiries.",
    category: "Website Development",
    date: "October 2026",
    readTime: "5 min read",
    excerpt: "Why modern typography, sub-second speed, and mobile conversion channels matter more than ever in the growing Indore marketplace.",
    content: `
      <h2>The Changing Digital Landscape in Indore</h2>
      <p>Indore has rapidly established itself as the commercial powerhouse of Madhya Pradesh. With businesses across manufacturing, healthcare, education, retail, and corporate services expanding online, having an outdated website is a serious liability. Potential customers expect crisp, responsive, and trustworthy digital platforms before reaching out.</p>
      
      <h2>1. Mobile-First Speed & Core Web Vitals</h2>
      <p>Over 75% of local business searches in Indore happen on mobile phones. When a website takes more than 3 seconds to render, visitors bounce back to Google. At Web Connect Solutions, we build lightweight, modern code architectures that ensure instantaneous load times.</p>

      <h2>2. Immediate Frictionless Communication</h2>
      <p>Decisions in today's marketplace happen in minutes, not days. Websites featuring pre-configured, one-click WhatsApp inquiry channels alongside simple contact forms consistently convert significantly higher than outdated sites with long forms.</p>

      <h2>3. Concrete Value Propositions</h2>
      <p>Avoid empty slogans like "Welcome to our portal". High-converting websites immediately answer three questions: What do you do? Who do you serve? And how does the visitor take the next step?</p>
    `
  },
  {
    slug: "how-to-optimize-google-business-profile-indore.html",
    title: "How to Optimize Your Google Business Profile for High Local Visibility in Indore",
    metaTitle: "Google Business Profile Optimization Guide Indore | Web Connect Solutions",
    metaDescription: "A step-by-step practical guide to optimizing your Google Business Profile in Indore. Categories, verification, reviews, and updates that drive local calls.",
    category: "Google Business Profile",
    date: "October 2026",
    readTime: "6 min read",
    excerpt: "Learn how to optimize your listing on Google Maps to generate verified customer calls, directions, and inquiries in Indore.",
    content: `
      <h2>Why Local Maps Matter in Indore</h2>
      <p>When someone in Indore searches for "website designer near me" or "graphic design studio in Indore", Google surfaces the 3-Pack Map Results above organic search listings. Having an active, complete, and properly categorized profile is often the single most important factor determining who receives the call.</p>

      <h2>1. Selecting the Exact Primary Category</h2>
      <p>Your primary category carries the heaviest algorithmic weight. Choose the specific classification that directly represents your core service. Never dilute your profile by stuffing irrelevant secondary categories.</p>

      <h2>2. Complete Details Without Keyword Stuffing</h2>
      <p>Always use your official business name: <strong>Web Connect Solutions</strong>. Never add spammy location modifiers or promotional words into the business title field, as this violates Google guidelines and risks listing suspension.</p>

      <h2>3. Building an Ethical Customer Review Workflow</h2>
      <p>Genuine customer reviews build real trust. Create a simple workflow to request reviews from satisfied clients immediately upon project completion, and respond professionally to all feedback.</p>
    `
  },
  {
    slug: "essential-seo-checklist-for-growing-companies.html",
    title: "The Essential On-Page SEO Checklist for Growing Companies",
    metaTitle: "Essential On-Page SEO Checklist | Web Connect Solutions",
    metaDescription: "A comprehensive on-page SEO checklist covering title tags, content structure, search intent, internal links, and structured data.",
    category: "Search Engine Optimization",
    date: "October 2026",
    readTime: "7 min read",
    excerpt: "Audit and improve your on-page SEO with this actionable technical checklist designed for sustainable search visibility.",
    content: `
      <h2>The Foundations of Organic Search Success</h2>
      <p>Search engines strive to connect users with the most relevant, reliable, and helpful content available. On-page SEO is the process of structuring your website's content and underlying code so search engines can easily understand, index, and rank your pages.</p>

      <h2>1. Intent-Driven Metadata</h2>
      <p>Every indexable page must feature a completely unique title tag and meta description. The title must lead with your primary service and official business name, while the description must highlight your value proposition.</p>

      <h2>2. Semantic Heading Hierarchy</h2>
      <p>Ensure each page contains exactly one descriptive H1 tag matching the user's primary search intent, followed by logical H2 and H3 subsections.</p>
    `
  },
  {
    slug: "effective-social-media-strategy-guide.html",
    title: "Building an Effective Social Media Strategy for B2B and Local Businesses",
    metaTitle: "Effective Social Media Strategy Guide | Web Connect Solutions",
    metaDescription: "Learn how to build a social media strategy that delivers real business enquiries rather than superficial vanity metrics.",
    category: "Social Media Optimization",
    date: "October 2026",
    readTime: "5 min read",
    excerpt: "Move beyond vanity metrics. Learn how content pillars, visual consistency, and direct messaging lead funnels drive actual business growth.",
    content: `
      <h2>Moving Beyond Vanity Metrics</h2>
      <p>Likes and follower counts look good on paper, but they do not pay business expenses. An effective social media strategy for local and B2B businesses focuses on establishing market authority, demonstrating genuine competence, and guiding interested prospects into one-on-one enquiries.</p>

      <h2>1. Defining 4 Core Content Pillars</h2>
      <p>Establish four recurring themes: Educational Value, Proof & Case Studies, Behind the Scenes / Process, and Direct Conversion.</p>

      <h2>2. Visual Branding Consistency</h2>
      <p>Ensure every post is immediately recognizable with consistent brand colors and typography.</p>
    `
  }
];

function getOrganizationSchema() {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BRAND_NAME,
    "telephone": PHONE_CLEAN,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7196",
      "longitude": "75.8577"
    },
    "url": SITE_DOMAIN,
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "18:30"
      }
    ]
  }, null, 2);
}

// Navigation Bar
function getHeaderHtml(activePath = '') {
  return `
  <header class="site-header sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20 gap-4">
        
        <!-- Brand Wordmark -->
        <a href="/index.html" class="flex items-center gap-2.5 shrink-0 group min-w-0">
          <img src="/logo.png" alt="${BRAND_NAME}" class="h-8 sm:h-9 w-auto object-contain shrink-0 max-w-[150px] sm:max-w-none">
          <div class="hidden md:flex flex-col">
            <span class="font-extrabold text-base sm:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors whitespace-nowrap">
              ${BRAND_NAME}
            </span>
          </div>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="/index.html" class="hover:text-blue-600 transition-colors py-2 ${activePath === 'home' ? 'text-blue-600 font-bold' : ''}">Home</a>
          <a href="/about-us.html" class="hover:text-blue-600 transition-colors py-2 ${activePath === 'about' ? 'text-blue-600 font-bold' : ''}">About Us</a>
          
          <!-- Mega Menu Wrapper (Cleanly Centered, Never Clips Off-Screen) -->
          <div class="mega-menu-wrapper py-2">
            <a href="/services.html" class="inline-flex items-center gap-1 hover:text-blue-600 transition-colors ${activePath.startsWith('services') ? 'text-blue-600 font-bold' : ''}">
              <span>Services</span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <!-- Mega Dropdown (Anchored to stay inside screen) -->
            <div class="mega-menu-content absolute top-full -left-20 w-[680px] bg-white border border-slate-200/90 rounded-2xl shadow-2xl p-5 z-50">
              <div class="grid grid-cols-2 gap-3">
                ${SERVICES_DATA.map(s => `
                  <a href="/${s.slug}" class="p-3 rounded-xl border border-transparent hover:border-blue-100 hover:bg-blue-50/60 transition-all group flex items-start gap-3">
                    <div class="p-2 rounded-lg bg-slate-50 border border-slate-200/60 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                      ${s.iconSvg}
                    </div>
                    <div>
                      <div class="font-bold text-slate-900 group-hover:text-blue-600 text-xs flex items-center justify-between">
                        <span>${s.title}</span>
                      </div>
                      <p class="text-[11px] text-slate-500 mt-0.5 line-clamp-1">${s.overview}</p>
                    </div>
                  </a>
                `).join('')}
              </div>
              <div class="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs bg-slate-50 -mx-5 -mb-5 p-3.5 rounded-b-2xl">
                <span class="text-slate-500">Bespoke digital solutions in Indore</span>
                <a href="/services.html" class="font-bold text-blue-600 hover:underline">
                  All Services Directory &rarr;
                </a>
              </div>
            </div>
          </div>

          <a href="/blog/index.html" class="hover:text-blue-600 transition-colors py-2 ${activePath === 'blog' ? 'text-blue-600 font-bold' : ''}">Blog</a>
          <a href="/contact-us.html" class="hover:text-blue-600 transition-colors py-2 ${activePath === 'contact' ? 'text-blue-600 font-bold' : ''}">Contact Us</a>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 sm:gap-3">
          <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100 transition-all" target="_blank" rel="noopener noreferrer">
            <svg class="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            <span>WhatsApp</span>
          </a>
          <a href="/contact-us.html" class="inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-sm">
            <span>Enquire</span>
          </a>
          <!-- Mobile Menu Trigger -->
          <button class="mobile-menu-open lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors" aria-label="Open Mobile Menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

      </div>
    </div>
  </header>

  <!-- Mobile Drawer Overlay (Clean & Lightweight) -->
  <div id="mobile-drawer" class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
    <div class="mobile-nav-panel">
      <!-- Drawer Header -->
      <div class="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
        <div class="flex items-center gap-2">
          <img src="/logo.png" alt="${BRAND_NAME}" class="h-7 w-auto object-contain">
          <span class="font-bold text-sm text-slate-900">${BRAND_NAME}</span>
        </div>
        <button class="mobile-menu-close p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60" aria-label="Close Menu">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Drawer Links -->
      <div class="p-4 flex-1 overflow-y-auto space-y-1 text-sm font-bold text-slate-800">
        <a href="/index.html" class="block px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">Home</a>
        <a href="/about-us.html" class="block px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">About Us</a>
        
        <div>
          <button id="mobile-services-toggle" class="w-full flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-left">
            <span>Services</span>
            <svg id="mobile-services-chevron" class="w-4 h-4 text-slate-400 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
          </button>
          <div id="mobile-services-menu" class="hidden pl-3 py-1 space-y-1 bg-slate-50 rounded-lg mt-1 text-xs">
            ${SERVICES_DATA.map(s => `
              <a href="/${s.slug}" class="block px-3 py-1.5 font-semibold text-slate-700 hover:text-blue-600">
                ${s.title}
              </a>
            `).join('')}
            <a href="/services.html" class="block px-3 py-2 font-bold text-blue-600 hover:underline">
              All Services Overview &rarr;
            </a>
          </div>
        </div>

        <a href="/blog/index.html" class="block px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">Blog</a>
        <a href="/contact-us.html" class="block px-3 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">Contact Us</a>
      </div>

      <!-- Drawer Footer -->
      <div class="p-4 border-t border-slate-100 bg-slate-50 space-y-2">
        <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20would%20like%20to%20discuss%20a%20project." class="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <a href="/contact-us.html" class="w-full flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow">
          Request Project Proposal
        </a>
      </div>
    </div>
  </div>
  `;
}

// Footer - NO SITEMAP LINKS ANYWHERE
function getFooterHtml() {
  return `
  <footer class="bg-slate-950 text-slate-400 border-t border-slate-900 pt-12 pb-8 text-xs" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-slate-800/80">
        
        <!-- Brand Info -->
        <div class="space-y-3">
          <div class="flex items-center gap-2.5">
            <div class="bg-white rounded-lg p-1 inline-flex items-center justify-center">
              <img src="/logo.png" alt="${BRAND_NAME}" class="h-7 w-auto object-contain">
            </div>
            <span class="font-extrabold text-base tracking-tight text-white">${BRAND_NAME}</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed">
            ${BRAND_NAME} is an established digital services agency based in Indore, Madhya Pradesh. Engineering clean websites, brand identity, and search growth.
          </p>
          <div class="pt-1 space-y-1 text-slate-300">
            <div>${LOCATION_TEXT}</div>
            <div>Phone / WhatsApp: <a href="tel:${PHONE_CLEAN}" class="hover:text-white font-semibold">${PHONE_NUMBER}</a></div>
          </div>
        </div>

        <!-- Col 1 -->
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Core Services</h4>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/services/website-design-development.html" class="hover:text-white">Website Development</a></li>
            <li><a href="/services/graphic-design.html" class="hover:text-white">Graphic Design</a></li>
            <li><a href="/services/seo-services.html" class="hover:text-white">SEO Services</a></li>
            <li><a href="/services/social-media-optimization.html" class="hover:text-white">Social Media (SMO)</a></li>
            <li><a href="/services/google-business-profile-management.html" class="hover:text-white">Google Business Profile</a></li>
            <li><a href="/services/digital-marketing.html" class="hover:text-white">Digital Marketing</a></li>
          </ul>
        </div>

        <!-- Col 2 -->
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Popular Solutions</h4>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/services/website-design-development/ecommerce-website-development.html" class="hover:text-white">E-commerce Stores</a></li>
            <li><a href="/services/graphic-design/logo-design-branding.html" class="hover:text-white">Logo & Branding</a></li>
            <li><a href="/services/seo-services/local-seo.html" class="hover:text-white">Local SEO for Indore</a></li>
            <li><a href="/services/digital-marketing/google-ads-ppc.html" class="hover:text-white">Google Ads & PPC</a></li>
            <li><a href="/services/digital-marketing/meta-ads.html" class="hover:text-white">Meta Ads</a></li>
            <li><a href="/services.html" class="text-blue-400 hover:underline">All Services Directory &rarr;</a></li>
          </ul>
        </div>

        <!-- Col 3: Company (NO SITEMAP LINK) -->
        <div>
          <h4 class="font-bold text-white uppercase tracking-wider mb-3 text-[11px]">Company</h4>
          <ul class="space-y-2 text-slate-400">
            <li><a href="/about-us.html" class="hover:text-white">About Web Connect Solutions</a></li>
            <li><a href="/blog/index.html" class="hover:text-white">Insights & Articles</a></li>
            <li><a href="/contact-us.html" class="hover:text-white">Contact Us</a></li>
            <li><a href="/privacy-policy.html" class="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions.html" class="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

      </div>

      <!-- Bottom bar: NO SITEMAP LINK -->
      <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
        <div>
          &copy; <span id="current-year">2026</span> ${BRAND_NAME}. All rights reserved.
        </div>
        <div class="flex items-center gap-4">
          <a href="/privacy-policy.html" class="hover:text-slate-400">Privacy Policy</a>
          <a href="/terms-and-conditions.html" class="hover:text-slate-400">Terms & Conditions</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp CTA -->
  <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20have%20an%20enquiry%20regarding%20your%20services." class="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 hover:scale-105 transition-all group" target="_blank" rel="noopener noreferrer" aria-label="Chat with ${BRAND_NAME} on WhatsApp">
    <div class="relative">
      <div class="pulse-ring"></div>
      <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
    </div>
    <span class="hidden sm:inline font-bold text-xs">WhatsApp</span>
  </a>
  `;
}

// Wrapper (Tailwind CDN + clean modern CSS)
function wrapHtml({ title, description, canonical, activeNav = '', bodyContent, schemaJson = '' }) {
  return `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${SITE_DOMAIN}${canonical}">
  <link rel="icon" type="image/png" href="/wcs_favicon.png">
  <link rel="shortcut icon" type="image/png" href="/wcs_favicon.png">
  <link rel="apple-touch-icon" href="/wcs_favicon.png">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${SITE_DOMAIN}${canonical}">
  <meta property="og:site_name" content="${BRAND_NAME}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#eff6ff',
              100: '#dbeafe',
              200: '#bfdbfe',
              500: '#3b82f6',
              600: '#2563eb',
              700: '#1d4ed8',
              800: '#1e40af',
              900: '#1e3a8a',
            }
          },
          fontFamily: {
            display: ['"Plus Jakarta Sans"', 'sans-serif'],
            body: ['"DM Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>

  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="stylesheet" href="/assets/css/responsive.css">

  ${schemaJson ? `<script type="application/ld+json">\n${schemaJson}\n</script>` : ''}
</head>
<body class="bg-slate-50 text-slate-800 font-body antialiased selection:bg-blue-600 selection:text-white flex flex-col min-h-screen">
  ${getHeaderHtml(activeNav)}

  <main id="main-content" class="flex-1">
    ${bodyContent}
  </main>

  ${getFooterHtml()}

  <script src="/assets/js/main.js" defer></script>
  <script src="/assets/js/navigation.js" defer></script>
  <script src="/assets/js/forms.js" defer></script>
</body>
</html>`;
}

// -------------------------------------------------------------
// MAIN GENERATION
// -------------------------------------------------------------

console.log('Generating streamlined, image-free subpages & animated hero for ' + BRAND_NAME);

// Copy assets to public/assets for Vite static serving
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
copyDirSync(path.join(rootDir, 'assets'), path.join(rootDir, 'public', 'assets'));

// Ensure directories
const dirsToCreate = [
  'services',
  'services/website-design-development',
  'services/graphic-design',
  'services/seo-services',
  'services/social-media-optimization',
  'services/google-business-profile-management',
  'services/digital-marketing',
  'blog'
];
for (const d of dirsToCreate) {
  const full = path.join(rootDir, d);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
}
// 1. Generate Main Services (NO IMAGES AT ALL)
for (const service of SERVICES_DATA) {
  const pagePath = path.join(rootDir, service.slug);
  const waEnquiryText = encodeURIComponent(`Hello ${BRAND_NAME}, I would like to enquire about ${service.title}.`);

  const html = wrapHtml({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: `/${service.slug}`,
    activeNav: 'services',
    bodyContent: `
      <!-- Service Page Header -->
      <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-3xl">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              ${service.title} in Indore
            </h1>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              ${service.overview}
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <a href="${WA_BASE}?text=${waEnquiryText}" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-all" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="/contact-us.html?service=${encodeURIComponent(service.title)}" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow transition-all">
                Request Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-10 sm:py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            <div class="lg:col-span-8 space-y-10">
              
              <!-- Problem / Solution Box -->
              <div class="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 text-xs sm:text-sm">
                <div>
                  <span class="font-bold uppercase tracking-wider text-rose-600 block mb-1 text-[11px]">The Challenge</span>
                  <p class="text-slate-700 leading-relaxed">${service.problemSolution.problem}</p>
                </div>
                <div class="pt-4 border-t border-slate-200">
                  <span class="font-bold uppercase tracking-wider text-emerald-600 block mb-1 text-[11px]">The ${BRAND_NAME} Solution</span>
                  <p class="text-slate-700 leading-relaxed">${service.problemSolution.solution}</p>
                </div>
              </div>

              <!-- Capabilities -->
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">Core Standards & Features</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  ${service.features.map(f => `
                    <div class="p-3.5 rounded-xl border border-slate-200 bg-white flex items-start gap-2.5">
                      <svg class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                      <span class="text-xs sm:text-sm font-semibold text-slate-700">${f}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Child Services Grid -->
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">Specialized Solutions in this Category</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  ${service.children.map(c => `
                    <div class="p-5 rounded-2xl border border-slate-200 bg-white hover-lift flex flex-col justify-between">
                      <div>
                        <h3 class="text-base font-bold text-slate-900 mb-1.5">${c.title}</h3>
                        <p class="text-xs text-slate-500 leading-relaxed mb-3">${c.overview}</p>
                      </div>
                      <a href="/${service.folder}/${c.slug}" class="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1">
                        Explore Solution &rarr;
                      </a>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Deliverables -->
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">What You Receive</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  ${service.deliverables.map(d => `
                    <div class="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <h4 class="font-bold text-slate-900 text-sm mb-1">${d.name}</h4>
                      <p class="text-xs text-slate-600 leading-relaxed">${d.desc}</p>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- FAQs -->
              <div>
                <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <div class="space-y-2.5">
                  <div class="faq-accordion-item rounded-xl border border-slate-200 bg-white overflow-hidden">
                    <button class="faq-trigger w-full p-4 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
                      <span>How do we start a ${service.shortTitle} project?</span>
                      <svg class="faq-icon w-4 h-4 text-slate-400 shrink-0 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="faq-answer px-4 pb-4 text-xs text-slate-600 leading-relaxed">
                      Simply message us on WhatsApp at ${PHONE_NUMBER} or submit your requirements on our contact page. We will review your goals and provide an accurate proposal.
                    </div>
                  </div>

                  <div class="faq-accordion-item rounded-xl border border-slate-200 bg-white overflow-hidden">
                    <button class="faq-trigger w-full p-4 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
                      <span>Do you serve businesses outside Indore?</span>
                      <svg class="faq-icon w-4 h-4 text-slate-400 shrink-0 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div class="faq-answer px-4 pb-4 text-xs text-slate-600 leading-relaxed">
                      Yes. Based in Indore, Madhya Pradesh, we collaborate seamlessly with clients across India, maintaining direct communication through WhatsApp milestones.
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <!-- Sticky Sidebar -->
            <aside class="lg:col-span-4 sticky top-24 space-y-4">
              <div class="p-5 rounded-2xl border border-slate-200 bg-white space-y-3">
                <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400">All Service Areas</h3>
                <ul class="space-y-1 text-xs">
                  ${SERVICES_DATA.map(s => `
                    <li>
                      <a href="/${s.slug}" class="flex items-center justify-between p-2 rounded-lg transition-colors ${s.id === service.id ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}">
                        <span>${s.title}</span>
                      </a>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div class="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <h3 class="text-sm font-bold text-white">Have a Project in Mind?</h3>
                <p class="text-xs text-slate-300 leading-relaxed">
                  Connect with our team for honest timelines and a direct estimate.
                </p>
                <div class="pt-1 space-y-2">
                  <a href="${WA_BASE}?text=${waEnquiryText}" class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a href="/contact-us.html?service=${encodeURIComponent(service.title)}" class="w-full flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow">
                    Request Consultation
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </section>
    `
  });

  fs.writeFileSync(pagePath, html, 'utf8');

  // Generate Each Child Page (NO IMAGES AT ALL)
  for (const child of service.children) {
    const childPath = path.join(rootDir, service.folder, child.slug);
    const childWaText = encodeURIComponent(`Hello ${BRAND_NAME}, I would like to enquire about ${child.title}.`);

    const childHtml = wrapHtml({
      title: child.metaTitle,
      description: child.metaDescription,
      canonical: `/${service.folder}/${child.slug}`,
      activeNav: 'services',
      bodyContent: `
        <!-- Child Header -->
        <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="max-w-3xl">
              <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                ${child.title} in Indore
              </h1>
              <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                ${child.overview}
              </p>
              <div class="flex flex-wrap items-center gap-3">
                <a href="${WA_BASE}?text=${childWaText}" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-all" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a href="/contact-us.html?service=${encodeURIComponent(child.title)}" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow transition-all">
                  Request Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- Child Body -->
        <section class="py-10 sm:py-16 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              <div class="lg:col-span-8 space-y-10">
                <div>
                  <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">Strategic Overview</h2>
                  <p class="text-slate-600 text-sm leading-relaxed">${child.details}</p>
                </div>

                <div>
                  <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">Key Execution Priorities</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    ${child.topics.map(t => `
                      <div class="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-start gap-2.5">
                        <svg class="w-4 h-4 text-blue-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                        <span class="text-xs sm:text-sm font-semibold text-slate-700">${t}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div>
                  <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">Deliverables You Receive</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    ${child.deliverables.map(d => `
                      <div class="p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <h4 class="font-bold text-slate-900 text-sm mb-1">${d.name}</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">${d.desc}</p>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <!-- Related Services -->
                <div class="pt-6 border-t border-slate-200">
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Sister Solutions in ${service.title}</h3>
                  <div class="flex flex-wrap gap-2">
                    ${service.children.filter(c => c.slug !== child.slug).map(c => `
                      <a href="/${service.folder}/${c.slug}" class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-blue-50 hover:text-blue-600 text-slate-700 transition-colors">
                        ${c.title}
                      </a>
                    `).join('')}
                  </div>
                </div>
              </div>

              <!-- Sidebar -->
              <aside class="lg:col-span-4 sticky top-24 space-y-4">
                <div class="p-5 rounded-2xl border border-slate-200 bg-white">
                  <a href="/${service.slug}" class="text-xs font-bold text-blue-600 hover:underline block mb-3">
                    &larr; Back to ${service.title}
                  </a>
                  <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Category Solutions</h3>
                  <ul class="space-y-1 text-xs">
                    ${service.children.map(c => `
                      <li>
                        <a href="/${service.folder}/${c.slug}" class="block p-1.5 rounded transition-colors ${c.slug === child.slug ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}">
                          ${c.title}
                        </a>
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                  <h3 class="text-sm font-bold text-white">Start Your Project</h3>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    Message ${BRAND_NAME} directly for an accurate estimate.
                  </p>
                  <a href="${WA_BASE}?text=${childWaText}" class="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-colors" target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                  <a href="/contact-us.html?service=${encodeURIComponent(child.title)}" class="w-full flex items-center justify-center py-2.5 px-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 shadow transition-colors">
                    Submit Project Brief
                  </a>
                </div>
              </aside>

            </div>
          </div>
        </section>
      `
    });

    fs.writeFileSync(childPath, childHtml, 'utf8');
  }
}

// 2. Generate Blog Index & Articles (NO IMAGES)
const blogIndexPath = path.join(rootDir, 'blog', 'index.html');
const blogIndexHtml = wrapHtml({
  title: `Digital Growth Blog & Industry Insights | ${BRAND_NAME}`,
  description: `Read practical digital growth articles, SEO strategies, and website design insights from ${BRAND_NAME} in Indore.`,
  canonical: `/blog/index.html`,
  activeNav: 'blog',
  bodyContent: `
    <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Knowledge Hub · ${BRAND_NAME}</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Digital Strategy & Growth Insights</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">Actionable perspectives on website development, local SEO, branding, and marketing for businesses in Indore.</p>
      </div>
    </section>

    <section class="py-10 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${BLOG_ARTICLES.map(art => `
            <article class="p-6 rounded-2xl border border-slate-200 bg-white hover-lift flex flex-col justify-between">
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span class="text-blue-600 font-bold">${art.category}</span>
                  <span>·</span>
                  <span>${art.readTime}</span>
                </div>
                <h2 class="text-lg sm:text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  <a href="/blog/${art.slug}">${art.title}</a>
                </h2>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${art.excerpt}</p>
              </div>
              <div class="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs text-slate-400">${art.date}</span>
                <a href="/blog/${art.slug}" class="text-xs font-bold text-blue-600 hover:underline">
                  Read Guide &rarr;
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(blogIndexPath, blogIndexHtml, 'utf8');

for (const art of BLOG_ARTICLES) {
  const artPath = path.join(rootDir, 'blog', art.slug);
  const artHtml = wrapHtml({
    title: art.metaTitle,
    description: art.metaDescription,
    canonical: `/blog/${art.slug}`,
    activeNav: 'blog',
    bodyContent: `
      <section class="py-10 sm:py-14 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">${art.title}</h1>
          <div class="flex items-center gap-3 text-xs text-slate-500">
            <span>By <strong>${BRAND_NAME} Team</strong></span>
            <span>·</span>
            <span>${art.date}</span>
            <span>·</span>
            <span>${art.readTime}</span>
          </div>
        </div>
      </section>

      <section class="py-10 sm:py-16 bg-white">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            ${art.content}
          </div>

          <div class="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <h3 class="text-base font-bold text-slate-900">Need Expert Execution for Your Business?</h3>
            <p class="text-xs text-slate-600 max-w-md mx-auto">Talk directly with ${BRAND_NAME} in Indore for modern web design, branding, and local SEO.</p>
            <div class="flex items-center justify-center gap-3 pt-1">
              <a href="${WA_BASE}" class="px-4 py-2 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a href="/contact-us.html" class="px-4 py-2 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow">
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </section>
    `
  });
  fs.writeFileSync(artPath, artHtml, 'utf8');
}

// 3. Generate About Us (NO IMAGES AT ALL - ENRICHED CONTENT)
const aboutHtml = wrapHtml({
  title: `About Us | ${BRAND_NAME} | Digital Agency in Indore`,
  description: `Learn about ${BRAND_NAME}, a trusted digital services business based in Indore, Madhya Pradesh. Discover our approach to websites, branding, and marketing.`,
  canonical: `/about-us.html`,
  activeNav: 'about',
  schemaJson: getOrganizationSchema(),
  bodyContent: `
    <!-- About Header -->
    <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Who We Are · ${BRAND_NAME}</span>
        <h1 class="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Engineering Digital Value for Growing Businesses</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
          ${BRAND_NAME} is an established digital services agency based in Indore, Madhya Pradesh, India. Delivering bespoke website development, brand identity, and search growth.
        </p>
      </div>
    </section>

    <!-- Anchored in Indore Overview -->
    <section class="py-10 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Anchored in Indore, Serving Clients Nationwide</h2>
            <p>
              At ${BRAND_NAME}, we believe that a company's website and visual identity are vital commercial assets. In an increasingly competitive landscape, having an online footprint that communicates credibility, ranks organically, and converts visitors into paying customers is essential.
            </p>
            <p>
              From our base in Indore, we serve regional enterprises, retail brands, e-commerce stores, and service companies across India. We combine clean code architectures with distinctive editorial design to deliver websites and marketing systems that stand apart from generic marketplace templates.
            </p>
            <p>
              We prioritize transparency, realistic deliverables, and continuous refinement over exaggerated guarantees.
            </p>
          </div>

          <!-- Creative Metric Grid (NO IMAGE) -->
          <div class="lg:col-span-5 grid grid-cols-2 gap-3.5">
            <div class="p-5 rounded-2xl bg-blue-50/70 border border-blue-200">
              <span class="text-2xl font-black text-blue-600 block mb-1">100%</span>
              <div class="text-xs font-bold text-slate-900">Custom Code</div>
              <p class="text-[11px] text-slate-500 mt-1">Semantic, lightweight HTML5/CSS3 built for fast speeds.</p>
            </div>
            <div class="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200">
              <span class="text-2xl font-black text-emerald-600 block mb-1">Indore HQ</span>
              <div class="text-xs font-bold text-slate-900">Madhya Pradesh</div>
              <p class="text-[11px] text-slate-500 mt-1">Deep insight into regional business buying behaviors.</p>
            </div>
            <div class="p-5 rounded-2xl bg-purple-50/70 border border-purple-200">
              <span class="text-2xl font-black text-purple-600 block mb-1">&lt; 2s</span>
              <div class="text-xs font-bold text-slate-900">Speed Targets</div>
              <p class="text-[11px] text-slate-500 mt-1">Core Web Vitals optimized for top Google ranking.</p>
            </div>
            <div class="p-5 rounded-2xl bg-amber-50/70 border border-amber-200">
              <span class="text-2xl font-black text-amber-600 block mb-1">Direct</span>
              <div class="text-xs font-bold text-slate-900">WhatsApp Line</div>
              <p class="text-[11px] text-slate-500 mt-1">Zero ticketing delays. Quick, direct project communication.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Section 2: Technical Philosophy (Custom Code vs Page-Builder Bloat) -->
    <section class="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-10 space-y-2">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Our Engineering Standard</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Why Clean Architecture Beats Bloated Templates</h2>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Most agencies deploy heavy page-builder themes that load dozens of unnecessary scripts, slowing down mobile load times and crippling organic search rank. We operate on a strict engineering discipline.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">01</div>
            <h3 class="text-base font-bold text-slate-900">Zero Script Bloat</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Every kilobyte of code serves a purpose. We eliminate third-party widget overhead, delivering pure HTML5, modern CSS3, and native JavaScript that renders in the blink of an eye.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-sm">02</div>
            <h3 class="text-base font-bold text-slate-900">Thumb-First Mobile UX</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Because 75%+ of Indian consumers browse on smartphones, every button, menu, and form is proportioned for quick, comfortable single-hand interaction without pinch-to-zoom awkwardness.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div class="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-black text-sm">03</div>
            <h3 class="text-base font-bold text-slate-900">Search Engine Indexability</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Search bots can read our semantic structures seamlessly. Every page contains pre-rendered meta headers, structured schema data, and canonical tags to build organic authority naturally.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: 5 Operational Commitments -->
    <section class="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-xl mx-auto mb-10 space-y-1">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Transparency First</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Our 5 Operational Commitments</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span class="text-lg font-black text-blue-600 block">1. Accurate Scope</span>
            <p class="text-xs text-slate-600 leading-relaxed">We outline exact deliverables and milestones before work begins. No unexpected invoices.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span class="text-lg font-black text-emerald-600 block">2. 100% Ownership</span>
            <p class="text-xs text-slate-600 leading-relaxed">You retain complete ownership of your code, vector branding files, and digital assets. No vendor lock-in.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span class="text-lg font-black text-purple-600 block">3. Honest SEO</span>
            <p class="text-xs text-slate-600 leading-relaxed">Zero spammy black-hat links or artificial bot traffic. We build genuine search relevance.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span class="text-lg font-black text-amber-600 block">4. Direct Line</span>
            <p class="text-xs text-slate-600 leading-relaxed">Reach our core team directly on WhatsApp with zero gatekeeping or bureaucratic delays.</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <span class="text-lg font-black text-rose-600 block">5. Quality QA</span>
            <p class="text-xs text-slate-600 leading-relaxed">Every page is cross-tested on real iPhone, Android, and desktop screens before handoff.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Who We Serve Across Indore & Pan-India -->
    <section class="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-8 space-y-1">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Industry Experience</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Sectors We Regularly Support</h2>
          <p class="text-xs sm:text-sm text-slate-600">Tailoring technology to the unique sales funnels of key business sectors:</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <h3 class="font-bold text-slate-900 text-sm">Industrial & Manufacturing</h3>
            <p class="text-xs text-slate-500">B2B product catalogues and RFQ enquiry channels for manufacturing plants in Indore and Pithampur.</p>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <h3 class="font-bold text-slate-900 text-sm">Retail & E-Commerce</h3>
            <p class="text-xs text-slate-500">High-converting online storefronts with instant Indian payment gateways and mobile shopping UX.</p>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <h3 class="font-bold text-slate-900 text-sm">Healthcare & Clinics</h3>
            <p class="text-xs text-slate-500">Reputable clinic websites, doctor profiles, appointment bookings, and Google Maps local visibility.</p>
          </div>
          <div class="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
            <h3 class="font-bold text-slate-900 text-sm">Corporate & Real Estate</h3>
            <p class="text-xs text-slate-500">Executive portfolios, architectural project galleries, and high-trust lead qualification funnels.</p>
          </div>
        </div>

        <div class="mt-8 text-center pt-6 border-t border-slate-200">
          <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-all" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'about-us.html'), aboutHtml, 'utf8');

// 4. Generate Services Overview (NO IMAGES)
const servicesOverviewHtml = wrapHtml({
  title: `Best Digital Services in Indore | ${BRAND_NAME}`,
  description: `Explore the complete directory of digital services offered by ${BRAND_NAME} in Indore: Websites, Graphic Design, SEO, Social Media, Google Business Profile & Marketing.`,
  canonical: `/services.html`,
  activeNav: 'services',
  schemaJson: getOrganizationSchema(),
  bodyContent: `
    <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Capabilities Directory · ${BRAND_NAME}</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Complete Digital Services Directory</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">A full spectrum of website development, brand identity, search optimization, and performance marketing engineered for business growth.</p>
      </div>
    </section>

    <section class="py-10 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        ${SERVICES_DATA.map((s, idx) => `
          <div id="${s.id}" class="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-sm space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div class="space-y-1">
                <div class="flex items-center gap-2.5">
                  <span class="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center text-xs">0${idx + 1}</span>
                  <h2 class="text-xl sm:text-2xl font-extrabold text-slate-900">${s.title}</h2>
                </div>
                <p class="text-slate-600 text-xs sm:text-sm max-w-2xl leading-relaxed">${s.overview}</p>
              </div>
              <div class="flex items-center gap-2.5 shrink-0">
                <a href="/${s.slug}" class="px-4 py-2 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow">
                  Explore
                </a>
                <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(s.title)}." class="px-4 py-2 rounded-xl font-bold text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h3 class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">Dedicated Solutions in this Category</h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                ${s.children.map(c => `
                  <a href="/${s.folder}/${c.slug}" class="p-4 rounded-xl border border-slate-200/80 bg-slate-50 hover:bg-blue-50/60 hover:border-blue-200 transition-all flex flex-col justify-between group">
                    <div>
                      <h4 class="font-bold text-slate-900 text-xs group-hover:text-blue-600 mb-1 transition-colors">${c.title}</h4>
                      <p class="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">${c.overview}</p>
                    </div>
                    <span class="text-[11px] font-bold text-blue-600 mt-2 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Details &rarr;
                    </span>
                  </a>
                `).join('')}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'services.html'), servicesOverviewHtml, 'utf8');

// 5. Generate Contact Us (NO IMAGES)
const contactHtml = wrapHtml({
  title: `Contact Us | ${BRAND_NAME} | Digital Services in Indore`,
  description: `Contact ${BRAND_NAME} in Indore, Madhya Pradesh. Direct WhatsApp enquiry at +91 86299 27995 or submit our project consultation form.`,
  canonical: `/contact-us.html`,
  activeNav: 'contact',
  schemaJson: getOrganizationSchema(),
  bodyContent: `
    <section class="py-10 sm:py-14 md:py-18 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-2">Get In Touch · ${BRAND_NAME}</span>
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">Discuss Your Project</h1>
        <p class="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">We welcome enquiries from businesses in Indore, across Madhya Pradesh, and throughout India.</p>
      </div>
    </section>

    <section class="py-10 sm:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div class="lg:col-span-5 p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4">
            <h2 class="text-xl font-extrabold text-slate-900">Contact Information</h2>
            <div class="space-y-4 text-xs sm:text-sm text-slate-600">
              <div class="space-y-1">
                <strong class="block text-slate-900 font-bold">Location & Market</strong>
                <span>${LOCATION_TEXT}</span>
                <span class="block text-[11px] text-slate-400">Serving clients locally & nationwide</span>
              </div>
              <div class="space-y-1">
                <strong class="block text-slate-900 font-bold">Phone & WhatsApp</strong>
                <a href="${WA_BASE}" class="text-blue-600 font-semibold hover:underline block">${PHONE_NUMBER}</a>
              </div>
            </div>

            <div class="pt-4 border-t border-slate-200">
              <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20would%20like%20to%20discuss%20a%20project." class="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-colors" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div class="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
            <div>
              <h2 class="text-xl font-extrabold text-slate-900">Send Project Details</h2>
              <p class="text-xs text-slate-500">Fill out your information below. We will review your brief and reply promptly.</p>
            </div>

            <form id="project-enquiry-form" action="https://api.web3forms.com/submit" method="POST" class="space-y-3" novalidate>
              <input type="hidden" name="access_key" value="ee9d4abe-5989-4120-8c15-3d8df31db141">
              <input type="hidden" name="subject" value="New Project Enquiry - Web Connect Solutions">
              <input type="hidden" name="from_name" value="Web Connect Solutions Website">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label for="form-name" class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
                  <input type="text" id="form-name" name="name" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. Rahul Sharma" required>
                </div>
                <div>
                  <label for="form-phone" class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Phone / WhatsApp *</label>
                  <input type="tel" id="form-phone" name="phone" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. +91 98765 43210" required>
                </div>
              </div>

              <div>
                <label for="form-email" class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                <input type="email" id="form-email" name="email" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="e.g. rahul@company.com" required>
              </div>

              <div>
                <label for="form-service" class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Service Required *</label>
                <select id="form-service" name="service" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white">
                  <option value="Website Design and Development">Website Design and Development</option>
                  <option value="E-commerce Website Development">E-commerce Website Development</option>
                  <option value="Business and Corporate Websites">Business and Corporate Websites</option>
                  <option value="Graphic Design">Graphic Design & Branding</option>
                  <option value="Logo Design and Branding">Logo Design and Branding</option>
                  <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                  <option value="Local SEO for Indore">Local SEO for Indore</option>
                  <option value="Social Media Optimization">Social Media Optimization</option>
                  <option value="Google Business Profile Management">Google Business Profile Management</option>
                  <option value="Digital Marketing">Digital Marketing & Paid Ads</option>
                </select>
              </div>

              <div>
                <label for="form-message" class="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Project Brief & Objectives *</label>
                <textarea id="form-message" name="message" rows="3" class="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us about your requirements, timeline, or current website..." required></textarea>
              </div>

              <button type="submit" id="form-submit-btn" class="w-full py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-700 shadow transition-all flex items-center justify-center gap-2">
                <span>Send Project Enquiry</span>
              </button>
              
              <div id="form-status-box" class="hidden"></div>
            </form>
          </div>

        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'contact-us.html'), contactHtml, 'utf8');

// Privacy & Terms
const privacyHtml = wrapHtml({
  title: `Privacy Policy | ${BRAND_NAME}`,
  description: `Privacy Policy for ${BRAND_NAME}. Learn how we handle project enquiry data, client privacy, and communication confidentiality.`,
  canonical: `/privacy-policy.html`,
  bodyContent: `
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p class="text-xs text-slate-500">Last updated: October 2026</p>
        <div class="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed pt-3 border-t border-slate-200">
          <h2 class="text-base font-bold text-slate-900">1. Information Collection</h2>
          <p>When you contact ${BRAND_NAME} via our website enquiry forms, email, or direct WhatsApp messaging, we collect basic contact details including your name, telephone number, email address, and project brief.</p>
          <h2 class="text-base font-bold text-slate-900">2. Data Usage</h2>
          <p>We use this information strictly to respond to your project requests, prepare technical proposals, and provide ongoing client support. We do not sell or trade your data.</p>
          <h2 class="text-base font-bold text-slate-900">3. Contact</h2>
          <p>For any questions regarding this policy, reach us via WhatsApp at ${PHONE_NUMBER}.</p>
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'privacy-policy.html'), privacyHtml, 'utf8');

const termsHtml = wrapHtml({
  title: `Terms and Conditions | ${BRAND_NAME}`,
  description: `Terms and Conditions of service engagement with ${BRAND_NAME}, Indore, Madhya Pradesh.`,
  canonical: `/terms-and-conditions.html`,
  bodyContent: `
    <section class="py-12 sm:py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Terms and Conditions</h1>
        <p class="text-xs text-slate-500">Last updated: October 2026</p>
        <div class="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed pt-3 border-t border-slate-200">
          <h2 class="text-base font-bold text-slate-900">1. Engagement Scope</h2>
          <p>All design, development, and marketing engagements provided by ${BRAND_NAME} are detailed in agreed proposals prior to project commencement.</p>
          <h2 class="text-base font-bold text-slate-900">2. Performance & Rankings</h2>
          <p>While ${BRAND_NAME} implements current search optimization standards, search rankings are governed by third-party search engines and cannot be guaranteed.</p>
          <h2 class="text-base font-bold text-slate-900">3. Jurisdiction</h2>
          <p>These terms are governed by the applicable laws of India, with jurisdiction in Indore, Madhya Pradesh.</p>
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'terms-and-conditions.html'), termsHtml, 'utf8');

// 404
const notFoundHtml = wrapHtml({
  title: `Page Not Found (404) | ${BRAND_NAME}`,
  description: `The page you requested could not be found. Explore services and solutions from ${BRAND_NAME} in Indore.`,
  canonical: `/404.html`,
  bodyContent: `
    <section class="py-24 bg-white text-center">
      <div class="max-w-md mx-auto px-4 space-y-4">
        <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Error 404</span>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-900">Page Not Found</h1>
        <p class="text-slate-600 text-xs sm:text-sm">The requested URL could not be found. You can browse our services or return to the homepage.</p>
        <div class="flex items-center justify-center gap-3 pt-2">
          <a href="/index.html" class="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 shadow">
            Return to Homepage
          </a>
          <a href="/services.html" class="px-5 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200">
            Services Directory
          </a>
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, '404.html'), notFoundHtml, 'utf8');

// 6. Homepage with ANIMATED DEVELOPMENT SHOWCASE (Replacing Stock Office Photo!)
const homeSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    JSON.parse(getOrganizationSchema()),
    {
      "@type": "WebSite",
      "name": BRAND_NAME,
      "url": SITE_DOMAIN,
      "description": "Professional digital services business in Indore offering website design and development, graphic design, SEO, social media, and digital marketing."
    }
  ]
}, null, 2);

const homeHtml = wrapHtml({
  title: `Web Connect Solutions | Digital Agency in Indore | Websites, Design & SEO`,
  description: `${BRAND_NAME} is an established digital services agency in Indore, Madhya Pradesh. We craft high-performance websites, distinctive brand identities, and SEO growth engines.`,
  canonical: `/index.html`,
  activeNav: 'home',
  schemaJson: homeSchema,
  bodyContent: `
    <!-- Hero Section (Centered, Typewriter Style Headline, Clean Typography) -->
    <section class="relative pt-12 pb-16 sm:pt-20 sm:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center space-y-6">

          <h1 class="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            We Engineer <br class="hidden sm:inline">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700" id="typewriter-headline">High-Performance Websites</span><span class="typewriter-cursor text-blue-600 font-normal">|</span>
          </h1>

          <p class="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            <strong>${BRAND_NAME}</strong> turns your online footprint into a reliable customer acquisition engine. Fast responsive websites, distinctive branding, and search optimization built for Indore and Indian businesses.
          </p>

          <!-- Buttons: WhatsApp Removed, Only Discuss Your Project & Explore Services -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a href="/contact-us.html" class="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition-all">
              Discuss Your Project
            </a>
            <a href="/services.html" class="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm">
              Explore Services
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Core Services Grid -->
    <section class="py-12 sm:py-16 md:py-20 bg-white" id="services">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Digital Capabilities</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Services Engineered for Growth</h2>
          <p class="text-xs sm:text-sm text-slate-600">Everything your business needs to establish authority, rank organically, and capture customer enquiries.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          ${SERVICES_DATA.map(s => `
            <div class="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover-lift flex flex-col justify-between">
              <div>
                <div class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-4">
                  ${s.iconSvg}
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900 mb-1.5">${s.title}</h3>
                <p class="text-xs text-slate-500 leading-relaxed mb-4">${s.overview}</p>
                
                <div class="pt-3 border-t border-slate-100 space-y-1 mb-4">
                  <ul class="space-y-1 text-xs text-slate-600">
                    ${s.children.slice(0, 3).map(c => `
                      <li class="flex items-center gap-1.5">
                        <span class="w-1 h-1 rounded-full bg-blue-600"></span>
                        <a href="/${s.folder}/${c.slug}" class="hover:text-blue-600 hover:underline">${c.title}</a>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                <a href="/${s.slug}" class="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                  <span>Explore ${s.shortTitle}</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(s.title)}." class="text-emerald-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- RESTORED: Featured Solutions Showcase Section -->
    <section class="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200" id="showcase">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Featured Spotlight</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Specialized Capabilities & Strategic Execution</h2>
          <p class="text-xs sm:text-sm text-slate-600">Explore how ${BRAND_NAME} delivers measurable digital performance for growing businesses in Indore and across India.</p>
        </div>

        <div class="space-y-6 sm:space-y-8">
          <!-- Card 1: Web Development -->
          <div class="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-sm overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div class="lg:col-span-6">
                <img src="/assets/images/web_development_showcase.jpg" alt="Web Development and E-Commerce Solutions" class="w-full h-auto rounded-2xl object-cover shadow-sm" loading="lazy" width="800" height="450">
              </div>
              <div class="lg:col-span-6 space-y-3">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Custom Web Engineering · High-Velocity Platforms</span>
                <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">High-Converting Websites & E-Commerce Platforms</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We design and engineer bespoke, mobile-first websites optimized for sub-2 second load times, clean code semantics, and high lead-conversion rates for growing businesses.
                </p>
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  <a href="/services/website-design-development.html" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                    Website Development
                  </a>
                  <a href="/services/website-design-development/ecommerce-website-development.html" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                    E-Commerce Stores
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 2: Branding & Design -->
          <div class="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-sm overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div class="lg:col-span-6 lg:order-2">
                <img src="/assets/images/branding_design_showcase.jpg" alt="Brand Identity and Graphic Design" class="w-full h-auto rounded-2xl object-cover shadow-sm" loading="lazy" width="800" height="450">
              </div>
              <div class="lg:col-span-6 lg:order-1 space-y-3">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Brand Identity · Creative Production</span>
                <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Memorable Brand Identities & Precision Vector Logos</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Distinctive visual systems, brand books, social media creative suites, and packaging designs that command attention and build customer credibility across every touchpoint.
                </p>
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  <a href="/services/graphic-design.html" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                    Graphic Design
                  </a>
                  <a href="/services/graphic-design/logo-design-branding.html" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                    Logo & Branding
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Card 3: SEO & Local Maps -->
          <div class="rounded-3xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-sm overflow-hidden">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div class="lg:col-span-6">
                <img src="/assets/images/digital_marketing_seo_showcase.jpg" alt="Search Engine Optimization and Google Business Profile" class="w-full h-auto rounded-2xl object-cover shadow-sm" loading="lazy" width="800" height="450">
              </div>
              <div class="lg:col-span-6 space-y-3">
                <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Search Optimization · Indore & Beyond</span>
                <h3 class="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">Organic Search Visibility & Local Maps Authority</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  We implement meticulous on-page optimization, technical crawl audits, and Google Business Profile management to help your business compete naturally on Google.
                </p>
                <div class="flex flex-wrap items-center gap-3 pt-2">
                  <a href="/services/seo-services.html" class="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
                    SEO Services
                  </a>
                  <a href="/services/google-business-profile-management.html" class="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors">
                    Google Business Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW SECTION 1: Our 4-Step Working Methodology -->
    <section class="py-12 sm:py-16 md:py-20 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Working Process</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">How We Execute Your Project</h2>
          <p class="text-xs sm:text-sm text-slate-600">A structured, transparent workflow designed for rapid delivery, technical quality, and measurable outcomes.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-blue-300 transition-colors">
            <span class="text-3xl font-black text-blue-600/30 group-hover:text-blue-600 transition-colors block mb-3 font-mono">01</span>
            <h3 class="text-base font-bold text-slate-900 mb-2">Discovery & Architecture</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              We audit your market, competitors, and audience intent. We map site hierarchy and define technical specifications before writing code.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-emerald-300 transition-colors">
            <span class="text-3xl font-black text-emerald-600/30 group-hover:text-emerald-600 transition-colors block mb-3 font-mono">02</span>
            <h3 class="text-base font-bold text-slate-900 mb-2">Bespoke Engineering</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              We design distinctive mobile-first interfaces and handcraft lightweight semantic code, avoiding bloated third-party page-builder overhead.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-purple-300 transition-colors">
            <span class="text-3xl font-black text-purple-600/30 group-hover:text-purple-600 transition-colors block mb-3 font-mono">03</span>
            <h3 class="text-base font-bold text-slate-900 mb-2">Speed & Search Polish</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              We benchmark Core Web Vitals to guarantee sub-2 second load times, inject Schema.org metadata, and optimize local Google Maps signals.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative group hover:border-amber-300 transition-colors">
            <span class="text-3xl font-black text-amber-600/30 group-hover:text-amber-600 transition-colors block mb-3 font-mono">04</span>
            <h3 class="text-base font-bold text-slate-900 mb-2">Launch & Direct Support</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Full deployment to your domain, production verification, analytics setup, and direct ongoing milestone support via WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NEW SECTION 2: Key Industry Verticals We Support -->
    <section class="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mb-10 space-y-2">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Market Focus</span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Key Industry Verticals We Support</h2>
          <p class="text-xs sm:text-sm text-slate-600">Tailored digital engineering aligned with the commercial realities of major business sectors in Indore and pan-India:</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs mb-1">B2B</div>
            <h3 class="text-base font-bold text-slate-900">Manufacturing & Industrial</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              High-trust corporate portals and technical product catalogues for industrial manufacturers in Indore, Pithampur, and Sanwer Road.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-1">D2C</div>
            <h3 class="text-base font-bold text-slate-900">Retail & E-Commerce</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Fast, high-converting digital storefronts with integrated Indian payment gateways, shipping APIs, and mobile checkouts.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs mb-1">MED</div>
            <h3 class="text-base font-bold text-slate-900">Healthcare & Clinics</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Patient booking funnels, doctor credentials, clinic locations, and dominant Google Maps rankings for medical centers.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mb-1">PROP</div>
            <h3 class="text-base font-bold text-slate-900">Real Estate & Architecture</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Showcase galleries, floor plan presentations, and qualified enquiry funnels for developers and architectural studios.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-xs mb-1">EDU</div>
            <h3 class="text-base font-bold text-slate-900">Education & Academies</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Course directories, fee structures, student admissions enquiry workflows, and institutional authority pages.
            </p>
          </div>

          <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <div class="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs mb-1">CORP</div>
            <h3 class="text-base font-bold text-slate-900">Professional Consultancies</h3>
            <p class="text-xs text-slate-600 leading-relaxed">
              Credibility-first platforms for legal, financial, and strategic consulting firms commanding premium client engagements.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Local Indore Banner -->
    <section class="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div class="space-y-2 max-w-xl">
            <span class="text-xs font-bold uppercase tracking-widest text-blue-400 block">Indore, Madhya Pradesh</span>
            <h2 class="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">Your Local Partner for Digital Excellence</h2>
            <p class="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Based in Indore, ${BRAND_NAME} combines localized market understanding with world-class digital standards to deliver measurable results.
            </p>
          </div>
          <div class="shrink-0 flex flex-wrap items-center gap-3">
            <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20want%20to%20discuss%20a%20project%20in%20Indore." class="px-5 py-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a href="/contact-us.html" class="px-5 py-3 rounded-xl font-bold text-xs text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow">
              Contact Page
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 space-y-1">
          <span class="text-xs font-bold text-blue-600 uppercase tracking-widest block">Common Questions</span>
          <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div class="space-y-3">
          <div class="faq-accordion-item rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <button class="faq-trigger w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
              <span>What core digital services does ${BRAND_NAME} provide?</span>
              <svg class="faq-icon w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-answer px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed">
              We provide six principal digital services: Website Design & Development, Graphic Design & Branding, Search Engine Optimization (SEO), Social Media Optimization (SMO), Google Business Profile Management, and Digital Marketing (PPC & Meta Ads).
            </div>
          </div>

          <div class="faq-accordion-item rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <button class="faq-trigger w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
              <span>Can any agency guarantee a #1 ranking on Google?</span>
              <svg class="faq-icon w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-answer px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed">
              No ethical agency can guarantee a #1 ranking on Google, as search algorithms are constantly updated and independent. At ${BRAND_NAME}, we build the strongest technical, structural, and content foundations so your business can compete effectively for top organic positions.
            </div>
          </div>

          <div class="faq-accordion-item rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
            <button class="faq-trigger w-full p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-3">
              <span>How do we discuss and initiate a new project?</span>
              <svg class="faq-icon w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            <div class="faq-answer px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-slate-600 leading-relaxed">
              You can message us directly on WhatsApp at ${PHONE_NUMBER} or submit your details via our contact form. We will schedule a brief discussion to understand your requirements and deliver a clear project proposal.
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-14 sm:py-18 bg-slate-950 text-white border-t border-slate-900">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-4">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Ready to Elevate Your Digital Footprint?</h2>
        <p class="text-slate-300 max-w-xl mx-auto text-xs sm:text-sm">Get in touch with ${BRAND_NAME} today for clear project scopes, prompt communication, and exceptional execution.</p>
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="${WA_BASE}?text=Hello%20${encodeURIComponent(BRAND_NAME)}%2C%20I%20would%20like%20to%20discuss%20a%20new%20project." class="px-6 py-3 rounded-xl font-bold text-xs text-white bg-emerald-500 hover:bg-emerald-600 shadow transition-all" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a href="/contact-us.html" class="px-6 py-3 rounded-xl font-bold text-xs text-white border border-slate-700 hover:bg-slate-900 transition-all">
            Submit Project Brief
          </a>
        </div>
      </div>
    </section>
  `
});
fs.writeFileSync(path.join(rootDir, 'index.html'), homeHtml, 'utf8');

// 7. Generate sitemap.xml and robots.txt
const allUrls = [
  '/',
  '/about-us.html',
  '/services.html',
  '/contact-us.html',
  '/privacy-policy.html',
  '/terms-and-conditions.html',
  '/blog/index.html',
  ...BLOG_ARTICLES.map(a => `/blog/${a.slug}`),
  ...SERVICES_DATA.map(s => `/${s.slug}`),
  ...SERVICES_DATA.flatMap(s => s.children.map(c => `/${s.folder}/${c.slug}`))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(urlPath => `  <url>
    <loc>${SITE_DOMAIN}${urlPath}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${urlPath === '/' ? 'daily' : 'weekly'}</changefreq>
    <priority>${urlPath === '/' ? '1.0' : urlPath.startsWith('/services') ? '0.9' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_DOMAIN}/sitemap.xml
`;

fs.writeFileSync(path.join(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(rootDir, 'public', 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');

console.log(`Generated sitemap.xml and robots.txt for ${SITE_DOMAIN} with ${allUrls.length} URLs.`);

