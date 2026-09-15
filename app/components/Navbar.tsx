"use client";

import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

type NavbarProps = {
  variant?: "light" | "dark";
};

export default function Navbar({ variant = "dark" }: NavbarProps) {
  const textColor = variant === "light" ? "text-white" : "text-gray-900";

  return (
    <header className={`absolute top-0 left-0 z-50 w-full ${textColor}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/hero-gauge.svg"
            alt="Elevate Logo"
            width={24}
            height={24}
          />

          <span className={`${cormorant.className} text-2xl`}>Elevate</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
          <Link href="/about">about</Link>

          <Link href="/services">services</Link>

          <Link href="/work">work</Link>

          <Link href="/#contact">contact</Link>
        </nav>

        {/* Mobile Menu */}
        <button
          type="button"
          className="flex sm:hidden flex-col gap-1"
          aria-label="Open navigation menu"
        >
          <span className="h-px w-4 bg-current" />
          <span className="h-px w-4 bg-current" />
        </button>
      </div>
    </header>
  );
}
