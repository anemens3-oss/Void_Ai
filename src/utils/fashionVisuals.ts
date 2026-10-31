/**
 * High-end fashion editorial visual assets generator
 * Produces crisp, editorial SVG imagery with studio lighting, realistic garment silhouettes,
 * subtle grain gradients, and luxury typography marks.
 */

function svgToDataUri(svg: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const fashionVisuals = {
  // Campaign & Category Editorial Visuals
  heroCampaign: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" width="1600" height="1000">
      <defs>
        <radialGradient id="hGrad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="#242424"/>
          <stop offset="45%" stop-color="#121212"/>
          <stop offset="100%" stop-color="#080808"/>
        </radialGradient>
        <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.12"/>
          <stop offset="50%" stop-color="#ffffff" stop-opacity="0.02"/>
          <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
        </linearGradient>
        <filter id="subtleGlow">
          <feGaussianBlur stdDeviation="40" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="1600" height="1000" fill="url(#hGrad)"/>
      
      <!-- Architectural background lines -->
      <line x1="280" y1="0" x2="280" y2="1000" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
      <line x1="800" y1="0" x2="800" y2="1000" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>
      <line x1="1320" y1="0" x2="1320" y2="1000" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
      <line x1="0" y1="720" x2="1600" y2="720" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1"/>

      <!-- Light Shaft -->
      <polygon points="500,0 850,0 1150,1000 350,1000" fill="url(#lightBeam)" />

      <!-- Minimalist Editorial Model Silhouette & Sculptural Garment -->
      <g transform="translate(620, 160)">
        <!-- Head & Neck -->
        <circle cx="180" cy="90" r="50" fill="#1b1b1b" stroke="#333333" stroke-width="1.5"/>
        <path d="M165,135 Q180,180 195,135" fill="#151515"/>
        
        <!-- Architectural Oversized Structured Coat / Streetwear Jacket -->
        <path d="M70,180 
                 L130,160 
                 L180,170 
                 L230,160 
                 L290,180 
                 L350,290 
                 L300,340 
                 L270,300 
                 L285,620 
                 L75,620 
                 L90,300 
                 L60,340 
                 Z" 
              fill="#0f0f0f" 
              stroke="#2a2a2a" 
              stroke-width="2"/>
        
        <!-- Garment Structure & Lapel Lines -->
        <path d="M130,160 L180,310 L230,160" fill="none" stroke="#3a3a3a" stroke-width="2"/>
        <line x1="180" y1="310" x2="180" y2="620" stroke="#2a2a2a" stroke-width="2"/>
        <!-- Deep shadow fold left -->
        <path d="M120,240 L160,580 L140,580 L105,240 Z" fill="#080808" opacity="0.6"/>
        <!-- Edge lighting on right shoulder -->
        <path d="M230,160 L290,180 L350,290" fill="none" stroke="#777777" stroke-width="1.5" opacity="0.7"/>
        
        <!-- Wide Leg Architectural Trousers -->
        <path d="M90,615 L170,615 L160,940 L60,940 Z" fill="#0c0c0c" stroke="#222222" stroke-width="1.5"/>
        <path d="M190,615 L270,615 L300,940 L200,940 Z" fill="#0e0e0e" stroke="#222222" stroke-width="1.5"/>
        <line x1="110" y1="620" x2="105" y2="930" stroke="#282828" stroke-width="1"/>
        <line x1="250" y1="620" x2="255" y2="930" stroke="#282828" stroke-width="1"/>
      </g>

      <!-- Editorial Typography Branding -->
      <text x="140" y="860" font-family="'Syne', sans-serif" font-weight="800" font-size="120" fill="#ffffff" fill-opacity="0.08" letter-spacing="16">VOID</text>
      <text x="140" y="920" font-family="'Plus Jakarta Sans', sans-serif" font-weight="600" font-size="13" fill="#929292" letter-spacing="4">EDITORIAL AUTUMN/WINTER // ARCHIVAL CUTS</text>
    </svg>
  `),

  categoryMen: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
      <defs>
        <linearGradient id="menGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e1e1e"/>
          <stop offset="60%" stop-color="#111111"/>
          <stop offset="100%" stop-color="#080808"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#menGrad)"/>
      <circle cx="400" cy="200" r="280" fill="#252525" opacity="0.3"/>
      
      <!-- Boxy Hoodie & Layered Silhouette -->
      <g transform="translate(180, 220)">
        <ellipse cx="220" cy="70" rx="45" ry="55" fill="#1c1c1c" stroke="#333333"/>
        <!-- Hood drop -->
        <path d="M150,110 Q220,170 290,110 Q220,50 150,110 Z" fill="#141414" stroke="#333333" stroke-width="2"/>
        <!-- Heavy Dropped Shoulder Hoodie Body -->
        <path d="M80,150 L150,120 L290,120 L360,150 L420,280 L360,310 L330,270 L340,550 L100,550 L110,270 L80,310 Z" fill="#121212" stroke="#2e2e2e" stroke-width="2"/>
        <!-- Kangaroo Pocket -->
        <path d="M150,380 L290,380 L270,490 L170,490 Z" fill="#0d0d0d" stroke="#282828" stroke-width="1.5"/>
        <!-- Trousers -->
        <path d="M110,540 L210,540 L195,840 L90,840 Z" fill="#0a0a0a" stroke="#222222"/>
        <path d="M230,540 L330,540 L350,840 L245,840 Z" fill="#0d0d0d" stroke="#222222"/>
      </g>
      <text x="60" y="930" font-family="'Syne', sans-serif" font-weight="700" font-size="28" fill="#F3F1ED" letter-spacing="2">01 / MEN</text>
      <text x="60" y="960" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#929292" letter-spacing="1">ARCHITECTURAL HEAVYWEIGHT STREETWEAR</text>
    </svg>
  `),

  categoryWomen: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
      <defs>
        <linearGradient id="womGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#232323"/>
          <stop offset="50%" stop-color="#141414"/>
          <stop offset="100%" stop-color="#080808"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#womGrad)"/>
      <circle cx="380" cy="220" r="260" fill="#2b2b2b" opacity="0.25"/>

      <!-- Tailored Sharp Silhouette -->
      <g transform="translate(190, 200)">
        <ellipse cx="210" cy="65" rx="38" ry="48" fill="#222222" stroke="#3d3d3d"/>
        <!-- Sculpted Lapel Trench -->
        <path d="M110,130 L210,110 L310,130 L380,240 L340,270 L300,220 L320,620 L100,620 L120,220 L80,270 Z" fill="#131313" stroke="#333333" stroke-width="2"/>
        <!-- Deep V Lapel -->
        <path d="M150,120 L210,260 L270,120" fill="none" stroke="#444444" stroke-width="2"/>
        <line x1="210" y1="260" x2="210" y2="620" stroke="#303030" stroke-width="1.5"/>
        <path d="M120,610 L195,610 L185,860 L100,860 Z" fill="#0d0d0d" stroke="#222222"/>
        <path d="M225,610 L300,610 L320,860 L235,860 Z" fill="#101010" stroke="#222222"/>
      </g>
      <text x="60" y="930" font-family="'Syne', sans-serif" font-weight="700" font-size="28" fill="#F3F1ED" letter-spacing="2">02 / WOMEN</text>
      <text x="60" y="960" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#929292" letter-spacing="1">AVANT-GARDE TAILORING & FLOWING SILHOUETTES</text>
    </svg>
  `),

  categoryAccessories: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="800" height="1000">
      <defs>
        <radialGradient id="accGrad" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stop-color="#2a2a2a"/>
          <stop offset="70%" stop-color="#121212"/>
          <stop offset="100%" stop-color="#080808"/>
        </radialGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#accGrad)"/>
      
      <!-- Architectural Brutalist Bag & Hardware -->
      <g transform="translate(200, 260)">
        <!-- Industrial Webbing Strap -->
        <path d="M60,40 Q200,-30 340,40" fill="none" stroke="#2b2b2b" stroke-width="28" stroke-linecap="round"/>
        <path d="M60,40 Q200,-30 340,40" fill="none" stroke="#444444" stroke-width="2" stroke-dasharray="6,6"/>
        
        <!-- Matte Leather Box Bag Body -->
        <rect x="70" y="100" width="260" height="340" rx="4" fill="#161616" stroke="#333333" stroke-width="2.5"/>
        <rect x="85" y="130" width="230" height="180" rx="2" fill="#111111" stroke="#262626" stroke-width="1.5"/>
        
        <!-- Heavy Metal Cobra Buckle -->
        <rect x="175" y="200" width="50" height="40" rx="3" fill="#383838" stroke="#666666" stroke-width="2"/>
        <line x1="185" y1="220" x2="215" y2="220" stroke="#888888" stroke-width="2"/>
        <circle cx="183" cy="220" r="3" fill="#ffffff" opacity="0.6"/>
        <circle cx="217" cy="220" r="3" fill="#ffffff" opacity="0.6"/>

        <!-- Silver Chain & Key Carabiner detail -->
        <path d="M70,300 Q140,400 200,380" fill="none" stroke="#555555" stroke-width="4" stroke-dasharray="8,5"/>
      </g>
      <text x="60" y="930" font-family="'Syne', sans-serif" font-weight="700" font-size="28" fill="#F3F1ED" letter-spacing="2">03 / ACCESSORIES</text>
      <text x="60" y="960" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" fill="#929292" letter-spacing="1">TACTICAL BAGS, MATTE HARDWARE & LEATHER</text>
    </svg>
  `),

  campaignStory: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 800" width="1400" height="800">
      <defs>
        <linearGradient id="storyGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stop-color="#1a1a1a"/>
          <stop offset="50%" stop-color="#0f0f0f"/>
          <stop offset="100%" stop-color="#050505"/>
        </linearGradient>
      </defs>
      <rect width="1400" height="800" fill="url(#storyGrad)"/>
      <line x1="700" y1="0" x2="700" y2="800" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
      
      <!-- Minimalist architectural grid & model duo silhouettes -->
      <g transform="translate(240, 140)">
        <!-- Figure 1 -->
        <ellipse cx="220" cy="90" rx="35" ry="45" fill="#202020"/>
        <path d="M140,150 L220,130 L300,150 L350,280 L290,300 L280,620 L160,620 L150,300 L90,280 Z" fill="#141414" stroke="#2d2d2d" stroke-width="2"/>
        <line x1="220" y1="130" x2="220" y2="620" stroke="#333333" stroke-width="1.5"/>
      </g>
      <g transform="translate(680, 120)">
        <!-- Figure 2 -->
        <ellipse cx="240" cy="85" rx="36" ry="46" fill="#242424"/>
        <path d="M150,140 L240,120 L330,140 L390,260 L330,290 L320,640 L160,640 L150,290 L90,260 Z" fill="#161616" stroke="#333333" stroke-width="2"/>
        <path d="M190,140 L240,260 L290,140" fill="none" stroke="#484848" stroke-width="2"/>
      </g>
      
      <!-- Editorial Title -->
      <text x="100" y="720" font-family="'Syne', sans-serif" font-weight="800" font-size="54" fill="#ffffff" fill-opacity="0.12" letter-spacing="8">VOID LAB / RUN 04</text>
    </svg>
  `)
};

/**
 * Creates dynamic product SVG images based on garment type and color scheme
 */
export function generateProductSvg(type: string, name: string, code: string, primaryColor: string = '#121212', view: 'front' | 'back' | 'macro' = 'front'): string {
  const isDarkColor = primaryColor.toLowerCase() === '#121212' || primaryColor.toLowerCase() === '#080808' || primaryColor.toLowerCase() === '#1a1a1a';
  const seamColor = isDarkColor ? '#333333' : '#666666';
  const highlightColor = isDarkColor ? '#444444' : '#ffffff';

  let garmentPath = '';

  if (type.includes('tee') || type.includes('shirt')) {
    if (view === 'front') {
      garmentPath = `
        <!-- Oversized Heavyweight T-Shirt Silhouette -->
        <path d="M160,180 
                 Q300,210 440,180 
                 L540,260 
                 L480,350 
                 L430,310 
                 L430,680 
                 L170,680 
                 L170,310 
                 L120,350 
                 L60,260 
                 Z" 
              fill="${primaryColor}" 
              stroke="${seamColor}" 
              stroke-width="2"/>
        <!-- Crewneck Rib -->
        <path d="M250,195 Q300,230 350,195 Q300,180 250,195 Z" fill="#080808" stroke="${seamColor}" stroke-width="1.5"/>
        <!-- Drop Shoulder Seams -->
        <line x1="200" y1="188" x2="160" y2="300" stroke="${seamColor}" stroke-width="1.5"/>
        <line x1="400" y1="188" x2="440" y2="300" stroke="${seamColor}" stroke-width="1.5"/>
        <!-- Subtle Center Fabric Fold -->
        <path d="M290,260 Q300,450 280,660" stroke="${highlightColor}" stroke-width="1" opacity="0.3" fill="none"/>
        <!-- Hem Twin Needle Seam -->
        <line x1="170" y1="660" x2="430" y2="660" stroke="${seamColor}" stroke-width="1" stroke-dasharray="4,3"/>
      `;
    } else if (view === 'back') {
      garmentPath = `
        <path d="M160,180 Q300,195 440,180 L540,260 L480,350 L430,310 L430,680 L170,680 L170,310 L120,350 L60,260 Z" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
        <path d="M250,185 Q300,200 350,185 Q300,180 250,185 Z" fill="#0c0c0c" stroke="${seamColor}" stroke-width="1.5"/>
        <!-- Back Yoke Seam -->
        <line x1="175" y1="280" x2="425" y2="280" stroke="${seamColor}" stroke-width="1.5"/>
        <!-- Minimal VOID back neck print -->
        <text x="300" y="240" font-family="'Space Mono', monospace" font-size="10" fill="#929292" text-anchor="middle" letter-spacing="3">VOID ARCHIVE</text>
      `;
    } else {
      // Macro Texture
      garmentPath = `
        <rect x="100" y="160" width="400" height="500" rx="8" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
        <line x1="100" y1="350" x2="500" y2="350" stroke="${seamColor}" stroke-width="3"/>
        <line x1="100" y1="360" x2="500" y2="360" stroke="${seamColor}" stroke-width="1" stroke-dasharray="3,3"/>
        <text x="140" y="420" font-family="'Space Mono', monospace" font-size="13" fill="#929292" letter-spacing="2">480 GSM ORGANIC COTTON</text>
        <text x="140" y="450" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#666666">COMBED RINGSPUN DENSE WEAVE</text>
      `;
    }
  } else if (type.includes('hoodie')) {
    garmentPath = `
      <!-- Heavy Boxy Hoodie -->
      <path d="M140,200 L210,160 L390,160 L460,200 L560,290 L490,370 L440,320 L440,700 L160,700 L160,320 L110,370 L40,290 Z" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
      <!-- Structured Cross-Over Hood Drop -->
      <path d="M210,160 Q300,250 390,160 Q300,110 210,160 Z" fill="#080808" stroke="${seamColor}" stroke-width="2"/>
      <!-- Double Kangaroo Pocket -->
      <path d="M200,470 L400,470 L380,630 L220,630 Z" fill="#0b0b0b" stroke="${seamColor}" stroke-width="1.5"/>
      <line x1="200" y1="470" x2="220" y2="630" stroke="${seamColor}" stroke-width="2"/>
      <line x1="400" y1="470" x2="380" y2="630" stroke="${seamColor}" stroke-width="2"/>
      <!-- Ribbed Cuffs and Hem -->
      <line x1="160" y1="675" x2="440" y2="675" stroke="${seamColor}" stroke-width="2"/>
    `;
  } else if (type.includes('jacket') || type.includes('parka') || type.includes('coat')) {
    garmentPath = `
      <!-- Technical Storm Parka / Streetwear Jacket -->
      <path d="M140,190 L220,150 L380,150 L460,190 L560,280 L490,370 L450,330 L450,710 L150,710 L150,330 L110,370 L40,280 Z" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
      <!-- High Collar / Funnel Neck -->
      <path d="M220,150 L220,105 Q300,95 380,105 L380,150 Z" fill="#0a0a0a" stroke="${seamColor}" stroke-width="2"/>
      <!-- Front Waterproof Zipper Storm Flap -->
      <rect x="290" y="105" width="20" height="605" fill="#171717" stroke="${seamColor}" stroke-width="1.5"/>
      <!-- Chest Cargo Pockets with Angular Flaps -->
      <rect x="180" y="270" width="85" height="110" rx="3" fill="#0c0c0c" stroke="${seamColor}" stroke-width="1.5"/>
      <path d="M175,270 L270,270 L260,290 L185,290 Z" fill="#1e1e1e" stroke="${seamColor}"/>
      <rect x="335" y="270" width="85" height="110" rx="3" fill="#0c0c0c" stroke="${seamColor}" stroke-width="1.5"/>
      <path d="M330,270 L425,270 L415,290 L340,290 Z" fill="#1e1e1e" stroke="${seamColor}"/>
      <!-- Metal D-Ring Hardware -->
      <circle cx="170" cy="410" r="8" fill="none" stroke="#777777" stroke-width="2"/>
    `;
  } else if (type.includes('pant') || type.includes('cargo') || type.includes('jean') || type.includes('denim')) {
    garmentPath = `
      <!-- Wide-Leg Tactical Pants / Trousers -->
      <path d="M190,170 L410,170 L440,740 L330,740 L310,360 L290,360 L270,740 L160,740 Z" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
      <!-- Elasticated / Belt Waistband -->
      <rect x="190" y="170" width="220" height="40" fill="#0b0b0b" stroke="${seamColor}" stroke-width="1.5"/>
      <line x1="300" y1="210" x2="300" y2="360" stroke="${seamColor}" stroke-width="1.5"/>
      <!-- Cargo Bellows Pockets -->
      <rect x="135" y="340" width="55" height="110" rx="2" fill="#0a0a0a" stroke="${seamColor}" stroke-width="1.5"/>
      <line x1="135" y1="365" x2="190" y2="365" stroke="${seamColor}" stroke-width="2"/>
      <rect x="410" y="340" width="55" height="110" rx="2" fill="#0a0a0a" stroke="${seamColor}" stroke-width="1.5"/>
      <line x1="410" y1="365" x2="465" y2="365" stroke="${seamColor}" stroke-width="2"/>
      <!-- Knee Articulation Pleats -->
      <line x1="180" y1="490" x2="260" y2="490" stroke="${seamColor}" stroke-width="1.5"/>
      <line x1="340" y1="490" x2="420" y2="490" stroke="${seamColor}" stroke-width="1.5"/>
    `;
  } else if (type.includes('sneaker') || type.includes('shoe') || type.includes('boot')) {
    garmentPath = `
      <!-- Sculptural Brutalist Sneaker / Footwear -->
      <g transform="translate(60, 160)">
        <!-- Chunky Tread Outsole -->
        <path d="M60,380 L420,380 L400,430 L350,430 L340,410 L280,410 L270,430 L180,430 L170,410 L100,410 L90,430 L40,410 Z" fill="#090909" stroke="${seamColor}" stroke-width="2"/>
        <!-- Sculpted EVA Midsole -->
        <path d="M50,340 L430,340 Q450,360 420,380 L60,380 Q40,360 50,340 Z" fill="#202020" stroke="${seamColor}" stroke-width="2"/>
        <!-- Leather / Technical Mesh Upper -->
        <path d="M70,340 L160,250 L270,230 L350,260 L410,340 Z" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
        <!-- Angular Overlay Panels -->
        <path d="M120,340 L180,270 L250,270 L210,340 Z" fill="#0f0f0f" stroke="${seamColor}" stroke-width="1.5"/>
        <path d="M260,260 L320,260 L360,340 L310,340 Z" fill="#1c1c1c" stroke="${seamColor}" stroke-width="1.5"/>
        <!-- Ghillie Lacing System -->
        <line x1="200" y1="240" x2="240" y2="250" stroke="#777777" stroke-width="2.5"/>
        <line x1="220" y1="230" x2="260" y2="240" stroke="#777777" stroke-width="2.5"/>
        <!-- Pull Tab Heel -->
        <path d="M350,260 L370,210 L390,260" fill="none" stroke="#555555" stroke-width="3"/>
      </g>
    `;
  } else {
    // Accessories / Bag / Cap / Belt / Hardware
    garmentPath = `
      <!-- Luxury Hardware & Accessory Piece -->
      <g transform="translate(100, 150)">
        <path d="M90,80 Q200,20 310,80" fill="none" stroke="#333333" stroke-width="22" stroke-linecap="round"/>
        <rect x="80" y="140" width="240" height="290" rx="4" fill="${primaryColor}" stroke="${seamColor}" stroke-width="2"/>
        <rect x="95" y="160" width="210" height="140" rx="2" fill="#0b0b0b" stroke="${seamColor}" stroke-width="1.5"/>
        <rect x="175" y="240" width="50" height="35" rx="3" fill="#2d2d2d" stroke="#555555" stroke-width="2"/>
        <line x1="185" y1="257" x2="215" y2="257" stroke="#ffffff" stroke-width="2" opacity="0.8"/>
        <!-- Engraved Code -->
        <text x="200" y="380" font-family="'Space Mono', monospace" font-size="11" fill="#888888" text-anchor="middle" letter-spacing="3">${code}</text>
      </g>
    `;
  }

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 780" width="600" height="780">
      <defs>
        <radialGradient id="cardBg_${code}_${view}" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#181818"/>
          <stop offset="60%" stop-color="#111111"/>
          <stop offset="100%" stop-color="#090909"/>
        </radialGradient>
      </defs>
      <rect width="600" height="780" fill="url(#cardBg_${code}_${view})"/>
      
      <!-- Subtle Studio Grid -->
      <line x1="60" y1="0" x2="60" y2="780" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>
      <line x1="540" y1="0" x2="540" y2="780" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>
      <line x1="0" y1="680" x2="600" y2="680" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>

      <!-- Garment Render -->
      <g>
        ${garmentPath}
      </g>

      <!-- Watermark Brand Code & Angle Identifier -->
      <text x="40" y="50" font-family="'Space Mono', monospace" font-size="11" fill="#555555" letter-spacing="2">${code}</text>
      <text x="560" y="50" font-family="'Space Mono', monospace" font-size="10" fill="#444444" text-anchor="end" letter-spacing="1">${view.toUpperCase()} VIEW</text>
    </svg>
  `;

  return svgToDataUri(svg);
}
