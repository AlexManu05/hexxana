import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Videos from "./components/Videos";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import PhotoCarousel from "./components/PhotoCarousel";
import LogoComponent from "./components/LogoComponent";
import MusicWorkshop from "./components/MusicWorkshop";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Hero />
      <Introduction />
      <LogoComponent />
      <Events />
      <About />
      <MusicPlayer />
      <PhotoCarousel />
      <Videos />
      <MusicWorkshop />
      <Contact />
      <Footer />
    </div>
  );
}
