import { DM_Sans, Cormorant_Garamond } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500"],
});

const ContactSection = () => {
  return (
    <>
     
      <section className="relative overflow-hidden bg-white py-24">
     
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[220px]
            h-[700px]
            w-[700px]
            -translate-x-1/2
            rounded-full
            bg-[#F5F360]
            opacity-100
            blur-[35px]
          "
        />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-10">
          
          <h2
            className={`${cormorant.className} text-center text-[120px] leading-none tracking-[-0.02em] text-black md:text-[180px]`}
          >
            Say Hello
          </h2>

       
          <div className="mt-6 text-center">
            <p className={`${dmSans.className} text-[18px] text-black`}>
              Got an idea in mind?
            </p>

            <p className={`${dmSans.className} text-[18px] text-black`}>
              Let's turn it into something amazing together.
            </p>
          </div>

          <div className="mt-10 h-20 w-px bg-gray-500" />

         
          <div
            className={`${dmSans.className} mt-8 grid w-full grid-cols-1 gap-8 text-center text-[16px] text-[#666666] md:grid-cols-3`}
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

      
      <section className="relative overflow-hidden bg-black pb-24">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <form
            className="
              relative
              z-10
              -mt-10
              rounded-[24px]
              border
              border-[#2A2A2A]
              bg-[#151515]
              p-6
              md:p-10
            "
          >
           
            <div className="flex flex-col gap-6 md:flex-row">
              
              <div className="flex-1">
                <label
                  className={`${dmSans.className} mb-3 block text-sm font-medium text-[#F5F360]`}
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Pietro Schirano"
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
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
                  className={`${dmSans.className} h-14 w-full rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
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
                className={`${dmSans.className} w-full resize-none rounded-md border border-[#2C2C2C] bg-[#1E1E1E] px-4 py-4 text-white outline-none placeholder:text-[#777] focus:border-[#F5F360]`}
              />
            </div>
          </form>

         
          <div className="relative z-20 mt-8 flex justify-center">
            <button
              type="button"
              className={`${dmSans.className} h-14 w-[180px] rounded-md bg-[#F5F360] text-[18px] font-medium text-black transition-all duration-300 hover:scale-105`}
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
