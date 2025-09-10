export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="InnerG Logo"
      className={className}
      aria-label="InnerG Logo"
    />
  );
}
