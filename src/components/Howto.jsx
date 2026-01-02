import { LearnMoreButton } from "./Items";
import Island from "../assets/Island.png";
export default function Howto() {
  return (
    <section className=" w-full  mt-20 pt-[80px]   px-10">
      <div className="flex w-full flex-row justify-between ">
        <p className=" font-ct text-6xl">Map your Success</p>
        <LearnMoreButton />
      </div>
      <div className="h-[300px] w-full flex flex-row mt-20 justify-between gap-3 ">
        {howtoList.map((item, index) => (
          <HowCard
            key={index}
            index={index}
            text1={item.text1}
            text2={item.text2}
          />
        ))}
      </div>
      <div className="w-full h-[774px] rounded-[40px]  overflow-hidden aspect-video  my-10">
        <img src={Island} className="object-cover w-full h-full  " />
      </div>
    </section>
  );
}

const howtoList = [
  {
    text1: "Get Started",
    text2: "With our intuitive setup, you’re up and running in minutes.",
  },
  {
    text1: "Customize and Configure",
    text2: "Adapt Area to your specific requirements and preferences.",
  },
  {
    text1: "Grow Your Business",
    text2: "Make informed decisions to exceed your goals.",
  },
];

function HowCard({ index, text1, text2 }) {
  return (
    <div className="flex-1 min-w-[280px] border-t-1 border-[#929292] flex flex-col items-start pt-8 pb-12">
      <div className="font-ct text-8xl text-[#929292] mb-10 tracking-tighter opacity-50">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-dm text-sm font-medium uppercase tracking-wider">
          {text1}
        </div>
        <div className="font-dm text-sm text-[#6F6F6F] leading-relaxed max-w-[90%]">
          {text2}
        </div>
      </div>
    </div>
  );
}
