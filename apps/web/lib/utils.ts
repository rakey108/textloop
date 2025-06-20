import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { headers } from 'next/headers';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// const deviceIsMobile = headers().get('x-device-mobile') === 'true';
