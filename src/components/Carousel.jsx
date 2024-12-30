import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export const Carousel = () => {
  const data = [
    {
      src: "/assets/home-img.jpg",
      alt: "home-image"
    },
    {
      src: "../assets/carousel1.jpg",
      alt: "carousel1"
    },
    {
      src: "../assets/carousel2.jpg",
      alt: "carousel2"
    },
    {
      src: "../assets/carousel3.jpg",
      alt: "carousel3"
    },
    {
      src: "../assets/carousel4.jpg",
      alt: "carousel4"
    },
    {
      src: "../assets/carousel5.jpg",
      alt: "carousel5"
    },
    {
      src: "../assets/carousel6.jpg",
      alt: "carousel6"
    },
    {
      src: "../assets/carousel7.jpg",
      alt: "carousel7"
    },
    {
      src: "../assets/carousel8.jpg",
      alt: "carousel8"
    },
    {
      src: "../assets/carousel9.jpg",
      alt: "carousel9"
    },
    {
      src: "../assets/carousel10.jpg",
      alt: "carousel0"
    },
    {
      src: "../assets/carousel11.jpg",
      alt: "carousel11"
    },
    {
      src: "../assets/carousel12.jpg",
      alt: "carousel12"
    },
    {
      src: "../assets/carousel13.jpg",
      alt: "carousel13"
    },
    {
      src: "../assets/carousel14.jpg",
      alt: "carousel14"
    },
    {
      src: "../assets/carousel15.jpg",
      alt: "carousel15"
    },
    {
      src: "../assets/carousel16.jpg",
      alt: "carousel16"
    },
    {
      src: "../assets/carousel17.jpg",
      alt: "carousel17"
    },
    {
      src: "../assets/carousel18.jpg",
      alt: "carousel18"
    },
    {
      src: "../assets/carousel19.jpg",
      alt: "carousel19"
    },
    {
      src: "../assets/carousel20.jpg",
      alt: "carousel20"
    },
    {
      src: "../assets/carousel21.jpg",
      alt: "carousel21"
    },
    {
      src: "../assets/carousel22.jpg",
      alt: "carousel22"
    },
    {
      src: "../assets/carousel23.jpg",
      alt: "carousel23"
    },
    {
      src: "../assets/carousel24.jpg",
      alt: "carousel24"
    },
    {
      src: "../assets/carousel25.jpg",
      alt: "carousel25"
    },
    {
      src: "../assets/carousel26.jpg",
      alt: "carousel26"
    },
    {
      src: "../assets/carousel27.jpg",
      alt: "carousel27"
    },
    {
      src: "../assets/carousel28.jpg",
      alt: "carousel28"
    },
    {
      src: "../assets/carousel29.jpg",
      alt: "carousel29"
    },
    {
      src: "../assets/carousel30.jpg",
      alt: "carousel30"
    },
    {
      src: "../assets/carousel31.jpg",
      alt: "carousel31"
    },
    {
      src: "../assets/carousel32.jpg",
      alt: "carousel32"
    },
    {
      src: "../assets/carousel34.jpg",
      alt: "carousel34"
    },
    {
      src: "./assets/carousel35.jpg",
      alt: "carousel35"
    },
    {
      src: "../assets/carousel36.jpg",
      alt: "carousel36"
    },
    {
      src: "../assets/carousel37.jpg",
      alt: "carousel37"
    },
    {
      src: "../assets/carousel38.jpg",
      alt: "carousel38"
    },
    {
      src: "../assets/carousel39.jpg",
      alt: "carousel39"
    },
    {
      src: "../assets/carousel40.jpg",
      alt: "carousel40"
    },
    {
      src: "../assets/carousel41.jpg",
      alt: "carousel41"
    },
    {
      src: "../assets/carousel42.jpg",
      alt: "carousel42"
    },
    {
      src: "../assets/carousel43.jpg",
      alt: "carousel43"
    },
    {
      src: "../assets/carousel44.jpg",
      alt: "carousel44"
    },
    {
      src: "../assets/carousel45.jpg",
      alt: "carousel45"
    },
    {
      src: "../assets/carousel46.jpg",
      alt: "carousel46"
    },
    {
      src: "../assets/carousel47.jpg",
      alt: "carousel47"
    },
    {
      src: "../assets/carousel48.jpg",
      alt: "carousel48"
    },
    {
      src: "../assets/carousel49.jpg",
      alt: "carousel49"
    },
    {
      src: "../assets/carousel50.jpg",
      alt: "carousel50"
    },
    {
      src: "../assets/carousel51.jpg",
      alt: "carousel51"
    },
    {
      src: "../assets/carousel52.jpg",
      alt: "carousel52"
    },
    {
      src: "../assets/carousel53.jpg",
      alt: "carousel53"
    },
  ];

  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timeOut = autoPlay
      ? setTimeout(() => {
          nextSlide();
        }, 10000)
      : null;

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [slide, autoPlay]); // Dependencies: re-run only when these change

  return (
    <div
      className="carousel"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => (
        <img
          key={idx}
          src={item.src} // Assume data contains preloaded URLs
          alt={item.alt || "carousel image"}
          className={slide === idx ? "slide" : "slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      />
    </div>
  );
};
