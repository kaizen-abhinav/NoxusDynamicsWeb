# NOXUSDYNAMICS - Precision Agritech Systems

Next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.

## Features

- **Security First**: CSP, CSRF protection, rate limiting, input sanitization, honeypot fields
- **Performance Optimized**: Image optimization (WebP/AVIF), code splitting, lazy loading, static generation
- **Accessible**: WCAG 2.1 AA compliant, reduced motion support, semantic HTML, ARIA labels
- **SEO Ready**: JSON-LD structured data, sitemap.xml, robots.txt, Open Graph meta tags
- **PWA Support**: Web app manifest, offline-ready
- **Type Safe**: Strict TypeScript configuration
- **Code Quality**: ESLint, Prettier, Husky pre-commit hooks

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Image Optimization**: Next.js Image + Sharp

## Getting Started

### Prerequisites

- Node.js 20+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/noxusdynamics/noxusdynamics-web.git
cd noxusdynamics-web

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript type checking

# Optimization
npm run optimize:images  # Optimize images to WebP/AVIF
npm run analyze      # Analyze bundle size

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:ci      # Run tests for CI
```

## Project Structure

```
noxusdynamics-web/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── contact/       # Contact form endpoint
│   │   └── csrf-token/    # CSRF token endpoint
│   ├── team/              # Team page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── robots.ts          # Robots.txt
│   └── sitemap.ts         # Sitemap.xml
├── components/            # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Metrics.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── JsonLd.tsx
├── hooks/                 # Custom React hooks
│   ├── use-csrf-token.ts
│   └── use-mobile.ts
├── lib/                   # Utility functions
│   ├── utils.ts
│   └── contact-config.ts
├── middleware.ts          # Next.js middleware (security headers, rate limiting)
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.mjs      # ESLint configuration
├── .env.example           # Environment variables template
├── public/                # Static assets
│   ├── manifest.json      # PWA manifest
│   ├── Logo.png
│   ├── logo.svg
│   └── team/              # Team member photos
└── scripts/               # Build scripts
    └── optimize-images.js
```

## Security Features

### Content Security Policy (CSP)
Configured via middleware and next.config.ts to prevent XSS attacks.

### CSRF Protection
- Double-submit cookie pattern
- Automatic token refresh
- Honeypot fields for bot detection

### Rate Limiting
- API routes: 30 requests/minute per IP
- Contact form: 3 submissions/5 minutes per IP

### Input Sanitization
- XSS prevention via DOMPurify-style sanitization
- Length limits on all fields
- Email format validation

### Security Headers
- Strict-Transport-Security (HSTS)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: Restricted
- Cross-Origin-Opener-Policy: same-origin
- Cross-Origin-Resource-Policy: same-origin

## Performance Optimizations

### Images
- Automatic WebP/AVIF conversion
- Responsive sizes (640w - 3840w)
- Lazy loading with blur placeholders
- Priority loading for above-fold images

### Code Splitting
- Dynamic imports for heavy components
- Vendor chunk separation
- Motion library separated

### Caching
- Static assets: 1 year immutable
- API responses: No cache
- HTML: No cache (dynamic rendering)

### Bundle Analysis
Run `npm run analyze` to generate bundle report.

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- Focus-visible styles
- Skip to main content link
- ARIA labels and roles
- Reduced motion support
- Color contrast ratios (WCAG AA)
- Screen reader announcements

## SEO

- JSON-LD Organization schema
- JSON-LD Person schema (team page)
- Open Graph meta tags
- Twitter Card support
- Sitemap.xml generation
- Robots.txt
- Canonical URLs

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy --prod
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables
Set in your deployment platform:
- `NEXT_PUBLIC_APP_URL` - Production URL
- `RESEND_API_KEY` - Email service API key
- `CONTACT_EMAIL` - Destination email for contact forms

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `npm run lint:fix && npm run type-check`
5. Submit a pull request

## License

Proprietary - All rights reserved. NOXUSDYNAMICS 2025.