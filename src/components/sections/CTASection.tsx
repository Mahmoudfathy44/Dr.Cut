'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useT } from '@/lib/useT';

export function CTASection() {
  const { t } = useT();
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img/cta.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-ink/85" />

      {/* Gold lines decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label mb-6 block">{t.cta.label}</span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-tight mb-6">
            {t.cta.heading1}{' '}
            <span className="text-gold-gradient italic">{t.cta.heading2}</span>
          </h2>
          <div className="gold-line mb-8" />
          <p className="text-ash-light text-lg max-w-md mx-auto mb-12 leading-relaxed">
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="btn-primary text-base px-10 py-5">
              {t.cta.bookSeat}
            </Link>
            <Link href="/branches" className="btn-ghost text-base">
              {t.cta.findBranch}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
