import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

function Gauge({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="3.2" />
      <path d="M50 50 84 16" stroke="currentColor" strokeWidth="3.2" />
      <rect x="43" y="43" width="13" height="13" rx="1.8" fill="currentColor" />
    </svg>
  );
}

export default function WorkHero() {
  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* Soft Yellow Radial Glow Top Background */}
      <div
        className="pointer-events-none absolute -top-28 left-1/2 h-[450px] w-[850px] -translate-x-1/2 opacity-75 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at top, #f5f55b 0%, rgba(245, 245, 91, 0.35) 50%, transparent 70%)",
        }}
      />

      {/* Inline Navigation Bar */}
      <header className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline focus-visible:outline focus-visible:outline-2"
          aria-label="Elevate home"
        >
          <Gauge className="h-5 w-5 text-[#c1c532]" />
          <span
            className={`${editorial.className} text-2xl font-medium tracking-wide text-black`}
          >
            Elevate
          </span>
        </Link>

        <nav
          className="flex items-center gap-6 text-sm font-normal text-black md:gap-10"
          aria-label="Main navigation"
        >
          <Link href="/about" className="hover:opacity-60 transition-opacity">
            about
          </Link>
          <Link
            href="/services"
            className="hover:opacity-60 transition-opacity"
          >
            services
          </Link>
          <Link href="/work" className="hover:opacity-60 transition-opacity">
            work
          </Link>
          <Link
            href="/#contact"
            className="hover:opacity-60 transition-opacity"
          >
            contact
          </Link>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center pt-8 pb-10 text-center md:pt-14">
        {/* Gauge Icon */}
        <Gauge className="mb-4 h-9 w-9 text-[#c1c532]" />

        {/* Title */}
        <h1 className="flex flex-col items-center text-[#d5db5c]">
          <span className="text-5xl font-light leading-none md:text-7xl">
            our
          </span>
          <strong
            className={`${editorial.className} -mt-2 text-7xl font-normal leading-tight md:-mt-4 md:text-[10.5vw]`}
          >
            Work
          </strong>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-sm font-light tracking-wide text-[#333333] md:text-lg">
          Comprehensive case-studies, Exceptional Results
        </p>

        {/* Bottom Center Divider Line */}
        <div className="mt-14 h-20 w-[1px] bg-gray-200" />
      </div>
    </section>
  );
}
