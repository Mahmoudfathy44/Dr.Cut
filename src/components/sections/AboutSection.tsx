'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Scissors, Star } from 'lucide-react';
import { useT } from '@/lib/useT';

export function AboutSection() {
  const { t } = useT();
  const pillars = t.about.pillars;

  const pillarIcons = [Scissors, Award, Star];

  return (
    <section className="section-pad bg-ink" id="about">
      <div className="container-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/img/about.jpg"
                alt="Dr Cut barbershop interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-gold p-6 rounded-2xl shadow-gold-lg"
            >
              <p className="font-display text-3xl text-ink font-bold">{t.about.years}</p>
              <p className="text-ink/70 text-xs font-medium mt-1">{t.about.yearsLabel}</p>
              <p className="text-ink text-sm font-semibold">{t.about.yearsLabel2}</p>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-gold/30 rounded-2xl pointer-events-none" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label mb-4 block">{t.about.label}</span>
            <h2 className="heading-section mb-6">
              {t.about.heading1}
              <br />
              <span className="text-gold-gradient italic">{t.about.heading2}</span>
            </h2>
            <div className="gold-line-left mb-8" />

            <p className="text-ash-light text-base leading-relaxed mb-6">
              {t.about.para1}
            </p>
            <p className="text-ash-light text-base leading-relaxed mb-12">
              {t.about.para2}
            </p>

            {/* Pillars */}
            <div className="space-y-6">
              {pillars.map((pillar, i) => {
                const Icon = pillarIcons[i];
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-2.5 rounded-xl bg-gold/10 border border-gold/20 flex-shrink-0 mt-0.5">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="text-cream font-semibold text-sm mb-1">
                        {pillar.title}
                      </h3>
                      <p className="text-ash-light text-sm leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link href="/about" className="btn-secondary mt-10 inline-flex">
              {t.about.learnMore}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
