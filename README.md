# AniWatch - Anime Streaming Website

A modern, responsive anime streaming website built with Next.js, TypeScript, Tailwind CSS, and Shadcn UI.

## Features

- **Modern UI Design**: Dark theme with golden accents inspired by Aniwatch
- **Responsive Layout**: Fully responsive design that works on mobile, tablet, and desktop
- **Hero Carousel**: Auto-playing carousel showcasing spotlight anime
- **Multiple Sections**:
  - Trending anime with numbered cards
  - Top Airing anime
  - Most Popular anime
  - Most Favorite anime
  - Latest Completed anime
- **Smooth Animations**: Fade-in, slide-up, and hover effects
- **SEO Optimized**: Comprehensive meta tags for search engines and social media
- **Performance**: Built with Next.js for optimal performance
- **Inter Font**: Professional typography using Google's Inter font family

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  layout.tsx          # Root layout with SEO metadata
  page.tsx            # Home page with all sections
  globals.css         # Global styles and Tailwind configuration

/components
  Navbar.tsx          # Navigation bar with logo, search, and login
  HeroCarousel.tsx    # Hero section with auto-playing carousel
  AnimeCard.tsx       # Reusable anime card component
  TrendingSection.tsx # Trending anime section
  AnimeSection.tsx    # Generic anime list section
  PromoBanner.tsx     # Promotional banner for app download
  ScrollToTop.tsx     # Scroll to top button
  /ui
    button.tsx        # Shadcn button component

/lib
  utils.ts            # Utility functions (cn helper)
```

## Features Breakdown

### SEO Optimization

- Comprehensive metadata including Open Graph and Twitter cards
- Proper semantic HTML structure
- Optimized for search engine crawling
- Social media sharing support

### Responsive Design

- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly interface elements
- Adaptive layouts for different screen sizes

### Smooth Animations

- Fade-in animations on page load
- Hover effects on cards
- Smooth transitions between states
- Auto-playing carousel with indicators

## Customization

### Colors

The color scheme is defined in `tailwind.config.ts` and `app/globals.css`. The main accent color is golden/yellow (`--primary`), which can be customized to match your brand.

### Content

All anime data is currently static and defined in `app/page.tsx`. To connect to a real API:

1. Create API routes in `/app/api`
2. Fetch data using Server Components or client-side hooks
3. Update components to display dynamic data

## License

This project is for educational purposes.

## Credits

Design inspired by Aniwatch
