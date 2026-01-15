import { Offer } from '@/content/offers';

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h3 className="font-heading text-xl font-semibold text-harvest-green">{offer.title}</h3>
      <p className="mt-2 text-sm text-harvest-charcoal/80">{offer.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-harvest-charcoal">{offer.price}</span>
        <span className="rounded-full bg-harvest-yellow/60 px-3 py-1 text-xs font-semibold text-harvest-brown">
          {offer.saving}
        </span>
      </div>
      <p className="mt-3 text-xs text-harvest-charcoal/60">{offer.availability}</p>
    </div>
  );
}
