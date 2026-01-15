'use client';

import { useState } from 'react';
import LocationCard from '@/components/LocationCard';
import { locations } from '@/content/locations';

export default function LocationsPageClient() {
  const [selected, setSelected] = useState(locations[0].slug);
  const selectedLocation = locations.find((location) => location.slug === selected);

  return (
    <div className="mt-8 space-y-8">
      <div className="rounded-2xl bg-white p-6 shadow-card">
        <h2 className="font-heading text-xl font-semibold text-harvest-green">Find your nearest location</h2>
        <p className="mt-2 text-sm text-harvest-charcoal/70">
          Select a nearby town and we will highlight the closest Harvest &amp; Co.
        </p>
        <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
          <label htmlFor="nearest" className="text-sm font-semibold text-harvest-charcoal">
            Choose a town
          </label>
          <select
            id="nearest"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            className="rounded-full border border-harvest-green/20 px-4 py-2 text-sm"
          >
            {locations.map((location) => (
              <option key={location.slug} value={location.slug}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        {selectedLocation ? (
          <p className="mt-4 text-sm text-harvest-charcoal/80">
            Closest match: <strong>{selectedLocation.name}</strong> — {selectedLocation.address}.
          </p>
        ) : null}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {locations.map((location) => (
          <LocationCard key={location.slug} location={location} />
        ))}
      </div>
    </div>
  );
}
