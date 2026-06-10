'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import { useT } from '@/lib/useT';

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const { t } = useT();

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section className="section-pad bg-ink-mid" id="testimonials">
      <div className="container-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">{t.testimonials.label}</span>
          <h2 className="heading-section mb-4">
            {t.testimonials.heading1}{' '}
            <span className="text-gold-gradient italic">{t.testimonials.heading2}</span>
          </h2>
          <div className="gold-line" />
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="card-glass p-10 rounded-3xl text-center relative"
            >
              {/* Quote icon */}
              <div className="absolute top-8 left-10 opacity-20">
                <Quote size={40} className="text-gold" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-gold"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="text-cream/90 text-lg leading-relaxed font-light italic mb-8 relative z-10">
                &ldquo;{testimonial.review}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="gold-line mb-6" />

              {/* Author */}
              <div>
                <p className="text-cream font-semibold text-sm">{testimonial.name}</p>
                {testimonial.branch && (
                  <p className="text-ash-muted text-xs mt-1 tracking-wide">{testimonial.branch}</p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full border border-ash/30 text-ash-light hover:text-gold hover:border-gold/50 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? 'w-6 h-2 bg-gold'
                      : 'w-2 h-2 bg-ash/40 hover:bg-ash'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border border-ash/30 text-ash-light hover:text-gold hover:border-gold/50 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
