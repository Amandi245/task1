import Image from "next/image";
import { Bodoni_Moda } from "next/font/google";

const editorial = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const crew = [
  ["Ava Carter", "Creative Director", "team-maya"],
  ["Liam Rodriguez", "Brand Strategist", "team-liam"],
  ["Ethan Walker", "Motion Graphics Artist", "team-oliver"],
  ["Noah Thompson", "Web Developer", "team-ethan"],
  ["Oliver Grant", "Digital Marketing Specialist", "team-noah"],
  ["Maya Chen", "UX/UI Designer", "team-lia"],
];

export default function AboutCrew() {
  return (
    <section
      className="pb-[45px] pt-3 min-[601px]:pb-[7.4vw] min-[601px]:pt-[1vw]"
      aria-labelledby="crew-title"
    >
      <h2
        id="crew-title"
        className="text-center text-[36px] min-[601px]:text-[5.55vw]"
      >
        our <em className={editorial.className}>Crew</em>
      </h2>
      <p className="text-center text-sm text-[#aaa] min-[601px]:text-[1.87vw]">
        The minds behind the magic.
      </p>
      <div className="mx-auto mt-[38px] grid w-[86%] grid-cols-2 gap-x-[18px] gap-y-6 min-[601px]:mt-[7vw] min-[601px]:w-[74.7%] min-[601px]:grid-cols-3 min-[601px]:gap-x-[3.85vw]">
        {crew.map(([name, role, image]) => (
          <article key={name}>
            <div className="relative aspect-[387/490] overflow-hidden rounded-[3px] bg-[#f5f55b]">
              <Image
                src={`/images/${image}.png`}
                alt={name}
                fill
                className="!bottom-0 !top-auto !h-[94%] object-contain object-bottom"
              />
            </div>
            <h3
              className={`${editorial.className} mt-2 text-[17px] font-bold min-[601px]:mt-[1.35vw] min-[601px]:text-[1.9vw]`}
            >
              {name}
            </h3>
            <p className="text-[11px] text-[#b9b9b9] min-[601px]:text-[1.4vw]">
              {role}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
