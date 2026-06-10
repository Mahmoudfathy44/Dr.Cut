'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { services } from '@/lib/data';
import { formatPrice, formatDuration } from '@/lib/utils';
import type { Service } from '@/types';
import { useT } from '@/lib/useT';

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { t } = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group card-premium cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-transparent to-transparent" />

        {/* Popular badge */}
        {service.popular && (
          <div className="absolute top-3 left-3 flex items-center gap-1 bg-gold/90 backdrop-blur-sm text-ink text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            <Star size={9} fill="currentColor" />
            {t.services.popular}
          </div>
        )}

        {/* Price overlay */}
        <div className="absolute bottom-3 right-3 bg-ink/80 backdrop-blur-sm border border-gold/30 rounded-lg px-3 py-1.5">
          <span className="text-gold font-semibold text-sm">
            {formatPrice(service.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="text-cream font-semibold text-base group-hover:text-gold transition-colors duration-300">
            {service.name}
          </h3>
          <div className="flex items-center gap-1 text-ash-muted shrink-0">
            <Clock size={12} />
            <span className="text-xs">{formatDuration(service.duration)}</span>
          </div>
        </div>

        <p className="text-ash-light text-xs leading-relaxed mb-4 line-clamp-2">
          {service.description}
        </p>

        {/* Includes */}
        {service.includes && (
          <ul className="flex flex-wrap gap-1.5 mb-4">
            {service.includes.slice(0, 3).map((item) => (
              <li
                key={item}
                className="text-[10px] text-ash-light bg-ash/10 border border-ash/20 rounded-full px-2 py-0.5"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        <Link
          href={`/book?service=${service.id}`}
          className="flex items-center gap-2 text-gold text-xs font-semibold tracking-wide group/link"
        >
          {t.services.bookService}
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const { t } = useT();
  const featured = services.filter((s) => s.popular).slice(0, 3);

  return (
    <section className="section-pad bg-ink-soft" id="services">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">{t.services.label}</span>
          <h2 className="heading-section mb-4">
            {t.services.heading1}{' '}
            <span className="text-gold-gradient italic">{t.services.heading2}</span>{' '}
            {t.services.heading3}
          </h2>
          <div className="gold-line mb-6" />
          <p className="text-ash-light max-w-md mx-auto text-sm leading-relaxed">
            {t.services.description}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services" className="btn-secondary">
            {t.services.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
