const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="border-t-4 border-custom-red py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-md">&copy; 2024 HexxanaSU. All rights reserved.</p>
          <p className="text-sm">Created By Alex ManuM Design</p>
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
                href="https://www.instagram.com/anasuruniuc.hexxanasu/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-custom-red"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@anasuruniuc.hexxanasu/videos"
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
