import type { Metadata } from 'next';
import { getCategories } from '@/lib/cosmic';
import CategoryCard from '@/components/CategoryCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Categories | Lumière Candle Co.',
  description: 'Browse our candle categories and find your perfect scent.',
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-brand-charcoal to-brand-dark">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 40%, rgba(200,149,108,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(232,169,107,0.2) 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">
            Browse By
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-cream mb-4">
            Our{' '}
            <span className="text-gradient font-semibold">Categories</span>
          </h1>
          <p className="text-brand-muted-light max-w-2xl mx-auto text-lg">
            Discover the perfect candle for every mood, room, and occasion.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-brand-gold hover:text-brand-gold-light text-sm tracking-wide transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {categories.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-muted text-xl">
              No categories available yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}