import React from "react";
import PriceCard from "./PriceCard";

const WebsitePlans = () => {
  return (
    <div id="services" className="text-white bg-[#060918] pb-20 z-10 flex-col h-screen mt-40 md:mt-20 flex justify-center items-center">
      <div className="my-10 flex flex-col items-center justify-center text-center px-4 md:px-0">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] w-24 text-center rounded-xl">
          SERVICES
        </h1>
        <h1 className="text-4xl my-4 font-bold">Crafting Dreams, Molding Websites.</h1>
        <h1 className="text-sm text-gray-400 my-2">
          Join the adventure, strap in for a website evolution beyond your
          imagination
        </h1>
      </div>

      <div className="flex md:gap-16 gap-20 flex-col md:flex-row">
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
