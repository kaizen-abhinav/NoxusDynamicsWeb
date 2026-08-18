import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || 'https://noxusdynamics.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/studios',
    '/studios/index.html',
    '/studios/contact.html',
    '/team',
    '/privacy-policy',
    '/terms-of-service',
    '/#projects',
    '/#services',
    '/#metrics',
    '/#contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: (route === '' || route === '/studios' || route === '/studios/index.html') ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : (route.startsWith('/studios') ? 0.9 : 0.8),
  }));
}