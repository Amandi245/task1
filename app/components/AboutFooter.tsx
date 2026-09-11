import Link from "next/link";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
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

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,#fff_0%,#fafa9b_20%,#f5f55b_43%)] pt-[60px] min-[601px]:pt-[14vw]">
      <div className="flex justify-center">
        <Link
          href="/#contact"
          className="flex h-[54px] w-2/3 items-center justify-center gap-3 rounded-[5px] border border-[#d5d83c] bg-[linear-gradient(#f2f252,#dce00b)] text-[24px] shadow-[0_2.1vw_3.5vw_#64600b3b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 min-[601px]:h-[7.3vw] min-[601px]:w-[43.4vw] min-[601px]:text-[3.5vw]"
        >
          <span aria-hidden="true">✦</span> Lets Talk
        </Link>
      </div>
      <div className="flex justify-between gap-5 px-[22px] pb-[60px] pt-[95px] min-[601px]:min-h-[50.9vw] min-[601px]:px-[3.45vw] min-[601px]:pb-[10.7vw] min-[601px]:pt-[19.4vw]">
        <div>
          <Gauge className="mb-[15px] h-9 w-9 text-[#353914] min-[601px]:h-[5.5vw] min-[601px]:w-[5.5vw]" />
          <p className="max-w-[230px] text-xs text-[#393b24] min-[601px]:max-w-none min-[601px]:text-[1.87vw]">
            Elevate Agency helps brands rise above the<br/> noise with bold ideas and
            smart strategies.<br/> We craft campaigns that inspire, engage,and<br/> drive
            real results.
          </p>
        </div>
        <nav
          className="flex flex-col items-end gap-[6px] text-[19px] text-[#97973d] min-[601px]:gap-[.55vw] min-[601px]:text-[2.9vw]"
          aria-label="Footer navigation"
        >
          <Link href="/">home</Link>
          <Link href="/about">about</Link>
          <Link href="/services">services</Link>
          <Link href="/work">portfolio</Link>
          <Link href="/#contact">contact</Link>
        </nav>
      </div>
      <div className="flex items-end justify-between border-t border-[#626620] px-[22px] py-[18px] pb-6 min-[601px]:px-[3.45vw] min-[601px]:py-[1.7vw] min-[601px]:pb-[2.6vw]">
        <Link
          href="/"
          className={`${editorial.className} text-[17vw] leading-none min-[601px]:text-[14.7vw]`}
        >
          Elevate
        </Link>
        <div className="text-right text-[9px] leading-[1.8] text-[#484b28] min-[601px]:text-[1.45vw]">
          privacy-policy
          <br />
          terms &amp; conditions
        </div>
      </div>
    </footer>
  );
}
