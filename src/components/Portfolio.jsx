"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div
      id="portfolio"
      className="text-white flex flex-col items-center min-h-screen z-30  border-gray-500 md:w-full overflow-hidden"
    >
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="uppercase border border-blue-700 text-blue-300 bg-[#100b30] inline px-4 py-2 text-center rounded-full">
          My Work
        </h1>
        <h1 className="text-4xl font-bold mt-8 mb-10 md:mb-0">See My Portfolio</h1>

        <div className="w-[80vw] md:mt-14 ">
          <div className="h-[50vh]">
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
                <Link
                  href="https://learnfromskillex.netlify.app/"
                  target="_blank"
                >
                  <Image
                    src={"/portfolioOne.png"}
                    layout="fill"
                    alt="portfolio"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://perkandpour.netlify.app/" target="_blank">
                  <Image
                    src={"/portfolioTwo.png"}
                   layout="fill"
                    alt="portfolio"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  href="https://history-museum.netlify.app/"
                  target="_blank"
                >
                  <Image
                    src={"/portfolioThree.png"}
                    layout="fill"
                    alt="portfolio"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://umairraaz.github.io/shopwise/" target="_blank">
                <Image
                  src={"/portfolioFour.png"}
                  layout="fill"
                  alt="portfolio"
                />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="https://umairraaz.github.io/dentalweb/" target="_blank">
                <Image
                  src={"/portfolioFive.png"}
                  layout="fill"
                  alt="portfolio"
                />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
