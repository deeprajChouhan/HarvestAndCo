import Link from 'next/link';
import { Location } from '@/content/locations';

export default function LocationCard({ location }: { location: Location }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-card">
      <h3 className="font-heading text-xl font-semibold text-harvest-green">{location.name}</h3>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        {location.address}, {location.postcode}
      </p>
      <p className="mt-3 text-sm text-harvest-charcoal/70">{location.story}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {location.facilities.slice(0, 3).map((facility) => (
          <span key={facility} className="rounded-full bg-harvest-cream px-3 py-1 text-xs text-harvest-brown">
            {facility}
          </span>
        ))}
      </div>
      <Link href={`/locations/${location.slug}`} className="mt-4 inline-flex text-sm font-semibold text-harvest-green">
        View details
      </Link>
    </div>
  );
}
