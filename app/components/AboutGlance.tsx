import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  style: ["italic"],
});

export default function AboutGlance() {
  return (
    <section
      className="relative h-[420px] pt-[38px] text-center min-[601px]:h-[78.1vw] min-[601px]:pt-[5.7vw]"
      aria-labelledby="glance-title"
    >
      <div className="pointer-events-none absolute left-1/2 top-[2%] h-[81%] w-[56%] -translate-x-1/2 bg-[radial-gradient(ellipse_closest-side,#f5f55b_0%,#f5f55b_40%,rgb(245_245_91_/_85%)_57%,rgb(245_245_91_/_35%)_76%,transparent_100%)]" />
      <h2
        id="glance-title"
        className="relative text-[27px] min-[601px]:text-[5.55vw]"
      >
        a quick glance at <em className={editorial.className}>Elevate</em>
      </h2>
      <div className="relative mx-auto mt-[38px] h-[48vw] w-[82vw] min-[601px]:mt-[7.3vw] min-[601px]:h-[35.2vw] min-[601px]:w-[64.6vw]">
        <Image
          src="/images/office.png"
          alt=""
          fill
          className="rotate-[-4deg] object-cover shadow-[0_2vw_2.7vw_#0003]"
        />
        <Image
          src="/images/team-group.png"
          alt="The Elevate team gathered together outdoors"
          fill
          className="rotate-[3.4deg] object-cover shadow-[0_2vw_2.7vw_#0003]"
        />
      </div>
      <Image
        className="absolute bottom-[29px] left-[calc(50%-19px)] h-[38px] w-[38px] min-[601px]:bottom-[7.8vw] min-[601px]:left-[46.85%] min-[601px]:h-[6.3vw] min-[601px]:w-[6.3vw]"
        src="/images/flower.svg"
        alt=""
        width={100}
        height={100}
      />
    </section>
  );
}
