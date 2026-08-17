'use client';

import { useEffect } from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Remove any existing JSON-LD scripts for this type
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-page="true"]');
    existingScripts.forEach(script => script.remove());
  }, []);

  return (
    <script
      type="application/ld+json"
      data-page="true"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}