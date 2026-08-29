---
name: Velocity Fresh
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5e3f3c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#936e6a'
  outline-variant: '#e8bcb7'
  surface-tint: '#c00014'
  primary: '#bb0013'
  on-primary: '#ffffff'
  primary-container: '#e71520'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb4ab'
  secondary: '#2d5daa'
  on-secondary: '#ffffff'
  secondary-container: '#80abfe'
  on-secondary-container: '#003d85'
  tertiary: '#805200'
  on-tertiary: '#ffffff'
  tertiary-container: '#a16900'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad6'
  primary-fixed-dim: '#ffb4ab'
  on-primary-fixed: '#410002'
  on-primary-fixed-variant: '#93000d'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a41'
  on-secondary-fixed-variant: '#064491'
  tertiary-fixed: '#ffddb4'
  tertiary-fixed-dim: '#ffb955'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#633f00'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  background-off-white: '#FAFAFA'
  surface-white: '#FFFFFF'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 64px
  card-padding: 24px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is built for a high-energy, trust-driven food delivery experience. The brand personality is **anticipatory, vibrant, and confident**, leaning into the "teaser" phase of a product launch where appetite and excitement are the primary drivers.

The visual style is **Corporate / Modern** with a **Tactile** edge. It combines the clean, high-white aesthetic of modern logistics apps with energetic "speed and motion" motifs. We utilize generous whitespace to establish a premium feel, while bold primary colors and rounded shapes ensure the interface remains approachable and friendly. 

The core visual metaphor is **"Motion in Stasis"**—using subtle diagonal lines, motion trails, and speed-line accents to suggest rapid delivery without cluttering the interface.

## Colors

The palette is derived directly from the brand’s visual identity to ensure instant recognition and high impact.

- **Primary (Bright Red):** Reserved for the most important actions and headlines. It signifies urgency, energy, and appetite.
- **Secondary (Royal Blue):** Used for taglines, icons, and secondary navigational elements. It provides a grounded, trustworthy counterpoint to the red.
- **Tertiary (Amber/Gold):** Used exclusively for highlights, badges, and "Coming Soon" alerts. It acts as the "light" that draws the eye to specific status updates.
- **Backgrounds:** We use an off-white (#FAFAFA) for the main canvas to reduce glare, while pure white (#FFFFFF) is used for card surfaces to create depth.
- **Text:** A dark charcoal (#1A1A1A) ensures maximum legibility while being softer on the eyes than pure black.

## Typography

This design system utilizes a high-contrast typographic pairing to balance energy with utility.

**Headlines:** We use **Bricolage Grotesque**. It captures the energetic, slightly playful, and "brushed" character of the brand logo while maintaining digital readability. Large display sizes should use tighter letter spacing to emphasize the "compact speed" of the brand.

**Body & Labels:** We use **Hanken Grotesk**. It is a modern, sharp sans-serif that provides exceptional legibility for menus, descriptions, and UI controls. 

**Motion Tip:** Headlines can occasionally be tilted at a 2-degree angle for hero sections to reinforce the "speed" motif.

## Layout & Spacing

The layout follows a **fluid grid** model designed to feel open and "airy," allowing the food photography and teaser content to breathe.

- **Grid:** A 12-column grid for desktop and a 4-column grid for mobile.
- **Rhythm:** We use an 8px base unit. Component internal padding should always be a multiple of 8.
- **Diagonal Energy:** Layouts should occasionally break the horizontal plane. For example, section backgrounds should use subtle 3-degree angled clipping paths on the top or bottom edges to suggest forward motion.
- **Whitespace:** Use generous vertical padding between sections (64px+) to maintain a high-trust, premium aesthetic.

## Elevation & Depth

Hierarchy is established through **Soft Tonal Layers** and **Ambient Shadows**.

- **Surface Strategy:** The background is #FAFAFA. Interactive elements and content containers sit on top in pure #FFFFFF.
- **Shadows:** We use highly diffused, low-opacity shadows. A standard card shadow should have a large blur (24px-32px) and a very low opacity (8-10%) using the neutral color (#1A1A1A) to avoid a "dirty" look.
- **Depth of Speed:** Elements meant to feel "faster" or "closer" to the user (like floating action buttons or active "Coming Soon" badges) receive a slightly more pronounced shadow with a 4px vertical offset.

## Shapes

The shape language is **Rounded and Friendly**. 

- **Corner Radius:** A base radius of 16px (`rounded-lg`) is used for all primary cards and containers to evoke a modern, "bouncy" feel.
- **Pill Shapes:** Small UI elements like badges, chips, and the 'Coming Soon' indicator must use a full pill shape (999px radius) to differentiate them from functional containers.
- **Motion Accents:** Decorative elements should utilize "speed lines"—rectangles with fully rounded ends of varying lengths, placed horizontally or at slight angles.

## Components

### Buttons
Buttons are the primary vehicle for the "Speed and Motion" motif. 
- **Primary:** Bright Red background, white text. On hover, a subtle "speed line" pattern (diagonal white lines at 10% opacity) should slide across the background.
- **Secondary:** Royal Blue outline or solid background, used for secondary information.
- **State Note:** Never use "Order Now." The primary action label for this system is "Coming Soon" or "Get Notified."

### 'Coming Soon' Pill Badge
A signature component. Use the Tertiary Amber (#F5A623) background with Dark Charcoal text. This badge should be placed in the top-right corner of cards or as a standalone tag in hero sections.

### Cards
Cards use a 16px corner radius, a pure white surface, and the soft ambient shadow defined in the Elevation section. Card transitions should be snappy (200ms) with a slight "lift" (negative Y-offset) on hover.

### Section Dividers
Instead of flat lines, use subtle angled dividers (3-degree slope) or a row of horizontal "speed lines" in a very light gray (#EEEEEE) to separate content blocks.

### Input Fields
Inputs should be clean with an off-white fill and a subtle border that turns Royal Blue on focus. Labels should use the `label-bold` typographic style.