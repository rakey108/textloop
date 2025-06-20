import Image from 'next/image';
import { ReactNode } from 'react';
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Link from 'next/link';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-primary relative">
      {/* Left: Form Section */}
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 bg-transparent p-0 rounded-xl">
          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-2">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={150} height={60} className="block dark:hidden" />
              <Image src="/logo-dark.svg" alt="Logo" width={150} height={60} className="hidden dark:block" />
            </Link>
          </div>
          {children}
        </div>
      </div>
      {/* Vertical Divider (hidden on mobile) */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[90vh] w-px bg-charcoal z-20"></div>
      {/* Right: Details Section (hidden on mobile) */}
      <div className="hidden md:flex flex-col items-center justify-center relative overflow-hidden bg-transparent">
        {/* Background effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-purple-800/40 via-blue-700/30 to-transparent blur-3xl opacity-60"></div>
        </div>
        <div className="relative z-10 px-8 text-center">
          <h1 className="text-4xl h-20 font-bold text-white mb-4">
            <TypingAnimation>
              Welcome, Vocals Creator!
            </TypingAnimation>
          </h1>
          <p className="text-2xl text-gray-300 max-w-md mx-auto">
            Turns your ideas into appealing videos, boosting your audience on YouTube, Instagram, and TikTok
          </p>
        </div>
      </div>
    </div>
  );
}
