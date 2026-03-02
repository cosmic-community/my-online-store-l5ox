// app/products/[slug]/page.tsx
import type { Metadata } from 'next';
import { getProductBySlug, getReviewsByProduct } from '@/lib/cosmic';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: 'Product Not Found | Lumière Candle Co.' };
  }

  return {
    title: `${product.title} | Lumière Candle Co.`,
    description: product.metadata?.description || `Shop ${product.title} at Lumière Candle Co.`,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const reviews = await getReviewsByProduct(product.id);
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) /
        reviews.length
      : 0;

  const price = product.metadata?.price;
  const inStock = product.metadata?.in_stock !== false;
  const featuredImage = product.metadata?.featured_image;
  const gallery = product.metadata?.gallery;
  const category = product.metadata?.category;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <nav className="flex items-center gap-2 text-sm text-brand-muted-light">
          <Link href="/" className="hover:text-brand-gold transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/products"
            className="hover:text-brand-gold transition-colors"
          >
            Products
          </Link>
          <span>/</span>
          <span className="text-brand-cream">{product.title}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            {featuredImage && (
              <div className="relative rounded-2xl overflow-hidden bg-brand-charcoal aspect-square">
                <img
                  src={`${featuredImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                  alt={product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
                {!inStock && (
                  <div className="absolute top-4 left-4 bg-red-900/80 text-red-200 px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm">
                    Out of Stock
                  </div>
                )}
              </div>
            )}
            {gallery && gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-3">
                {gallery.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-lg overflow-hidden bg-brand-charcoal aspect-square border border-brand-gold/10 hover:border-brand-gold/40 transition-colors"
                  >
                    <img
                      src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                      alt={`${product.title} gallery ${i + 1}`}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div className="flex flex-col">
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="text-brand-gold text-sm tracking-[0.2em] uppercase hover:text-brand-gold-light transition-colors mb-3 inline-block"
              >
                {category.title}
              </Link>
            )}
            <h1 className="text-3xl md:text-5xl font-light text-brand-cream mb-4">
              {product.title}
            </h1>

            {reviews.length > 0 && (
              <div className="flex items-center gap-3 mb-6">
                <StarRating rating={Math.round(averageRating)} />
                <span className="text-brand-muted-light text-sm">
                  ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
                </span>
              </div>
            )}

            {price !== undefined && price !== null && (
              <p className="text-3xl font-semibold text-brand-gold mb-8">
                ${Number(price).toFixed(2)}
              </p>
            )}

            {product.metadata?.description && (
              <div className="mb-8">
                <p className="text-brand-muted-light leading-relaxed text-lg">
                  {product.metadata.description}
                </p>
              </div>
            )}

            {/* Product Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {product.metadata?.scent_profile && (
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-1">
                    Scent
                  </p>
                  <p className="text-brand-cream text-sm font-medium">
                    {product.metadata.scent_profile}
                  </p>
                </div>
              )}
              {product.metadata?.burn_time && (
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-1">
                    Burn Time
                  </p>
                  <p className="text-brand-cream text-sm font-medium">
                    {product.metadata.burn_time}
                  </p>
                </div>
              )}
              {product.metadata?.weight && (
                <div className="glass-card rounded-xl p-4 text-center">
                  <p className="text-brand-gold text-xs tracking-[0.2em] uppercase mb-1">
                    Weight
                  </p>
                  <p className="text-brand-cream text-sm font-medium">
                    {product.metadata.weight}
                  </p>
                </div>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 mb-8">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  inStock ? 'bg-emerald-400' : 'bg-red-400'
                }`}
              />
              <span
                className={`text-sm font-medium ${
                  inStock ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <Link
              href="/products"
              className="text-brand-gold hover:text-brand-gold-light text-sm transition-colors"
            >
              ← Back to All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {reviews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16 border-t border-brand-gold/10">
          <h2 className="text-2xl md:text-3xl font-light text-brand-cream mb-8">
            Customer{' '}
            <span className="text-gradient font-semibold">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} showProduct={false} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}