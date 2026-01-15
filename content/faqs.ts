export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: 'Do you list allergens on the menu?',
    answer: 'Yes. Every dish lists key allergens and our team can talk through swaps or alternatives.'
  },
  {
    question: 'How local is “Local First”?',
    answer: 'We aim for 60% of ingredients from within 50 miles. We publish supplier names and rotate dishes to match what is in season.'
  },
  {
    question: 'Can I book a table online?',
    answer: 'Yes, you can book online or by phone. Walk-ins are always welcome.'
  },
  {
    question: 'Do you offer takeaway or click & collect?',
    answer: 'Yes. Order ahead for pickup or delivery through our partners. Menu prices are the same as dine-in.'
  },
  {
    question: 'What are your sustainability actions?',
    answer: 'We track food waste weekly, use refillable water, and design menus around whole-ingredient use.'
  }
];
