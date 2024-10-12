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
        <div className="w-full h-[316px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ZPXadkiUbpw?si=VDnPGDHGBXJwNB50"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[316px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/6G-6aBkbBWQ?si=XMOG86NmBVfivWpX"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full h-[316px] md:w-1/3">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Ifl1FcXuYfw?si=lSiWf1OYN35oJf6R"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Link
        href="https://www.youtube.com/@anasuruniuc.hexxanasu/videos"
        className="bg-red-600 hover:bg-custom-red hover:scale-110 font-bold  ease-in duration-300 rounded-md text-sm text-white px-4 py-4 w-64 flex justify-center mx-auto md:ml-60"
      >
        WATCH MORE ON YOUTUBE
      </Link>
    </section>
  );
};

export default VideoCarousel;
