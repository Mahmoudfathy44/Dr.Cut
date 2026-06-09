import type { Branch, Service, Booking, TimeSlot } from '@/types';
import { branches, services, generateTimeSlots } from '@/lib/data';
import { generateBookingId } from '@/lib/utils';

// ─── Branch Service ───────────────────────────────────────────────────────────

export const branchService = {
  getAll: async (): Promise<Branch[]> => {
    // Simulate network latency
    await new Promise(r => setTimeout(r, 200));
    return branches;
  },

  getBySlug: async (slug: string): Promise<Branch | null> => {
    await new Promise(r => setTimeout(r, 150));
    return branches.find(b => b.slug === slug) ?? null;
  },

  getById: async (id: string): Promise<Branch | null> => {
    await new Promise(r => setTimeout(r, 100));
    return branches.find(b => b.id === id) ?? null;
  },
};

// ─── Service Service ──────────────────────────────────────────────────────────

export const serviceService = {
  getAll: async (): Promise<Service[]> => {
    await new Promise(r => setTimeout(r, 200));
    return services;
  },

  getById: async (id: string): Promise<Service | null> => {
    await new Promise(r => setTimeout(r, 100));
    return services.find(s => s.id === id) ?? null;
  },

  getPopular: async (): Promise<Service[]> => {
    await new Promise(r => setTimeout(r, 150));
    return services.filter(s => s.popular);
  },
};

// ─── Availability Service ─────────────────────────────────────────────────────

export const availabilityService = {
  getTimeSlots: async (branchId: string, date: string): Promise<TimeSlot[]> => {
    await new Promise(r => setTimeout(r, 300));
    // In production: call API with branchId + date
    return generateTimeSlots(`${branchId}-${date}`);
  },
};

// ─── Booking Service ──────────────────────────────────────────────────────────

export const bookingService = {
  create: async (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>): Promise<Booking> => {
    await new Promise(r => setTimeout(r, 800)); // Simulate API call

    const newBooking: Booking = {
      ...booking,
      id: generateBookingId(),
      status: 'confirmed',
      createdAt: new Date().toISOString(),
    };

    // In production: POST /api/bookings
    return newBooking;
  },
};
