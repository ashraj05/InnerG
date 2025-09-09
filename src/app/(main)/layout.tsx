import BottomNav from '@/components/bottom-nav';
import { Button } from '@/components/ui/button';
import { Home, Users, Wallet, Menu } from 'lucide-react';
import Link from 'next/link';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh w-full justify-center bg-secondary/50">
      <div className="relative flex h-full w-full max-w-lg flex-col border-x bg-background shadow-md">
        <header className="flex h-16 w-full items-center justify-between border-b bg-card px-4 shrink-0">
          <div className="flex items-center gap-2">
            <Link href="/do">
              <Button variant="ghost" size="icon">
                <Home className="h-6 w-6" />
                <span className="sr-only">Dashboard</span>
              </Button>
            </Link>
            <Link href="/community">
               <Button variant="ghost" size="icon">
                <Users className="h-6 w-6" />
                <span className="sr-only">Community</span>
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full">
              <Wallet className="mr-2 h-4 w-4" />
              $0.00
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-24">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
