import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import bannerImage1 from "../assets/bannerimg.jpg";
import bannerImage2 from "../assets/bannerimg2.jpg";
import bannerImage3 from "../assets/bannerimg3.jpg";

const Banner = () => {
  const slides = [
    {
      image: bannerImage1,
      title: "Unlock Your Potential with MarathonX",
      subtitle: "Simplifying Marathon Management - From Start to Finish Line",
    },
    {
      image: bannerImage2,
      title: "Empower Your Race Experience",
      subtitle: "Track Progress, Engage, and Conquer Challenges",
    },
    {
      image: bannerImage3,
      title: "Join the Ultimate Marathon Journey",
      subtitle: "Unite with Runners Around the Globe",
    },
  ];

  return (
    <section className="relative w-full h-[80vh] mt-16 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                height: "80vh",
              }}
            >
              {/* Background Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
              {/* Content */}
              <div className="absolute inset-0 flex justify-center items-center text-center text-white z-10 px-6 md:px-12">
                <div>
                  <h1 className="text-5xl text-white md:text-6xl font-extrabold leading-tight mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
