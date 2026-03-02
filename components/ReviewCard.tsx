import type { Review } from '@/types';
import StarRating from '@/components/StarRating';
import Link from 'next/link';

interface ReviewCardProps {
  review: Review;
  showProduct?: boolean;
}

export default function ReviewCard({
  review,
  showProduct = true,
}: ReviewCardProps) {
  const rating = review.metadata?.rating ?? 0;
  const reviewerName = review.metadata?.reviewer_name || 'Anonymous';
  const comment = review.metadata?.comment;
  const product = review.metadata?.product;

  return (
    <article className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-brand-gold/30">
      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={rating} />
      </div>

      {/* Comment */}
      {comment && (
        <p className="text-brand-muted-light text-sm leading-relaxed mb-6 line-clamp-4">
          &ldquo;{comment}&rdquo;
        </p>
      )}

      {/* Reviewer info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center">
            <span className="text-brand-gold text-sm font-semibold">
              {reviewerName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="text-brand-cream text-sm font-medium">
              {reviewerName}
            </p>
            {showProduct && product && (
              <Link
                href={`/products/${product.slug}`}
                className="text-brand-gold text-xs hover:text-brand-gold-light transition-colors"
              >
                {product.title}
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}