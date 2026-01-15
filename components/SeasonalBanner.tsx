import CTAButton from './CTAButton';

export default function SeasonalBanner() {
  return (
    <section className="bg-harvest-yellow/20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between lg:px-6">
        <div>
          <p className="text-sm font-semibold text-harvest-brown">Seasonal focus</p>
          <h2 className="mt-2 font-heading text-2xl font-semibold text-harvest-charcoal">
            Autumn plates built around local squash and apples.
          </h2>
          <p className="mt-2 text-sm text-harvest-charcoal/80">
            We share supplier names and adjust menus weekly to reduce waste and keep prices fair.
          </p>
        </div>
        <CTAButton href="/menu" label="Explore seasonal menu" />
      </div>
    </section>
  );
}
