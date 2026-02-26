"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

const MusicPlayer = () => {
  // Playlist array
  const songs = [
    { title: "FIR3 IN M3", src: "/audio/fire.mp3" },
    { title: "Cu Mine", src: "/audio/cu_mine.mp3" },
    { title: "Tei Goi", src: "/audio/tei_goi.mp3" },
    {
      title: "Octave Ft. Hexxi ( Bonus Track ) - Spune Da",
      src: "/audio/spune_da.mp3",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      if (progressRef.current) {
        progressRef.current.style.width = `${
          (audio.currentTime / audio.duration) * 100
        }%`;
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex((prevIndex) => prevIndex + 1);
      } else {
        setCurrentSongIndex(0);
      }
      setIsPlaying(true);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleSongEnd);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [currentSongIndex, songs.length]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime =
      (e.nativeEvent.offsetX / e.target.clientWidth) * audio.duration;
    audio.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, isPlaying]);

  return (
    <section
      id="music"
      className="w-full bg-[url('/grungebg1.jpg')] bg-cover min-h-screen flex justify-center items-center"
    >
      <div className="flex w-[90%] md:w-8/12 bg-black text-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="flex flex-col w-full">
          <div className="flex p-5 border-b border-gray-600">
            <Image
              className="w-20 h-20 object-cover"
              alt="Album cover"
              src="/hexbg6.jpg"
              width={80}
              height={80}
            />
            <div className="flex flex-col px-2 w-full">
              <span className="text-xs text-gray-400 uppercase font-medium">
                Now Playing
              </span>
              <span className="text-sm text-custom-red capitalize font-semibold pt-1">
                {songs[currentSongIndex].title}
              </span>
              <span className="text-xs text-gray-500 uppercase font-medium">
                HexxanaSU
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center p-5">
            <div className="flex items-center">
              <div className="flex space-x-3 p-2">
                <button
                  className="focus:outline-none"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="6" y="4" width="4" height="16"></rect>
                      <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div
              className="relative w-full sm:w-1/2 md:w-7/12 lg:w-4/6 ml-2"
              onClick={handleSeek}
            >
              <div className="bg-red-300 h-2 w-full rounded-lg cursor-pointer">
                <div
                  ref={progressRef}
                  className="bg-custom-red h-2 rounded-lg absolute top-0"
                ></div>
              </div>
            </div>
            <div className="flex justify-end w-full sm:w-auto pt-1 sm:pt-0">
              <span className="text-xs text-gray-400 uppercase font-medium pl-2">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={songs[currentSongIndex].src}
            preload="metadata"
          ></audio>

          <div className="flex flex-col p-5">
            <div className="border-b border-gray-600 pb-1 flex justify-between items-center mb-2">
              <span className="text-base font-semibold uppercase text-gray-400">
                Playlist
              </span>
              {/* <Image
                className="w-4 cursor-pointer"
                src="/hexxana17.jpeg"
                alt="filter"
                width={16}
                height={16}
              /> */}
            </div>

            {songs.map((song, index) => (
              <div
                key={index}
                className={`flex border-b border-gray-600 py-3 cursor-pointer hover:shadow-md px-2 ${
                  index === currentSongIndex ? "bg-gray-800" : ""
                }`}
                onClick={() => setCurrentSongIndex(index)}
              >
                <Image
                  className="w-10 h-10 object-cover rounded-lg"
                  alt="Song cover"
                  src="/hexxana17.jpeg"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col px-2 w-full">
                  <span className="text-sm text-custom-red capitalize font-semibold pt-1">
                    {song.title}
                  </span>
                  <span className="text-xs text-gray-500 uppercase font-medium">
                    HexxanaSU
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
