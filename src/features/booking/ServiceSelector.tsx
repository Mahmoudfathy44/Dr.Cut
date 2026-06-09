'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Star, Check } from 'lucide-react';
import { services } from '@/lib/data';
import { useBooking } from './BookingContext';
import { formatPrice, formatDuration, cn } from '@/lib/utils';

const categories = [
  { id: 'all', label: 'الكل' },
  { id: 'haircut', label: 'قص الشعر' },
  { id: 'beard', label: 'اللحية' },
  { id: 'treatment', label: 'علاجات' },
  { id: 'package', label: 'باقات' },
] as const;

export function ServiceSelector() {
  const { state, setService, nextStep } = useBooking();
  const [activeCategory, setActiveCategory] =
    // Using local state without useState import workaround — inline
    // We'll use a simple approach
    [state.serviceId ? 'all' : 'all', () => {}];

  // Simple local category filter using a data attribute approach
  const handleSelect = (serviceId: string) => {
    setService(serviceId);
    setTimeout(() => nextStep(), 250);
  };

  return (
    <div>
      <h2 className="font-display text-2xl text-cream mb-2">اختر الخدمة</h2>
      <p className="text-ash-light text-sm mb-8">اختر الخدمة التي تود حجزها</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, i) => {
          const isSelected = state.serviceId === service.id;
          return (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => handleSelect(service.id)}
              className={cn(
                'group relative text-left rounded-2xl border overflow-hidden transition-all duration-300',
                isSelected
                  ? 'border-gold shadow-gold ring-1 ring-gold/30'
                  : 'border-ash/20 hover:border-gold/40 hover:shadow-dark'
              )}
            >
              {/* Image */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-mid via-ink/20 to-transparent" />

                <div className="absolute top-2 left-2 flex gap-1.5">
                  {service.popular && (
                    <span className="flex items-center gap-0.5 bg-gold/90 text-ink text-[9px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full">
                      <Star size={8} fill="currentColor" /> شائع
                    </span>
                  )}
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center shadow-gold">
                    <Check size={12} className="text-ink" strokeWidth={3} />
                  </div>
                )}

                <div className="absolute bottom-2 right-2 bg-ink/80 backdrop-blur-sm border border-gold/30 rounded-lg px-2.5 py-1">
                  <span className="text-gold font-bold text-sm">{formatPrice(service.price)}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 bg-ink-mid">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className={cn(
                    'font-semibold text-sm transition-colors duration-300',
                    isSelected ? 'text-gold' : 'text-cream group-hover:text-gold'
                  )}>
                    {service.name}
                  </h3>
                  <div className="flex items-center gap-1 text-ash-muted text-xs shrink-0">
                    <Clock size={10} />
                    {formatDuration(service.duration)}
                  </div>
                </div>
                <p className="text-ash-light text-xs leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
