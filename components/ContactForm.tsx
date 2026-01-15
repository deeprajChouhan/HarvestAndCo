'use client';

import { useState, type FormEvent } from 'react';

const initialState = {
  name: '',
  email: '',
  subject: 'General enquiry',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: string[] = [];
    if (!formData.name.trim()) nextErrors.push('Please add your name.');
    if (!formData.email.includes('@')) nextErrors.push('Please add a valid email.');
    if (!formData.message.trim()) nextErrors.push('Please add a message.');
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (validationErrors.length === 0) {
      setSubmitted(true);
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-card">
      <div className="grid gap-4">
        <label className="text-sm font-semibold text-harvest-charcoal" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          value={formData.name}
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          className="rounded-lg border border-harvest-green/20 px-3 py-2 text-sm"
          required
        />
        <label className="text-sm font-semibold text-harvest-charcoal" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(event) => setFormData({ ...formData, email: event.target.value })}
          className="rounded-lg border border-harvest-green/20 px-3 py-2 text-sm"
          required
        />
        <label className="text-sm font-semibold text-harvest-charcoal" htmlFor="contact-subject">
          Subject
        </label>
        <select
          id="contact-subject"
          value={formData.subject}
          onChange={(event) => setFormData({ ...formData, subject: event.target.value })}
          className="rounded-lg border border-harvest-green/20 px-3 py-2 text-sm"
        >
          <option>General enquiry</option>
          <option>Booking support</option>
          <option>Order support</option>
          <option>Feedback or complaint</option>
        </select>
        <label className="text-sm font-semibold text-harvest-charcoal" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(event) => setFormData({ ...formData, message: event.target.value })}
          className="min-h-[120px] rounded-lg border border-harvest-green/20 px-3 py-2 text-sm"
          required
        />
      </div>
      {errors.length > 0 ? (
        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">
          <ul className="list-disc pl-4">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {submitted ? (
        <p className="mt-4 rounded-lg bg-harvest-yellow/30 p-3 text-xs text-harvest-brown">
          Thanks for reaching out. A team member will reply within 2 working days.
        </p>
      ) : null}
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-harvest-green px-4 py-3 text-sm font-semibold text-harvest-cream"
      >
        Send message
      </button>
    </form>
  );
}
