import Link from 'next/link';
import { Instagram, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Signature Cut', href: '/services#signature' },
    { label: 'Classic Fade', href: '/services#fade' },
    { label: 'Beard Sculpt', href: '/services#beard' },
    { label: 'Royal Package', href: '/services#royal' },
    { label: 'Scalp Treatment', href: '/services#scalp' },
  ],
  company: [
    { label: 'About Dr Cut', href: '/about' },
    { label: 'Our Branches', href: '/branches' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refund' },
  ],
};

export function Footer() {
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
              Redefining men&apos;s grooming across Saudi Arabia. Precision,
              luxury, and expertise — every single visit.
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
                Services
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
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
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
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
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
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
                  Book Now
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
            © {new Date().getFullYear()} Dr Cut. All rights reserved.
          </p>
          <p className="text-ash-muted text-xs">
            Premium Barbershop · Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
