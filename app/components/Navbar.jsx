"use client";
import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full h-24 px-4 shadow-xl ${
        scrolled ? "bg-black" : "transparent"
      } text-white z-10`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <div>
          <a href="/" className="text-3xl font-loura hover:text-custom-red">
            HexxanaSu
          </a>
        </div>
        <div className="hidden sm:flex font-loura">
          <ul className="hidden sm:flex">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                Home
              </li>
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                About
              </li>
            </ScrollLink>
            <ScrollLink
              to="music"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                Music
              </li>
            </ScrollLink>
            <ScrollLink
              to="photos"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                Photos
              </li>
            </ScrollLink>
            <ScrollLink
              to="videos"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                Videos
              </li>
            </ScrollLink>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer animate-fade-down hover:text-custom-red ease-in duration-300"
            >
              <li className="ml-10 hover:border-b hover:border-custom-red text-xl">
                Contact
              </li>
            </ScrollLink>
          </ul>
        </div>

        <button onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          {menuOpen ? (
            <AiOutlineClose size={25} />
          ) : (
            <AiOutlineMenu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={
          menuOpen
            ? "fixed top-24 flex flex-col left-0 w-1/2 h-[400px] bg-black bg-opacity-80 text-custom-red font-loura p-8 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-0 ease-in duration-500"
        }
      >
        <ul>
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">Home</li>
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration-300"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">About</li>
          </ScrollLink>
          <ScrollLink
            to="music"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration={300}"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">Music</li>
          </ScrollLink>
          <ScrollLink
            to="photos"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration={300}"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">Photos</li>
          </ScrollLink>
          <ScrollLink
            to="videos"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration={300}"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">Videos</li>
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-white ease-in duration={300}"
            onClick={() => setMenuOpen(false)}
          >
            <li className="py-4">Contact</li>
          </ScrollLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
