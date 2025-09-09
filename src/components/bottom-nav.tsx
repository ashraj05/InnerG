"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles, MessageSquare, BookOpen, ClipboardCheck, Store } from "lucide-react";

const navItems = [
  { href: "/talk", label: "Talk", icon: MessageSquare },
  { href: "/do", label: "Do", icon: Sparkles },
  { href: "/learn", label: "Learn", icon: BookOpen },
  { href: "/test", label: "Test", icon: ClipboardCheck },
  { href: "/store", label: "Store", icon: Store },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg bg-card/95 backdrop-blur-sm border-t">
      <nav className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link href={item.href} key={item.label}>
              <div
                className={cn(
                  "flex flex-col items-center justify-center gap-1 w-20 h-full transition-colors rounded-md",
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon className="h-6 w-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
