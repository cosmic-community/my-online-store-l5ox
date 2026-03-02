import type { Category } from '@/types';
import CategoryCard from '@/components/CategoryCard';
import Link from 'next/link';

interface CategoryShowcaseProps {
  categories: Category[];
}

export default function CategoryShowcase({
  categories,
}: CategoryShowcaseProps) {
  if (!categories || categories.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            Find Your Scent
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-brand-cream">
            Shop by{' '}
            <span className="text-gradient font-semibold">Category</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light text-sm tracking-wide transition-colors"
          >
            View All Categories
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}