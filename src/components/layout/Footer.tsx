'use client';

import Link from 'next/link';
import { Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';
import { useT } from '@/lib/useT';

export function Footer() {
  const { t } = useT();
  const fl = t.footer.links;

  return (
    <footer className="bg-ink-soft border-t border-ash/20">
      {/* Main Footer */}
      <div className="container-xl py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-3xl text-gold tracking-wide">
                Dr<span className="text-cream">Cut</span>
              </span>
            </Link>
            <p className="text-ash-light text-sm leading-relaxed max-w-xs mb-8">
              {t.footer.tagline}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a
                href="tel:+966112345678"
                className="flex items-center gap-3 text-ash-light hover:text-gold text-sm transition-colors"
              >
                <Phone size={14} className="text-gold flex-shrink-0" />
                +966 11 234 5678
              </a>
              <a
                href="mailto:hello@drcut.sa"
                className="flex items-center gap-3 text-ash-light hover:text-gold text-sm transition-colors"
              >
                <Mail size={14} className="text-gold flex-shrink-0" />
                hello@drcut.sa
              </a>
              <div className="flex items-start gap-3 text-ash-light text-sm">
                <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                Riyadh, Jeddah, Al Khobar — KSA
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/drcut.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-ash/30 text-ash-light hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com/drcut_sa"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-ash/30 text-ash-light hover:text-gold hover:border-gold/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-cream text-sm font-semibold tracking-widest uppercase mb-5">
                {t.footer.services}
              </h3>
              <ul className="space-y-3">
                {fl.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ash-light hover:text-gold text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-cream text-sm font-semibold tracking-widest uppercase mb-5">
                {t.footer.company}
              </h3>
              <ul className="space-y-3">
                {fl.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ash-light hover:text-gold text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-cream text-sm font-semibold tracking-widest uppercase mb-5">
                {t.footer.legal}
              </h3>
              <ul className="space-y-3">
                {fl.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-ash-light hover:text-gold text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Book CTA */}
              <div className="mt-8">
                <Link href="/book" className="btn-primary text-xs px-6 py-3">
                  {t.footer.bookNow}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ash/15">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-ash-muted text-xs">
            © {new Date().getFullYear()} Dr Cut. {t.footer.rights}
          </p>
          <p className="text-ash-muted text-xs">
            {t.footer.subtitle}
          </p>
        </div>
      </div>
    </footer>
  );
}
