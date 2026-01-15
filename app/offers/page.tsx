import type { Metadata } from 'next';
import OfferCard from '@/components/OfferCard';
import CTAButton from '@/components/CTAButton';
import { offers } from '@/content/offers';

export const metadata: Metadata = {
  title: 'Offers | Harvest & Co.',
  description: 'Value bundles and everyday deals across our West Midlands locations.',
  openGraph: {
    title: 'Offers | Harvest & Co.',
    description: 'Value bundles and everyday deals across our West Midlands locations.',
    type: 'website'
  }
};

export default function OffersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Offers</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Value-led deals built for everyday dining. No hidden terms, just clear savings.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <OfferCard key={offer.title} offer={offer} />
        ))}
      </div>
      <div className="mt-10">
        <CTAButton href="/menu" label="See full menu" />
      </div>
    </div>
  );
}
