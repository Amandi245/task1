import Image from "next/image";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
});

const ContactSection = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-24 pb-24">
        <div className="absolute left-1/2 top-[250px] -translate-x-1/2 pointer-events-none -z-10" />
        <div className="relative z-10 mx-auto max-w-7xl px-10 flex flex-col items-center">
          <Image
            src="/images/star.svg"
            alt="Star"
            width={96}
            height={96}
            className="mb-6"
          />

          <h2
            className={`${cormorant.className} text-[180px] leading-none tracking-[-0.02em] text-black`}
          >
            Say Hello
          </h2>

          <div className="absolute left-1/2 top-[250px] -translate-x-1/2 w-[950px] h-[950px] rounded-full bg-[#e9e611] blur-[120px] opacity-60 -z-10 pointer-events-none" />

          <div className="mt-3 text-center">
            <p className={`${dmSans.className} text-[18px] text-black`}>
              Got an idea in mind?
            </p>

            <p className={`${dmSans.className} text-[18px] text-black`}>
              Let's turn it into something amazing together.
            </p>
          </div>

          <div className="mt-10 h-20 w-px bg-gray-500" />

          <div
            className={`${dmSans.className} mt-8 grid w-full grid-cols-3 text-center text-[16px] text-[#666666]`}
          >
            <p>elevate.info@gmail.com</p>

            <p>
              123 Creative Street,
              <br />
              Innovation City, CA 90210,
              <br />
              United States
            </p>

            <p>+123 45 678 91022</p>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-t from-black to-white pb-0 pt-0 -mt-20">
        <div className="relative mx-auto w-full max-w-6xl px-10 pt-24">
          <div className="pointer-events-none absolute left-1/2 top-0 z-0 h-[520px] w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F360] opacity-50 blur-[140px]" />

          <form className="relative z-20 rounded-[24px] border border-[#2A2A2A] bg-[#151515] p-10">
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Pietro Schirano"
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white placeholder:text-[#777] outline-none focus:border-[#F5F360]`}
                />
              </div>

              <div className="flex-1">
                <label
                  className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
                >
                  Email
                </label>

                <input
                  type="email"
                  placeholder="pietro.schirano@gmail.com"
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white placeholder:text-[#777] outline-none focus:border-[#F5F360]`}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
              >
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Message Here"
                className={`${dmSans.className} w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 py-4 text-white placeholder:text-[#777] outline-none resize-none focus:border-[#F5F360]`}
              />
            </div>

            <div className="mt-10 flex justify-center">
              <button
                type="submit"
                className={`${dmSans.className} h-14 w-[140px] rounded-md bg-[#F5F360] text-[18px] font-medium text-black transition-all duration-300 hover:scale-105 hover:bg-[#FAF66B]`}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
