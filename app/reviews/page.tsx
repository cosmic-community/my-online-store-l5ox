import type { Metadata } from 'next';
import { getReviews } from '@/lib/cosmic';
import ReviewCard from '@/components/ReviewCard';
import StarRating from '@/components/StarRating';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customer Reviews | Lumière Candle Co.',
  description:
    'Read what our customers say about our handcrafted scented candles.',
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) /
        reviews.length
      : 0;

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-brand-charcoal to-brand-dark">
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 50% 50%, rgba(200,149,108,0.3) 0%, transparent 60%)',
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-4">
            Testimonials
          </p>
          <h1 className="text-4xl md:text-6xl font-light text-brand-cream mb-4">
            Customer{' '}
            <span className="text-gradient font-semibold">Reviews</span>
          </h1>
          {reviews.length > 0 && (
            <div className="flex items-center justify-center gap-3 mt-6">
              <StarRating rating={Math.round(averageRating)} size="lg" />
              <span className="text-brand-muted-light text-lg">
                {averageRating.toFixed(1)} average from {reviews.length} review
                {reviews.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
          <Link
            href="/"
            className="inline-block mt-6 text-brand-gold hover:text-brand-gold-light text-sm tracking-wide transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {reviews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-brand-muted text-xl">
              No reviews yet. Be the first to share your experience!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} showProduct={true} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}