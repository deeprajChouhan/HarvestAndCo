export type MenuTag = 'vegan' | 'veg' | 'gf' | 'local' | 'seasonal' | 'low-waste';

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Mains' | 'Small Plates' | 'Sides' | 'Kids' | 'Drinks' | 'Desserts';
  tags: MenuTag[];
  allergens: string[];
  provenance: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 'm1',
    name: 'Black Country Veggie Stew',
    description: 'Slow-cooked root veg, pearled barley, herb broth, and toasted seeds.',
    price: '£12.50',
    category: 'Mains',
    tags: ['veg', 'local', 'seasonal', 'low-waste'],
    allergens: ['celery', 'gluten'],
    provenance: 'Local supplier: Rowley Farm Co-op (Dudley).'
  },
  {
    id: 'm2',
    name: 'Staffordshire Chicken Roast',
    description: 'Roast chicken thigh, garlic greens, carrot mash, pan gravy.',
    price: '£14.90',
    category: 'Mains',
    tags: ['local'],
    allergens: ['gluten'],
    provenance: 'Local supplier: Vale Poultry (Staffordshire).'
  },
  {
    id: 'm3',
    name: 'Market Garden Bowl',
    description: 'Warm grains, roasted squash, beetroot, pickled cabbage, tahini.',
    price: '£11.75',
    category: 'Mains',
    tags: ['vegan', 'gf', 'seasonal', 'local'],
    allergens: ['sesame'],
    provenance: 'Local supplier: Wyre Forest Growers (Kidderminster).'
  },
  {
    id: 'm4',
    name: 'Charcoal-Grilled Salmon',
    description: 'Herb crust, crushed new potatoes, lemon greens.',
    price: '£16.20',
    category: 'Mains',
    tags: ['gf', 'seasonal'],
    allergens: ['fish'],
    provenance: 'Local supplier: Severn River Fishery (Bewdley).'
  },
  {
    id: 'm5',
    name: 'Harborne Halloumi Stack',
    description: 'Grilled halloumi, sweet pepper relish, rocket, seeded flatbread.',
    price: '£12.90',
    category: 'Mains',
    tags: ['veg', 'local'],
    allergens: ['gluten', 'milk', 'sesame'],
    provenance: 'Local supplier: West Midlands Dairy Collective.'
  },
  {
    id: 'm6',
    name: 'Tamworth Pork Chop',
    description: 'Apple jus, mash, buttered cabbage.',
    price: '£15.40',
    category: 'Mains',
    tags: ['local'],
    allergens: ['milk'],
    provenance: 'Local supplier: Tamworth Pastures (Tamworth).'
  },
  {
    id: 'm7',
    name: 'Miso Mushroom Orzo',
    description: 'Woodland mushrooms, miso glaze, crispy onions.',
    price: '£12.20',
    category: 'Mains',
    tags: ['vegan', 'seasonal'],
    allergens: ['gluten', 'soy'],
    provenance: 'Local supplier: Redhill Mushrooms (Redditch).'
  },
  {
    id: 'm8',
    name: 'Pea & Mint Risotto',
    description: 'Spring peas, mint oil, lemon zest.',
    price: '£11.90',
    category: 'Mains',
    tags: ['veg', 'gf', 'seasonal'],
    allergens: ['milk'],
    provenance: 'Local supplier: Pershore Produce (Worcestershire).'
  },
  {
    id: 'm9',
    name: 'Severn Valley Burger',
    description: 'Beef patty, mature cheddar, house relish, skin-on fries.',
    price: '£13.80',
    category: 'Mains',
    tags: ['local'],
    allergens: ['gluten', 'milk', 'mustard'],
    provenance: 'Local supplier: Severn Valley Butchers (Stourport).'
  },
  {
    id: 'm10',
    name: 'Garden Falafel Wrap',
    description: 'Baked falafel, lemon yogurt, shredded greens.',
    price: '£10.20',
    category: 'Mains',
    tags: ['veg', 'local'],
    allergens: ['gluten', 'milk', 'sesame'],
    provenance: 'Local supplier: Hockley Herb Gardens (Birmingham).'
  },
  {
    id: 's1',
    name: 'Warm Sourdough & Dip',
    description: 'House whipped butter and roasted garlic oil.',
    price: '£4.80',
    category: 'Small Plates',
    tags: ['veg', 'local'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Stirchley Bakery.'
  },
  {
    id: 's2',
    name: 'Seasonal Soup',
    description: 'Daily soup with toasted seeds.',
    price: '£5.50',
    category: 'Small Plates',
    tags: ['vegan', 'gf', 'seasonal', 'low-waste'],
    allergens: ['celery'],
    provenance: 'Local supplier: Pershore Produce (Worcestershire).'
  },
  {
    id: 's3',
    name: 'Tomato & Basil Salad',
    description: 'Heritage tomatoes, basil oil, aged balsamic.',
    price: '£6.40',
    category: 'Small Plates',
    tags: ['vegan', 'gf', 'seasonal'],
    allergens: [],
    provenance: 'Local supplier: Walsall Glasshouse Growers.'
  },
  {
    id: 's4',
    name: 'Buttermilk Chicken Bites',
    description: 'Crispy bites, house hot honey.',
    price: '£7.20',
    category: 'Small Plates',
    tags: ['local'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Vale Poultry (Staffordshire).'
  },
  {
    id: 's5',
    name: 'Charred Broccoli',
    description: 'Lemon, chilli flakes, toasted almonds.',
    price: '£5.90',
    category: 'Small Plates',
    tags: ['vegan', 'gf', 'local'],
    allergens: ['nuts'],
    provenance: 'Local supplier: Wyre Forest Growers (Kidderminster).'
  },
  {
    id: 's6',
    name: 'Birmingham Bhaji Bites',
    description: 'Spiced onion bhaji with coriander dip.',
    price: '£5.60',
    category: 'Small Plates',
    tags: ['vegan', 'local'],
    allergens: ['gluten'],
    provenance: 'Local supplier: Soho Road Spice House.'
  },
  {
    id: 'sd1',
    name: 'Skin-on Fries',
    description: 'Sea salt, malt vinegar spritz.',
    price: '£3.80',
    category: 'Sides',
    tags: ['vegan', 'gf'],
    allergens: [],
    provenance: 'Local supplier: West Midlands Potato Co.'
  },
  {
    id: 'sd2',
    name: 'Cider Slaw',
    description: 'Apple cider dressing, shredded cabbage, carrot.',
    price: '£3.60',
    category: 'Sides',
    tags: ['vegan', 'gf', 'low-waste'],
    allergens: [],
    provenance: 'Local supplier: Pershore Produce (Worcestershire).'
  },
  {
    id: 'sd3',
    name: 'Garlic Greens',
    description: 'Seasonal greens, roasted garlic oil.',
    price: '£4.10',
    category: 'Sides',
    tags: ['vegan', 'gf', 'seasonal'],
    allergens: [],
    provenance: 'Local supplier: Hockley Herb Gardens (Birmingham).'
  },
  {
    id: 'sd4',
    name: 'Roasted Carrots',
    description: 'Maple glaze, toasted pumpkin seeds.',
    price: '£4.40',
    category: 'Sides',
    tags: ['vegan', 'gf', 'seasonal'],
    allergens: ['nuts'],
    provenance: 'Local supplier: Rowley Farm Co-op (Dudley).'
  },
  {
    id: 'k1',
    name: 'Kids Mini Roast',
    description: 'Chicken, carrots, mash, light gravy.',
    price: '£6.20',
    category: 'Kids',
    tags: ['local'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Vale Poultry (Staffordshire).'
  },
  {
    id: 'k2',
    name: 'Kids Veggie Pasta',
    description: 'Tomato sauce, hidden veg, parmesan.',
    price: '£5.80',
    category: 'Kids',
    tags: ['veg'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Stirchley Bakery (pasta flour).'
  },
  {
    id: 'k3',
    name: 'Kids Fish Bites',
    description: 'Baked fish bites, fries, peas.',
    price: '£6.40',
    category: 'Kids',
    tags: ['local'],
    allergens: ['fish', 'gluten'],
    provenance: 'Local supplier: Severn River Fishery (Bewdley).'
  },
  {
    id: 'd1',
    name: 'Appletiser Spritz',
    description: 'Birmingham apples, soda, fresh mint.',
    price: '£3.90',
    category: 'Drinks',
    tags: ['vegan', 'local', 'seasonal'],
    allergens: [],
    provenance: 'Local supplier: West Midlands Orchard Collective.'
  },
  {
    id: 'd2',
    name: 'Fresh Ginger Fizz',
    description: 'House ginger syrup, lemon, soda.',
    price: '£3.60',
    category: 'Drinks',
    tags: ['vegan', 'gf', 'low-waste'],
    allergens: [],
    provenance: 'Local supplier: Soho Road Spice House.'
  },
  {
    id: 'd3',
    name: 'Cold Brew Oat Latte',
    description: 'Oat milk, cocoa dust.',
    price: '£4.20',
    category: 'Drinks',
    tags: ['vegan', 'local'],
    allergens: ['oats'],
    provenance: 'Local supplier: Digbeth Coffee Roasters.'
  },
  {
    id: 'd4',
    name: 'Sparkling Rhubarb',
    description: 'Rhubarb pressé, lemon slice.',
    price: '£3.80',
    category: 'Drinks',
    tags: ['vegan', 'seasonal'],
    allergens: [],
    provenance: 'Local supplier: Pershore Produce (Worcestershire).'
  },
  {
    id: 'ds1',
    name: 'Warm Apple Crumble',
    description: 'Oat crumble, vanilla custard.',
    price: '£6.10',
    category: 'Desserts',
    tags: ['veg', 'local', 'seasonal'],
    allergens: ['gluten', 'milk', 'oats'],
    provenance: 'Local supplier: West Midlands Orchard Collective.'
  },
  {
    id: 'ds2',
    name: 'Chocolate Pot',
    description: '70% cocoa, berry compote.',
    price: '£5.90',
    category: 'Desserts',
    tags: ['veg', 'gf'],
    allergens: ['milk'],
    provenance: 'Local supplier: Birmingham Chocolate Works.'
  },
  {
    id: 'ds3',
    name: 'Lemon Posset',
    description: 'Shortbread crumb, citrus zest.',
    price: '£5.70',
    category: 'Desserts',
    tags: ['veg'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Walsall Dairy Collective.'
  },
  {
    id: 'ds4',
    name: 'Seasonal Fruit Bowl',
    description: 'Fresh cut fruit, mint.',
    price: '£4.80',
    category: 'Desserts',
    tags: ['vegan', 'gf', 'seasonal'],
    allergens: [],
    provenance: 'Local supplier: Pershore Produce (Worcestershire).'
  },
  {
    id: 'm11',
    name: 'Balsamic Mushroom Flatbread',
    description: 'Roasted mushrooms, caramelised onion, herbs.',
    price: '£12.10',
    category: 'Mains',
    tags: ['veg', 'seasonal'],
    allergens: ['gluten'],
    provenance: 'Local supplier: Redhill Mushrooms (Redditch).'
  },
  {
    id: 'm12',
    name: 'Slow-Cooked Beef Brisket',
    description: 'Mash, braised greens, onion jus.',
    price: '£16.40',
    category: 'Mains',
    tags: ['local'],
    allergens: ['milk'],
    provenance: 'Local supplier: Severn Valley Butchers (Stourport).'
  },
  {
    id: 'm13',
    name: 'Chickpea & Spinach Curry',
    description: 'Coconut milk, toasted rice, coriander.',
    price: '£11.60',
    category: 'Mains',
    tags: ['vegan', 'gf', 'low-waste'],
    allergens: [],
    provenance: 'Local supplier: Hockley Herb Gardens (Birmingham).'
  },
  {
    id: 'm14',
    name: 'Seasonal Veg Pie',
    description: 'Shortcrust pie, gravy, greens.',
    price: '£12.70',
    category: 'Mains',
    tags: ['veg', 'seasonal'],
    allergens: ['gluten', 'milk'],
    provenance: 'Local supplier: Rowley Farm Co-op (Dudley).'
  },
  {
    id: 'm15',
    name: 'Smoked Haddock Chowder',
    description: 'Corn, potato, dill.',
    price: '£13.20',
    category: 'Mains',
    tags: ['local'],
    allergens: ['fish', 'milk'],
    provenance: 'Local supplier: Severn River Fishery (Bewdley).'
  },
  {
    id: 'd5',
    name: 'West Midlands Sparkling Water',
    description: 'Chilled local spring water.',
    price: '£2.40',
    category: 'Drinks',
    tags: ['vegan', 'local'],
    allergens: [],
    provenance: 'Local supplier: Clent Hills Spring.'
  },
  {
    id: 'd6',
    name: 'Seasonal Iced Tea',
    description: 'Black tea, citrus, fresh herbs.',
    price: '£3.50',
    category: 'Drinks',
    tags: ['vegan', 'seasonal', 'low-waste'],
    allergens: [],
    provenance: 'Local supplier: Digbeth Tea Blenders.'
  },
  {
    id: 'sd5',
    name: 'Roast Potatoes',
    description: 'Crisp potatoes, rosemary salt.',
    price: '£4.00',
    category: 'Sides',
    tags: ['vegan', 'gf', 'local'],
    allergens: [],
    provenance: 'Local supplier: West Midlands Potato Co.'
  },
  {
    id: 'sd6',
    name: 'Grain & Herb Salad',
    description: 'Pearl barley, parsley, lemon.',
    price: '£4.30',
    category: 'Sides',
    tags: ['vegan', 'seasonal', 'low-waste'],
    allergens: ['gluten'],
    provenance: 'Local supplier: Wyre Forest Growers (Kidderminster).'
  }
];
