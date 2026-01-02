import React, { useState, useEffect } from "react";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center px-10 py-7  w-full">
      <div className="font-dm  text-3xl">Area</div>
      <div className="flex items-center gap-6.75 px-6 py-5 text-[14px] font-bold tracking-[-0.35px] whitespace-nowrap overflow-hidden cursor-pointer text-black ">
        <div className="hover:text-[#6F6F6F]">Benefits</div>
        <div className="hover:text-[#6F6F6F]">Specifications</div>
        <div className="hover:text-[#6F6F6F]">How-to</div>
        <div className="hover:text-[#6F6F6F]">Contact Us</div>
      </div>
      <div className="rounded-full bg-[#485C11] font-dm text-sm  w-32 h-11.75 grid place-items-center   text-white ">
        Learn More
      </div>
    </div>
  );
}
