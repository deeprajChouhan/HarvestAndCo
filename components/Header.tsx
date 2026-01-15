'use client';

import { useState } from 'react';
import Link from 'next/link';
import CTAButton from './CTAButton';
import { BOOKING_URL, ORDER_URL } from '@/content/config';

const navLinks = [
  { href: '/menu', label: 'Menu' },
  { href: '/locations', label: 'Locations' },
  { href: '/offers', label: 'Offers' },
  { href: '/loyalty', label: 'Loyalty' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/contact', label: 'Contact' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-harvest-cream/95 backdrop-blur border-b border-harvest-green/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-6">
        <Link href="/" className="font-heading text-xl font-bold text-harvest-green">
          Harvest &amp; Co.
        </Link>
        <div className="flex items-center gap-3 lg:hidden">
          <CTAButton href="/book-order" label="Book/Order" className="px-4 py-2 text-xs" />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-harvest-green px-3 py-2 text-xs font-semibold text-harvest-green"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            Menu
          </button>
        </div>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-harvest-charcoal hover:text-harvest-green">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <CTAButton href="/book-order" label="Book/Order" />
          <CTAButton href={BOOKING_URL} label="Book a Table" variant="secondary" />
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-harvest-green/10 bg-harvest-cream px-4 pb-6 lg:hidden">
          <div className="flex flex-col gap-3 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-harvest-charcoal"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="grid gap-2 pt-2">
              <CTAButton href={BOOKING_URL} label="Book a Table" variant="secondary" />
              <CTAButton href={ORDER_URL} label="Order for Pickup" variant="secondary" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
