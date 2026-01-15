import { storyContent } from '@/content/story';

export default function StorySection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-harvest-green">Our story</h2>
          <p className="mt-4 text-base text-harvest-charcoal/80">{storyContent.mission}</p>
          <ul className="mt-6 space-y-3 text-sm text-harvest-charcoal/80">
            {storyContent.values.map((value) => (
              <li key={value} className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-harvest-yellow" aria-hidden />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-card">
          <h3 className="font-heading text-xl font-semibold text-harvest-charcoal">Proof over promises</h3>
          <p className="mt-3 text-sm text-harvest-charcoal/70">
            Sustainability messaging must be clear and backed by evidence. Here is how we report on progress.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-harvest-charcoal/80">
            {storyContent.proofPoints.map((point) => (
              <li key={point} className="rounded-xl bg-harvest-cream px-3 py-2">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
