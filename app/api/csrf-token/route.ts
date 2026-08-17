import { NextRequest, NextResponse } from 'next/server';
import { getOrCreateToken, validateCSRFToken, rotateToken } from '@/lib/security/csrf';

function getSessionId(request: NextRequest): string {
  return request.cookies.get('session_id')?.value || 'anonymous';
}

export async function GET(request: NextRequest) {
  const sessionId = getSessionId(request);
  const token = getOrCreateToken(sessionId);

  const response = NextResponse.json({ csrfToken: token });
  response.cookies.set('session_id', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });

  response.cookies.set('csrf_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60, // 1 hour
    path: '/',
  });

  return response;
}

export async function POST(request: NextRequest) {
  const sessionId = getSessionId(request);
  const token = request.headers.get('x-csrf-token') ||
                request.cookies.get('csrf_token')?.value ||
                (await request.json().catch(() => ({})))?.csrf_token;

  const valid = validateCSRFToken(sessionId, token || '');

  if (!valid) {
    return NextResponse.json(
      { valid: false, error: 'Invalid or expired CSRF token' },
      { status: 403 }
    );
  }

  // Rotate token
  const newToken = rotateToken(sessionId);

  return NextResponse.json({ valid: true, csrfToken: newToken });
}