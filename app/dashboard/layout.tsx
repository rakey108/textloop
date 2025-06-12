"use client";
import { useState } from "react";
import { Menu, User, Settings, Sun, Moon, LogOut, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";
import Button from "../components/ui/Button";
import { cn } from "@/lib/utils";

const dummyMenu = [
  { icon: <Menu />, label: "Dashboard" },
  { icon: <User />, label: "Profile" },
  { icon: <Settings />, label: "Settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  return (
    <div className="flex min-h-screen text-black bg-light dark:bg-midnight-blue dark:text-brand-white">
      {/* Sidebar */}
      <aside className={cn('@container flex relative flex-col justify-between bg-surface shadow-lg transition-all duration-300', collapsed ? 'w-16' : 'w-64', 'min-h-screen p-2 @sm:p-1')}>
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between mb-8 px-2 @sm:px-1">
            <Link href="/" className={cn(collapsed && 'hidden', 'transition-all duration-300')}>
              <Image src="/logo.svg" alt="Logo" width={120} height="40" className="block dark:hidden" />
              <Image src="/logo-dark.svg" alt="Logo" width={120} height="40" className="hidden dark:block" />
            </Link>
            <Button
              variant="icon-button"
              onClick={() => setCollapsed(!collapsed)}
              aria-label="Collapse menu"
              className={cn('top-6 right-0 z-10 hover:bg-transparent', collapsed ? 'p-1' : 'p-2 absolute')}
            >
              {collapsed ? <ChevronRight /> : <ChevronLeft />}
            </Button>
          </div>
          {/* Menu Items */}
          <nav className="flex flex-col gap-2">
            {dummyMenu.map((item, idx) => (
              <MenuItem key={idx} icon={item.icon} label={item.label} collapsed={collapsed} />
            ))}
          </nav>
        </div>
        {/* User Avatar & Popover */}
        <div className="relative flex flex-col items-center mb-2 border-t-1 bo border-black pt-6">
          {/* <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-8 h-8 text-tiny" size="lg" /> */}
          {!collapsed && <span className="font-semibold">Jane Doe</span>}
          {/* Popover */}
          {popoverOpen && (
            <div className="absolute left-0 bottom-14 z-20 w-48 bg-surface border border-border rounded-xl shadow-xl p-4 flex flex-col gap-2 animate-fade-in">
              <button className="flex items-center gap-2 p-2 rounded hover:bg-accent/10"><User size={18} /> Profile</button>
              <button className="flex items-center gap-2 p-2 rounded hover:bg-accent/10"><Settings size={18} /> Settings</button>
              <div className="border-t border-border my-2" />
              <button
                className="flex items-center gap-2 p-2 rounded hover:bg-accent/10"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />} Switch to {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
              <button className="flex items-center gap-2 p-2 rounded hover:bg-accent/10 text-red-500"><LogOut size={18} /> Logout</button>
            </div>
          )}
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
