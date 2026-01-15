import CTAButton from './CTAButton';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-harvest-green text-harvest-cream">
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,_#F5C84C_0%,_transparent_45%)]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:px-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-harvest-yellow">Ethical choices at everyday prices</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight md:text-5xl">
            West Midlands casual dining that feels local, honest, and easy.
          </h1>
          <p className="mt-4 text-base text-harvest-cream/90 md:text-lg">
            Six welcoming locations. Menus built around seasonal produce, with clear supplier proof points. No guilt,
            no fuss—just good food for everyday budgets.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CTAButton href="/menu" label="View the menu" />
            <CTAButton href="/book-order" label="Book or order" variant="secondary" />
          </div>
        </div>
        <div className="rounded-3xl bg-harvest-cream/10 p-6 shadow-card">
          <div className="rounded-2xl bg-harvest-cream/90 p-6 text-harvest-charcoal">
            <h2 className="font-heading text-xl font-semibold">Local First today</h2>
            <p className="mt-3 text-sm">
              This week’s main suppliers: Rowley Farm Co-op, Digbeth Coffee Roasters, Severn Valley Butchers. Full
              sourcing details on every dish.
            </p>
            <div className="mt-5 grid gap-3 text-sm">
              <div className="rounded-xl bg-harvest-cream px-4 py-3">
                <p className="font-semibold">60% local target</p>
                <p className="text-xs text-harvest-charcoal/70">Updated seasonally with proof notes.</p>
              </div>
              <div className="rounded-xl bg-harvest-cream px-4 py-3">
                <p className="font-semibold">Low-waste specials</p>
                <p className="text-xs text-harvest-charcoal/70">Menu built around whole ingredients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
