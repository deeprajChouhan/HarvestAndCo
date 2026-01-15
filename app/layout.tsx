import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Harvest & Co. | Ethical choices at everyday prices',
  description: 'Accessible ethical casual dining across six West Midlands locations.',
  openGraph: {
    title: 'Harvest & Co.',
    description: 'Ethical choices at everyday prices across the West Midlands.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
