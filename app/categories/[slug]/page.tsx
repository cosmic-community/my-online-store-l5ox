// app/categories/[slug]/page.tsx
import type { Metadata } from 'next';
import { getCategoryBySlug, getProductsByCategory } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return { title: 'Category Not Found | Lumière Candle Co.' };
  }

  return {
    title: `${category.title} | Lumière Candle Co.`,
    description:
      category.metadata?.description ||
      `Browse ${category.title} candles at Lumière Candle Co.`,
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(category.id);
  const categoryImage = category.metadata?.image;

  return (
    <div className="min-h-screen">
      {/* Category Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-brand-charcoal to-brand-dark overflow-hidden">
        {categoryImage && (
          <div className="absolute inset-0">
            <img
              src={`${categoryImage.imgix_url}?w=1920&h=600&fit=crop&auto=format,compress`}
              alt={category.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/80 to-brand-dark" />
          </div>
        )}
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <nav className="flex items-center justify-center gap-2 text-sm text-brand-muted-light mb-6">
            <Link href="/" className="hover:text-brand-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/categories"
              className="hover:text-brand-gold transition-colors"
            >
              Categories
            </Link>
            <span>/</span>
            <span className="text-brand-cream">{category.title}</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-light text-brand-cream mb-4">
            <span className="text-gradient font-semibold">
              {category.title}
            </span>
          </h1>
          {category.metadata?.description && (
            <p className="text-brand-muted-light max-w-2xl mx-auto text-lg">
              {category.metadata.description}
            </p>
          )}
        </div>
      </section>

      {/* Products in Category */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-brand-muted-light">
            {products.length} product{products.length !== 1 ? 's' : ''} found
          </p>
        </div>
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-muted text-xl">
              No products in this category yet.
            </p>
            <Link
              href="/products"
              className="inline-block mt-4 text-brand-gold hover:text-brand-gold-light transition-colors"
            >
              Browse all products →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}