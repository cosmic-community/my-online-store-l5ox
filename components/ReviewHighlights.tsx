import type { Review } from '@/types';
import ReviewCard from '@/components/ReviewCard';
import Link from 'next/link';

interface ReviewHighlightsProps {
  reviews: Review[];
}

export default function ReviewHighlights({ reviews }: ReviewHighlightsProps) {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  // Show top reviews (sorted by rating)
  const topReviews = [...reviews]
    .sort((a, b) => (b.metadata?.rating ?? 0) - (a.metadata?.rating ?? 0))
    .slice(0, 3);

  return (
    <section className="py-20 px-4 bg-brand-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-3">
            What Our Customers Say
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-brand-cream">
            Loved by{' '}
            <span className="text-gradient font-semibold">Thousands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topReviews.map((review) => (
            <ReviewCard key={review.id} review={review} showProduct={true} />
          ))}
        </div>

        {reviews.length > 3 && (
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 border border-brand-gold/30 hover:border-brand-gold text-brand-gold px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
            >
              Read All Reviews
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