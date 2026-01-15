export default function AllergenBadge({ allergen }: { allergen: string }) {
  return (
    <span className="rounded-full border border-harvest-brown/40 px-2 py-1 text-xs text-harvest-brown">
      {allergen}
    </span>
  );
}
