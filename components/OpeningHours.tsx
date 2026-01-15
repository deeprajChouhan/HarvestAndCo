import { Location } from '@/content/locations';

export default function OpeningHours({ hours }: { hours: Location['hours'] }) {
  return (
    <ul className="space-y-2 text-sm">
      {hours.map((entry) => (
        <li key={entry.day} className="flex justify-between">
          <span className="text-harvest-charcoal/70">{entry.day}</span>
          <span className="font-semibold text-harvest-charcoal">
            {entry.open} – {entry.close}
          </span>
        </li>
      ))}
    </ul>
  );
}
