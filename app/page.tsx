import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import SeasonalBanner from '@/components/SeasonalBanner';
import SupplierSpotlight from '@/components/SupplierSpotlight';
import StorySection from '@/components/StorySection';
import CTAButton from '@/components/CTAButton';
import { testimonials } from '@/content/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Harvest & Co. | Ethical choices at everyday prices',
  description: 'Accessible ethical casual dining across six West Midlands locations.',
  openGraph: {
    title: 'Harvest & Co.',
    description: 'Accessible ethical casual dining across six West Midlands locations.',
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <SeasonalBanner />
      <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-2xl font-semibold text-harvest-green">Why people choose Harvest &amp; Co.</h2>
            <p className="mt-3 text-sm text-harvest-charcoal/80">
              We keep things simple: local suppliers, honest prices, and welcoming spaces across the West Midlands.
            </p>
            <div className="mt-6 grid gap-4">
              {testimonials.map((item) => (
                <blockquote key={item.name} className="rounded-xl bg-harvest-cream px-4 py-3 text-sm">
                  “{item.quote}”
                  <footer className="mt-2 text-xs font-semibold text-harvest-brown">{item.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-harvest-green/20 bg-harvest-cream p-6">
            <h3 className="font-heading text-xl font-semibold text-harvest-charcoal">Book, order, or browse menus.</h3>
            <p className="mt-3 text-sm text-harvest-charcoal/70">
              Choose a location, order for pickup, or browse our seasonal menus with allergen and supplier details.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <CTAButton href="/menu" label="View menu" />
              <CTAButton href="/locations" label="Find a location" variant="secondary" />
              <CTAButton href="/book-order" label="Book or order" variant="secondary" />
            </div>
          </div>
        </div>
      </section>
      <SupplierSpotlight />
      <section id="accessibility" className="bg-harvest-cream">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
          <h2 className="font-heading text-2xl font-semibold text-harvest-green">Accessibility statement</h2>
          <p className="mt-3 text-sm text-harvest-charcoal/80">
            We design with clear contrast, keyboard navigation, and readable type. If you spot a barrier, let us know
            and we will fix it quickly.
          </p>
        </div>
      </section>
      <StorySection />
    </>
  );
}
