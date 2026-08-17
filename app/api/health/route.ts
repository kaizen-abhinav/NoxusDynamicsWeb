import { NextResponse } from 'next/server';

export async function GET() {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    version: process.env['npm_package_version'] || '1.0.0',
    checks: {
      database: 'ok', // Replace with actual DB check
      cache: 'ok',    // Replace with actual cache check
      storage: 'ok',  // Replace with actual storage check
    },
  };

  // In production, you might want to actually check dependencies
  // const dbStatus = await checkDatabase();
  // const cacheStatus = await checkCache();

  return NextResponse.json(healthCheck, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Content-Type': 'application/json',
    },
  });
}

// For Kubernetes liveness/readiness probes
export const dynamic = 'force-dynamic';