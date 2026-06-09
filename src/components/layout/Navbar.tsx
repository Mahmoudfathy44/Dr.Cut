'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Branches', href: '/branches' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ink/95 backdrop-blur-md border-b border-ash/20 py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="container-xl flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-2xl text-gold tracking-wide group-hover:text-gold-light transition-colors duration-300">
              Dr<span className="text-cream">Cut</span>
            </span>
            <span className="hidden sm:block w-px h-6 bg-ash/40" />
            <span className="hidden sm:block text-[10px] text-ash-light tracking-widest uppercase font-medium">
              Premium Grooming
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors duration-300 relative group',
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-cream/70 hover:text-cream'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/book" className="btn-primary text-xs px-6 py-3 hidden sm:inline-flex">
              Book Now
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-cream/70 hover:text-cream transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-ink/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8',
          'transition-all duration-500 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'font-display text-3xl transition-all duration-300',
              'transform',
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              pathname === link.href ? 'text-gold' : 'text-cream/80 hover:text-gold'
            )}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          className="btn-primary mt-4"
          style={{ transitionDelay: `${navLinks.length * 60}ms` }}
        >
          Book Your Seat
        </Link>
      </div>
    </>
  );
}
