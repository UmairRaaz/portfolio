"use client";
import TypingHeading from "@/libs/typing-heading";
import Image from "next/image";
import React from "react";
const About = () => {
  const headings = [
    "Web Developer",
    "Designer",
    "Freelancer",
    "Tech Enthusiast",
  ];

  return (

      <div id="about" className="text-white flex flex-col md:flex-row h-full pb-20 z-10 md:w-full">
        <div className="md:w-1/2 flex mt-8 justify-center z-10">
          <div
            className="h-[300px] w-[300px] mt-16 rounded-full relative overflow-hidden z-10"
            onClick={() => setIsHovered(!isHovered)}
          >
            <Image
              src={"/profile.png"}
              alt="profile"
              layout="fill"
              className="rounded-full cursor-pointer"
            />
            
          </div>
        </div>
        <div className="md:w-1/2 mt-20 flex items-center justify-center z-10">
          <div className="h-72 w-4/5 z-10">
            <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] inline px-4 py-2 text-center rounded-full">
              About Me
            </h1>
            <h1 className="text-4xl font-bold my-4 mt-10">
              <TypingHeading headings={headings} />
            </h1>
            <p className="text-gray-400">
              <span className="text-gray-100">
                I&apos;m Umair, a Full Stack developer.
              </span>{" "}
              I love creating modern web designs using the latest technologies
              like Next.js, MongoDB, and Tailwind CSS. Whether you need a sleek
              website or a powerful web application, I&apos;m here to bring
              your ideas to life and make your online presence shine!
            </p>
          </div>
        </div>
      </div>
  );
};

export default About;
