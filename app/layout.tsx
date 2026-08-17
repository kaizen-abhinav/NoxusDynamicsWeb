import type { Metadata } from 'next';
import { Hanken_Grotesk, JetBrains_Mono, Montserrat, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

export const dynamic = 'force-dynamic';

const hanken = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-jetbrains',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-montserrat',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'NOXUSDYNAMICS | Precision Agritech Systems',
  description: 'Next-generation robotics and AI systems for scalable, high-yield microgreens cultivation.',
  icons: {
    icon: '/favicon.ico',
    apple: '/Logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols Outlined for mobile terminal icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${hanken.className} ${jetbrainsMono.variable} ${montserrat.variable} ${plusJakarta.variable} bg-[#f0f0f0] text-[#1a1c1c] antialiased selection:bg-[#e2241f] selection:text-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
