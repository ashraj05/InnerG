export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/Logo.svg"
      alt="InnerG Logo"
      className={className}
      aria-label="InnerG Logo"
    />
  );
}
