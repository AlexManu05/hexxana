"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import background from "../../public/hex.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [noBorder, setNoBorder] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoBorder(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="w-full h-screen relative flex flex-col justify-center  bg-[url('../public/hex2.jpg')] bg-cover "
    >
      <Image
        src={background}
        alt="Hero Background"
        fill
        style={{ objectFit: "cover" }}
        className="lg:hidden"
      />

      {isVisible && (
        <div className=" w-full text-center top-1/2 absolute md:right-1/4 md:top-1/3   text-white animate-fade-right animate-once animate-duration-[700ms] animate-delay-500 animate-ease-in flex flex-col justify-center tracking-wide font-bold ">
          <h1 className="text-6xl md:text-8xl font-loura shadow-rose-800 ">
            NO BORDERS
          </h1>
          <p className="text-4xl font-loura">
            Just{" "}
            <span className="text-custom-red animate-ping animate-thrice animate-duration-[1000ms] animate-delay-700 animate-ease-in">
              Music
            </span>
          </p>
        </div>
      )}
    </section>
  );
};

export default Hero;
