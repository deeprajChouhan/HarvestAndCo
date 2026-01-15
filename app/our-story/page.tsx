import type { Metadata } from 'next';
import StorySection from '@/components/StorySection';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Our Story | Harvest & Co.',
  description: 'Learn about our Local First approach and accessible ethical dining.',
  openGraph: {
    title: 'Our Story | Harvest & Co.',
    description: 'Learn about our Local First approach and accessible ethical dining.',
    type: 'website'
  }
};

export default function OurStoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Our Story</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Built in the West Midlands, Harvest &amp; Co. keeps ethical choices affordable and straightforward.
      </p>
      <StorySection />
      <div className="mt-8">
        <CTAButton href="/suppliers" label="Meet the suppliers" />
      </div>
    </div>
  );
}
