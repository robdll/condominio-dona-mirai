'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Carousel({ slides = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance slides every 4.5 seconds
  useEffect(() => {
    if (slides.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [slides.length, isHovered]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  if (slides.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">Nenhum slide disponível</p>
      </div>
    );
  }

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden px-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slide Content */}
      <div className="relative">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center min-h-[500px]">
          {/* Content Side */}
          <div className="flex-1 px-4 py-8 md:px-6 md:py-12">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                {currentSlideData.title}
              </h2>
              <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
                {currentSlideData.description}
              </p>
              {currentSlideData.buttonText && currentSlideData.buttonLink && (
                <Link
                  href={currentSlideData.buttonLink}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {currentSlideData.buttonText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
          
          {/* Image Side */}
          <div className="flex-1 px-4 py-8 md:px-6 md:py-12">
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src={currentSlideData.image}
                alt={currentSlideData.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Image on top */}
          <div className="relative h-64 w-full">
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.title}
              fill
              className="object-contain"
            />
          </div>
          
          {/* Content below */}
          <div className="px-4 py-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {currentSlideData.title}
            </h2>
            <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
              {currentSlideData.description}
            </p>
            {currentSlideData.buttonText && currentSlideData.buttonLink && (
              <Link
                href={currentSlideData.buttonLink}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                {currentSlideData.buttonText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      {slides.length > 1 && (
        <>
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200/80 dark:bg-gray-700/80 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentSlide
                    ? 'bg-blue-600 dark:bg-blue-400'
                    : 'bg-white/60 dark:bg-gray-600/60 hover:bg-white/80 dark:hover:bg-gray-600/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
