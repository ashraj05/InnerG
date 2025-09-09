export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 208 53"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="InnerG Logo"
    >
      <title>InnerG</title>
      <text
        x="0"
        y="42"
        fontFamily="sans-serif"
        fontSize="48"
        fontWeight="bold"
        fill="currentColor"
      >
        Inner
      </text>
      <g transform="translate(140, 0)">
        <path
          d="M39.6,26.5c0,14.3-11.7,26-26,26S-2.5,40.8-2.5,26.5S9.2,0.5,23.5,0.5c5.3,0,10.2,1.7,14.3,4.6 l-6.9,8.4c-2.4-1.8-5.5-2.8-8.9-2.8c-7.2,0-13,5.8-13,13s5.8,13,13,13s13-5.8,13-13h-13v-11h24.5 C39.3,23,39.6,24.7,39.6,26.5z M25.8,40.8l-8.4-12.2h15.9c-1.3,7.2-7.5,12.2-15.9,12.2z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}
