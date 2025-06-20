import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2),   
});

export type User = z.infer<typeof userSchema>;
export type RegisterRequest = z.infer<typeof userSchema>;
export type LoginRequest = Pick<User, 'email' | 'password'>;
