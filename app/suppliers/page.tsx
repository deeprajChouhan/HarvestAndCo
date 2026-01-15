import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import { suppliers } from '@/content/suppliers';

export const metadata: Metadata = {
  title: 'Suppliers | Harvest & Co.',
  description: 'Meet the local suppliers who power our menus.',
  openGraph: {
    title: 'Suppliers | Harvest & Co.',
    description: 'Meet the local suppliers who power our menus.',
    type: 'website'
  }
};

export default function SuppliersPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Suppliers</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Local First means sharing names, regions, and proof points—not vague promises.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((supplier) => (
          <div key={supplier.name} className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-xl font-semibold text-harvest-green">{supplier.name}</h2>
            <p className="mt-1 text-xs font-semibold text-harvest-brown">{supplier.region}</p>
            <p className="mt-3 text-sm text-harvest-charcoal/80">Supplies: {supplier.supplies}</p>
            <p className="mt-3 text-xs text-harvest-charcoal/60">Proof: {supplier.proof}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-2xl bg-harvest-yellow/20 p-6">
        <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">Our proof approach</h2>
        <p className="mt-2 text-sm text-harvest-charcoal/70">
          Customer benefit first, proof second, values always. We keep supplier cards updated each quarter.
        </p>
        <div className="mt-4">
          <CTAButton href="/our-story" label="Read our story" />
        </div>
      </div>
    </div>
  );
}
