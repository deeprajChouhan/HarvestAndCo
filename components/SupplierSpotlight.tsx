import CTAButton from './CTAButton';

const spotlight = [
  {
    name: 'Rowley Farm Co-op',
    detail: 'Family-run growers supplying root veg for our Black Country stew.',
    proof: 'Weekly deliveries, 40-mile radius, water-saving irrigation.'
  },
  {
    name: 'Digbeth Coffee Roasters',
    detail: 'Direct-trade beans, roasted in Birmingham every Monday.',
    proof: 'Reusable kegs for cold brew and transparent pricing.'
  }
];

export default function SupplierSpotlight() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-harvest-brown">Supplier spotlight</p>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-harvest-charcoal">Local First proof, shared openly.</h2>
        </div>
        <CTAButton href="/suppliers" label="Meet our suppliers" variant="secondary" />
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {spotlight.map((item) => (
          <div key={item.name} className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="font-heading text-xl font-semibold text-harvest-green">{item.name}</h3>
            <p className="mt-3 text-sm text-harvest-charcoal/80">{item.detail}</p>
            <p className="mt-3 text-xs text-harvest-brown">Proof point: {item.proof}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
