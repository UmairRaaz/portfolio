"use client";
import React from "react";
import Link from "next/link";
const Hero = () => {
  return (
    <div
      id="home"
      className="h-screen overflow-hidden text-white text-center flex items-center justify-center flex-col z-20 md:w-full "
    >
      <div className="z-10 mt-24 flex flex-col items-center justify-center">
        <div className="md:text-4xl text-xl max-w-2xl ">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            <p>
              <span className="text">Website Devloper</span> for early-stage
              startups
            </p>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mt-8 text-lg md:text-xl">
            Ship new app features, get a consistent website, marketing, or any
            other design with a simple monthly fee. Pause or cancel anytime.
          </p>
        </div>
        <div className="flex gap-5 mt-10">
          <a
            className="primarybutton"
          >
            <Link href="#portfolio">See My Universe</Link>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
