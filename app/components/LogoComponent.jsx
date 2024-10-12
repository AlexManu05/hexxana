"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const LogoComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);
  return (
    <div className="w-full h-[520px] bg-black">
      <Image
        src="/logo2.png"
        alt="logo"
        width={500}
        height={500}
        className="mx-auto"
        data-aos="fade-up"
      />
    </div>
  );
};

export default LogoComponent;
