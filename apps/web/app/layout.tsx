import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })
// const inter_tight = Inter_Tight({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Thevocals",
  description: "Thevocal is a platform for creating and sharing text to video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
