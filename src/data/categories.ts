export interface Spec {
  label: string;
  value: string;
  /** Set this for a botanical name, which convention sets in italic. */
  italic?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  fullName: string;
  species: string;
  summary: string;
  /** The image on the category page. In public/assets/categories/. Square, 1200 x 1200. */
  image: string;
  /**
   * A tighter square for the card, when the main image needs one. Use this
   * where the subject sits small in the frame, as it does in a product shot on
   * a white ground. The card then holds as much detail as the photographs of
   * wood beside it. Leave it out to use `image`.
   */
  cardImage?: string;
  body: string[];
  specs: Spec[];
}

export const categories: Category[] = [
  {
    slug: 'indonesian-agarwood-oil',
    name: 'Oil, Kalimantan & Irian Jaya',
    fullName: 'Agarwood Oil from Kalimantan and Irian Jaya',
    species: 'Aquilaria spp.',
    summary: 'Water and steam distilled, in two litre bottles.',
    image: 'indonesian-agarwood-oil.jpg',
    cardImage: 'indonesian-agarwood-oil-card.jpg',
    body: [
      'Water and steam distilled from Kalimantan and Irian Jaya heartwood. We keep the two origins apart and label each batch by region.',
      'Supplied in two litre laboratory bottles, each marked with its batch weight. We decant to smaller volumes on request.',
      'Samples available before you take a lot.',
    ],
    specs: [
      { label: 'Form', value: 'Distilled oil' },
      { label: 'Species', value: 'Aquilaria spp.', italic: true },
      { label: 'Origin', value: 'Kalimantan and Irian Jaya, Indonesia' },
      { label: 'Method', value: 'Water and steam distillation' },
      { label: 'Packing', value: 'Two litre bottles, each marked with its batch weight' },
      { label: 'Minimum order', value: 'On request' },
    ],
  },
  {
    slug: 'agarwood-sumatra',
    name: 'Chips and flakes, Sumatra',
    fullName: 'Agarwood Chips and Flakes from Sumatra',
    species: 'Aquilaria malaccensis',
    summary: 'Light to mid brown, with thin resin veins. Working grade.',
    image: 'agarwood-sumatra.jpg',
    body: [
      'Aquilaria malaccensis from Sumatra. A mixed cut: flakes, splinters and small chips in one grade, light to mid brown, with thin resin veins through the paler wood.',
      'Working material rather than a display grade. Sold by weight, packed to order.',
      'Ask for a sample and the current cut before you order.',
    ],
    specs: [
      { label: 'Form', value: 'Mixed chips and flakes' },
      { label: 'Species', value: 'Aquilaria malaccensis', italic: true },
      { label: 'Origin', value: 'Sumatra, Indonesia' },
      { label: 'Colour', value: 'Light to mid brown' },
      { label: 'Sold by', value: 'Weight' },
      { label: 'Minimum order', value: 'On request' },
    ],
  },
  {
    slug: 'agarwood-chips-kalimantan-malinau',
    name: 'Chips, Malinau',
    fullName: 'Agarwood Chips from Malinau, North Kalimantan',
    species: 'Aquilaria malaccensis',
    summary: 'Our darkest grade. Black resin through pale grain.',
    image: 'agarwood-chips-kalimantan-malinau.jpg',
    body: [
      'Aquilaria malaccensis from Malinau, North Kalimantan. Higher resin content than our Sumatran cut.',
      'The darkest chips we hold. Resin runs black through the pale grain and shows plainly on a broken face. Hand cut, so length and thickness vary within the grade.',
      'Size range and resin grade change with the batch. Ask for both before you order.',
    ],
    specs: [
      { label: 'Form', value: 'Chips and splinters, hand cut' },
      { label: 'Species', value: 'Aquilaria malaccensis', italic: true },
      { label: 'Origin', value: 'Malinau, North Kalimantan, Indonesia' },
      { label: 'Colour', value: 'Dark brown to black resin in pale grain' },
      { label: 'Sold by', value: 'Weight' },
      { label: 'Minimum order', value: 'On request' },
    ],
  },
  {
    slug: 'agarwood-marukey-irian',
    name: 'Marukey flakes, Irian',
    fullName: 'Agarwood Marukey Flakes from Irian, Papua',
    species: 'Aquilaria filaria',
    summary: 'Pale fawn to grey brown, in broad flat pieces.',
    image: 'agarwood-marukey-irian.jpg',
    body: [
      'Aquilaria filaria from Irian, Papua. Marukey is the trade grade name for this material.',
      'Lighter in colour and lighter in the hand than the malaccensis grades. A broad cut: flakes and thick flat pieces rather than splinters, pale fawn through to grey brown.',
      'Sold by weight, packed to order.',
    ],
    specs: [
      { label: 'Form', value: 'Broad flakes and flat pieces' },
      { label: 'Species', value: 'Aquilaria filaria', italic: true },
      { label: 'Origin', value: 'Irian (Papua), Indonesia' },
      { label: 'Colour', value: 'Pale fawn to grey brown' },
      { label: 'Sold by', value: 'Weight' },
      { label: 'Minimum order', value: 'On request' },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/** The other categories, in catalogue order. Used at the foot of a category page. */
export function getOtherCategories(slug: string): Category[] {
  return categories.filter((category) => category.slug !== slug);
}
