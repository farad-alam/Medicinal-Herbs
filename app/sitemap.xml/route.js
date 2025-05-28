// app/sitemap.xml/route.js

import { articles } from '@/lib/articles'; // Adjust this path
const SITE_URL = 'https://medicinal-herbs.netlify.app'; // Replace with your actual domain

export async function GET() {
  const urls = articles.map((article) => {
    return `
    <url>
      <loc>${SITE_URL}/${article.slug}</loc>
      <lastmod>${article.date}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
