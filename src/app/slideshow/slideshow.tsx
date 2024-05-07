'use client'
import React, { useState, useEffect } from 'react';
import { Slide, IconButton } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import ArrowBackIosSharpIcon from '@mui/icons-material/ArrowBackIosSharp';

import slide1 from '../../assets/slide1.jpeg';
import slide2 from '../../assets/slide2.jpeg';
import slide3 from '../../assets/slide3.jpeg';

const images = [slide1.src, slide2.src, slide3.src];

const Slideshow = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prevActiveIndex) => (prevActiveIndex + images.length - 1) % images.length);
  };

  useEffect(() => {
    const slideShowInterval = setInterval(() => {
      handleNext();
    }, 3000); // muda o slide a cada 3 segundos

    return () => {
      clearInterval(slideShowInterval); // limpa o intervalo quando o componente é desmontado
    };
  }, []);

  return (
    <div className="mt-24 relative">
      {images.map((image, index) => (
        <Slide className="mt-4" key={index} direction={direction} in={activeIndex === index} mountOnEnter unmountOnExit>
          <img src={image} alt={`slide ${index}`} />
        </Slide>
      ))}
      <IconButton className="absolute top-1/2 left-0 transform -translate-y-1/2" onClick={handlePrev}>
        <ArrowBackIosSharpIcon />
      </IconButton>
      <IconButton className="absolute top-1/2 right-0 transform -translate-y-1/2" onClick={handleNext}>
        <ArrowForwardIosSharpIcon />
      </IconButton>
    </div>
  );
};

export default Slideshow;