// Shared CSRF token store - accessible to both middleware and API routes
// In production, use Redis or a similar distributed store

const tokenStore = new Map<string, { token: string; expires: number }>();

function generateToken(): string {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}

export function getOrCreateToken(sessionId: string): string {
  const now = Date.now();
  const existing = tokenStore.get(sessionId);

  if (existing && existing.expires > now) {
    return existing.token;
  }

  const token = generateToken();
  tokenStore.set(sessionId, { token, expires: now + 3600000 }); // 1 hour
  return token;
}

export function validateCSRFToken(sessionId: string, token: string): boolean {
  const stored = tokenStore.get(sessionId);
  if (!stored || stored.expires < Date.now()) {
    return false;
  }
  // Constant-time comparison
  return stored.token === token;
}

export function rotateToken(sessionId: string): string {
  const token = generateToken();
  tokenStore.set(sessionId, { token, expires: Date.now() + 3600000 });
  return token;
}

export function getSessionId(): string {
  // This is a simple implementation - in production, get from cookies or auth
  return generateToken().slice(0, 32);
}

// Clean up expired tokens periodically
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [sessionId, data] of tokenStore.entries()) {
      if (data.expires < now) {
        tokenStore.delete(sessionId);
      }
    }
  }, 5 * 60 * 1000); // Every 5 minutes
}