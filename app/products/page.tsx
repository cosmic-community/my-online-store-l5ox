import type { Metadata } from 'next';
import { getProducts } from '@/lib/cosmic';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Products | Lumière Candle Co.',
  description: 'Browse our full collection of handcrafted scented candles and novelty products.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-brand-charcoal to-brand-dark">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 50%, rgba(200,149,108,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(232,169,107,0.2) 0%, transparent 50%)',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">
            Our Collection
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-cream mb-4">
            All <span className="text-gradient font-semibold">Products</span>
          </h1>
          <p className="text-brand-muted-light max-w-2xl mx-auto text-lg">
            Explore our handcrafted collection of scented candles and novelty
            products, each made with care and premium ingredients.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-brand-gold hover:text-brand-gold-light text-sm tracking-wide transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-muted text-xl">
              No products available at the moment.
            </p>
            <p className="text-brand-muted-light mt-2">
              Check back soon for our latest collection.
            </p>
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