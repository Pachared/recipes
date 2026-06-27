export function Logo() {
  return (
    <svg className="logo-mark" viewBox="0 0 64 64" role="img" aria-label="Thai Recipe logo">
      <defs>
        <linearGradient id="logoGradient" x1="8" x2="58" y1="6" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EF4A4A" />
          <stop offset="1" stopColor="#C91522" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" />
      <path d="M18 21v10c0 4 2.7 7.2 6.2 8.2V49" />
      <path d="M12 21v8c0 4.9 3.2 9 7.5 10.2" />
      <path d="M26 21v8c0 4.9-3.2 9-7.5 10.2" />
      <path d="M43 17v32" />
      <path d="M43 17c5.4 3.5 8.4 8.7 8.4 14.8 0 5.1-2.5 9.1-8.4 11.6" />
      <path d="M35 22c0-4 3-7 8-7" />
    </svg>
  )
}
