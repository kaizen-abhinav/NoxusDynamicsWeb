'use client';

import { useState, useEffect, useCallback } from 'react';

interface CSRFTokenHook {
  csrfToken: string | null;
  loading: boolean;
  error: string | null;
  refreshToken: () => Promise<void>;
}

export function useCSRFToken(): CSRFTokenHook {
  const [csrfToken, setCsrfToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchToken = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/csrf-token', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch CSRF token');
      }

      const data = await response.json();
      setCsrfToken(data.csrfToken);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setCsrfToken(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchToken();
  }, [fetchToken]);

  return { csrfToken, loading, error, refreshToken: fetchToken };
}

// Helper to include CSRF token in requests
export function withCSRFToken(token: string | null, init?: RequestInit): RequestInit {
  return {
    ...init,
    headers: {
      ...init?.headers,
      'Content-Type': 'application/json',
      'X-CSRF-Token': token || '',
    },
    credentials: 'include',
  };
}

// Hook for forms that need CSRF protection
export function useCSRFProtectedForm() {
  const { csrfToken, loading, error, refreshToken } = useCSRFToken();

  const submitForm = useCallback(async (
    url: string,
    data: Record<string, unknown>,
    options?: RequestInit
  ) => {
    if (!csrfToken) {
      await refreshToken();
      // Try again after refresh
      const response = await fetch(url, withCSRFToken(csrfToken, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
      }));
      return response;
    }

    const response = await fetch(url, withCSRFToken(csrfToken, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    }));

    // If CSRF token expired (403), refresh and retry once
    if (response.status === 403) {
      await refreshToken();
      const newToken = csrfToken; // Will be updated after refresh
      return fetch(url, withCSRFToken(newToken, {
        method: 'POST',
        body: JSON.stringify(data),
        ...options,
      }));
    }

    return response;
  }, [csrfToken, refreshToken]);

  return { submitForm, csrfToken, loading, error };
}