export type Supplier = {
  name: string;
  region: string;
  supplies: string;
  proof: string;
};

export const suppliers: Supplier[] = [
  {
    name: 'Rowley Farm Co-op',
    region: 'Dudley',
    supplies: 'Root veg, carrots, onions, and seasonal squash.',
    proof: 'Weekly deliveries, 40-mile radius, grown with water-saving irrigation.'
  },
  {
    name: 'Wyre Forest Growers',
    region: 'Kidderminster',
    supplies: 'Leafy greens and brassicas.',
    proof: 'Packaging-free crates and year-round crop planning to reduce waste.'
  },
  {
    name: 'Vale Poultry',
    region: 'Staffordshire',
    supplies: 'Free-range chicken and eggs.',
    proof: 'RSPCA assured standards and audited welfare checks.'
  },
  {
    name: 'Severn Valley Butchers',
    region: 'Stourport-on-Severn',
    supplies: 'Beef and pork.',
    proof: 'Local abattoir partnership with full traceability on every batch.'
  },
  {
    name: 'Severn River Fishery',
    region: 'Bewdley',
    supplies: 'Freshwater fish and smoked haddock.',
    proof: 'Line-caught supply and same-day delivery routes.'
  },
  {
    name: 'West Midlands Orchard Collective',
    region: 'Solihull',
    supplies: 'Apples, pears, seasonal fruit.',
    proof: 'Orchards managed for biodiversity and bee habitat coverage.'
  },
  {
    name: 'Digbeth Coffee Roasters',
    region: 'Birmingham',
    supplies: 'Coffee beans and cold brew.',
    proof: 'Direct trade pricing and reusable kegs for cold brew.'
  },
  {
    name: 'Hockley Herb Gardens',
    region: 'Birmingham',
    supplies: 'Fresh herbs and salad leaves.',
    proof: 'Indoor hydroponic farms using 80% less water.'
  },
  {
    name: 'Clent Hills Spring',
    region: 'Clent',
    supplies: 'Spring water.',
    proof: 'Certified local source with returnable bottles.'
  },
  {
    name: 'Soho Road Spice House',
    region: 'Handsworth',
    supplies: 'Spices and blends.',
    proof: 'Fair purchasing and small-batch blending on site.'
  }
];
