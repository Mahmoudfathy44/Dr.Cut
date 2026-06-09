// ─── Branch ─────────────────────────────────────────────────────────────────

export interface BranchHours {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface Branch {
  id: string;
  slug: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: BranchHours[];
  image: string;
  coordinates: { lat: number; lng: number };
  featured?: boolean;
}

// ─── Service ─────────────────────────────────────────────────────────────────

export type ServiceCategory = 'haircut' | 'beard' | 'treatment' | 'package';

export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // minutes
  price: number; // SAR
  category: ServiceCategory;
  image: string;
  popular?: boolean;
  includes?: string[];
}

// ─── Booking ─────────────────────────────────────────────────────────────────

export interface TimeSlot {
  id: string;
  time: string; // "10:00 AM"
  available: boolean;
}

export interface CustomerInfo {
  name: string;
  phone: string;
  email?: string;
  notes?: string;
}

export type BookingStatus = 'pending' | 'confirmed' | 'cancelled' | 'completed';

export interface Booking {
  id?: string;
  branchId: string;
  serviceId: string;
  date: string; // ISO date string "YYYY-MM-DD"
  timeSlotId: string;
  timeSlot: string; // human-readable "10:00 AM"
  customer: CustomerInfo;
  status: BookingStatus;
  createdAt?: string;
  totalPrice?: number;
}

// ─── Booking Wizard State ─────────────────────────────────────────────────────

export type BookingStep = 1 | 2 | 3 | 4 | 5;

export interface BookingState {
  step: BookingStep;
  branchId: string | null;
  serviceId: string | null;
  date: string | null;
  timeSlotId: string | null;
  timeSlot: string | null;
  customer: CustomerInfo | null;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  rating: number; // 1–5
  review: string;
  date: string;
  avatar?: string;
  branch?: string;
}

// ─── API Responses ───────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}
