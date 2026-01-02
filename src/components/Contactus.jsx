import { LearnMoreButton } from "./Items";
import Stickman from "../assets/Stickman.png";
export default function Contactus() {
  return (
    <section className="mt-20 w-full  flex-col ">
      <div className="h-[400px]   px-[300px] py-[80px]  flex  flex-col items-center justify-center gap-10">
        <div className="font-ct text-6xl">Connect with us</div>
        <div className="font-dm text-sm text-[#6F6F6F] text-center ">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </div>
        <LearnMoreButton />
      </div>
      <Footer />
    </section>
  );
}

export function Footer() {
  return (
    <footer className="w-full px-10  pb-10 bg-white">
      <div className="flex flex-row gap-10 border-t border-gray-100 pt-10 mb-20">
        <a
          href="#benefits"
          className="font-dm text-sm font-bold hover:opacity-70 transition-opacity"
        >
          Benefits
        </a>
        <a
          href="#specifications"
          className="font-dm text-sm font-bold hover:opacity-70 transition-opacity"
        >
          Specifications
        </a>
        <a
          href="#how-to"
          className="font-dm text-sm font-bold hover:opacity-70 transition-opacity"
        >
          How-to
        </a>
      </div>

      {/* Bottom Legal/Logo Row */}
      <div className="flex flex-row items-end justify-between w-full ">
        <div className="flex items-center gap-6 ">
          {/* Your Logo (The Abstract Figure) */}
          <div className="w-8">
            <img src={Stickman} />
          </div>

          {/* Copyright Info */}
          <div className="font-dm text-xs text-[#485C11] tracking-tight">
            © Area. 2025
          </div>
        </div>

        {/* Rights Reserved */}
        <div className="font-dm text-xs text-[#485C11] tracking-tight uppercase">
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
