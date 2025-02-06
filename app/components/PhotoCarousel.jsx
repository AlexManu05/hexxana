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
  "/hexxana50.jpeg",
  "/hexxana48.jpeg",
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
  "/hexxana29.jpg",
  "/hexxana30.jpeg",
  "/hexxana31.jpeg",
  "/hexxana32.jpeg",
  "/hexxana33.jpeg",
  "/hexxana34.jpeg",
  "/hexxana36.jpeg",
  "/hexxana37.jpeg",
  "/hexxana38.jpeg",
  "/hexxana40.jpeg",
  "/hexxana41.jpeg",
  "/hexxana42.jpeg",
  "/hexxana43.jpeg",
  "/hexxana44.jpeg",
  "/hexxana45.jpeg",
  "/hexxana46.jpeg",
  "/hexxana47.jpeg",
  "/hexxana49.jpeg",
  "/hexxana51.jpeg",
  "/hexxana52.jpeg",
  "/hexxana53.jpeg",
  "/hexxana54.jpeg",
  "/hexxana55.jpeg",
];

// const App = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <section
//       id="photos"
//       className="w-full h-screen p-10 bg-black flex flex-col justify-center"
//     >
//       <h1 className="text-5xl font-loura font-bold text-white mx-auto py-8  ">
//         Photos
//       </h1>
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//           "--swiper-navigation-size": "20px" /* Adjusts button icon size */,
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2 "
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image} alt="band photo" className="rounded-lg mb-6" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={3}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper"
//       >
//         {images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img src={image} alt="thumbnail image" />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default App;

const App = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isExiting, setIsExiting] = useState(false);

  const handleImageClick = (image) => {
    if (selectedImage === image) {
      setIsExiting(true);
      setTimeout(() => {
        setSelectedImage(null);
        setIsExiting(false);
      }, 300);
    } else {
      setSelectedImage(image);
    }
  };

  return (
    <section className="w-full h-screen p-10 bg-black flex flex-col justify-center">
      <h1 className="text-5xl font-loura font-bold text-white mx-auto py-8">
        Photos
      </h1>

      {/* Fullscreen View with Smooth Transition */}
      {selectedImage && (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300 ${
            isExiting ? "opacity-0" : "opacity-100"
          }`}
          onClick={() => handleImageClick(selectedImage)}
        >
          <img
            src={selectedImage}
            alt="Fullscreen"
            className={`max-w-full max-h-full rounded-lg cursor-pointer transition-transform duration-300 ${
              isExiting ? "scale-90 opacity-0" : "scale-100 opacity-100"
            }`}
          />
        </div>
      )}

      {/* Main Swiper */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          "--swiper-navigation-size": "20px" /* Adjusts button icon size */,
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt="band photo"
              className="rounded-lg mb-6 cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
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
            <img
              src={image}
              alt="thumbnail"
              className="cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default App;
