'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { User, Phone, Mail, FileText } from 'lucide-react';
import { useBooking } from './BookingContext';
import { customerSchema, type CustomerFormData } from './schemas';
import { cn } from '@/lib/utils';

export function CustomerForm() {
  const { state, setCustomer, nextStep, prevStep } = useBooking();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CustomerFormData>({
    resolver: zodResolver(customerSchema),
    defaultValues: state.customer || {
      name: '',
      phone: '',
      email: '',
      notes: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: CustomerFormData) => {
    setCustomer(data);
    nextStep();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-display text-2xl text-cream">بياناتك</h2>
        <button onClick={prevStep} className="text-ash-light hover:text-gold text-sm transition-colors flex items-center gap-1">
          رجوع &rarr;
        </button>
      </div>
      <p className="text-ash-light text-sm mb-8">يرجى إدخال معلومات التواصل الخاصة بك</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-cream mb-2 flex items-center gap-2">
            <User size={16} className="text-gold" />
            الاسم الكامل <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="أحمد الراشد"
            className={cn(
              'w-full bg-ink-mid border rounded-lg px-4 py-3 text-cream focus:outline-none focus:ring-1 transition-colors',
              errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-ash/20 focus:border-gold focus:ring-gold/50'
            )}
            {...register('name')}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-cream mb-2 flex items-center gap-2">
            <Phone size={16} className="text-gold" />
            رقم الجوال <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="05xxxxxxxx"
            dir="ltr"
            className={cn(
              'w-full bg-ink-mid border rounded-lg px-4 py-3 text-cream focus:outline-none focus:ring-1 transition-colors text-left',
              errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-ash/20 focus:border-gold focus:ring-gold/50'
            )}
            {...register('phone')}
          />
          {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-cream mb-2 flex items-center gap-2">
            <Mail size={16} className="text-gold" />
            البريد الإلكتروني <span className="text-ash/50 text-xs font-normal">(اختياري)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="ahmed@example.com"
            dir="ltr"
            className={cn(
              'w-full bg-ink-mid border rounded-lg px-4 py-3 text-cream focus:outline-none focus:ring-1 transition-colors text-left',
              errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-ash/20 focus:border-gold focus:ring-gold/50'
            )}
            {...register('email')}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-cream mb-2 flex items-center gap-2">
            <FileText size={16} className="text-gold" />
            طلبات خاصة <span className="text-ash/50 text-xs font-normal">(اختياري)</span>
          </label>
          <textarea
            id="notes"
            rows={3}
            placeholder="أي تعليمات خاصة للحلاق..."
            className={cn(
              'w-full bg-ink-mid border rounded-lg px-4 py-3 text-cream focus:outline-none focus:ring-1 transition-colors resize-none',
              errors.notes ? 'border-red-500/50 focus:ring-red-500/50' : 'border-ash/20 focus:border-gold focus:ring-gold/50'
            )}
            {...register('notes')}
          />
          {errors.notes && <p className="mt-1 text-sm text-red-400">{errors.notes.message}</p>}
        </div>

        {/* Action Buttons */}
        <div className="pt-4 mt-8 border-t border-ash/10 flex justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="bg-gold text-ink font-semibold px-8 py-3 rounded-lg hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            مراجعة الحجز &larr;
          </button>
        </div>
      </form>
    </div>
  );
}
