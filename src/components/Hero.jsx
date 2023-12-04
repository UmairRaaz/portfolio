"use client";
import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div id="home" className="relative h-screen overflow-hidden bg-[#6919ff] text-white text-center  flex items-center justify-center flex-col z-20 md:max-w-7xl">
      <div style={{width:"100%", height:"100vh", position:"absolute"}}>
      <Image
        className="transition-transform transform hover:scale-110 "
        src={"/future-grid.webp"}
        alt="grid"
        layout="fill"
      />
      </div>
      
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl transition-transform transform hover:translate-y-2 ">
          <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <span>Future-Proofing Your Web Presence </span>
            <span className="block mt-2">with Our Development and</span>
            <span className="block mt-2"> Design Studio</span>
          </h1>
        </div>
        <div className="flex gap-5 mt-10">
          <button
            type="submit"
            className="border border-white bg-white text-[#6919ff] p-4 rounded-sm transition duration-300 ease-in-out hover:bg-[#6919ff] hover:text-white cursor-pointer"
          >
            See My Universe
          </button>

          <button
            type="submit"
            className="border border-white bg-[#6919ff] text-white p-4 rounded-sm transition duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-[#6919ff]"
          >
            See Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
