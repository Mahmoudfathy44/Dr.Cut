import type { Metadata } from 'next';
import { Amiri, Cairo } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { LanguageProvider } from './LanguageProvider';

// Font definitions
const amiri = Amiri({
  subsets: ['arabic', 'latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: 'Dr Cut — Premium Barbershop',
    template: '%s | Dr Cut',
  },
  description: 'Dr Cut is a premium barbershop experience. Precision cuts, expert beard sculpting, and luxury grooming services across Saudi Arabia.',
  keywords: ['barbershop', 'premium haircut', 'Dr Cut', 'grooming', 'beard', 'Riyadh', 'Jeddah', 'Saudi Arabia'],
  openGraph: {
    title: 'Dr Cut — Premium Barbershop',
    description: 'Precision cuts and luxury grooming. Book your seat today.',
    type: 'website',
    locale: 'ar_SA',
    siteName: 'Dr Cut',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Cut — Premium Barbershop',
    description: 'Precision cuts and luxury grooming. Book your seat today.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${amiri.variable} ${cairo.variable}`}>
      <body className="bg-ink text-cream antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
