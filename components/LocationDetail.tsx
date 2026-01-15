import CTAButton from './CTAButton';
import OpeningHours from './OpeningHours';
import { Location } from '@/content/locations';

export default function LocationDetail({ location }: { location: Location }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h1 className="font-heading text-3xl font-semibold text-harvest-green">{location.name}</h1>
        <p className="mt-2 text-sm text-harvest-charcoal/80">
          {location.address}, {location.postcode}
        </p>
        <p className="mt-4 text-base text-harvest-charcoal/80">{location.story}</p>
        <div className="mt-6 space-y-3 text-sm text-harvest-charcoal/80">
          <p>
            <span className="font-semibold text-harvest-charcoal">Transport:</span> {location.transport}
          </p>
          <p>
            <span className="font-semibold text-harvest-charcoal">Parking:</span> {location.parking}
          </p>
          <p>
            <span className="font-semibold text-harvest-charcoal">Facilities:</span> {location.facilities.join(', ')}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <CTAButton href={location.mapLink} label="Open map" variant="secondary" />
          <CTAButton href="/book-order" label="Book or order" />
        </div>
      </div>
      <aside className="rounded-2xl bg-white p-6 shadow-card">
        <h2 className="font-heading text-lg font-semibold text-harvest-charcoal">Opening hours</h2>
        <div className="mt-4">
          <OpeningHours hours={location.hours} />
        </div>
        <div className="mt-6 border-t border-harvest-green/10 pt-4 text-sm text-harvest-charcoal/80">
          <p>Phone: {location.phone}</p>
          <p>Email: {location.email}</p>
        </div>
      </aside>
    </div>
  );
}
