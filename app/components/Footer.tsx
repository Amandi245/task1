import Image from "next/image";
import Link from "next/link";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
});

const Footer = ({
  showVerticalLine = false,
}: {
  showVerticalLine?: boolean;
}) => {
  return (
    <footer className="relative z-10 bg-[#F5F360] text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch sm:flex-row">
        {/* Left Column */}
        <div
          className={`w-full border-b border-black/30 px-5 pt-10 pb-8 sm:w-[80%] sm:border-b-0 sm:px-10 sm:pt-16 sm:pb-12 ${
            showVerticalLine ? "sm:border-r sm:border-black/30" : ""
          }`}
        >
          <Image
            src="/images/footer-logo.svg"
            alt="Logo"
            width={52}
            height={52}
            className="mb-6"
          />

          <p
            className={`${dmSans.className} max-w-100 text-sm leading-6 sm:text-[18px] sm:leading-8`}
          >
            Elevate Agency helps brands rise above the noise with bold ideas and
            smart strategies. We craft campaigns that inspire, engage, and drive
            real results.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex w-full justify-start px-5 pt-10 pb-8 sm:ml-auto sm:w-[20%] sm:justify-end sm:px-10 sm:pt-16 sm:pb-12">
          <div className="flex w-full flex-col items-start gap-1 text-left sm:items-end sm:gap-3 sm:text-right">
            <Link
              href="/"
              className={`${dmSans.className} text-2xl text-[#7F7E2C] transition-colors hover:text-black sm:text-[36px]`}
            >
              home
            </Link>

            <Link
              href="/about"
              className={`${dmSans.className} text-2xl text-[#7F7E2C] transition-colors hover:text-black sm:text-[36px]`}
            >
              about
            </Link>

            <Link
              href="/services"
              className={`${dmSans.className} text-2xl text-[#7F7E2C] transition-colors hover:text-black sm:text-[36px]`}
            >
              services
            </Link>

            <Link
              href="/portfolio"
              className={`${dmSans.className} text-2xl text-[#7F7E2C] transition-colors hover:text-black sm:text-[36px]`}
            >
              portfolio
            </Link>

            <Link
              href="/contact"
              className={`${dmSans.className} text-2xl text-[#7F7E2C] transition-colors hover:text-black sm:text-[36px]`}
            >
              contact
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 sm:flex-row sm:items-end sm:px-10 sm:py-8">
          <h2
            className={`${cormorant.className} text-[88px] leading-[0.85] sm:text-[256px]`}
          >
            Elevate
          </h2>

          <div
            className={`${dmSans.className} self-end text-right text-[14px] leading-5 pb-4`}
          >
            <button
              type="button"
              className="block w-full text-right transition-colors hover:text-gray-800"
            >
              Privacy-policy
            </button>
            <button
              type="button"
              className="block w-full text-right transition-colors hover:text-black"
            >
              terms & conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
