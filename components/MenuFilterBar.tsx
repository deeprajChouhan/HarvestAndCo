'use client';

import { MenuTag } from '@/content/menuItems';

const tagLabels: Record<MenuTag, string> = {
  vegan: 'Vegan',
  veg: 'Vegetarian',
  gf: 'Gluten-free',
  local: 'Local',
  seasonal: 'Seasonal',
  'low-waste': 'Low-waste'
};

type MenuFilterBarProps = {
  search: string;
  onSearchChange: (value: string) => void;
  selectedTags: MenuTag[];
  onToggleTag: (tag: MenuTag) => void;
};

export default function MenuFilterBar({
  search,
  onSearchChange,
  selectedTags,
  onToggleTag
}: MenuFilterBarProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-card md:p-6">
      <label className="block text-sm font-semibold text-harvest-charcoal" htmlFor="menu-search">
        Search menu
      </label>
      <input
        id="menu-search"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search dishes, ingredients, or suppliers"
        className="mt-2 w-full rounded-full border border-harvest-green/20 px-4 py-2 text-sm focus:border-harvest-green focus:outline-none"
      />
      <div className="mt-4 flex flex-wrap gap-2">
        {(Object.keys(tagLabels) as MenuTag[]).map((tag) => {
          const selected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onToggleTag(tag)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                selected
                  ? 'border-harvest-green bg-harvest-green text-harvest-cream'
                  : 'border-harvest-green/30 text-harvest-green hover:bg-harvest-green/10'
              }`}
            >
              {tagLabels[tag]}
            </button>
          );
        })}
      </div>
    </div>
  );
}
