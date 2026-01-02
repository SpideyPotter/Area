/* function LearnMoreButton() {
  return (
    <div className="bg-[#DFECC6] text-black  w-34 h-12 rounded-full flex items-center justify-center hover:bg-[#8E9C78] hover:text-white">
      <p className="text-sm font-medium ">Discover more</p>
    </div>
  );
}

export { LearnMoreButton }; */

function LearnMoreButton() {
  return (
    <button className="bg-[#DFECC6] text-black w-40 h-12 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-[#8E9C78] hover:text-white active:scale-95 cursor-pointer shadow-sm hover:shadow-md">
      <span className="text-sm font-medium font-dm">Discover more</span>
    </button>
  );
}

function Middlebar() {
  return (
    <div className="flex flex-row  justify-around  items-center font-bold border px-10   h-16 rounded-full text-xs sticky top-0 z-50 ">
      <div className="hover:text-[#6F6F6F]">Benefits</div>
      <div className="hover:text-[#6F6F6F]">Specifications</div>
      <div className="hover:text-[#6F6F6F]">How-to</div>
      <div className="hover:text-[#6F6F6F]">Contact Us</div>
    </div>
  );
}

export { LearnMoreButton, Middlebar };
