import Link from "next/link";
import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok, FaSpotify } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen mb-20 bg-black text-sm md:text-xl font-bold flex flex-col bg-[url('../public/lgbandcover.jpg')] md:bg-cover bg-contain bg-no-repeat"
    >
      <div className="w-full h-full md:w-2/5 md:h-full md:ml-40 flex flex-col justify-center gap-8 text-gray-100 pt-20 px-8 font-light text-lg">
        {/* <h1 className="text-3xl white font-bold font-loura">About HexxanaSU</h1>
        <p>
          Step into the mystical world of HexxanaSu, a captivating rock pagan
          folk band deeply rooted in Germanic and Romanian traditions. With
          haunting melodies and thunderous rhythms, HexxanaSu weaves a tapestry
          of ancient tales and modern enchantment. Drawing inspiration from the
          rich folklore of their ancestors, their music transports audiences to
          realms where gods and spirits roam.
        </p>
        <p>
          Led by the captivating vocals of Hexxi (Ana-Maria Suruniuc) and
          accompanied by a talented ensemble of musicians. Hexxi&rsquo;s
          enchanting voice weaves effortlessly through the intricate melodies
          created by herself and her warlocks, they create a spellbinding
          atmosphere that resonates with audiences of all ages, captivating
          listeners with each note and lyric.
        </p>
        */}
        <p className="text-2xl md:text-3xl font-loura text-custom-red">
          Join the tribe and embark on a musical odyssey that transcends borders
          and connects souls.{" "}
        </p>
        <Link
          href="#contact"
          className="bg-custom-red w-32 text-center px-4 py-2 rounded-sm text-white hover:scale-110 transition-all duration-200 ease-in"
        >
          Book Now
        </Link>

        {/* <div className="flex flex-row gap-4 flex-wrap sm:flex-nowrap mb-10">
          <Link
            href="https://www.facebook.com/hexxanasu"
            className="text-white hover:text-custom-red hover:scale-125 ease-in duration-300"
          >
            <FaFacebookF size={28} className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.instagram.com/hexxanasu.band"
            className="text-white hover:text-custom-red hover:scale-125 ease-in duration-300"
          >
            <AiOutlineInstagram size={30} className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.youtube.com/@HexxanaSu"
            className="text-white hover:text-custom-red hover:scale-125 ease-in duration-300"
          >
            <AiOutlineYoutube size={30} className="cursor-pointer" />
          </Link>
          <Link
            href="https://www.tiktok.com/@anasuruniuc.hexxanasu"
            className="text-white hover:text-custom-red hover:scale-125 ease-in duration-300"
          >
            <FaTiktok size={30} className="cursor-pointer" />
          </Link>
          <Link
            href="https://open.spotify.com/track/0AYcAjEVQm2GVxeijp2exO?si=EKtssR8BQ9W4Uuj1rEnS6A&nd=1&dlsi=a1391a7797784df9"
            className="text-white hover:text-custom-red hover:scale-125 ease-in duration-300"
          >
            <FaSpotify size={30} className="cursor-pointer" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default About;
