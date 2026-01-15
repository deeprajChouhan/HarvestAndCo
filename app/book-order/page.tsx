import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import { BOOKING_URL, ORDER_URL } from '@/content/config';

export const metadata: Metadata = {
  title: 'Book or Order | Harvest & Co.',
  description: 'Book a table or order for pickup at Harvest & Co.',
  openGraph: {
    title: 'Book or Order | Harvest & Co.',
    description: 'Book a table or order for pickup at Harvest & Co.',
    type: 'website'
  }
};

export default function BookOrderPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Book or order</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Choose the way that works for you. Book ahead for table service or order for pickup or delivery.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">Book a table</h2>
          <p className="mt-2 text-sm text-harvest-charcoal/70">
            Reserve in under a minute. We keep space for walk-ins too.
          </p>
          <div className="mt-4">
            <CTAButton href={BOOKING_URL} label="Book now" />
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">Order for pickup</h2>
          <p className="mt-2 text-sm text-harvest-charcoal/70">
            Same menu, same prices. Choose a location and a pickup time that suits you.
          </p>
          <div className="mt-4">
            <CTAButton href={ORDER_URL} label="Start an order" />
          </div>
        </div>
      </div>
      <div className="mt-10 rounded-2xl bg-harvest-cream p-6 text-sm text-harvest-charcoal/80">
        <p className="font-semibold text-harvest-charcoal">Need a hand?</p>
        <p className="mt-2">
          Call your local restaurant for quick changes, or use the contact form for booking and order support.
        </p>
        <div className="mt-3">
          <CTAButton href="/contact" label="Contact customer care" variant="secondary" />
        </div>
      </div>
    </div>
  );
}
