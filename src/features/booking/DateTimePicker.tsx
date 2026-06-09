'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import { useBooking } from './BookingContext';
import { cn } from '@/lib/utils';
import { generateTimeSlots } from '@/lib/data';
import type { TimeSlot } from '@/types';

export function DateTimePicker() {
  const { state, setDateTime, nextStep, prevStep } = useBooking();
  const [dates, setDates] = useState<{ date: Date; formattedString: string }[]>([]);
  const [selectedDateStr, setSelectedDateStr] = useState<string | null>(state.date);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  
  // Generate next 7 days on mount
  useEffect(() => {
    const today = new Date();
    const nextDates = Array.from({ length: 7 }).map((_, i) => {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      return {
        date: d,
        formattedString: d.toISOString().split('T')[0], // YYYY-MM-DD
      };
    });
    setDates(nextDates);
    
    if (!state.date) {
      setSelectedDateStr(nextDates[0].formattedString);
    }
  }, [state.date]);

  // Generate slots when date changes
  useEffect(() => {
    if (selectedDateStr) {
      setTimeSlots(generateTimeSlots(selectedDateStr));
    }
  }, [selectedDateStr]);

  const handleSelectDate = (dateStr: string) => {
    setSelectedDateStr(dateStr);
    // Note: Do not advance step yet, wait for time selection
  };

  const handleSelectTime = (slot: TimeSlot) => {
    if (!slot.available || !selectedDateStr) return;
    setDateTime(selectedDateStr, slot.id, slot.time);
    
    // Auto-advance
    setTimeout(() => nextStep(), 250);
  };

  const formatDayOfWeek = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };
  
  const formatDayOfMonth = (date: Date) => {
    return date.getDate().toString();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-2xl text-cream">اختر التاريخ والوقت</h2>
        <button onClick={prevStep} className="text-ash-light hover:text-gold text-sm transition-colors flex items-center gap-1">
          رجوع &rarr;
        </button>
      </div>
      <p className="text-ash-light text-sm mb-8">متى تود الحضور؟</p>

      {/* Date Selector */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4 text-cream font-medium">
          <Calendar size={18} className="text-gold" />
          <span>التاريخ</span>
        </div>
        
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {dates.map(({ date, formattedString }, i) => {
            const isSelected = selectedDateStr === formattedString;
            return (
              <motion.button
                key={formattedString}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => handleSelectDate(formattedString)}
                className={cn(
                  'snap-start shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-xl border transition-all',
                  isSelected
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-ash/20 bg-ink-mid hover:border-gold/40 text-ash-light hover:text-cream'
                )}
              >
                <span className="text-xs uppercase tracking-wider mb-1">
                  {i === 0 ? 'اليوم' : formatDayOfWeek(date)}
                </span>
                <span className={cn('text-xl font-display', isSelected ? 'text-gold' : 'text-cream')}>
                  {formatDayOfMonth(date)}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Time Selector */}
      <div className="min-h-[200px]">
        <div className="flex items-center gap-2 mb-4 text-cream font-medium">
          <Clock size={18} className="text-gold" />
          <span>الوقت</span>
        </div>

        {selectedDateStr ? (
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {timeSlots.map((slot, i) => {
              const isSelected = state.timeSlotId === slot.id && state.date === selectedDateStr;
              return (
                <motion.button
                  key={slot.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  disabled={!slot.available}
                  onClick={() => handleSelectTime(slot)}
                  className={cn(
                    'py-3 rounded-lg border text-sm font-medium transition-all',
                    isSelected
                      ? 'border-gold bg-gold text-ink font-bold shadow-[0_0_15px_rgba(201,168,76,0.3)]'
                      : slot.available
                      ? 'border-ash/20 bg-ink-mid text-cream hover:border-gold/40'
                      : 'border-transparent bg-ink text-ash/30 cursor-not-allowed'
                  )}
                >
                  {slot.time}
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="text-ash text-sm py-8 text-center border border-dashed border-ash/20 rounded-xl">
            يرجى اختيار التاريخ أولاً
          </div>
        )}
      </div>
    </div>
  );
}
