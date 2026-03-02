import type { Category } from '@/types';
import Link from 'next/link';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const image = category.metadata?.image;
  const description = category.metadata?.description;

  return (
    <Link href={`/categories/${category.slug}`} className="group block">
      <article className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-charcoal-light shine-effect">
        {/* Background Image */}
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={category.title}
            width={400}
            height={300}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-charcoal" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent group-hover:from-brand-dark/90 transition-all duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6">
          <h3 className="text-brand-cream text-2xl font-light mb-1 group-hover:text-brand-gold transition-colors duration-300">
            {category.title}
          </h3>
          {description && (
            <p className="text-brand-muted-light text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
              {description}
            </p>
          )}
          <span className="mt-3 text-brand-gold text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Explore →
          </span>
        </div>
      </article>
    </Link>
  );
}