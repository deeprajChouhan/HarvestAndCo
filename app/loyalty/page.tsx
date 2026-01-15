import type { Metadata } from 'next';
import LoyaltyPointsLadder from '@/components/LoyaltyPointsLadder';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Loyalty | Harvest & Co.',
  description: 'Collect points and rewards for ethical everyday dining.',
  openGraph: {
    title: 'Loyalty | Harvest & Co.',
    description: 'Collect points and rewards for ethical everyday dining.',
    type: 'website'
  }
};

export default function LoyaltyPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Harvest Rewards</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Simple points. Honest rewards. Earn more when you choose seasonal and local dishes.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">How it works</h2>
          <ul className="mt-4 space-y-3 text-sm text-harvest-charcoal/80">
            <li>£1 = 10 points on every dine-in or pickup order.</li>
            <li>Seasonal dishes earn +20% points, local items earn +15%.</li>
            <li>Review bonus: +50 points. Referral bonus: +150 points.</li>
          </ul>
          <div className="mt-6">
            <CTAButton href="/book-order" label="Start earning points" />
          </div>
        </div>
        <LoyaltyPointsLadder />
      </div>
    </div>
  );
}
