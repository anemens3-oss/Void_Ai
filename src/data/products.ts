import { Product } from '../types';
import { generateProductSvg } from '../utils/fashionVisuals';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    name: 'Monolith Oversized Tee',
    slug: 'monolith-oversized-tee',
    code: 'VD-01-TEE',
    price: 165,
    category: 'men',
    tag: 'Core Edition',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pitch Black', hex: '#0f0f0f' },
      { name: 'Charcoal Wash', hex: '#222222' },
      { name: 'Off White', hex: '#eae6df' }
    ],
    description: 'An architectural staple crafted from 480 GSM organic combed ringspun cotton. Cut with an exaggerated boxy silhouette, lowered shoulders, and seamless binded collar.',
    details: [
      '480 GSM heavy organic combed cotton',
      'Exaggerated drop shoulder silhouette',
      'Reinforced twin-needle coverstitch hem',
      'Pre-shrunk vintage enzyme washed finish',
      'Made in Portugal'
    ],
    materials: '100% Organic Combed Cotton',
    weight: '480 GSM Heavyweight',
    images: [
      generateProductSvg('tee', 'Monolith Oversized Tee', 'VD-01-TEE', '#101010', 'front'),
      generateProductSvg('tee', 'Monolith Oversized Tee', 'VD-01-TEE', '#101010', 'back'),
      generateProductSvg('tee', 'Monolith Oversized Tee', 'VD-01-TEE', '#101010', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-02',
    name: 'Obsidian Shell Parka',
    slug: 'obsidian-shell-parka',
    code: 'VD-02-JCK',
    price: 680,
    category: 'men',
    tag: 'Limited Run',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Deep Onyx', hex: '#0a0a0a' },
      { name: 'Asphalt Slate', hex: '#1c1f24' }
    ],
    description: 'A 3-layer high-density waterproof technical parka equipped with seam-sealed construction, dual two-way Riri hardware, and magnetic storm flaps.',
    details: [
      '3-Layer 20,000mm waterproof breathable nylon',
      'Full thermal sealed internal seams',
      'Riri Swiss waterproof dual zips',
      'Articulated sleeves with thumb storm cuffs',
      'Concealed magnetic utility chest pockets'
    ],
    materials: '100% High-Tenacity Technical Polyamide',
    weight: '520 GSM 3-Layer Laminate',
    images: [
      generateProductSvg('jacket', 'Obsidian Shell Parka', 'VD-02-JCK', '#0a0a0a', 'front'),
      generateProductSvg('jacket', 'Obsidian Shell Parka', 'VD-02-JCK', '#0a0a0a', 'back'),
      generateProductSvg('jacket', 'Obsidian Shell Parka', 'VD-02-JCK', '#0a0a0a', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-03',
    name: 'Void Heavy Fleece Hoodie',
    slug: 'void-heavy-fleece-hoodie',
    code: 'VD-03-HD',
    price: 290,
    category: 'men',
    tag: 'Archival Cut',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pitch Black', hex: '#0e0e0e' },
      { name: 'Faded Smoke', hex: '#262626' }
    ],
    description: 'Constructed from custom 600 GSM double-faced loopback terry. Features a stiffened geometric crossover hood, seamless kangaroo pocket, and heavy raw hems.',
    details: [
      '600 GSM double-faced loopback terry fleece',
      'Architectural standing hood with double layer lining',
      'Dropped shoulder with forward-shifted side seams',
      'Brushed reverse for exceptional thermal retention',
      'Garment dyed and silicon treated'
    ],
    materials: '100% Ring-Spun French Terry',
    weight: '600 GSM Extra Heavy',
    images: [
      generateProductSvg('hoodie', 'Void Heavy Fleece Hoodie', 'VD-03-HD', '#0e0e0e', 'front'),
      generateProductSvg('hoodie', 'Void Heavy Fleece Hoodie', 'VD-03-HD', '#0e0e0e', 'back'),
      generateProductSvg('hoodie', 'Void Heavy Fleece Hoodie', 'VD-03-HD', '#0e0e0e', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-04',
    name: 'Tactical Wide-Leg Cargos',
    slug: 'tactical-wide-leg-cargos',
    code: 'VD-04-PNT',
    price: 340,
    category: 'men',
    tag: 'New Arrival',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Dark Moss', hex: '#1a1f18' }
    ],
    description: 'Relaxed wide-leg cargo silhouette featuring eight modular storage compartments, knee dart articulation, and adjustable ankle cinch cords.',
    details: [
      'Heavyweight cotton-ripstop hybrid',
      'Dual pleated 3D cargo pockets with Fidlock buckles',
      'Triple-needle seat construction',
      'Concealed hem drawcords for taper adjustment',
      'Custom gunmetal hardware'
    ],
    materials: '75% Organic Cotton, 25% Cordura Ripstop',
    weight: '380 GSM Technical Ripstop',
    images: [
      generateProductSvg('pant', 'Tactical Wide-Leg Cargos', 'VD-04-PNT', '#111111', 'front'),
      generateProductSvg('pant', 'Tactical Wide-Leg Cargos', 'VD-04-PNT', '#111111', 'back'),
      generateProductSvg('pant', 'Tactical Wide-Leg Cargos', 'VD-04-PNT', '#111111', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-05',
    name: 'Sculpted Minimalist Trench',
    slug: 'sculpted-minimalist-trench',
    code: 'VD-05-TRN',
    price: 740,
    category: 'women',
    tag: 'Signature',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Void Black', hex: '#0a0a0a' },
      { name: 'Raw Basalt', hex: '#1e1c1b' }
    ],
    description: 'An imposing ankle-length coat engineered with structured padded shoulders, an exaggerated notched lapel, and concealed horn button fastenings.',
    details: [
      'Bonded heavy wool-cashmere blend',
      'Full cupro Bemberg interior lining',
      'Internal storm flap with invisible magnetic closure',
      'Deep welt storm pockets',
      'Tailored in Italy'
    ],
    materials: '80% Virgin Wool, 20% Cashmere',
    weight: '650 GSM Melange Wool',
    images: [
      generateProductSvg('jacket', 'Sculpted Minimalist Trench', 'VD-05-TRN', '#0c0c0c', 'front'),
      generateProductSvg('jacket', 'Sculpted Minimalist Trench', 'VD-05-TRN', '#0c0c0c', 'back'),
      generateProductSvg('jacket', 'Sculpted Minimalist Trench', 'VD-05-TRN', '#0c0c0c', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-06',
    name: 'Raw Japanese Selvedge Denim',
    slug: 'raw-japanese-selvedge-denim',
    code: 'VD-06-DNM',
    price: 360,
    category: 'men',
    tag: 'Archival',
    sizes: ['28', '30', '32', '34', '36'],
    colors: [
      { name: 'Dry Indigo/Black', hex: '#0c1017' }
    ],
    description: 'Milled in Okayama on vintage shuttle looms. 16oz unwashed rigid denim featuring a loose straight-leg cut and silver selvedge ID ticking.',
    details: [
      '16oz Japanese pink/silver line selvedge denim',
      'Shuttle-loomed in Kojima, Okayama',
      'Hidden back pocket copper rivets',
      'Solid iron doughnut button fly',
      'Full grain vegetable-tanned leather patch'
    ],
    materials: '100% Zimbabwe Long-Staple Cotton',
    weight: '16oz Rigid Raw Denim',
    images: [
      generateProductSvg('denim', 'Raw Japanese Selvedge Denim', 'VD-06-DNM', '#0d1118', 'front'),
      generateProductSvg('denim', 'Raw Japanese Selvedge Denim', 'VD-06-DNM', '#0d1118', 'back'),
      generateProductSvg('denim', 'Raw Japanese Selvedge Denim', 'VD-06-DNM', '#0d1118', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-07',
    name: 'Drape Poplin Overshirt',
    slug: 'drape-poplin-overshirt',
    code: 'VD-07-SHT',
    price: 240,
    category: 'women',
    tag: 'Core Edition',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Onyx Black', hex: '#0f0f0f' },
      { name: 'Bone Chalk', hex: '#f0ece3' }
    ],
    description: 'A crisp, architectural poplin button-down featuring elongated curved cuffs, a concealed fly front, and extended side slits for fluid movement.',
    details: [
      '120/2 double-twist Egyptian giza cotton poplin',
      'Mother of pearl buttons with matte finish',
      'Split back yoke with clean box pleat',
      'Extended French cuffs with double buttonholes',
      'High density 22 stitches-per-inch sewing'
    ],
    materials: '100% Giza Cotton Poplin',
    weight: '160 GSM Crisp Weave',
    images: [
      generateProductSvg('shirt', 'Drape Poplin Overshirt', 'VD-07-SHT', '#121212', 'front'),
      generateProductSvg('shirt', 'Drape Poplin Overshirt', 'VD-07-SHT', '#121212', 'back'),
      generateProductSvg('shirt', 'Drape Poplin Overshirt', 'VD-07-SHT', '#121212', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-08',
    name: 'Strata Low Chunky Sneaker',
    slug: 'strata-low-chunky-sneaker',
    code: 'VD-08-SNK',
    price: 490,
    category: 'accessories',
    tag: 'Footwear',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: [
      { name: 'Monolith Black', hex: '#111111' },
      { name: 'Concrete Chalk', hex: '#d9d5ce' }
    ],
    description: 'A brutalist low-top trainer sculpted with an aggressive multi-density Vibram sole unit, full-grain Italian calfskin, and technical ballistic mesh.',
    details: [
      'Italian full-grain calf leather and nubuck',
      'Custom sculpt Vibram Megagrip lug outsole',
      'Ortholite memory foam insole',
      'Speed-lacing system with metallic aglets',
      'Handcrafted in Civitanova Marche, Italy'
    ],
    materials: 'Calfskin Leather, Vibram Rubber, Technical Mesh',
    weight: '620g per shoe',
    images: [
      generateProductSvg('sneaker', 'Strata Low Chunky Sneaker', 'VD-08-SNK', '#121212', 'front'),
      generateProductSvg('sneaker', 'Strata Low Chunky Sneaker', 'VD-08-SNK', '#121212', 'back'),
      generateProductSvg('sneaker', 'Strata Low Chunky Sneaker', 'VD-08-SNK', '#121212', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-09',
    name: 'Tactical Harness Bag',
    slug: 'tactical-harness-bag',
    code: 'VD-09-BAG',
    price: 280,
    category: 'accessories',
    tag: 'Hardware',
    sizes: ['ONE SIZE'],
    colors: [
      { name: 'Matte Black', hex: '#0f0f0f' }
    ],
    description: 'Modular chest rig / shoulder sling crafted from Cordura 1000D with genuine Cobra quick-release aluminum buckles and waterproof taped zips.',
    details: [
      'Cordura 1000D ballistic nylon shell',
      'AustriAlpin Cobra aluminum safety buckle',
      'Removable cross-torso stabilizer strap',
      'Internal padded neoprene iPad mini compartment',
      'Laser-cut MOLLE attachment matrix'
    ],
    materials: 'Cordura 1000D & Aluminum Hardware',
    weight: '340g',
    images: [
      generateProductSvg('bag', 'Tactical Harness Bag', 'VD-09-BAG', '#101010', 'front'),
      generateProductSvg('bag', 'Tactical Harness Bag', 'VD-09-BAG', '#101010', 'back'),
      generateProductSvg('bag', 'Tactical Harness Bag', 'VD-09-BAG', '#101010', 'macro')
    ],
    featured: true,
    inStock: true
  },
  {
    id: 'prod-10',
    name: 'Pleated Cocoon Trousers',
    slug: 'pleated-cocoon-trousers',
    code: 'VD-10-WTR',
    price: 320,
    category: 'women',
    tag: 'New Arrival',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Pitch Black', hex: '#0e0e0e' },
      { name: 'Mineral Grey', hex: '#2c2c2c' }
    ],
    description: 'High-waisted trousers featuring deep double front pleats and an engineered curved silhouette that tapers subtly into a cropped ankle hem.',
    details: [
      'High-twist tropical virgin wool with fluid drape',
      'Dual deep reverse forward pleats',
      'Extended waistband tab with concealed hook-and-bar',
      'Clean side-seam slash pockets',
      'Tailored internal stay buttons'
    ],
    materials: '100% Virgin Tropical Wool',
    weight: '310 GSM Wool Crepe',
    images: [
      generateProductSvg('pant', 'Pleated Cocoon Trousers', 'VD-10-WTR', '#0e0e0e', 'front'),
      generateProductSvg('pant', 'Pleated Cocoon Trousers', 'VD-10-WTR', '#0e0e0e', 'back'),
      generateProductSvg('pant', 'Pleated Cocoon Trousers', 'VD-10-WTR', '#0e0e0e', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-11',
    name: 'Asymmetric Rib Knit Sweater',
    slug: 'asymmetric-rib-knit-sweater',
    code: 'VD-11-KNT',
    price: 390,
    category: 'women',
    tag: 'Limited Run',
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Midnight Charcoal', hex: '#141416' }
    ],
    description: 'Sculptural heavy gauge ribbed sweater with diagonal slash neck, elongated flared sleeves, and an asymmetric diagonal hemline.',
    details: [
      '3-Gauge heavy Australian Merino wool',
      'Seamless multi-directional rib construction',
      'Thumb slits in extended ribbed cuffs',
      'Naturally thermo-regulating and odor resistant',
      'Knit in Scotland'
    ],
    materials: '100% Extra Fine Merino Wool',
    weight: '580 GSM Heavy Knit',
    images: [
      generateProductSvg('hoodie', 'Asymmetric Rib Knit Sweater', 'VD-11-KNT', '#131315', 'front'),
      generateProductSvg('hoodie', 'Asymmetric Rib Knit Sweater', 'VD-11-KNT', '#131315', 'back'),
      generateProductSvg('hoodie', 'Asymmetric Rib Knit Sweater', 'VD-11-KNT', '#131315', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-12',
    name: 'Brutalist Cobra Leather Belt',
    slug: 'brutalist-cobra-leather-belt',
    code: 'VD-12-BLT',
    price: 195,
    category: 'accessories',
    tag: 'Hardware',
    sizes: ['S (30-32)', 'M (32-34)', 'L (34-36)'],
    colors: [
      { name: 'Matte Gunmetal / Black', hex: '#111111' }
    ],
    description: 'Hand-cut 4mm thick vegetable-tanned bridle leather matched with quick-release forged aluminum hardware and engraved serial number.',
    details: [
      '4mm thick bridle leather from Tuscany',
      'Forged matte gunmetal Cobra buckle',
      'Burnished and hand-waxed edges',
      'Modular tactical D-ring key clip',
      'Laser-engraved VOID authenticity serial'
    ],
    materials: 'Full-Grain Bridle Leather & Forged Aluminum',
    weight: '260g',
    images: [
      generateProductSvg('bag', 'Brutalist Cobra Leather Belt', 'VD-12-BLT', '#111111', 'front'),
      generateProductSvg('bag', 'Brutalist Cobra Leather Belt', 'VD-12-BLT', '#111111', 'back'),
      generateProductSvg('bag', 'Brutalist Cobra Leather Belt', 'VD-12-BLT', '#111111', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-13',
    name: 'Modular Bomber Vest',
    slug: 'modular-bomber-vest',
    code: 'VD-13-VST',
    price: 410,
    category: 'men',
    tag: 'Core Edition',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pitch Black', hex: '#0d0d0d' },
      { name: 'Industrial Sage', hex: '#1c221e' }
    ],
    description: 'Quilted Primaloft-insulated over-vest with heavy flight nylon shell, dual entry cargo bellow pockets, and a modular backpack connector.',
    details: [
      'High-density flight nylon twill',
      'Primaloft Gold 100g synthetic insulation',
      'Two-way heavy gauge gunmetal zipper',
      'Dual snap side expanders for layering over heavy hoodies',
      'Water and wind repellent DWR treatment'
    ],
    materials: '100% Flight Nylon, Primaloft Gold Insulation',
    weight: '440 GSM Insulated',
    images: [
      generateProductSvg('jacket', 'Modular Bomber Vest', 'VD-13-VST', '#0d0d0d', 'front'),
      generateProductSvg('jacket', 'Modular Bomber Vest', 'VD-13-VST', '#0d0d0d', 'back'),
      generateProductSvg('jacket', 'Modular Bomber Vest', 'VD-13-VST', '#0d0d0d', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-14',
    name: 'Structured Sharp Blazer',
    slug: 'structured-sharp-blazer',
    code: 'VD-14-BLZ',
    price: 610,
    category: 'women',
    tag: 'Signature',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Obsidian Black', hex: '#0b0b0b' }
    ],
    description: 'An architectural double-breasted jacket with pronounced roll-padded shoulders, clean peak lapels, and hidden magnetic waist fasteners.',
    details: [
      'Structured barathea virgin wool weave',
      'Full floating canvas interior construction',
      'Concealed magnetic button-free front closure',
      'Ventless sculptural hourglass back shaping',
      'Surgical cuffs with working buttonholes'
    ],
    materials: '100% Barathea Virgin Wool',
    weight: '380 GSM Architectural Wool',
    images: [
      generateProductSvg('jacket', 'Structured Sharp Blazer', 'VD-14-BLZ', '#0c0c0c', 'front'),
      generateProductSvg('jacket', 'Structured Sharp Blazer', 'VD-14-BLZ', '#0c0c0c', 'back'),
      generateProductSvg('jacket', 'Structured Sharp Blazer', 'VD-14-BLZ', '#0c0c0c', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-15',
    name: 'Geometric Acetate Sunglasses',
    slug: 'geometric-acetate-sunglasses',
    code: 'VD-15-SNG',
    price: 260,
    category: 'accessories',
    tag: 'Hardware',
    sizes: ['ONE SIZE'],
    colors: [
      { name: 'Onyx Polish / Dark Grey Lens', hex: '#080808' }
    ],
    description: 'Thick 8mm Japanese cellulose acetate frames featuring sharp beveled edges, seven-barrel hinges, and 100% UVA/UVB category 3 lenses.',
    details: [
      '8mm custom cured Takiron Japanese acetate',
      'Precision bevel cuts along brow line',
      'German engineered seven-barrel rivet hinges',
      'Anti-reflective back-coated CR-39 lenses',
      'Supplied in custom debossed leather case'
    ],
    materials: 'Cellulose Acetate & Mineral Glass',
    weight: '54g',
    images: [
      generateProductSvg('bag', 'Geometric Acetate Sunglasses', 'VD-15-SNG', '#0a0a0a', 'front'),
      generateProductSvg('bag', 'Geometric Acetate Sunglasses', 'VD-15-SNG', '#0a0a0a', 'back'),
      generateProductSvg('bag', 'Geometric Acetate Sunglasses', 'VD-15-SNG', '#0a0a0a', 'macro')
    ],
    featured: false,
    inStock: true
  },
  {
    id: 'prod-16',
    name: 'Thermal Waffle Base Tee',
    slug: 'thermal-waffle-base-tee',
    code: 'VD-16-WFL',
    price: 180,
    category: 'men',
    tag: 'Core Edition',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Charcoal Black', hex: '#161616' },
      { name: 'Raw Natural', hex: '#ece6dc' }
    ],
    description: 'Heavy honeycomb thermal knit long sleeve with anatomical thumbhole cuffs, overlock exposed seams, and extended curved tail.',
    details: [
      '420 GSM heavy honeycomb cotton thermal knit',
      'Exposed contrast flatlock seams',
      'Ribbed cuffs with reinforced thumbholes',
      'Raw curved hemline with stay stitching',
      'Enzyme washed for soft handfeel'
    ],
    materials: '100% Combed Thermal Knit Cotton',
    weight: '420 GSM Waffle Weave',
    images: [
      generateProductSvg('tee', 'Thermal Waffle Base Tee', 'VD-16-WFL', '#141414', 'front'),
      generateProductSvg('tee', 'Thermal Waffle Base Tee', 'VD-16-WFL', '#141414', 'back'),
      generateProductSvg('tee', 'Thermal Waffle Base Tee', 'VD-16-WFL', '#141414', 'macro')
    ],
    featured: false,
    inStock: true
  }
];
