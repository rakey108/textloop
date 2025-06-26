import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),   
});

export type User = z.infer<typeof userSchema>;
export type RegisterRequest = z.infer<typeof userSchema>;
export type LoginRequest = Pick<User, 'email' | 'password'>;