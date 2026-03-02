import type { Product } from '@/types';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const featuredImage = product.metadata?.featured_image;
  const price = product.metadata?.price;
  const inStock = product.metadata?.in_stock !== false;
  const scent = product.metadata?.scent_profile;
  const category = product.metadata?.category;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <article className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:border-brand-gold/30 hover:shadow-lg hover:shadow-brand-gold/5 shine-effect">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-brand-charcoal">
          {featuredImage ? (
            <img
              src={`${featuredImage.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
              alt={product.title}
              width={400}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-6xl opacity-30">🕯️</span>
            </div>
          )}
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {!inStock && (
              <span className="bg-red-900/80 text-red-200 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                Sold Out
              </span>
            )}
            {category && (
              <span className="bg-brand-dark/70 text-brand-gold px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                {category.title}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-brand-cream text-lg font-medium mb-1 group-hover:text-brand-gold transition-colors duration-300 line-clamp-1">
            {product.title}
          </h3>
          {scent && (
            <p className="text-brand-muted-light text-xs tracking-wide mb-3">
              {scent}
            </p>
          )}
          <div className="flex items-center justify-between">
            {price !== undefined && price !== null ? (
              <span className="text-brand-gold text-xl font-semibold">
                ${Number(price).toFixed(2)}
              </span>
            ) : (
              <span />
            )}
            <span className="text-brand-muted-light text-xs group-hover:text-brand-gold transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}