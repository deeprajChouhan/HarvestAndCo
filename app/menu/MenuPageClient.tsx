'use client';

import { useMemo, useState } from 'react';
import MenuFilterBar from '@/components/MenuFilterBar';
import MenuCard from '@/components/MenuCard';
import { menuItems, MenuTag } from '@/content/menuItems';

const categories = ['Mains', 'Small Plates', 'Sides', 'Kids', 'Desserts', 'Drinks'] as const;

export default function MenuPageClient() {
  const [search, setSearch] = useState('');
  const [selectedTags, setSelectedTags] = useState<MenuTag[]>([]);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch = [item.name, item.description, item.provenance]
        .join(' ')
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesTags = selectedTags.every((tag) => item.tags.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  const toggleTag = (tag: MenuTag) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((value) => value !== tag) : [...prev, tag]));
  };

  return (
    <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_2fr]">
      <MenuFilterBar
        search={search}
        onSearchChange={setSearch}
        selectedTags={selectedTags}
        onToggleTag={toggleTag}
      />
      <div className="space-y-10">
        {categories.map((category) => {
          const items = filteredItems.filter((item) => item.category === category);
          if (items.length === 0) return null;
          return (
            <section key={category}>
              <h2 className="font-heading text-2xl font-semibold text-harvest-charcoal">{category}</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
        {filteredItems.length === 0 ? (
          <div className="rounded-2xl bg-harvest-cream p-6 text-sm text-harvest-charcoal/70">
            No dishes match those filters. Try removing a tag or clearing your search.
          </div>
        ) : null}
      </div>
    </div>
  );
}
