"use client";
import StarsBackground from "@/libs/Star-background";
import React from "react";
import Slide from "./Slide";

const Testimonials = () => {
  return (
    <div id="review" className="flex overflow-hidden items-center justify-center flex-col pt-20 md:w-full ">
      <div className="flex justify-center items-center flex-col px-4 md:px-0">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] w-52 text-center rounded-xl">
          CUSTOMER STORIES
        </h1>
        <h1 className="text-white text-4xl font-semibold my-4 text-center">
          Trusted by the kindest clients
        </h1>
        <h1 className="text-gray-400 text-center">
          Here&rsquo;s a glimpse into the heartfelt experiences of my incredible
          clients.
        </h1>
        <h1 className="text-gray-400"> Your trust fuels my passion.</h1>
      </div>
      <div className="slider max-w-sm md:max-w-7xl ">
        <div className="slide-track">
          <Slide content={"Umair played a pivotal role in the success of our web development project. His expertise and dedication were evident throughout the entire process."}
          name={"-Sophia Rodriguez"}/>
          <Slide content={"Umair provided an outstanding web development service for our business. We are delighted with the result and highly recommend Umair for anyone seeking top-notch web development services."} name={"-Ethan Thompson"} />
         <Slide content={"Umair's expertise in web development is evident in the seamless navigation and visually appealing design of our site. Communication throughout the project was excellent, and Umair was responsive to our needs and feedback."}
         name={"-Olivia Harper"}/>
          <Slide content={"Umair delivered a stellar web development service that perfectly aligned with our vision. Umair's coding skills are truly commendable, and the website they developed showcases a high level of functionality and innovation. From the initial concept to the final product."} name={"-Jackson Chen"}/>
          <Slide content={"Umair's ability to translate our ideas into a visually stunning and user-friendly platform was impressive.Umair' commitment to delivering a top-tier product makes them a reliable choice for anyone seeking expert web development services."} name={"-Aiden Foster"}/>
          <Slide content={"Umair played a pivotal role in the success of our web development project. His expertise and dedication were evident throughout the entire process."}
          name={"-Sophia Rodriguez"}/>
          <Slide content={"Umair provided an outstanding web development service for our business. We are delighted with the result and highly recommend Umair for anyone seeking top-notch web development services."} name={"-Ethan Thompson"}/>
          <Slide content={"Umair's expertise in web development is evident in the seamless navigation and visually appealing design of our site. Communication throughout the project was excellent, and Umair was responsive to our needs and feedback."} 
          name={"-Olivia Harper"}/>
          <Slide content={"Umair delivered a stellar web development service that perfectly aligned with our vision. Umair's coding skills are truly commendable, and the website they developed showcases a high level of functionality and innovation. From the initial concept to the final product."} name={"-Jackson Chen"}/>
          <Slide content={"Umair's ability to translate our ideas into a visually stunning and user-friendly platform was impressive.Umair's commitment to delivering a top-tier product makes them a reliable choice for anyone seeking expert web development services."} name={"-Aiden Foster"}/>
          <Slide content={"Umair provided an outstanding web development service for our business. We are delighted with the result and highly recommend Umair for anyone seeking top-notch web development services."} name={"-Ethan Thompson"}/>
          <Slide content={"Umair's expertise in web development is evident in the seamless navigation and visually appealing design of our site. Communication throughout the project was excellent, and Umair was responsive to our needs and feedback."}
          name={"-Olivia Harper"}/>
          <Slide content={" Umair delivered a stellar web development service that perfectly aligned with our vision. Umair's coding skills are truly commendable, and the website they developed showcases a high level of functionality and innovation. From the initial concept to the final product."} name={"-Jackson Chen"}/>
          <Slide content={"Umair's ability to translate our ideas into a visually stunning and user-friendly platform was impressive.Umair's commitment to delivering a top-tier product makes them a reliable choice for anyone seeking expert web development services."} name={"-Aiden Foster"}/>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
