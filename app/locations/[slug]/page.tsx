import type { Metadata } from 'next';
import LocationDetail from '@/components/LocationDetail';
import { locations } from '@/content/locations';

export const generateStaticParams = () => locations.map((location) => ({ slug: location.slug }));

export const metadata: Metadata = {
  title: 'Location details | Harvest & Co.',
  description: 'Opening hours, facilities, and booking details for each Harvest & Co. location.',
  openGraph: {
    title: 'Location details | Harvest & Co.',
    description: 'Opening hours, facilities, and booking details for each Harvest & Co. location.',
    type: 'website'
  }
};

export default function LocationDetailPage({ params }: { params: { slug: string } }) {
  const location = locations.find((item) => item.slug === params.slug);

  if (!location) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-6">
        <h1 className="font-heading text-3xl font-semibold text-harvest-green">Location not found</h1>
        <p className="mt-2 text-sm text-harvest-charcoal/80">Please check our locations list to find a nearby venue.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <LocationDetail location={location} />
    </div>
  );
}
