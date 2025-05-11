"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

export default function FutureEvents() {
  return (
    <div className="bg-[url('/events-wall2.jpg')] bg-contain bg-center flex flex-col justify-center items-center mx-auto p-4 w-full h-screen">
      <div className="mx-auto my-8">
        <h1 className="text-5xl font-loura font-bold text-white">Events</h1>
      </div>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-[90%] sm:w-[50%] md:w-[40%] h-[70%] bg-black/60 rounded-lg shadow-xl"
      >
        <SwiperSlide className="flex justify-center items-center h-full">
          <img
            src="/event5.jpeg"
            alt="Example Website"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center h-full">
          <img
            src="/event3.jpg"
            alt="Example Website"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* First Slide: Image */}
        <SwiperSlide className="flex justify-center items-center h-full">
          <img
            src="/event2.jpeg"
            alt="Event 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Third Slide: Another Image */}
        <SwiperSlide className="flex justify-center items-center h-full">
          <video
            src="/event3.mp4"
            controls
            className="w-full h-full object-contain rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
