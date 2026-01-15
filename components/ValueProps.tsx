const valueProps = [
  {
    title: 'Accessible ethics',
    body: 'Straightforward pricing and clear sourcing so good choices are for everyone.'
  },
  {
    title: 'Local First',
    body: 'We prioritise West Midlands growers and share supplier proof points on every menu.'
  },
  {
    title: 'Honest food',
    body: 'Short ingredient lists, allergen clarity, and seasonal dishes that change with supply.'
  }
];

export default function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {valueProps.map((prop) => (
          <div key={prop.title} className="rounded-2xl bg-white p-6 shadow-card">
            <h3 className="font-heading text-lg font-semibold text-harvest-green">{prop.title}</h3>
            <p className="mt-3 text-sm text-harvest-charcoal/80">{prop.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
