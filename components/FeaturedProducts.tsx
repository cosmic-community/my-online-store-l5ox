import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

interface FeaturedProductsProps {
  products: Product[];
}

export default function FeaturedProducts({ products }: FeaturedProductsProps) {
  if (!products || products.length === 0) {
    return null;
  }

  const featured = products.slice(0, 6);

  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            Our Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-brand-cream">
            Featured{' '}
            <span className="text-gradient font-semibold">Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length > 6 && (
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border border-brand-gold/30 hover:border-brand-gold text-brand-gold px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
            >
              View All Products
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
        )}
      </div>
    </section>
  );
}