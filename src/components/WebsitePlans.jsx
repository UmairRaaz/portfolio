import React from "react";
import PriceCard from "./PriceCard";

const WebsitePlans = () => {
  return (
    <div id="services" className="text-white pb-20 z-10 flex-col flex justify-center items-center md:w-full">
      <div className="my-10 flex flex-col items-center justify-center text-center px-4 md:px-0">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] w-24 text-center rounded-xl">
          SERVICES
        </h1>
        <h1 className="text-4xl my-4 font-bold">Refine Your Digital Presence</h1>
        <h1 className="text-sm text-gray-400 mb-2 max-w-2xl uppercase">
        &rdquo;If our pricing doesn&rsquo;t align with your expectations, feel free to contact us below, and let&rsquo;s have a conversation to explore customized options.&rdquo;
        </h1>
      </div>

      <div className="grid justify-between gap-4 grid-cols-1 md:grid-cols-3">
        <PriceCard
          title="Basic Package"
          price="100"
          features={["Responsive Design", "Custom Development", "1 Page"]}
        />
        <PriceCard
          title="Premium Package"
          price="800"
          features={["Responsive Design", "Custom Development", "10 pages"]}
          isHighlighted={true}
        />
        <PriceCard
          title="Standard Package"
          price="300"
          features={["Responsive Design", "Custom Development", "4 Pages"]}
        />
      </div>
    </div>
  );
};

export default WebsitePlans;
