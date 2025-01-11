import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import HomeImg from "../assets/home-img.jpg";
import Carousel1 from "../assets/carousel1.jpg";
import Carousel2 from "../assets/carousel2.jpg";
import Carousel3 from "../assets/carousel3.jpg";
import Carousel4 from "../assets/carousel4.jpg";
import Carousel5 from "../assets/carousel5.jpg";
import Carousel6 from "../assets/carousel6.jpg";
import Carousel7 from "../assets/carousel7.jpg";
import Carousel8 from "../assets/carousel8.jpg";
import Carousel9 from "../assets/carousel9.jpg";
import Carousel10 from "../assets/carousel10.jpg";
import Carousel11 from "../assets/carousel11.jpg";
import Carousel12 from "../assets/carousel12.jpg";
import Carousel13 from "../assets/carousel13.jpg";
import Carousel14 from "../assets/carousel14.jpg";
import Carousel15 from "../assets/carousel15.jpg";
import Carousel16 from "../assets/carousel16.jpg";
import Carousel17 from "../assets/carousel17.jpg";
import Carousel18 from "../assets/carousel18.jpg";
import Carousel19 from "../assets/carousel19.jpg";
import Carousel20 from "../assets/carousel20.jpg";
import Carousel21 from "../assets/carousel21.jpg";
import Carousel22 from "../assets/carousel22.jpg";
import Carousel23 from "../assets/carousel23.jpg";
import Carousel24 from "../assets/carousel24.jpg";
import Carousel25 from "../assets/carousel25.jpg";
import Carousel26 from "../assets/carousel26.jpg";
import Carousel27 from "../assets/carousel27.jpg";
import Carousel28 from "../assets/carousel28.jpg";
import Carousel29 from "../assets/carousel29.jpg";
import Carousel30 from "../assets/carousel30.jpg";
import Carousel31 from "../assets/carousel31.jpg";
import Carousel32 from "../assets/carousel32.jpg";
import Carousel34 from "../assets/carousel34.jpg";
import Carousel35 from "../assets/carousel35.jpg";
import Carousel36 from "../assets/carousel36.jpg";
import Carousel37 from "../assets/carousel37.jpg";
import Carousel38 from "../assets/carousel38.jpg";
import Carousel39 from "../assets/carousel39.jpg";
import Carousel40 from "../assets/carousel40.jpg";
import Carousel41 from "../assets/carousel41.jpg";
import Carousel42 from "../assets/carousel42.jpg";
import Carousel43 from "../assets/carousel43.jpg";
import Carousel44 from "../assets/carousel44.jpg";
import Carousel45 from "../assets/carousel45.jpg";
import Carousel46 from "../assets/carousel46.jpg";
import Carousel47 from "../assets/carousel47.jpg";
import Carousel48 from "../assets/carousel48.jpg";
import Carousel49 from "../assets/carousel49.jpg";
import Carousel50 from "../assets/carousel50.jpg";
import Carousel51 from "../assets/carousel51.jpg";
import Carousel52 from "../assets/carousel52.jpg";
import Carousel53 from "../assets/carousel53.jpg";

export const Carousel = () => {
  const images = [
    HomeImg,
    Carousel1,
    Carousel2,
    Carousel3,
    Carousel4,
    Carousel5,
    Carousel6,
    Carousel7,
    Carousel8,
    Carousel9,
    Carousel10,
    Carousel11,
    Carousel12,
    Carousel13,
    Carousel14,
    Carousel15,
    Carousel16,
    Carousel17,
    Carousel18,
    Carousel19,
    Carousel20,
    Carousel21,
    Carousel22,
    Carousel23,
    Carousel24,
    Carousel25,
    Carousel26,
    Carousel27,
    Carousel28,
    Carousel29,
    Carousel30,
    Carousel31,
    Carousel32,
    Carousel34,
    Carousel35,
    Carousel36,
    Carousel37,
    Carousel38,
    Carousel39,
    Carousel40,
    Carousel41,
    Carousel42,
    Carousel43,
    Carousel44,
    Carousel45,
    Carousel46,
    Carousel47,
    Carousel48,
    Carousel49,
    Carousel50,
    Carousel51,
    Carousel52,
    Carousel53,
  ];

  const [slide, setSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = () => {
    setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timeOut = autoPlay ? setTimeout(nextSlide, 10000) : null;

    return () => {
      if (timeOut) clearTimeout(timeOut);
    };
  }, [slide, autoPlay]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        {images.map((item, idx) => (
          <img
            key={idx}
            src={item}
            alt={`carousel ${idx + 1}`}
            className={slide === idx ? "slide" : "slide-hidden"}
          />
        ))}
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
