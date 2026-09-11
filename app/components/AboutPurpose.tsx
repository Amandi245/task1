import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default function AboutPurpose() {
  return (
    <section
      className="relative h-[430px] min-[601px]:h-[35.1vw]"
      aria-label="Our mission and vision"
    >
      <div className="grid grid-cols-1 gap-8 bg-[linear-gradient(#f5f55b_0_48px,transparent_48px)] px-[22px] min-[601px]:grid-cols-2 min-[601px]:gap-[10.3vw] min-[601px]:bg-[linear-gradient(#f5f55b_0_7.6vw,transparent_7.6vw)] min-[601px]:px-[3.45vw]">
        <article>
          <h2
            className={`${editorial.className} text-[34px] leading-[48px] min-[601px]:text-[5.5vw] min-[601px]:leading-[7.6vw]`}
          >
            Mission
          </h2>
          <p className="pt-4 text-[13px] leading-[1.4] min-[601px]:pt-[1.9vw] min-[601px]:text-[1.87vw]">
            To craft innovative, meaningful, and impactful creative solutions
            that elevate brands and spark genuine connections.
          </p>
        </article>
        <article>
          <h2
            className={`${editorial.className} text-[34px] leading-[48px] min-[601px]:text-[5.5vw] min-[601px]:leading-[7.6vw]`}
          >
            Vision
          </h2>
          <p className="pt-4 text-[13px] leading-[1.4] min-[601px]:pt-[1.9vw] min-[601px]:text-[1.87vw]">
            A world where creativity shapes culture, drives innovation, and
            helps businesses make a positive impact.
          </p>
        </article>
      </div>
      <Image
        className="absolute bottom-[25px] left-[calc(50%-21px)] h-[42px] w-[42px] min-[601px]:left-[46.6%] min-[601px]:top-[22.9vw] min-[601px]:h-[6.8vw] min-[601px]:w-[6.8vw]"
        src="/images/star.svg"
        alt=""
        width={112}
        height={112}
      />
    </section>
  );
}
