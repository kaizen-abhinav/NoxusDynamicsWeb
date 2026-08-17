import { NextRequest, NextResponse } from 'next/server';

// Define the expected form data shape - without index signature to avoid TS4111
interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  hp_field?: string;
  website?: string;
}

// Define sanitized output shape
interface SanitizedFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

// Input sanitization
function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .slice(0, 5000);
}

function sanitizeEmail(email: string): string {
  return email.trim().toLowerCase().slice(0, 254);
}

function sanitizeName(name: string): string {
  return name.trim().slice(0, 100);
}

// Honeypot validation - uses Record to access properties with bracket notation
function validateHoneypot(data: Record<string, string | undefined>): boolean {
  const honeypotFields = ['website', 'url', 'company_name', 'bot_check', 'hp_field'];
  return !honeypotFields.some(field => data[field] && String(data[field]).trim().length > 0);
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

// Validate required fields
function validateContactForm(data: ContactFormData): { valid: boolean; errors: Record<string, string>; sanitized: SanitizedFormData } {
  const errors: Record<string, string> = {};
  const sanitized: SanitizedFormData = { name: '', email: '', company: '', message: '' };

  // Name validation
  const rawName = String(data.name ?? '');
  if (!rawName.trim()) {
    errors['name'] = 'Name is required';
  } else if (rawName.trim().length > 100) {
    errors['name'] = 'Name must be less than 100 characters';
  }
  sanitized.name = sanitizeName(rawName);

  // Email validation
  const rawEmail = String(data.email ?? '');
  if (!rawEmail.trim()) {
    errors['email'] = 'Email is required';
  } else if (!isValidEmail(rawEmail)) {
    errors['email'] = 'Enter a valid email address';
  }
  sanitized.email = sanitizeEmail(rawEmail);

  // Company (optional)
  const rawCompany = String(data.company ?? '');
  if (rawCompany.trim().length > 100) {
    errors['company'] = 'Company name must be less than 100 characters';
  }
  sanitized.company = sanitizeInput(rawCompany).slice(0, 100);

  // Message validation
  const rawMessage = String(data.message ?? '');
  if (!rawMessage.trim()) {
    errors['message'] = 'Message is required';
  } else if (rawMessage.trim().length > 5000) {
    errors['message'] = 'Message must be less than 5000 characters';
  } else if (rawMessage.trim().length < 10) {
    errors['message'] = 'Message must be at least 10 characters';
  }
  sanitized.message = sanitizeInput(rawMessage);

  return { valid: Object.keys(errors).length === 0, errors, sanitized };
}

// Rate limiting (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(key);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const realIP = request.headers.get('x-real-ip');
    const ip = forwarded?.split(',')[0]?.trim() || realIP || 'unknown';

    // Rate limiting: 3 submissions per 5 minutes per IP
    if (!checkRateLimit(`contact:${ip}`, 3, 300000)) {
      return NextResponse.json(
        { error: 'Too many submissions. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '300' } }
      );
    }

    // Parse body as Record first for honeypot check
    const rawBody = await request.json() as Record<string, string | undefined>;

    // Honeypot check - if filled, it's likely a bot
    if (!validateHoneypot(rawBody)) {
      // Return success to waste bot time, but don't actually process
      console.warn('Honeypot triggered from IP:', ip);
      return NextResponse.json({ success: true, message: 'Request received' });
    }

    // Now validate as ContactFormData - use bracket notation to satisfy exactOptionalPropertyTypes
    const body: ContactFormData = {
      name: String(rawBody['name'] ?? ''),
      email: String(rawBody['email'] ?? ''),
      company: rawBody['company'] ? String(rawBody['company']) : undefined,
      message: String(rawBody['message'] ?? ''),
      hp_field: rawBody['hp_field'] ? String(rawBody['hp_field']) : undefined,
      website: rawBody['website'] ? String(rawBody['website']) : undefined,
    };

    // Validate form data
    const { valid, errors, sanitized } = validateContactForm(body);

    if (!valid) {
      return NextResponse.json(
        { error: 'Validation failed', details: errors },
        { status: 400 }
      );
    }

    // In production, integrate with your email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Contact Form <contact@noxusdynamics.com>',
    //   to: 'hello@noxusdynamics.com',
    //   subject: `New Contact: ${sanitized.name}`,
    //   text: `Name: ${sanitized.name}\nEmail: ${sanitized.email}\nCompany: ${sanitized.company}\n\n${sanitized.message}`,
    // });

    // For now, simulate successful submission
    console.info('Contact form submission:', {
      name: sanitized.name,
      email: sanitized.email,
      company: sanitized.company,
      messageLength: sanitized.message.length,
      ip,
      timestamp: new Date().toISOString(),
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { success: true, message: 'Message sent successfully. We\'ll respond within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    // Don't expose internal errors
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': process.env['NEXT_PUBLIC_APP_URL'] ?? 'http://localhost:3000',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-CSRF-Token',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}