import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕯️</span>
              <span className="text-xl font-light text-brand-cream tracking-wider">
                Lumi
                <span className="text-gradient font-semibold">ère</span>
              </span>
            </Link>
            <p className="text-brand-muted-light text-sm leading-relaxed max-w-xs">
              Handcrafted scented candles and novelty products that transform
              your space into a sanctuary of warmth and fragrance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Explore
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/products"
                className="text-brand-muted-light hover:text-brand-gold text-sm transition-colors"
              >
                All Products
              </Link>
              <Link
                href="/categories"
                className="text-brand-muted-light hover:text-brand-gold text-sm transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/reviews"
                className="text-brand-muted-light hover:text-brand-gold text-sm transition-colors"
              >
                Customer Reviews
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brand-gold text-xs tracking-[0.3em] uppercase mb-4 font-medium">
              Get In Touch
            </h3>
            <p className="text-brand-muted-light text-sm leading-relaxed">
              Have questions about our candles? We&apos;d love to hear from you.
            </p>
            <p className="text-brand-muted-light text-sm mt-3">
              hello@lumierecandles.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-xs tracking-wide">
            © {new Date().getFullYear()} Lumière Candle Co. All rights reserved.
          </p>
          <p className="text-brand-muted text-xs">
            Crafted with warmth & care
          </p>
        </div>
      </div>
    </footer>
  );
}