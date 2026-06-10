'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { branches } from '@/lib/data';
import type { Branch } from '@/types';
import { useT } from '@/lib/useT';

function BranchCard({ branch, index }: { branch: Branch; index: number }) {
  const { t } = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-premium overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={branch.image}
          alt={branch.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-mid/90 via-ink/20 to-transparent" />

        {branch.featured && (
          <div className="absolute top-3 left-3 bg-gold text-ink text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            {t.branches.flagship}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-cream font-display text-lg font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
          {branch.name}
        </h3>

        <div className="space-y-2 mb-5">
          <div className="flex items-start gap-2.5 text-ash-light text-sm">
            <MapPin size={13} className="text-gold flex-shrink-0 mt-0.5" />
            <span className="leading-snug">{branch.address}, {branch.city}</span>
          </div>
          <div className="flex items-center gap-2.5 text-ash-light text-sm">
            <Clock size={13} className="text-gold flex-shrink-0" />
            <span>{t.branches.openUntil}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/book?branch=${branch.id}`}
            className="btn-primary text-xs px-5 py-2.5 flex-1 justify-center"
          >
            {t.branches.bookNow}
          </Link>
          <Link
            href={`/branches/${branch.slug}`}
            className="p-2.5 rounded-full border border-ash/30 text-ash-light hover:text-gold hover:border-gold/50 transition-all duration-300"
          >
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function BranchesSection() {
  const { t } = useT();
  return (
    <section className="section-pad bg-ink" id="branches">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">{t.branches.label}</span>
          <h2 className="heading-section mb-4">
            {t.branches.heading1}{' '}
            {t.branches.heading2 && (
              <span className="text-gold-gradient italic">{t.branches.heading2}</span>
            )}
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-ash-light max-w-md mx-auto text-sm leading-relaxed">
            {t.branches.description}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {branches.map((branch, i) => (
            <BranchCard key={branch.id} branch={branch} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/branches" className="btn-secondary">
            {t.branches.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
