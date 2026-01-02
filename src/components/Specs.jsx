import { LearnMoreButton } from "./Items";
import Sphere from "../assets/Sphere.png";
export default function Specs() {
  return (
    <section className="flex flex-col  items-center px-10 gap-30 border-b-1 border-[#E9E9E9]">
      <div className="border-t border-[#E9E9E9] flex flex-col items-center justify-between w-full h-[420px]  ">
        <p className="">specs</p>
        <p className="font-ct text-6xl">Why Choose Area?</p>
        <p>specs</p>
        <LearnMoreButton />
      </div>
      <div className="flex flex-row justify-center w-full ">
        {specCards.map((item, index) => (
          <SpecCard key={index} title={item.title} details={item.details} />
        ))}
      </div>
      <div className=" w-full h-[800px]  flex flex-row ">
        <div className="w-1/2 relative h-full rounded-[40px]  overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={Sphere}
            alt="Balanced Spheres"
          />
        </div>
        <div className=" w-1/2 flex flex-col items-start  justify-center pl-20 pr-10 border-t-1 border-[#E9E9E9]">
          <div className="mb-10">
            <p className="font-ct text-3xl">
              “I was skeptical, but Area has completely transformed the way I
              manage my business. The data visualizations are so clear and
              intuitive, and the platform is so easy to use. I can't imagine
              running my company without it.”
            </p>
          </div>
          <h4 className="font-dm text-sm ">John Smith</h4>
          <h4 className="font-dm text-xs">Head of Data </h4>
        </div>
      </div>
    </section>
  );
}

function SpecCard(props) {
  return (
    <div className="h-[576px] w-[463px] flex flex-col justify-center items-center border-r-1 border-[#E9E9E9] ">
      <div className="font-dm   h-[96px] w-full border-b-1 border-[#929292] flex justify-center items-center ">
        <h4 className="font-dm text-xl font-semibold text-center">
          {props.title}
        </h4>
      </div>
      {props.details.map((item, index) => (
        <div
          key={index}
          className="h-[80px] w-full border-b-1 border-[#E9E9E9] flex flex-col justify-center items-start"
        >
          <p className="font-dm text-xs text-[E9E9E9] pl-10 ">{item}</p>
        </div>
      ))}
    </div>
  );
}

const specCards = [
  {
    title: "Area",
    details: [
      "Ultra-fast browsing",
      "Advanced AI insights",
      "Seamless integration",
      "Full UTF-8 support",
      "Real-time analytics",
      "Global edge network",
    ],
  },
  {
    title: "WebSurge",
    details: [
      "Fast browsing",
      "Basic AI recommendations",
      "Restricts customization",
      "Basic AI insights",
      "Fast browsing",
      "Potential display errors",
    ],
  },
  {
    title: "HyperView",
    details: [
      "Moderate speeds",
      "No AI assistance",
      "Steep learning curve",
      "No AI assistance",
      "Moderate speeds",
      "Partial UTF-8 support",
    ],
  },
];
