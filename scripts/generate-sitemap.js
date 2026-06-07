import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Because we're using "type": "module", we need to define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the services data directly
import { servicesData } from '../src/data/services.js';

const DOMAIN = 'https://bondlyn.com'; // Replace with actual domain when going live
const DESTINATION = path.resolve(__dirname, '../public/sitemap.xml');

function generateSitemap() {
  const date = new Date().toISOString().split('T')[0];
  
  // Static routes
  const staticRoutes = [
    { url: '/', priority: '1.0' },
    { url: '/contact', priority: '0.8' },
    { url: '/services', priority: '0.9' }
  ];

  // Dynamic service routes
  const dynamicRoutes = servicesData.map(service => ({
    url: `/service/${service.slug}`,
    priority: '0.9'
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${DOMAIN}${route.url}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Ensure public directory exists
  const publicDir = path.resolve(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  fs.writeFileSync(DESTINATION, sitemapContent);
  console.log(`✅ Sitemap successfully generated at ${DESTINATION} with ${allRoutes.length} URLs.`);
}

generateSitemap();
