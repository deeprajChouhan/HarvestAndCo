import Link from 'next/link';
import { ACCESSIBILITY_STATEMENT_URL, BOOKING_URL, ORDER_URL } from '@/content/config';

const footerLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/offers', label: 'Offers' },
  { href: '/loyalty', label: 'Loyalty' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/contact', label: 'Contact' }
];

export default function Footer() {
  return (
    <footer className="bg-harvest-charcoal text-harvest-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[2fr_1fr_1fr] lg:px-6">
        <div>
          <h2 className="font-heading text-2xl font-semibold">Harvest &amp; Co.</h2>
          <p className="mt-4 text-sm text-harvest-cream/80">
            Ethical choices at everyday prices. Six West Midlands locations with honest food, clear sourcing, and
            warm service.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <Link href={BOOKING_URL} className="underline">
              Book a table
            </Link>
            <Link href={ORDER_URL} className="underline">
              Order pickup
            </Link>
            <Link href={ACCESSIBILITY_STATEMENT_URL} className="underline">
              Accessibility statement
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-harvest-yellow">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">Stay in touch</h3>
          <p className="mt-3 text-sm text-harvest-cream/80">Follow for menu updates and local supplier stories.</p>
          <div className="mt-3 flex gap-3 text-sm">
            <span className="rounded-full border border-harvest-cream/40 px-3 py-1">Instagram</span>
            <span className="rounded-full border border-harvest-cream/40 px-3 py-1">Facebook</span>
            <span className="rounded-full border border-harvest-cream/40 px-3 py-1">TikTok</span>
          </div>
        </div>
      </div>
      <div className="border-t border-harvest-cream/10 py-4 text-center text-xs text-harvest-cream/60">
        © 2024 Harvest &amp; Co. West Midlands. Built for accessible ethical dining.
      </div>
    </footer>
  );
}
