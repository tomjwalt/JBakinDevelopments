import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useEffect } from "react";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  let timeOut = null;

  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 10000);
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
      {data.map((item, idx) => (
        <img
          key={idx}
          src={item.src}
          alt={item.alt}
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
