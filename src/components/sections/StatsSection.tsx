'use client';

import { motion } from 'framer-motion';
import { useT } from '@/lib/useT';
import { useContext } from 'react';
import { LanguageContext } from '@/app/LanguageProvider';
import { translations, type Lang } from '@/lib/translations';

export function StatsSection() {
  const { lang } = useContext(LanguageContext);
  const stats = translations[lang as Lang]?.stats ?? translations.en.stats;

  return (
    <section className="bg-ink-mid border-y border-ash/20 py-12">
      <div className="container-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-ash/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-6 py-4"
            >
              <span className="font-display text-4xl lg:text-5xl text-gold mb-2">
                {stat.value}
              </span>
              <span className="text-ash-light text-xs tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
