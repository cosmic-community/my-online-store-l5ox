# ✨ Lumière Candle Co.

![Lumière Candle Co.](https://cdn.cosmicjs.com/a75ef100-e4b4-11ef-bdbf-43a10e042498-chandelier.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, luxurious candle store built with Next.js 16 and Cosmic CMS. Browse scented candles and novelty products with rich product details, customer reviews, and elegant category browsing.

## Features

- 🕯️ **Product Catalog** — Browse candles with detailed scent profiles, burn times, weights, and pricing
- 🏷️ **Category System** — Organized product browsing by candle category
- ⭐ **Customer Reviews** — Star-rated testimonials linked to specific products
- 🎨 **Warm, Luxurious Design** — Dark charcoal backgrounds with golden amber accents
- ⚡ **Server-Side Rendering** — Lightning-fast with Next.js 16 App Router
- 📱 **Fully Responsive** — Beautiful on mobile, tablet, and desktop
- 🔍 **SEO Optimized** — Proper metadata and semantic HTML throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=69a6179d59ab724979cf9814&clone_repository=69a618f2b216b9882243697b)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews. User instructions: A modern candle store with scented candles and novelty products."

### Code Generation Prompt

> "Build a Next.js application for an online business called 'My Online Store'. The content is managed in Cosmic CMS with the following object types: categories, products, reviews. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: A modern candle store with scented candles and novelty products."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS 3](https://tailwindcss.com/) — Utility-first CSS framework
- [Cosmic CMS](https://www.cosmicjs.com/docs) — Headless content management
- [@cosmicjs/sdk](https://www.npmjs.com/package/@cosmicjs/sdk) — Cosmic JavaScript SDK

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+
- A [Cosmic](https://www.cosmicjs.com) account with the content models set up

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd lumiere-candle-co
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file with your Cosmic credentials:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

### Fetching Products
```typescript
import { cosmic } from '@/lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Product by Slug
```typescript
const { object: product } = await cosmic.objects
  .findOne({ type: 'products', slug: 'lavender-dreams' })
  .props(['id', 'title', 'slug', 'metadata', 'created_at'])
  .depth(1)
```

### Fetching Reviews for a Product
```typescript
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .props(['id', 'title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application uses three Cosmic object types:

| Object Type | Slug | Description |
|---|---|---|
| Products | `products` | Candle products with images, pricing, scent profiles, and burn times |
| Categories | `categories` | Product categories for organized browsing |
| Reviews | `reviews` | Customer reviews with star ratings linked to products |

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Import the project on [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

### Netlify
1. Push your code to GitHub
2. Import the project on [Netlify](https://netlify.com)
3. Set build command to `bun run build`
4. Set publish directory to `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->