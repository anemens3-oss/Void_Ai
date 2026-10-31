# PROJECT CONTEXT: VOID — NEXT-GENERATION FASHION E-COMMERCE

## 1. Brand Identity & Art Direction
- **Brand**: VOID
- **Aesthetic**: Premium Streetwear, Editorial Fashion, Minimalist Luxury, Architectural Tailoring
- **Color Palette**:
  - Deep Black: `#080808`
  - Charcoal / Surface: `#121212`, `#181818`
  - Off-White: `#F3F1ED`
  - Neutral Gray: `#929292`
  - Hairline Borders: `rgba(255, 255, 255, 0.08)`
- **Typography**:
  - Display / Headlines: `Syne` (Bold / Extrabold luxury geometric typography)
  - Body & Reading: `Plus Jakarta Sans` (Clean, balanced neo-grotesque)
  - Data, Telemetry & Specs: `Space Mono` (Tabular numbers, product codes, GSM ratings)

## 2. Architecture & Modules
```
/src
├── types/
│   └── index.ts               # Core domain models (Product, CartItem, Categories, Wishlist)
├── utils/
│   └── fashionVisuals.ts      # High-fidelity SVG & editorial graphics generator
├── data/
│   └── products.ts            # 16 distinct archival streetwear pieces with specs
├── context/
│   └── CartContext.tsx        # Cart & Wishlist state with localStorage persistence
├── components/
│   ├── Preloader.tsx          # Initial loading animation with progress counter
│   ├── Header.tsx             # Top Bar Contract, scroll progress indicator, mobile menu
│   ├── Hero.tsx               # Cinematic opening, word stagger, zoom, mouse parallax
│   ├── PinnedStory.tsx        # Pinned exhibition of the 3 VOID design pillars
│   ├── Categories.tsx         # Men, Women, Accessories showcase cards
│   ├── ProductCard.tsx        # Card with hover image angle flip, quick-add & sizes
│   ├── ProductShowcase.tsx    # Filter bar (categories, search, size, sort) + grid
│   ├── ProductDetailModal.tsx # Full PDP modal, mandatory size selection, multi-angle gallery
│   ├── CartDrawer.tsx         # Slide-out cart, free shipping meter, promo code, checkout
│   ├── WishlistDrawer.tsx     # Saved pieces slide-out with direct purchase trigger
│   ├── SearchModal.tsx        # Real-time search with live keyword matching
│   ├── LookbookMarquee.tsx    # Infinite typography banner & campaign feature
│   ├── Footer.tsx             # Newsletter with validation, care matrix, massive wordmark
│   └── Toast.tsx              # Unobtrusive feedback toasts for user actions
├── App.tsx                    # Root application assembly
└── index.css                  # Tailwind v4 theme, fonts, custom keyframes & scrollbars
```

## 3. Key Feature Implementations
1. **Preloader**: 1.4-second cinematic typographic transition with animated progress bar and automatic exit.
2. **Hero Section**: "BEYOND THE ORDINARY" word stagger reveal, dynamic mouse-driven parallax, and scroll CTA.
3. **Advanced Scroll & Pinned Exhibition**: Pinned chapter matrix with interactive step indicators, architectural photography, and technical metrics (600 GSM, 20,000 MM, Okayama & Biella yarns).
4. **16-Piece Catalog Showcase**:
   - Oversized Tees (480 GSM organic cotton)
   - Heavy Fleece Hoodies (600 GSM double-faced French terry)
   - Obsidian Shell Parkas (3-layer waterproof 20,000mm)
   - Tactical Wide Cargos (Fidlock buckles)
   - Okayama Selvedge Denim (16oz raw pink-line selvedge)
   - Chunky Strata Sneakers (Vibram lug outsole & calfskin)
   - Brutalist Cobra Buckle Belts & 1000D Harness Bags
   - Structured Baratheon Blazers & Asymmetric Knits
5. **Interactive PDP Modal**:
   - Multi-angle gallery with front, back, and macro textile views
   - Mandatory size validation before bag addition
   - Quantity selector (+/-)
   - Dimensions & fit guide
   - Real-time cart feedback
6. **Cart Drawer & Checkout Flow**:
   - Automatic subtotal recalculation
   - Free Express shipping meter ($300 threshold)
   - Promo voucher support (`VOID10` for 10% off)
   - Instant simulated checkout form with encrypted receipt confirmation (`VD-XXXXXX`)
   - Persistent `localStorage` state
7. **Zero-Pill Discipline & Anti-Slop Compliance**:
   - Clean unboxed metadata with `·` and `/` typographic separators
   - Top Bar contract with 3 clean zones
   - Fully accessible focus states and responsive layouts from 360px to 1920px.
