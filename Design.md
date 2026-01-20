# Bebê Feliz - Website Design

## Overview
- **Motion Style**: Organic Fluidity & Gentle Physics
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: WebGL (Three.js/OGL), GSAP (ScrollTrigger, Flip), CSS Houdini

## Brand Foundation
- **Colors**:
  - **Primary**: #a3d9b1 (Soft mint green)
  - **Secondary**: #ffc09f (Soft peach/coral)
  - **Tertiary**: #fde9c7 (Soft cream)
  - **Background**: #f8f5f2 (Warm off-white)
  - **Text**: #2c3e50 (Dark blue-grey)
  - **Text Light**: #7f8c8d (Medium grey)
- **Typography**:
  - **Display**: "Fredoka One" (Rounded, playful)
  - **Body**: "Nunito Sans" (Friendly, clean)
  - **Script**: "Caveat" (Handwritten accent)
- **Core Message**: Gentle, natural relief for happy babies.
- **Font Family**: Fredoka One, Nunito Sans, Caveat

## Global Motion System

### Animation Timing
- **Easing Library**:
  - `gentle`: `cubic-bezier(0.25, 1, 0.5, 1)` (Soft landings)
  - `bounce`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (Playful pop)
  - `smooth`: `cubic-bezier(0.65, 0, 0.35, 1)` (Cinematic)
- **Duration Scale**: 0.6s base, 1.2s for complex reveals
- **Stagger Patterns**: 0.08s character delays, 0.15s element delays

### Continuous Effects
- **Liquid Atmosphere**: Subtle background morphing blobs (SVG filters) in primary/secondary colors.
- **Floating Elements**: Gentle sine-wave vertical motion on key visual elements.
- **Soft Glow**: Interactive elements pulse softly with a primary color glow.

### Scroll Engine
- **Physics**: Lenis-based smooth scrolling with 0.1 damping.
- **Parallax**: Multi-layer depth system (Background 0.2x, Content 1x, Floating Elements 1.5x).
- **Reveal**: Text lines split by words, revealing with a `y: 100%` to `0%` motion.

## Section 1: Navigation Bar

### Layout
**Floating Glass Capsule**
- **Structure**: Detached from top, floating 20px down on scroll.
- **Shape**: Pill-shaped container with heavy blur (`backdrop-filter: blur(20px)`).
- **Behavior**: Expands on hover, shrinks to logo + hamburger on scroll down.

### Content
- **Logo**: Bebê Feliz (SVG)
- **Links**: Início, Sobre, Benefícios, Comprar
- **Mobile**: Hamburger menu with circular reveal.

### Motion Choreography
#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Nav Capsule | Drop In | Y: -100% → 0% | 0.8s | 0.2s | bounce |
| Links | Fade Stagger | Opacity: 0 → 1 | 0.4s | 0.4s | gentle |

#### Interaction Effects
- **Links**: Magnetic pull on hover. Text scrambles (random character decode) on hover.
- **Logo**: Gentle rotation (5deg) on hover.

## Section 2: Hero Section

### Layout
**Asymmetric Fluid Composition**
- **Concept**: Breaking the center alignment. Text flows on the left, while the product image floats in a 3D space on the right, intersecting with the background shapes.
- **Z-Axis**: Text (Z: 10), Product Image (Z: 5), Background Blobs (Z: 0).

### Content
- **Headline**: "Alívio Natural para seu Bebê"
- **Subheadline**: "Acabe com a cólica e traga de volta o sorriso da sua família."
- **CTA**: "Comprar Agora" (Primary Button)

### Images
**Hero Product Image**
- **Resolution:** High-res product shot
- **Aspect Ratio:** Product isolated
- **Transparent Background:** **Yes**
- **Visual Style:** Clean product photography
- **Subject:** Baby colic relief product packaging
- **Color Palette:** Mint green, white
- **Generation Prompt:** "Professional product photography of a baby colic relief supplement bottle, soft mint green and white packaging, clean minimalist design, studio lighting, isolated on transparent background, high resolution, commercial photography style"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Headline | Split Words | Y: 100% → 0%, Rotate: 5deg → 0 | 1.0s | 0.1s | gentle |
| Product Image | 3D Float In | Z: -500px → 0px, RotateY: 15deg → 0 | 1.2s | 0.3s | smooth |
| Background Blobs | Scale/Rotate | Scale: 0 → 1, Rotate: -45deg → 0 | 1.5s | 0s | gentle |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Product Image | Parallax Lift | Top | Bottom | Y: 0 → -100px |
| Scroll | Headline | Blur Out | Top | 50% | Blur: 0 → 10px |

#### Continuous Animations
- **Product**: Slowly floats up/down (Y: -10px to 10px) and rotates slightly (X: -2deg to 2deg) to simulate zero gravity.
- **Background**: SVG blobs morph shape continuously.

#### Interaction Effects
- **Mouse Move**: Product image tilts towards cursor (3D tilt effect) with glare reflection moving opposite.

### Advanced Effects
#### Shader Effects
- **Liquid Background**: A WebGL fluid simulation in the background using the brand colors (#a3d9b1, #ffc09f) that reacts to cursor movement like water.

## Section 3: Features Section

### Layout
**Horizontal Scroll Journey**
- **Concept**: Instead of a vertical grid, this section pins the screen and scrolls horizontally.
- **Composition**: A "train" of 3 cards that slide in from the right, each occupying full viewport width.
- **Progress**: A progress bar at the bottom indicates journey completion.

### Content
- **Card 1**: "100% Natural" - Sucrose & Alcohol-Free.
- **Card 2**: "Alívio Rápido" - Results in 15 minutes.
- **Card 3**: "Seguro e Confiável" - Pediatrician recommended.

### Images
**Feature Icons** (SVGs)
- **Type**: Vector illustrations
- **Transparent Background:** **Yes**
- **Style**: Simple line drawings, friendly and rounded.

### Motion Choreography
#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Section | Track | Horizontal Scroll | Top | Bottom | X: 0% → -200% |
| Cards | Icons | Rotate & Scale | Enter | Center | Rotate: -180 → 0, Scale: 0 → 1 |

#### Continuous Animations
- **Icons**: Draw themselves (SVG stroke-dashoffset animation) when the card becomes active.

## Section 4: About Section

### Layout
**Organic Mask Reveal**
- **Concept**: Text wraps around a central organic shape (blob) that contains the image.
- **Typography**: Large, expressive typography where keywords ("Natural", "Safe") are rendered in the Script font and float slightly.

### Content
- **Headline**: "Confiado por **maes** e **pediatras** em todo o Brasil"
- **Body**: Description of the product philosophy.
- **CTA**: "Saiba Mais"

### Images
**About Section Image**
- **Resolution:** High-res lifestyle photo
- **Aspect Ratio:** 4:5
- **Transparent Background:** **No**
- **Visual Style:** Natural lifestyle photography
- **Subject:** Mother holding smiling baby
- **Color Palette:** Soft natural tones
- **Generation Prompt:** "Lifestyle photography of a happy mother holding her smiling baby, natural soft lighting, warm and loving atmosphere, indoor setting with soft background blur, warm color palette with cream and pastel tones, professional photography, joyful and peaceful mood"

### Motion Choreography
#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Image Blob | Morph Reveal | Clip-path: Circle(0%) → Circle(100%) | 1.2s | 0s | smooth |
| Script Words | Handwriting | Stroke-dashoffset | 1.0s | 0.5s | linear |

#### Scroll Effects
- **Text Wrap**: The body text dynamically reshapes its exclusion zone as the image scales.

## Section 5: Testimonials Section

### Layout
**3D Cylinder Carousel**
- **Concept**: Testimonial cards are arranged on a virtual 3D cylinder.
- **Interaction**: Drag to rotate the cylinder.
- **Depth**: Active card is Z: 0, next/prev cards are Z: -200px and blurred.

### Content
- **Title**: "O que dizem nossos clientes"
- **Testimonials**: 6 cards with customer feedback.

### Images
**Testimonial Avatars**
- **Resolution:** 60x60px circular crops
- **Transparent Background:** **No**
- **Style:** Professional headshots
- **Generation Prompt:** "Professional headshot portrait of a young mother smiling, soft natural lighting, neutral background, warm and friendly expression, circular crop suitable for avatar"

### Motion Choreography
#### Interaction Effects
- **Drag**: Rotates the carousel. Momentum physics applies on release.
- **Hover**: Active card scales up (1.05x) and shadow deepens.

## Section 6: Ingredients Section

### Layout
**Interactive Molecular Grid**
- **Concept**: A grid where items aren't just boxes, but "molecules" connected by faint lines.
- **State**: Default state shows simple icons. Hovering a node "activates" it, revealing details and sending "pulses" down the connecting lines to neighboring nodes.

### Content
- **Items**: 6 ingredient benefits (Natural, Sucrose-Free, etc.)
- **Details**: Hidden text descriptions for each.

### Images
**Ingredient Icons** (SVGs)
- **Transparent Background:** **Yes**

### Motion Choreography
#### Interaction Effects
- **Node Hover**:
  - **Target**: Scales up, glows.
  - **Connections**: Lines draw to connected nodes.
  - **Neighbors**: Connected nodes jiggle slightly (spring physics).

## Section 7: FAQ Section

### Layout
**Accordion with Physics**
- **Structure**: Vertical stack.
- **Innovation**: When an item opens, it doesn't just slide down; it "springs" open with an elastic overshoot. The other items slide out of the way with inertia.

### Content
- Questions about product safety, usage, ingredients, and returns.

### Motion Choreography
- **Open**: Height animates with `elastic.out(1, 0.3)` easing. Content fades in with a slight delay.
- **Icon**: Rotates 180deg with a "wobble" effect.

## Section 8: CTA Section

### Layout
**Ripple Focus**
- **Concept**: A minimal, centered layout. The background is a deep, solid primary color.
- **Innovation**: The "Buy" button acts as a "drum". Clicking it sends a visual shockwave (ripple distortion) across the entire section background.

### Content
- **Headline**: "Pronto para ver seu bebê feliz?"
- **Button**: "Comprar Agora"

### Motion Choreography
#### Continuous Animations
- **Background**: Very subtle noise texture animation to prevent static flatness.

#### Interaction Effects
- **Button Hover**: Magnetic attraction.
- **Button Click**: Ripple shader effect radiates from button center.

## Section 9: Footer

### Layout
**Clean Grid with Reveal**
- **Structure**: 4-column grid.
- **Innovation**: As you reach the bottom, the footer isn't just *there*—it uncovers itself from behind the previous section (z-index -1), like a curtain rising.

### Content
- **Columns**: Branding, Links, Social, Newsletter.
- **Copy**: Copyright and credits.

### Motion Choreography
- **Reveal**: Sticky bottom reveal (z-index: -1).
- **Links**: Underline draws from center-out on hover.

---

## Technical Implementation Notes

### Required Libraries
- **GSAP (GreenSock)**: Core animation engine (ScrollTrigger, Flip Plugin).
- **Lenis**: For buttery smooth scroll physics (essential for the parallax effects).
- **Three.js**: For the Hero liquid background and Product 3D float.
- **SplitType**: For text splitting animations.

### Critical Performance Rules
- **WebGL**: Use a single canvas context for the background to minimize overhead. Pause rendering when section is out of viewport.
- **Will-Change**: Apply `will-change: transform` only to the active elements in the viewport.
- **Font Loading**: Ensure fonts are preloaded before triggering text animations to avoid layout shifts.
- **Mobile**: Disable heavy WebGL shaders on mobile; fallback to CSS gradients.

### Browser Support
- **CSS Grid/Flexbox**: Essential for layout.
- **Backdrop Filter**: Fallback to solid opacity for Firefox < 103.
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is detected, disable parallax and smooth scrolling; switch to simple fades.
