'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useBooking } from './BookingContext';
import type { BookingStep } from '@/types';

const steps: { step: BookingStep; label: string }[] = [
  { step: 1, label: 'الفرع' },
  { step: 2, label: 'الخدمة' },
  { step: 3, label: 'التاريخ والوقت' },
  { step: 4, label: 'بياناتك' },
  { step: 5, label: 'مراجعة' },
];

export function StepIndicator() {
  const { state, goToStep } = useBooking();
  const currentStep = state.step;

  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between relative">
        {/* Background connector line */}
        <div className="absolute top-4 left-0 right-0 h-px bg-ash/20 z-0" />

        {/* Active connector line */}
        <motion.div
          className="absolute top-4 left-0 h-px bg-gold z-0"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />

        {steps.map(({ step, label }) => {
          const isCompleted = step < currentStep;
          const isCurrent = step === currentStep;
          const isClickable = step < currentStep;

          return (
            <div
              key={step}
              className="flex flex-col items-center gap-2 relative z-10"
            >
              <button
                onClick={() => isClickable && goToStep(step)}
                disabled={!isClickable}
                className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-400',
                  isCompleted
                    ? 'bg-gold text-ink cursor-pointer hover:bg-gold-light'
                    : isCurrent
                    ? 'bg-gold text-ink ring-4 ring-gold/25 shadow-gold'
                    : 'bg-ink-mid border border-ash/30 text-ash-muted cursor-default'
                )}
                aria-label={`Step ${step}: ${label}`}
              >
                {isCompleted ? <Check size={14} strokeWidth={3} /> : step}
              </button>

              <span
                className={cn(
                  'text-[10px] tracking-wide font-medium hidden sm:block',
                  isCurrent ? 'text-gold' : isCompleted ? 'text-ash-light' : 'text-ash-muted'
                )}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
