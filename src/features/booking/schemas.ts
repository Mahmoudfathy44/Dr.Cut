import { z } from 'zod';

export const customerSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(60, 'Name is too long'),
  phone: z
    .string()
    .regex(/^(\+966|0)(5\d{8})$/, 'Enter a valid Saudi phone number (e.g. 05xxxxxxxx)'),
  email: z
    .string()
    .email('Enter a valid email address')
    .optional()
    .or(z.literal('')),
  notes: z.string().max(200, 'Notes must be under 200 characters').optional(),
});

export type CustomerFormData = z.infer<typeof customerSchema>;
