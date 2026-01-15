export type Offer = {
  title: string;
  description: string;
  price: string;
  saving: string;
  availability: string;
};

export const offers: Offer[] = [
  {
    title: 'Lunch Plates Bundle',
    description: 'Any main + side + soft drink before 3pm.',
    price: '£12.50',
    saving: 'Save £3.40',
    availability: 'Mon–Fri, 11am–3pm.'
  },
  {
    title: 'Family Table Deal',
    description: '2 mains, 2 kids meals, 2 sides.',
    price: '£36.00',
    saving: 'Save £6.50',
    availability: 'Every day after 4pm.'
  },
  {
    title: 'Plant-Powered Plates',
    description: 'Any vegan main + seasonal side.',
    price: '£11.50',
    saving: 'Save £2.20',
    availability: 'Mon–Thu, all day.'
  },
  {
    title: 'Midweek Supper',
    description: 'Starter + main for one.',
    price: '£14.90',
    saving: 'Save £3.00',
    availability: 'Tue–Thu, 5pm–8pm.'
  },
  {
    title: 'After School Mini Combo',
    description: 'Kids meal + fruit + drink.',
    price: '£7.50',
    saving: 'Save £1.80',
    availability: 'Mon–Fri, 3pm–6pm.'
  },
  {
    title: 'Friday Friends Table',
    description: '4 mains + 2 sides to share.',
    price: '£46.00',
    saving: 'Save £8.00',
    availability: 'Fridays after 5pm.'
  },
  {
    title: 'Brunch & Brew',
    description: 'Any brunch main + hot drink.',
    price: '£9.80',
    saving: 'Save £2.00',
    availability: 'Sat–Sun, 9am–12pm.'
  }
];
