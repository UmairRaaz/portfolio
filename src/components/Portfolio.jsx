"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Portfolio = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div id="portfolio"
      className="bg-[#060918] text-white flex flex-col items-center min-h-screen z-30 
      border-b-[1px] border-gray-500"
    >
      <div className="mt-20 flex flex-col items-center justify-center pb-28">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] w-24 text-center rounded-xl">
          Work
        </h1>
        <h1 className="text-4xl my-4 font-bold">See My Portfolio</h1>

        <div className="w-[80vw] md:mt-5 ">
          <div className="h-[80vh]">
            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={30}
              loop={true}
              grabCursor={true}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                520: {
                  slidesPerView: 1,
                },
                950: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={"/image1.png"} layout="fill" alt="portfolio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={"/image2.png"} layout="fill" alt="portfolio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={"/image3.png"} layout="fill" alt="portfolio" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={"/image4.png"} layout="fill" alt="portfolio" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
