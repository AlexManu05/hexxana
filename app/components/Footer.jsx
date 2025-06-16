import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-screen">
      <div className="border-t-4 border-custom-red py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-md">&copy; 2024 HexxanaSU. All rights reserved.</p>
          <Link
            href={"https://www.instagram.com/alexmanum/"}
            className="text-sm"
          >
            Created By <span className="text-custom-red">Alex ManuM</span>{" "}
            Design
          </Link>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.facebook.com/hexxanasu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-red"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hexxanasu.band/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-red"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@HexxanaSu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-red"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
