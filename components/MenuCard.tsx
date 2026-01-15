import { MenuItem } from '@/content/menuItems';
import AllergenBadge from './AllergenBadge';
import ProvenanceLine from './ProvenanceLine';

export default function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-card">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-heading text-lg font-semibold text-harvest-charcoal">{item.name}</h3>
          <p className="mt-2 text-sm text-harvest-charcoal/80">{item.description}</p>
        </div>
        <span className="text-sm font-semibold text-harvest-green">{item.price}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-harvest-cream px-2 py-1 text-xs font-semibold text-harvest-brown">
            {tag.replace('-', ' ')}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {item.allergens.length > 0 ? (
          item.allergens.map((allergen) => <AllergenBadge key={allergen} allergen={allergen} />)
        ) : (
          <AllergenBadge allergen="no listed allergens" />
        )}
      </div>
      <ProvenanceLine text={item.provenance} />
    </article>
  );
}
