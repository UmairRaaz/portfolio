'use client'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import Testimonials from '@/components/Testimonials'
import WebsitePlans from '@/components/WebsitePlans'
import React, { useEffect, useState } from 'react'
import { Toaster } from "react-hot-toast";
const page = () => {
  const [loading, setloading] = useState(false)
  useEffect(()=>{
    console.log("loaded")
    setloading(true)
  },[])
  return (
    <div className='md:max-w-7xl overflow-hidden scroll-smooth'>
    {!loading ? (
      <Loading/>
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
  
  )
}

export default page