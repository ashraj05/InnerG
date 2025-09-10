import BottomNav from '@/components/bottom-nav';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Home, Users, Wallet, Menu, User, Gift, MessageSquareWarning, Settings, LogOut, Receipt, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh w-full justify-center bg-secondary/50">
      <div className="relative flex h-full w-full max-w-lg flex-col border-x bg-background shadow-md">
        <header className="relative grid h-16 w-full grid-cols-3 items-center border-b bg-card px-4 shrink-0">
          <div className="flex items-center gap-2 justify-start">
            <Link href="/dashboard">
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
          
          <div className="flex justify-center">
            <Link href="/dashboard">
              <Logo className="h-8 w-auto text-foreground" />
              <span className="sr-only">InnerG Home</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <Link href="/wallet">
              <Button variant="outline" className="rounded-full">
                <Wallet className="mr-2 h-4 w-4" />
                $0.00
              </Button>
            </Link>
            <Button variant="ghost" size="icon">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Gift className="mr-2 h-4 w-4" />
                  <span>Refer & Earn</span>
                </DropdownMenuItem>
                 <DropdownMenuItem>
                  <Receipt className="mr-2 h-4 w-4" />
                  <span>Receipts</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquareWarning className="mr-2 h-4 w-4" />
                  <span>Report a Problem</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-24">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
