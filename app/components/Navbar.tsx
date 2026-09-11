"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const links = [
  { href: "/about", label: "about" },
  { href: "/services", label: "services" },
  { href: "/work", label: "work" },
  { href: "/#contact", label: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-30 flex items-center justify-between px-6 py-6 md:px-12">
      <Link
        href="/"
        aria-label="Elevate home"
        className="flex items-center gap-3"
      >
        {isAbout ? (
          <>
            <Image
              src="/images/hero-gauge.svg"
              alt=""
              width={36}
              height={36}
              className="h-8 w-8 md:h-9 md:w-9"
              priority
            />
            <span
              className={`${cormorant.className} text-[28px] font-medium leading-none text-white md:text-[32px]`}
            >
              Elevate
            </span>
          </>
        ) : (
          <Image
            src="/images/logo2.png"
            alt="Elevate"
            width={180}
            height={60}
            priority
            className="h-12 w-auto md:h-16"
          />
        )}
      </Link>

      <ul
        className={`${dmSans.className} hidden gap-5 text-[12px] font-normal lowercase text-white md:flex md:gap-10 md:text-[13px]`}
      >
        {links.map((link) => {
          const isActive = link.href === "/about" && pathname === "/about";

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`duration-300 hover:text-[#F5F360] ${
                  isActive ? "text-[#F5F360]" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="flex h-8 w-8 flex-col items-center justify-center gap-1 md:hidden"
      >
        <span className="h-px w-4 bg-current" />
        <span className="h-px w-4 bg-current" />
      </button>
      {menuOpen && (
        <ul
          className={`${dmSans.className} absolute right-6 top-16 flex flex-col gap-4 bg-black/90 px-5 py-4 text-sm lowercase text-white md:hidden`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
