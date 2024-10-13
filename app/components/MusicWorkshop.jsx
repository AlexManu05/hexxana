import React from "react";
import Image from "next/image";

const MusicWorkshop = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url('/bongo2.jpg')",
      }}
    >
      <div className=" bg-opacity-60 w-full h-full flex flex-col md:flex-row items-center justify-center text-white p-8">
        {/* Left side (Image) */}
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <div className="relative w-full h-[300px] md:h-[500px] max-w-md">
            <Image
              src="/workshop.jpg"
              alt="Musical Instruments"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-md shadow-lg w-auto h-auto"
            />
          </div>
        </div>

        {/* Right side (Text) */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">
            Animal Impro Workshops with Hexxi
          </h1>
          <p className="text-lg mb-4">
            Join us in exploring the wild, improvisational world of music! Our
            Animal Impro Workshops will take you through a musical journey like
            no other. Engage with instruments, unleash your creativity, and
            learn how to express yourself through sound.
          </p>
          <a
            href="mailto:hexxanasu@yahoo.com"
            className="text-custom-red text-md"
          >
            hexxanasu@yahoomail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicWorkshop;
