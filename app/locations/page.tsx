import type { Metadata } from 'next';
import LocationsPageClient from './LocationsPageClient';

export const metadata: Metadata = {
  title: 'Locations | Harvest & Co.',
  description: 'Find your nearest Harvest & Co. in the West Midlands.',
  openGraph: {
    title: 'Locations | Harvest & Co.',
    description: 'Find your nearest Harvest & Co. in the West Midlands.',
    type: 'website'
  }
};

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Locations</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Six West Midlands locations with accessible seating, honest menus, and clear booking options.
      </p>
      <LocationsPageClient />
    </div>
  );
}
