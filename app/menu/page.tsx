import type { Metadata } from 'next';
import MenuPageClient from './MenuPageClient';

export const metadata: Metadata = {
  title: 'Menu | Harvest & Co.',
  description: 'Browse seasonal menus with allergen and supplier details.',
  openGraph: {
    title: 'Menu | Harvest & Co.',
    description: 'Browse seasonal menus with allergen and supplier details.',
    type: 'website'
  }
};

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="font-heading text-3xl font-semibold text-harvest-green">Menu</h1>
          <p className="mt-2 text-sm text-harvest-charcoal/80">
            Filter by dietary needs, local suppliers, or seasonal specials. Every dish includes allergen and provenance
            details.
          </p>
        </div>
      </div>
      <MenuPageClient />
    </div>
  );
}
