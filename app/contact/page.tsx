import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { faqs } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'Contact | Harvest & Co.',
  description: 'Get in touch with Harvest & Co. customer care.',
  openGraph: {
    title: 'Contact | Harvest & Co.',
    description: 'Get in touch with Harvest & Co. customer care.',
    type: 'website'
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
      <h1 className="font-heading text-3xl font-semibold text-harvest-green">Contact</h1>
      <p className="mt-2 text-sm text-harvest-charcoal/80">
        Questions, feedback, or booking help? Our customer care team responds within two working days.
      </p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <ContactForm />
        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">Customer care</h2>
            <p className="mt-2 text-sm text-harvest-charcoal/70">Email: hello@harvestandco.co.uk</p>
            <p className="text-sm text-harvest-charcoal/70">Phone: 0121 555 0100</p>
            <p className="mt-4 text-xs text-harvest-charcoal/60">
              For urgent changes, call your chosen location directly. Contact details are on every location page.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-card">
            <h2 className="font-heading text-xl font-semibold text-harvest-charcoal">Quick FAQs</h2>
            <ul className="mt-3 space-y-3 text-sm text-harvest-charcoal/80">
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <p className="font-semibold text-harvest-charcoal">{faq.question}</p>
                  <p className="text-sm text-harvest-charcoal/70">{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-harvest-cream p-6">
            <h3 className="font-heading text-lg font-semibold text-harvest-charcoal">Complaint resolution</h3>
            <p className="mt-2 text-sm text-harvest-charcoal/70">
              We respond fast and take responsibility. Tell us what went wrong and how we can put it right.
            </p>
            <p className="mt-2 text-sm text-harvest-charcoal/70">
              A manager will acknowledge your message within 48 hours and provide a clear next step.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
