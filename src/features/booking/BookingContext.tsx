'use client';

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  type ReactNode,
} from 'react';
import type { BookingState, BookingStep, CustomerInfo } from '@/types';

// ─── Initial State ────────────────────────────────────────────────────────────

const initialState: BookingState = {
  step: 1,
  branchId: null,
  serviceId: null,
  date: null,
  timeSlotId: null,
  timeSlot: null,
  customer: null,
};

// ─── Actions ──────────────────────────────────────────────────────────────────

type Action =
  | { type: 'SET_BRANCH'; branchId: string }
  | { type: 'SET_SERVICE'; serviceId: string }
  | { type: 'SET_DATETIME'; date: string; timeSlotId: string; timeSlot: string }
  | { type: 'SET_CUSTOMER'; customer: CustomerInfo }
  | { type: 'GO_TO_STEP'; step: BookingStep }
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'RESET' };

// ─── Reducer ──────────────────────────────────────────────────────────────────

function bookingReducer(state: BookingState, action: Action): BookingState {
  switch (action.type) {
    case 'SET_BRANCH':
      return {
        ...state,
        branchId: action.branchId,
        // Reset downstream selections when branch changes
        serviceId: null,
        date: null,
        timeSlotId: null,
        timeSlot: null,
      };
    case 'SET_SERVICE':
      return { ...state, serviceId: action.serviceId };
    case 'SET_DATETIME':
      return {
        ...state,
        date: action.date,
        timeSlotId: action.timeSlotId,
        timeSlot: action.timeSlot,
      };
    case 'SET_CUSTOMER':
      return { ...state, customer: action.customer };
    case 'GO_TO_STEP':
      return { ...state, step: action.step };
    case 'NEXT_STEP':
      return { ...state, step: Math.min(state.step + 1, 5) as BookingStep };
    case 'PREV_STEP':
      return { ...state, step: Math.max(state.step - 1, 1) as BookingStep };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────

interface BookingContextValue {
  state: BookingState;
  setBranch: (branchId: string) => void;
  setService: (serviceId: string) => void;
  setDateTime: (date: string, timeSlotId: string, timeSlot: string) => void;
  setCustomer: (customer: CustomerInfo) => void;
  goToStep: (step: BookingStep) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
}

const BookingContext = createContext<BookingContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────

export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const setBranch = useCallback(
    (branchId: string) => dispatch({ type: 'SET_BRANCH', branchId }),
    []
  );
  const setService = useCallback(
    (serviceId: string) => dispatch({ type: 'SET_SERVICE', serviceId }),
    []
  );
  const setDateTime = useCallback(
    (date: string, timeSlotId: string, timeSlot: string) =>
      dispatch({ type: 'SET_DATETIME', date, timeSlotId, timeSlot }),
    []
  );
  const setCustomer = useCallback(
    (customer: CustomerInfo) => dispatch({ type: 'SET_CUSTOMER', customer }),
    []
  );
  const goToStep = useCallback(
    (step: BookingStep) => dispatch({ type: 'GO_TO_STEP', step }),
    []
  );
  const nextStep = useCallback(() => dispatch({ type: 'NEXT_STEP' }), []);
  const prevStep = useCallback(() => dispatch({ type: 'PREV_STEP' }), []);
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

  return (
    <BookingContext.Provider
      value={{
        state,
        setBranch,
        setService,
        setDateTime,
        setCustomer,
        goToStep,
        nextStep,
        prevStep,
        reset,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used inside BookingProvider');
  return ctx;
}
