// import Image from "next/image";

// export default function Shows() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex flex-col items-center text-white"
//       style={{
//         backgroundImage: `url('/hexxana4.jpg')`,
//       }}
//     >
//       {/* Title */}
//       <h1 className="text-5xl font-loura font-bold text-white mx-auto py-8 ">
//         Shows
//       </h1>

//       {/* Cards Section */}
//       <div className="mt-12 w-full px-4 sm:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="bg-black/70 p-4 rounded-lg shadow-lg flex flex-col items-center">
//           <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
//             <video
//               src="/event1.mp4"
//               controls
//               className="w-full h-full object-cover"
//             ></video>
//           </div>
//           <h2 className="text-xl font-semibold mt-4">Event 2</h2>
//           <p className="text-sm mt-2 text-gray-300">
//             Location: Los Angeles <br />
//             Date: April 15, 2025
//           </p>
//         </div>

//         {/* Card 2 (Video) */}

//         <div className="bg-black/70 p-4 rounded-lg shadow-lg flex flex-col items-center">
//           <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
//             <Image
//               src="/event2.jpeg"
//               alt="Event 1"
//               width={400}
//               height={300}
//               className="object-cover w-full h-full"
//             />
//           </div>
//           <h2 className="text-xl font-semibold mt-4">Event 1</h2>
//           <p className="text-sm mt-2 text-gray-300">
//             Location: New York City <br />
//             Date: March 20, 2025
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-black/70 p-4 rounded-lg shadow-lg flex flex-col items-center">
//           <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden">
//             <video
//               src="/event3.mp4"
//               controls
//               className="w-full h-full object-cover"
//             ></video>
//           </div>
//           <h2 className="text-xl font-semibold mt-4">Event 2</h2>
//           <p className="text-sm mt-2 text-gray-300">
//             Location: Los Angeles <br />
//             Date: April 15, 2025
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "../../styles/styles.css";
// const events = [
//   {
//     type: "image",
//     src: "/event2.jpeg",
//     title: "Event 1",
//     description: "New York City - March 20, 2025",
//   },
//   {
//     type: "video",
//     src: "/event1.mp4",
//     title: "Event 2",
//     description: "Los Angeles - April 15, 2025",
//   },
//   {
//     type: "video",
//     src: "/event3.mp4",
//     title: "Event 3",
//     description: "Chicago - May 10, 2025",
//   },
// ];

// const FutureEvents = () => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <section
//       id="future-events"
//       className="w-full h-screen bg-cover bg-center flex flex-col justify-center"
//       style={{ backgroundImage: `url('/background.jpg')` }}
//     >
//       {/* Title */}
//       <h1 className="text-5xl font-bold text-white text-center mb-8">
//         Future Events
//       </h1>

//       {/* Main Swiper */}
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "#fff",
//           "--swiper-pagination-color": "#fff",
//         }}
//         loop={true}
//         spaceBetween={10}
//         navigation={true}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="mySwiper2"
//       >
//         {events.map((event, index) => (
//           <SwiperSlide key={index}>
//             {event.type === "image" ? (
//               <img
//                 src={event.src}
//                 alt={event.title}
//                 className="rounded-lg w-full h-auto"
//               />
//             ) : (
//               <video
//                 src={event.src}
//                 controls
//                 className="rounded-lg w-full h-auto"
//               ></video>
//             )}
//             <div className="text-center text-white mt-4">
//               <h2 className="text-2xl font-semibold">{event.title}</h2>
//               <p className="text-sm mt-2">{event.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default FutureEvents;
// "use client";

// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "../../styles/styles.css";

// // import required modules
// import { Pagination } from "swiper/modules";

// export default function App() {
//   return (
//     <div className="bg-[url('../public/events-wall.jpg')] bg-cover flex flex-col justify-center mx-auto p-4 gap-10  w-full h-screen">
//       <Swiper
//         pagination={true}
//         modules={[Pagination]}
//         className="w-[50%] h-[90%] border-2 border-red-500"
//       >
//         <SwiperSlide className="text-center bg-white align-center">
//           <img src="/event2.jpeg" alt="event image" />
//         </SwiperSlide>
//         <SwiperSlide className="text-center bg-white align-center">
//           <img src="/event2.jpeg" alt="event image" />
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

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
        {/* First Slide: Image */}
        <SwiperSlide className="flex justify-center items-center h-full">
          <img
            src="/event2.jpeg"
            alt="Event 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Second Slide: Video */}
        <SwiperSlide className="flex justify-center items-center h-full">
          <video
            src="/event1.mp4"
            controls
            className="w-full h-full object-contain rounded-lg"
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
