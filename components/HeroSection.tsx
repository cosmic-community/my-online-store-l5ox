import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%, rgba(200,149,108,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(232,169,107,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(200,149,108,0.06) 0%, transparent 50%)',
          }}
        />
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(200,149,108,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,149,108,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-brand-gold text-sm tracking-[0.4em] uppercase mb-6 animate-fade-in">
          Handcrafted with Love
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-brand-cream mb-6 leading-tight animate-fade-in-up">
          Illuminate Your
          <br />
          <span className="text-gradient font-semibold">World</span>
        </h1>
        <p className="text-brand-muted-light text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
          Discover our collection of premium scented candles and novelty
          products, crafted to fill your space with warmth, fragrance, and
          gentle light.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-brand-gold/20"
          >
            Shop Collection
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
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 border border-brand-gold/30 hover:border-brand-gold text-brand-gold px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          >
            Browse Categories
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-5 h-5 text-brand-gold/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}