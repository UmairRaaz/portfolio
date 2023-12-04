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
        <>
          <Toaster />
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <Testimonials />
          <WebsitePlans />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default MainPage;
