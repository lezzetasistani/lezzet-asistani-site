export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.lezzetasistani.com/sitemap.xml',
    host: 'https://www.lezzetasistani.com',
  };
}