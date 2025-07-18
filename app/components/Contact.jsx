"use client";
import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok, FaSpotify } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [state, handleSubmit] = useForm("mdkoonyg");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full h-full bg-[url('/contactbg1.jpg')] bg-contain bg-no-repeat text-white "
    >
      <div className="w-full h-full flex flex-col gap-4 md:flex-row bg-opacity-60 md:py-48">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col py-10">
          <div
            className="relative w-3/4 left-1/4 flex flex-col gap-10"
            data-aos="fade-right"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-loura font-bold text-custom-red">
                HexxanaSu
              </h1>
              <p className="text-xl italic font-light">hexxanasu@yahoo.com</p>
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-loura font-bold text-custom-red">
                Bookings
              </h1>
              <p className="text-xl italic font-light">hexxanasu@yahoo.com</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-loura font-bold text-custom-red">
                Socials
              </h1>
              <div className="flex flex-row justify-start gap-4">
                <Link
                  href="https://www.facebook.com/hexxanasu"
                  className="bg-transparent border-2 border-gray-700 rounded-full p-2 hover:text-custom-red hover:rotate-[360deg] transition-transform duration-1000"
                >
                  <FaFacebookF size={24} className="cursor-pointer" />
                </Link>
                <Link
                  href="https://www.youtube.com/@HexxanaSu"
                  className="bg-transparent border-2 border-gray-700 rounded-full p-2 hover:text-custom-red hover:rotate-[360deg] transition-transform duration-1000"
                >
                  <AiOutlineYoutube size={24} className="cursor-pointer" />
                </Link>
                <Link
                  href="https://www.instagram.com/hexxanasu.band"
                  className="bg-transparent border-2 border-gray-700 rounded-full p-2 hover:text-custom-red hover:rotate-[360deg] transition-transform duration-1000"
                >
                  <AiOutlineInstagram size={24} className="cursor-pointer" />
                </Link>

                <Link
                  href="https://open.spotify.com/track/0AYcAjEVQm2GVxeijp2exO?si=EKtssR8BQ9W4Uuj1rEnS6A&nd=1&dlsi=a1391a7797784df9"
                  className="bg-transparent border-2 border-gray-700 rounded-full p-2 hover:text-custom-red hover:rotate-[360deg] transition-transform duration-1000"
                >
                  <FaSpotify size={24} className="cursor-pointer" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full md:w-1/2 h-screen flex flex-col items-center">
          <div
            className="w-3/4 flex flex-col mx-auto gap-10 py-10"
            data-aos="fade-left"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-loura font-bold text-custom-red text-center">
                Contact
              </h1>
            </div>

            {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-custom-red text-xl">
                    Name
                  </label>
                  <input
                    className="px-4 py-2 bg-transparent border border-custom-red rounded-sm outline-none"
                    name="name"
                    id="name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-custom-red text-xl">
                    Email
                  </label>
                  <input
                    className="px-4 py-2 bg-transparent border border-custom-red rounded-sm outline-none"
                    name="email"
                    id="email"
                    type="email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-custom-red text-xl">
                    Message
                  </label>
                  <textarea
                    className="px-4 py-2 bg-transparent border border-custom-red rounded-sm outline-none"
                    rows="5"
                    name="message"
                    id="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-red-600 hover:bg-custom-red hover:scale-105 font-semibold ease-in duration-300 rounded-md text-md text-white px-4 py-4 w-full md:w-1/3"
                >
                  SEND
                </button>
              </form>
            ) : (
              <p>
                Thanks for emailing us. We will get back to you as soon as
                possible. No Borders...Just Music!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
