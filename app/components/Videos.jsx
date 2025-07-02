import Link from "next/link";
import React from "react";

const VideoCarousel = () => {
  return (
    <section
      id="videos"
      className="w-full h-full bg-[url('../public/bg-video.jpg')] bg-cover flex flex-col justify-center mx-auto p-4 gap-10 md:p-20"
    >
      <div className="mx-auto">
        <h1 className="text-5xl font-loura font-bold text-white">Videos</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row md:p-10  gap-8 mx-auto">
        <div className="w-full h-[300px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/kF8g6f74nY0?si=NWFhDbz4d79ddMi5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[300px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/r9EANdq8dfc?si=SAJvmVHOFyrdpFMz"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[300px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ifl1FcXuYfw?si=Nb8GTRVHKgXLnKn1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Link
        href="https://www.youtube.com/@HexxanaSu"
        className="bg-red-600 hover:bg-custom-red hover:scale-110 font-semibold  ease-in duration-300 rounded-md text-sm text-white px-4 py-4 w-64 flex justify-center mx-auto md:ml-60 mb-6"
      >
        WATCH MORE ON YOUTUBE
      </Link>
    </section>
  );
};

export default VideoCarousel;
