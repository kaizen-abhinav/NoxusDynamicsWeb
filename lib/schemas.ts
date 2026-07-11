// Schema.org structured data generators - server-safe (no 'use client')

// Organization schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NOXUSDYNAMICS',
  url: 'https://noxusdynamics.com',
  logo: 'https://noxusdynamics.com/Logo.png',
  sameAs: [
    'https://twitter.com/noxusdynamics',
    'https://linkedin.com/company/noxusdynamics',
    'https://github.com/noxusdynamics',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kottayam',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  description: "Kerala's premier robotics innovation lab specializing in agritech, prosthetics, and autonomous systems.",
  foundingDate: '2024',
};

// Website schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NOXUSDYNAMICS',
  url: 'https://noxusdynamics.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://noxusdynamics.com/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

// Breadcrumb schema
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Service schema
export function serviceSchema(name: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: 'NOXUSDYNAMICS',
      url: 'https://noxusdynamics.com',
    },
    areaServed: 'IN-KL',
  };
}

// Contact page schema
export const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact NOXUSDYNAMICS',
  description: 'Get in touch with NOXUSDYNAMICS for agritech solutions',
  mainEntity: {
    '@type': 'Organization',
    name: 'NOXUSDYNAMICS',
    url: 'https://noxusdynamics.com',
    email: 'hello@noxusdynamics.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kottayam',
      addressRegion: 'Kerala',
      addressCountry: 'IN',
    },
  },
};