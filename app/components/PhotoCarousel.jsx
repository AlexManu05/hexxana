"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles/styles.css";

const images = [
  "/hex14.jpg",
  "/hexxana2.jpeg",
  "/hexxana3.jpeg",
  "/hexxana4.jpeg",
  "/hexxana5.jpeg",
  "/hexxana6.jpeg",
  "/hexxana7.jpeg",
  "/hexxana8.jpeg",
  "/hexxana9.jpeg",
  "/hexxana10.jpeg",
  "/hexxana12.jpeg",
  "/hexxana13.jpeg",
  "/hexxana14.jpeg",
  "/hexxana15.jpeg",
  "/hexxana16.jpeg",
  "/hexxana17.jpeg",
  "/hexxana18.jpeg",
  "/hexxana19.jpeg",
  "/hexxana20.jpeg",
  "/hexxana21.jpeg",
  "/hexxana22.jpeg",
  "/hexxana23.jpeg",
  "/hexxana24.jpeg",
  "/hexxana25.jpeg",
  "/hexxana26.jpeg",
  "/hexxana27.jpeg",
  "/hex15.jpg",
];

const App = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section
      id="photos"
      className="w-full h-screen p-10 bg-black flex flex-col justify-center"
    >
      <h1 className="text-5xl font-loura font-bold text-white mx-auto py-8  ">
        Photos
      </h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="band photo" className="rounded-lg mb-6" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt="thumbnail image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default App;
