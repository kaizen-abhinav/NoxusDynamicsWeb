import type { Metadata } from 'next';
import { Hanken_Grotesk } from 'next/font/google';
import './globals.css';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
});

export const metadata: Metadata = {
  title: 'CLIMBLABS | Algorithmic Brutalist',
  description: 'Data-driven SEO systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hanken.className} bg-[#f0f0f0] text-[#1a1c1c] antialiased selection:bg-[#e2241f] selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
