import earth from "../assets/Earth.svg";
import cable from "../assets/cable.svg";
import account from "../assets/account.svg";
import chart from "../assets/chart.svg";
import mountains from "../assets/Hero Image.png";
import cylinders from "../assets/Cylinders.svg";
import { LearnMoreButton } from "./Items";
export default function Benefits() {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Spacer */}
      <div className="h-[80px]"></div>
      {/* Header */}
      <div className="min-h-[300px] w-full flex flex-col justify-center gap-6 px-10">
        <div className="font-dm text-sm text-[#485C11]">Benefits</div>
        <div className="font-ct text-6xl leading-[0.9] tracking-[-0.0425em]">
          We’ve cracked the code.
        </div>
        <div className="font-dm text-sm text-[#6F6F6F]">
          Area provides real insights, without the data overload.
        </div>
      </div>
      {/* The Grid - FIXED: added flex-wrap and responsive width */}
      <div className="w-full px-10 pt-10 flex flex-wrap lg:flex-nowrap justify-between gap-6">
        {benefits.map((item, index) => (
          <BenefitCard
            key={index}
            icon={item.icon}
            title={item.title}
            para={item.para}
          />
        ))}
      </div>
      {/* Hero Image Container - FIXED: added aspect ratio and relative positioning */}
      <div className="px-10 py-40">
        <div
          className="relative w-full aspect-video rounded-[30px] overflow-hidden "
          data-name="Hero Image"
        >
          <img
            alt="Mountain range"
            className="absolute inset-0 w-full h-full object-cover"
            src={mountains}
          />
        </div>
      </div>
      {/* See the Big Picture */}
      <div className="w-full  h-[830px] pb-[100px] flex flex-row px-10 justify-between   ">
        <div className=" w-[49%] flex flex-col justify-evenly border-t border-[#E9E9E9] ">
          <p className="text-6xl font-ct">See the Big Picture</p>
          <p className="text-[#6F6F6F]">
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </p>
          <div className="flex flex-col gap-2">
            {benlist.map((item, index) => (
              <div>
                <div
                  key={index}
                  className="flex flex-row items-center gap-3  border-t border-[#E9E9E9] h-[80px] py-[20px] pr-[80px]"
                >
                  {/* Making the number a bit lighter or bolder to distinguish it */}
                  <div className="text-sm font-medium text-gray-400 w-5">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="text-sm text-gray-700">{item}</div>
                </div>
              </div>
            ))}
          </div>
          <LearnMoreButton />
        </div>
        <div className="w-[49%] relative rounded-[40px] overflow-hidden">
          <img
            src={cylinders}
            className="absolute w-full object-cover bottom-0 "
          />
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ icon, title, para }) {
  return (
    /* FIXED: changed fixed w-[330px] to flex-1 with a max-width to prevent overflow */
    <div className="flex-1 min-w-[280px] max-w-[330px] h-[250px] py-6 border-t border-[#E9E9E9] flex flex-col justify-between">
      <div className="w-6 h-6">
        <img className="object-contain" src={icon} alt="" />
      </div>
      <h4 className="font-ct text-xl">{title}</h4>
      <p className="font-dm text-[#6f6f6f] text-sm leading-relaxed">{para}</p>
    </div>
  );
}

const benefits = [
  {
    icon: cable,
    title: "Amplify Insights",
    para: "Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.",
  },
  {
    icon: earth,
    title: "Control Your Global Presence",
    para: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
  },
  {
    icon: account,
    title: "Remove Language Barriers",
    para: "Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.",
  },
  {
    icon: chart,
    title: "Visualize Growth",
    para: "Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.",
  },
];
const benlist = [
  "Spot Trends in Seconds: No more digging through numbers. ",
  "Get Everyone on the Same Page: Share easy-to-understand reports with your team.",
  "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.",
  "Your Global Snapshot: Get a quick, clear overview of your entire operation.",
];

function BenefitList(props) {
  return (
    <div>
      <div>{props.index}</div>
      <div></div>
    </div>
  );
}
