# GroundWorks - Component-Based Architecture

## Overview

This project has been implemented as a modular, component-based Next.js application with a modern dark aesthetic featuring 3D animations, custom cursor interactions, and smooth scroll animations.

## Component Structure

```
app/components/
├── CustomCursor.tsx      # Custom cursor with GSAP animations
├── Scene.tsx             # 3D background with Three.js
├── GridLines.tsx         # Background grid pattern
├── Navbar.tsx            # Navigation bar
├── Hero.tsx              # Hero section with animated text
├── Services.tsx          # Services showcase with cards
├── Contact.tsx           # CTA and footer
└── index.ts              # Component exports
```

## Components

### CustomCursor.tsx
- **Purpose**: Replaces the default browser cursor with an animated custom cursor
- **Features**:
  - Two-part cursor: inner dot and outer ring
  - Smooth following motion with GSAP
  - Hover effects on interactive elements
  - Dynamic scaling on hover
  - Real-time element detection via MutationObserver

### Scene.tsx
- **Purpose**: Renders a 3D interactive background scene
- **Features**:
  - Three.js WebGL renderer
  - Geometric wireframe animations
  - Particle point system
  - Mouse parallax effect
  - Scroll-triggered animations via GSAP ScrollTrigger
  - Responsive canvas sizing

### GridLines.tsx
- **Purpose**: Decorative background grid layout
- **Features**:
  - Responsive grid columns
  - Subtle borders for visual structure
  - Non-interactive overlay

### Navbar.tsx
- **Purpose**: Fixed navigation bar at the top
- **Features**:
  - Logo and tagline
  - Navigation links (Services, Agency, Contact)
  - Mobile menu button (responsive)
  - Mix-blend-difference styling

### Hero.tsx
- **Purpose**: Large hero section with animated headline
- **Features**:
  - Large responsive typography (13vw)
  - Character-by-character animation on load
  - Split text layout (WE BUILD, DIGITAL, LEGACIES)
  - Scroll-to-explore indicator
  - Staggered fade-in animations

### Services.tsx
- **Purpose**: Showcase of service offerings
- **Features**:
  - Grid layout (1-2 columns)
  - Interactive service cards
  - Inline SVG icons
  - Hover effects with border and background changes
  - Description text with transition effects

### Contact.tsx
- **Purpose**: Call-to-action and footer section
- **Features**:
  - Centered CTA with animated button
  - Email link (mailto:)
  - Social media links
  - Footer with copyright info
  - Scale animation on hover

## Key Technologies

### Frontend Framework
- **Next.js 16.3.8** - React framework with app router
- **React 19.2.8** - UI library
- **TypeScript** - Type safety

### Styling & Layout
- **Tailwind CSS 4** - Utility-first CSS framework
- **Custom CSS** - Additional animations and effects

### Animation & 3D
- **GSAP 3.15.0** - Animation library with ScrollTrigger plugin
- **Three.js 0.186.1** - 3D graphics library

### Fonts
- **Inter** (weights: 200-600) - Primary sans-serif
- **JetBrains Mono** (weights: 300-400) - Monospace font

## Design System

### Color Palette
```
Background:    #050505 (zinc-950)
Text Primary:  #FFFFFF (white)
Text Secondary: #d4d4d8 (zinc-300)
Accents:       #52525b (zinc-600)
Borders:       #27272a (zinc-800/30)
```

### Typography
- **Headings**: Inter, Semibold, -0.05em tracking
- **Body**: Inter, Light-Regular, relaxed leading
- **UI**: JetBrains Mono, Uppercase, tracking-widest

## Animation Features

### GSAP Animations
1. **Hero Text**: Characters fly in with rotateX animation
2. **Scroll Animations**: 3D scene rotates and morphs as user scrolls
3. **Cursor Follower**: Smooth easing with power2.out
4. **Button Hover**: Scale and color transitions

### CSS Animations
1. **Pulse Effect**: Animated dot in scroll indicator
2. **Hover Transitions**: Border and background color changes
3. **Transform Effects**: Scale on button hover

## Responsive Design

The layout is mobile-first and responsive:
- **Mobile**: Single column, adjusted font sizes
- **Tablet (md)**: 2 columns for services
- **Desktop (lg)**: 3-column grid layout with side panel
- **Extra Large (2xl)**: Max-width container constraints

## Getting Started

### Installation
```bash
yarn install
```

### Development
```bash
yarn dev
```
Visit http://localhost:3000

### Production Build
```bash
yarn build
yarn start
```

## Component Integration

All components are:
1. **Client-side**: Marked with `'use client'` directive
2. **Exported**: Via `app/components/index.ts`
3. **Imported**: In `app/page.tsx` and composed together
4. **Type-safe**: Full TypeScript support

## Customization

### Modifying Colors
Edit `app/globals.css` `:root` variables:
```css
--background: #050505;
--foreground: #d4d4d8;
```

### Adjusting Animations
- **GSAP timing**: Modify duration/delay in component files
- **3D scene**: Adjust Three.js parameters in `Scene.tsx`
- **Cursor speed**: Change GSAP duration values in `CustomCursor.tsx`

### Adding New Sections
1. Create new component in `app/components/`
2. Export from `app/components/index.ts`
3. Import and use in `app/page.tsx`

## Performance Considerations

- Three.js renderer uses high-performance settings
- Pixel ratio capped at 2x for better performance
- ScrollTrigger animations are GPU-accelerated
- MutationObserver for efficient event delegation
- Client components prevent server-side overhead

## Browser Support

- Modern browsers with WebGL support
- CSS Grid and Flexbox
- ES6+ JavaScript features
- Chrome, Firefox, Safari, Edge (latest versions)
