export const CONTACT_CONFIG = {
  apiEndpoint: '/api/contact',
  rateLimit: {
    maxSubmissions: 3,
    windowMs: 5000, // 5 minutes
  },
  validation: {
    name: { min: 2, max: 100 },
    email: { max: 254 },
    message: { min: 10, max: 5000 },
    company: { max: 100 },
  },
  honeypotFields: ['website', 'url', 'company_name', 'bot_check', 'hp_field'],
} as const;