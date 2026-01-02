import ipad from "../assets/Ipad.png";

export default function FirstSection() {
  return (
    <section className="relative flex flex-col items-center mt-20 gap-9">
      {/* Heading */}
      <h2 className="font-ct text-[160px] leading-[0.9] tracking-tighter text-center z-10">
        Browse everything.
      </h2>

      <div className="relative flex flex-col justify-center items-center h-[495px] w-[100%] ">
        <div className="absolute top-[135px] botttom-0 bg-[#93A27F] h-[360px] w-[95%] rounded-[40px]"></div>

        <div className="absolute bottom-0 h-[495px] overflow-hidden">
          <img
            src={ipad}
            alt="iPad preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Parent Container for the whole Logos section */}
      <div className="w-full h-[400px] flex flex-col justify-center px-10 gap-12 border-[#E9E9E9] border-b-1">
        {/* The Header - Aligned Left */}
        <h6 className="font-dm text-[#6F6F6F] text-left">Trusted by</h6>

        {/* The Logos - Row with spacing */}
        <div className="flex flex-row justify-center items-center  w-full gap-15">
          {/* Using the map loop for cleaner code */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={num}
              className="h-[84px] w-[154px] flex items-center justify-center border border-dashed border-gray-400 rounded-xl"
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
