import React, { useState } from 'react';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Importing arrow icons

import placeholder from '../placeholder.jpg'


const PastRoversSlider = () => {
  const rovers = [
    { id: 1, image: placeholder, name: 'Rover Alpha', description: 'The first rover to explore Mars.' },
    { id: 2, image: '/rover2.jpg', name: 'Rover Beta', description: 'Known for its advanced navigation system.' },
    { id: 3, image: '/rover3.jpg', name: 'Rover Gamma', description: 'Famous for its durable build and exploration.' },
    { id: 4, image: placeholder, name: 'Rover Mina', description: 'The first rover to explore Mars.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? rovers.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === rovers.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="text-center py-8 bg-gray-50 dark:bg-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Past Rovers</h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Slider Content */}
        <div className="overflow-hidden rounded-lg border border-gray-200 relative">
          <img
            src={rovers[currentIndex].image}
            alt={rovers[currentIndex].name}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex justify-between items-center px-4">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-200 bg-opacity-70 hover:bg-opacity-100 rounded-full"
            >
              <FiChevronLeft size={32} />
            </button>
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="p-3 bg-gray-200 bg-opacity-70 hover:bg-opacity-100 rounded-full"
            >
              <FiChevronRight size={32} />
            </button>
          </div>
        </div>
        {/* Rover Info */}
        <div className="mt-6">
          <h2 className="text-3xl font-semibold">{rovers[currentIndex].name}</h2>
          <p className="text-gray-600 text-lg">{rovers[currentIndex].description}</p>
        </div>
      </div>
    </section>
  );
};

export default PastRoversSlider;
