import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="relative z-30 flex items-center justify-between px-12 py-6">
      <Image
        src="/images/logo2.png"
        alt="Logo"
        width={180}
        height={60}
        priority
        className="h-16 w-auto"
      />

      <ul className="flex gap-10 text-white text-sm font-medium">
        <li>
          <Link href="#about" className="hover:text-yellow-300 duration-300">
            About
          </Link>
        </li>

        <li>
          <Link href="#services" className="hover:text-yellow-300 duration-300">
            Services
          </Link>
        </li>

        <li>
          <Link href="#work" className="hover:text-yellow-300 duration-300">
            Work
          </Link>
        </li>

        <li>
          <Link href="#contact" className="hover:text-yellow-300 duration-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
