/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ervas-medicinais.com.br',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/server-sitemap.xml'],
};