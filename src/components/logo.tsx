export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="InnerG Logo"
      className={className}
      aria-label="InnerG Logo"
    />
  );
}
