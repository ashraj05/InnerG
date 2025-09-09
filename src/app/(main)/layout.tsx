import BottomNav from '@/components/bottom-nav';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh w-full justify-center bg-secondary/50">
      <div className="relative flex h-full w-full max-w-lg flex-col border-x bg-background shadow-md">
        <main className="flex-1 overflow-y-auto pb-24">{children}</main>
        <BottomNav />
      </div>
    </div>
  );
}
