import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.resend.com https://api.sendgrid.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self';",
  },
  transpilePackages: ['motion'],
  webpack: (config, { dev, isServer }) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env['DISABLE_HMR'] === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }

    // Optimize images in webpack
    config.module?.rules?.push({
      test: /\.(png|jpe?g|gif|webp|avif)$/i,
      type: 'asset',
      generator: {
        filename: 'static/images/[name].[hash][ext]',
      },
    });

    return config;
  },
  // Compression
  compress: true,
  // Power by header
  poweredByHeader: false,
  // Output configuration for static export if needed
  // output: 'standalone',
};

export default nextConfig;