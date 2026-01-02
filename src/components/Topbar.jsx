import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-9999
        px-10 py-7
        transition-all duration-200
        *:}
      `}
    >
      <div className="grid grid-cols-3 items-center w-full">
        {/* Left */}
        <div
          className={`font-dm text-3xl transition-opacity duration-200
            ${isScrolled ? "invisible" : "visible"}
          `}
        >
          Area
        </div>

        {/* Middle (true center, never moves) */}
        <div className="flex justify-center">
          <div
            className={`flex items-center gap-6.75 px-6 py-5 text-[14px] font-bold tracking-[-0.35px] whitespace-nowrap cursor-pointer text-black rounded-full  ${isScrolled ? "backdrop-blur-[15px] bg-white/40" : ""}`}
          >
            <div className="hover:text-[#6F6F6F]">Benefits</div>
            <div className="hover:text-[#6F6F6F]">Specifications</div>
            <div className="hover:text-[#6F6F6F]">How-to</div>
            <div className="hover:text-[#6F6F6F]">Contact Us</div>
          </div>
        </div>

        {/* Right */}
        <div
          className={`flex justify-end transition-opacity duration-200 ${isScrolled ? "invisible" : "visible"}`}
        >
          <div className="rounded-full bg-[#485C11] font-dm text-sm w-32 h-11.75 grid place-items-center text-white">
            Learn More
          </div>
        </div>
      </div>
    </nav>
  );
}
