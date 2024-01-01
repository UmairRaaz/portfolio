"use client";
import React from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import WebsitePlans from "./WebsitePlans";
import Contact from "./Contact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    console.log("loaded");
    setloading(true);
  }, []);
  return (
    <div>
      {!loading ? (
        <Loading />
      ) : (
        <div
          className="max-w-[90%] md:max-w-[80%] mx-auto border-x border-gray-800"
          style={{ backgroundColor: "rgba(9, 7, 13, .9)" }}
        >
          <Toaster />
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Testimonials />
          <WebsitePlans />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default MainPage;
