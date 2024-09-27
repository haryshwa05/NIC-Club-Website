"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import imagesData from './images.json'; // Import the JSON file

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // To track the ongoing transition
  const carouselRef = useRef(null);

  const images = [...imagesData.images]; 
  const totalSlides = images.length; // Total number of unique slides

  // Clone the first and last slides to create an infinite loop illusion
  const clonedImages = [images[totalSlides - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNextSlide();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, isTransitioning]);

  const handleNextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex === clonedImages.length - 1) {
      // Reset to the first real slide after the cloned last slide is shown
      carouselRef.current.style.transition = 'none'; // Temporarily disable transition
      setCurrentIndex(1); // Move to the first real slide

      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
      }, 50); // Re-enable transition after the reset
    } else if (currentIndex === 0) {
      // Reset to the last real slide after the cloned first slide is shown
      carouselRef.current.style.transition = 'none';
      setCurrentIndex(totalSlides); // Move to the last real slide

      setTimeout(() => {
        carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
      }, 50);
    }
  };

  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-28 mb-12">
      <h2 className="akira-expanded text-3xl md:text-5xl lg:text-5xl font-bold text-center text-white mb-12">
        VISUAL <span className="text-[#E70C17]">ARCHIVE</span>
      </h2>

      <div className="relative overflow-hidden">
        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // Slide effect by translating the X-axis
          }}
          onTransitionEnd={handleTransitionEnd} // Handle reset on transition end
        >
          {clonedImages.map((imageSet, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex flex-col md:flex-row" // Stacks vertically on small screens, side by side on medium+ screens
              style={{ width: '100%' }} // Ensure the images take full width
            >
              {/* Left half of the gallery */}
              <div className="flex w-full md:w-1/2 flex-wrap">
                <div className="w-1/2 p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[0]}
                    width={500} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[1]}
                    width={500} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
                <div className="w-full p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[2]}
                    width={1000} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
              </div>

              {/* Right half of the gallery */}
              <div className="flex w-full md:w-1/2 flex-wrap">
                <div className="w-full p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[3]}
                    width={1000} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[4]}
                    width={500} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <Image
                    alt="gallery"
                    loading="eager"
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={imageSet[5]}
                    width={500} // Specify the width
                    height={500} // Specify the height
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
