import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';
import ReviewHighlights from '@/components/ReviewHighlights';
import { getProducts, getCategories, getReviews } from '@/lib/cosmic';

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getProducts(),
    getCategories(),
    getReviews(),
  ]);

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={products} />
      <CategoryShowcase categories={categories} />
      <ReviewHighlights reviews={reviews} />
    </>
  );
}