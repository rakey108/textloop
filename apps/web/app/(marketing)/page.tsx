import Link from "next/link";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    name: "YouTube Shorts",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#FF0000" />
        <path d="M24 18L15 23.1962V12.8038L24 18Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Instagram Reels",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="url(#ig)" />
        <defs>
          <linearGradient id="ig" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F58529" />
            <stop offset="0.5" stopColor="#DD2A7B" />
            <stop offset="1" stopColor="#515BD4" />
          </linearGradient>
        </defs>
        <rect x="10" y="10" width="16" height="16" rx="4" fill="white" />
        <circle cx="18" cy="18" r="5" fill="#DD2A7B" />
      </svg>
    ),
  },
  {
    name: "TikTok Posts",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="36" height="36" rx="8" fill="#010101" />
        <path d="M23 13.5V21C23 23.2091 21.2091 25 19 25C16.7909 25 15 23.2091 15 21C15 18.7909 16.7909 17 19 17V19.5" stroke="#25F4EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23 13.5C24.3807 13.5 25.5 12.3807 25.5 11" stroke="#FE2C55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const videoPreviews = [1, 2, 3, 4, 5];

const features = [
  {
    title: "Visualize & produce video",
    desc: "Develop your ideas clearly and bring them to life by producing high-quality video content.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M4 17V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z" stroke="#07bc0c" strokeWidth="2" /><path d="m20 7-4 4m0 2 4 4" stroke="#07bc0c" strokeWidth="2" /></svg>
    ),
  },
  {
    title: "Share with your target audience",
    desc: "Distribute your content strategically to connect with and engage your target audience effectively.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 19V5m0 0-7 7m7-7 7 7" stroke="#07bc0c" strokeWidth="2" /></svg>
    ),
  },
  {
    title: "Expand your reach & impact",
    desc: "Broaden your audience base and enhance your impact by reaching more people across multiple platforms.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#07bc0c" strokeWidth="2" /><path d="M8 12h8" stroke="#07bc0c" strokeWidth="2" /><path d="M12 8v8" stroke="#07bc0c" strokeWidth="2" /></svg>
    ),
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b112b] via-[#18181b] to-[#000723] text-white">
      {/* Navigation */}
      <nav className="w-full px-4 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <span className="font-black text-2xl tracking-tight flex items-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mr-2"><rect width="32" height="32" rx="8" fill="#07bc0c" /><rect x="8" y="8" width="16" height="16" rx="4" fill="#0b112b" /></svg>
            Text Loop
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="hover:text-[#07bc0c] transition">Features</Link>
          <Link href="#pricing" className="hover:text-[#07bc0c] transition">Pricing</Link>
          <Button asChild variant="outline" className="border-[#07bc0c] text-[#07bc0c] bg-transparent hover:bg-[#07bc0c]/10 mr-2">
            <Link href="/signin">Login</Link>
          </Button>
          <Button asChild className="bg-[#07bc0c] text-black hover:bg-[#07bc0c]/90">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 pb-10 text-center">
        <p className="text-lg text-[#b0b8d1] mb-2">Text to Video</p>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">Achieve More</h1>
        <Button className="bg-[#07bc0c] text-black text-lg px-8 py-3 mt-4">Get Started Today</Button>
        <p className="text-[#b0b8d1] mt-2">Cancel Anytime</p>
      </section>

      {/* Sub Hero Section */}
      <section className="text-center pb-10">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-2">Instantly Convert Your Thoughts into Captivating Videos <span className="text-[#07bc0c]">*</span></h2>
        <p className="text-[#b0b8d1] mb-6">Grow your social media presence effortlessly across multiple platforms</p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {platforms.map((p) => (
            <div key={p.name} className="flex flex-col items-center">
              {p.icon}
              <span className="mt-2 text-sm text-[#b0b8d1]">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Video Previews */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h3 className="text-2xl font-bold mb-6 text-center">Transform your text into engaging videos</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {videoPreviews.map((n) => (
            <div key={n} className="aspect-[9/16] bg-[#18181b] rounded-xl border border-[#23263a] flex items-center justify-center text-[#b0b8d1] text-sm font-medium shadow-lg">
              Video {n}
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gradient-to-b from-transparent to-[#18181b]">
        <h2 className="text-3xl font-bold text-center mb-10">Discover Our Product</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          {features.map((f) => (
            <div key={f.title} className="bg-[#10162a] rounded-2xl p-8 shadow-lg border border-[#23263a] flex flex-col items-center text-center">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-[#b0b8d1]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section id="pricing" className="py-16">
        <div className="max-w-md mx-auto bg-gradient-to-br from-[#2d1a4a] to-[#18181b] rounded-2xl shadow-2xl p-10 border border-[#7c3aed]">
          <h2 className="text-2xl font-bold text-center mb-8 text-white">Basic</h2>
          <div className="text-center mb-8">
            <span className="text-5xl font-extrabold text-[#c084fc]">$3.99</span>
            <span className="text-[#b0b8d1]">/month</span>
          </div>
          <ul className="space-y-4 mb-8 text-white">
            <li className="flex items-center"><span className="text-[#07bc0c] mr-2">✔</span>6k credits</li>
            <li className="flex items-center"><span className="text-[#07bc0c] mr-2">✔</span>Diversified AI voices</li>
            <li className="flex items-center"><span className="text-[#07bc0c] mr-2">✔</span>Access to ready-made templates</li>
            <li className="flex items-center"><span className="text-[#07bc0c] mr-2">✔</span>Unlimited custom templates</li>
          </ul>
          <Button className="w-full bg-[#c084fc] text-black hover:bg-[#a78bfa]">Get Started</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b112b] py-12 mt-12 border-t border-[#23263a]">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#07bc0c" /><rect x="8" y="8" width="16" height="16" rx="4" fill="#0b112b" /></svg>
            <span className="font-black text-xl tracking-tight">The Vocals</span>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Links</h4>
            <ul className="space-y-2 text-[#b0b8d1]">
              <li><Link href="#" className="hover:text-white">Login</Link></li>
              <li><Link href="#" className="hover:text-white">AI Voices</Link></li>
              <li><Link href="#" className="hover:text-white">Terms & conditions</Link></li>
              <li><Link href="#" className="hover:text-white">Privacy policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact us</h4>
            <p className="text-[#b0b8d1]">support@thevocals.co</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#23263a] text-center text-[#b0b8d1]">
          <p>All rights reserved. Copyright © 2025 - Thevocals.co</p>
        </div>
      </footer>
    </div>
  );
}
