import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export default function RecoveryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-fg p-4">
      {/* Centered logo */}
      {/* Modern card layout for forms */}
      <div className="w-full max-w-md flex flex-col items-center justify-center">
        <div className="card">
          <Link href="/" className="block mb-4">
            <Image src="/logo.svg" alt="Logo" width={150} height={60} className="block dark:hidden" />
            <Image src="/logo-dark.svg" alt="Logo" width={150} height={60} className="hidden dark:block" />
          </Link>
          {children}
        </div>
      </div>
    </div>
  );
}
