"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Introduction = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <section className="w-full flex flex-col justify-center min-h-screen mb-16 bg-[url('/hexxanared.jpg')] bg-cover">
      <div className="w-full h-full relative top-0 left-0 flex flex-col justify-center">
        <div
          className="w-full lg:w-1/2 mx-auto text-center "
          data-aos="fade-up"
        >
          <div className="w-full h-full px-4 flex flex-col gap-8 text-md md:text-xl text-white  animate-fade-up animate-once animate-duration-300 animate-delay-500 animate-ease-in">
            <p className="text-2xl font-bold ">
              Introducing{" "}
              <span className="text-custom-red text-4xl font-loura ml-2">
                HexxanaSu
              </span>{" "}
            </p>
            <p>
              HexxanaSu casts a spell like no other, captivating audiences with
              their bewitching melodies and enchanting performances.
            </p>
            <p>
              With a name that evokes both mystery and power, this
              Romanian-German band channels the primal forces of nature into
              their music, invoking the spirits of the forest and the whispers
              of ancient gods.
            </p>
            <p>
              Through their intoxicating blend of rock, folk, and pagan
              influences, HexxanaSu invites listeners to embrace their inner
              wanderer and embark on a transformative journey through the realms
              of myth and magic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
