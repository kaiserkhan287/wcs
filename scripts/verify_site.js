import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const REQUIRED_FILES = [
  'index.html',
  'about-us.html',
  'services.html',
  'contact-us.html',
  'privacy-policy.html',
  'terms-and-conditions.html',
  'sitemap.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'blog/index.html',
  'blog/website-design-trends-local-businesses-indore.html',
  'blog/how-to-optimize-google-business-profile-indore.html',
  'blog/essential-seo-checklist-for-growing-companies.html',
  'blog/effective-social-media-strategy-guide.html',
  // Main services
  'services/website-design-development.html',
  'services/graphic-design.html',
  'services/seo-services.html',
  'services/social-media-optimization.html',
  'services/google-business-profile-management.html',
  'services/digital-marketing.html',
  // Website dev children
  'services/website-design-development/ecommerce-website-development.html',
  'services/website-design-development/business-corporate-websites.html',
  'services/website-design-development/ai-integrated-websites.html',
  'services/website-design-development/erp-management-systems.html',
  'services/website-design-development/shopify-store-development.html',
  'services/website-design-development/portfolio-personal-websites.html',
  // Graphic design children
  'services/graphic-design/social-media-post-design.html',
  'services/graphic-design/logo-design-branding.html',
  'services/graphic-design/brand-identity-design.html',
  'services/graphic-design/youtube-thumbnail-design.html',
  'services/graphic-design/product-label-packaging-design.html',
  // SEO children
  'services/seo-services/on-page-seo.html',
  'services/seo-services/off-page-seo-link-building.html',
  'services/seo-services/technical-seo-audit.html',
  'services/seo-services/keyword-research-strategy.html',
  'services/seo-services/local-seo.html',
  // SMO children
  'services/social-media-optimization/social-media-strategy.html',
  'services/social-media-optimization/content-creation-posting.html',
  'services/social-media-optimization/profile-optimization.html',
  'services/social-media-optimization/community-management.html',
  'services/social-media-optimization/social-media-analytics.html',
  // GBP children
  'services/google-business-profile-management/profile-setup.html',
  'services/google-business-profile-management/profile-optimization.html',
  'services/google-business-profile-management/profile-growth-management.html',
  'services/google-business-profile-management/review-management.html',
  'services/google-business-profile-management/posts-updates-management.html',
  // Digital marketing children
  'services/digital-marketing/google-ads-ppc.html',
  'services/digital-marketing/meta-ads.html',
  'services/digital-marketing/lead-generation.html',
  'services/digital-marketing/conversion-rate-optimization.html',
  'services/digital-marketing/marketing-strategy.html',
  'services/digital-marketing/remarketing-retargeting.html',
  'services/digital-marketing/email-marketing.html',
  'services/digital-marketing/marketing-analytics.html'
];

console.log('--- STARTING COMPREHENSIVE QA CHECKS ---');

let passed = true;

// 1. Check all required files exist
console.log('Checking required file presence...');
for (const rel of REQUIRED_FILES) {
  const full = path.join(rootDir, rel);
  if (!fs.existsSync(full)) {
    console.error(`MISSING FILE: ${rel}`);
    passed = false;
  }
}

// 2. Check each HTML file for metadata, H1, titles, and abbreviations
const titles = new Set();
const descriptions = new Set();

for (const rel of REQUIRED_FILES) {
  if (!rel.endsWith('.html')) continue;
  const content = fs.readFileSync(path.join(rootDir, rel), 'utf8');

  // Title check
  const titleMatch = content.match(/<title>(.*?)<\/title>/i);
  if (!titleMatch) {
    console.error(`Missing <title> in ${rel}`);
    passed = false;
  } else {
    const t = titleMatch[1];
    if (titles.has(t)) {
      console.warn(`Duplicate title found: "${t}" in ${rel}`);
    }
    titles.add(t);
  }

  // Meta description check
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  if (!descMatch) {
    console.error(`Missing meta description in ${rel}`);
    passed = false;
  }

  // H1 check
  const h1Match = content.match(/<h1[\s>](.*?)<\/h1>/is);
  if (!h1Match) {
    console.error(`Missing <h1> in ${rel}`);
    passed = false;
  }

  // Check for forbidden abbreviation "WCS"
  if (/\bWCS\b/.test(content)) {
    console.error(`Forbidden brand abbreviation "WCS" detected in ${rel}`);
    passed = false;
  }

  // Check structured data JSON validity if present
  const schemaMatch = content.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  if (schemaMatch) {
    try {
      JSON.parse(schemaMatch[1]);
    } catch (e) {
      console.error(`Invalid JSON-LD schema in ${rel}:`, e.message);
      passed = false;
    }
  }
}

// Check robots.txt and sitemap.xml
const robots = fs.readFileSync(path.join(rootDir, 'robots.txt'), 'utf8');
if (!robots.includes('Sitemap:')) {
  console.error('robots.txt missing sitemap reference');
  passed = false;
}

const sitemap = fs.readFileSync(path.join(rootDir, 'sitemap.xml'), 'utf8');
if (!sitemap.includes('https://webconnectsolutions.com/')) {
  console.error('sitemap.xml missing site URLs');
  passed = false;
}

if (passed) {
  console.log(`SUCCESS: All ${REQUIRED_FILES.length} files exist and passed all quality, SEO, schema, and brand naming validation checks!`);
} else {
  console.error('FAILED: QA checks failed.');
  process.exit(1);
}
