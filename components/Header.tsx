'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/categories', label: 'Categories' },
    { href: '/reviews', label: 'Reviews' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-brand-dark/80 backdrop-blur-xl border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🕯️</span>
            <span className="text-xl md:text-2xl font-light text-brand-cream tracking-wider">
              Lumi
              <span className="text-gradient font-semibold">ère</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-muted-light hover:text-brand-gold text-sm tracking-[0.1em] uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-cream p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden py-4 border-t border-brand-gold/10 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-brand-muted-light hover:text-brand-gold text-sm tracking-[0.1em] uppercase transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}