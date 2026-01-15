export type Location = {
  slug: string;
  name: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  hours: { day: string; open: string; close: string }[];
  facilities: string[];
  transport: string;
  parking: string;
  mapLink: string;
  story: string;
};

export const locations: Location[] = [
  {
    slug: 'birmingham-city-centre',
    name: 'Birmingham City Centre',
    address: '22 New Street, Birmingham',
    postcode: 'B2 4RS',
    phone: '0121 555 0101',
    email: 'birmingham@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:00', close: '21:00' },
      { day: 'Fri', open: '08:00', close: '22:00' },
      { day: 'Sat', open: '09:00', close: '22:00' },
      { day: 'Sun', open: '09:00', close: '20:00' }
    ],
    facilities: ['Step-free access', 'Family seating', 'Free Wi-Fi', 'Baby changing'],
    transport: '5 minutes from New Street Station. Bus routes 23, 61, and 63 stop nearby.',
    parking: 'Reduced-rate parking at Grand Central after 5pm.',
    mapLink: 'https://maps.google.com/?q=22+New+Street+Birmingham',
    story: 'A lively hub for quick lunches, after-work plates, and easy family dinners.'
  },
  {
    slug: 'solihull-town',
    name: 'Solihull Town',
    address: '8 Mill Lane, Solihull',
    postcode: 'B91 3AR',
    phone: '0121 555 0102',
    email: 'solihull@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:30', close: '20:30' },
      { day: 'Fri', open: '08:30', close: '21:30' },
      { day: 'Sat', open: '09:00', close: '21:30' },
      { day: 'Sun', open: '09:00', close: '19:30' }
    ],
    facilities: ['Step-free access', 'Outdoor seating', 'Free Wi-Fi'],
    transport: '10 minutes from Solihull Station, with direct links to Birmingham and Coventry.',
    parking: 'Town centre parking available on Mill Lane and Poplar Road.',
    mapLink: 'https://maps.google.com/?q=8+Mill+Lane+Solihull',
    story: 'Neighbourhood favourite for lunch breaks, meet-ups, and easy weekend brunches.'
  },
  {
    slug: 'wolverhampton-exchange',
    name: 'Wolverhampton Exchange',
    address: '15 Lichfield Street, Wolverhampton',
    postcode: 'WV1 1EA',
    phone: '01902 555 0103',
    email: 'wolverhampton@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:00', close: '20:00' },
      { day: 'Fri', open: '08:00', close: '21:00' },
      { day: 'Sat', open: '09:00', close: '21:00' },
      { day: 'Sun', open: '09:00', close: '19:00' }
    ],
    facilities: ['Step-free access', 'Quiet booths', 'Free Wi-Fi', 'Power points'],
    transport: 'Across from Wolverhampton Station with tram access.',
    parking: 'Exchange Street multi-storey parking, 3 minutes away.',
    mapLink: 'https://maps.google.com/?q=15+Lichfield+Street+Wolverhampton',
    story: 'Built for commuters and students, with plenty of space to linger.'
  },
  {
    slug: 'dudley-market',
    name: 'Dudley Market',
    address: '4 Castle Hill, Dudley',
    postcode: 'DY1 4RA',
    phone: '01384 555 0104',
    email: 'dudley@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:30', close: '20:00' },
      { day: 'Fri', open: '08:30', close: '21:00' },
      { day: 'Sat', open: '09:00', close: '21:00' },
      { day: 'Sun', open: '09:00', close: '18:30' }
    ],
    facilities: ['Step-free access', 'Family seating', 'Outdoor seating'],
    transport: 'Local bus routes stop outside Dudley Market.',
    parking: 'Castle Gate car park, 4 minutes on foot.',
    mapLink: 'https://maps.google.com/?q=4+Castle+Hill+Dudley',
    story: 'Market-side energy with a focus on local growers and family meals.'
  },
  {
    slug: 'coventry-canal',
    name: 'Coventry Canal',
    address: '12 Canal Basin, Coventry',
    postcode: 'CV1 4LY',
    phone: '024 755 0105',
    email: 'coventry@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:00', close: '20:30' },
      { day: 'Fri', open: '08:00', close: '21:30' },
      { day: 'Sat', open: '09:00', close: '21:30' },
      { day: 'Sun', open: '09:00', close: '19:30' }
    ],
    facilities: ['Step-free access', 'Riverside seating', 'Free Wi-Fi'],
    transport: '15 minutes walk from Coventry Station with canal-side cycle paths.',
    parking: 'Canal Basin car park next door.',
    mapLink: 'https://maps.google.com/?q=12+Canal+Basin+Coventry',
    story: 'Relaxed waterfront dining with space for groups and prams.'
  },
  {
    slug: 'stourbridge-green',
    name: 'Stourbridge Green',
    address: '30 High Street, Stourbridge',
    postcode: 'DY8 1EE',
    phone: '01384 555 0106',
    email: 'stourbridge@harvestandco.co.uk',
    hours: [
      { day: 'Mon–Thu', open: '08:30', close: '20:00' },
      { day: 'Fri', open: '08:30', close: '21:00' },
      { day: 'Sat', open: '09:00', close: '21:00' },
      { day: 'Sun', open: '09:00', close: '18:30' }
    ],
    facilities: ['Step-free access', 'Quiet booths', 'Free Wi-Fi'],
    transport: '10 minutes from Stourbridge Junction via bus 9A.',
    parking: 'Tesco car park available after 6pm.',
    mapLink: 'https://maps.google.com/?q=30+High+Street+Stourbridge',
    story: 'A calmer spot for catch-ups, with great access for families.'
  }
];
