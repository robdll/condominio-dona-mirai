import Link from 'next/link';
import Image from 'next/image';

export default function SlideCard({ slide }) {
  return (
    <div className="relative">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center min-h-[500px]">
        {/* Content Side */}
        <div className="flex-1 px-4 py-8 md:px-6 md:py-12">
          <div className="max-w-lg">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {slide.title}
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-8 leading-relaxed">
              {slide.description}
            </p>
            {slide.buttonText && slide.buttonLink && (
              <Link
                href={slide.buttonLink}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {slide.buttonText}
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
              src={slide.image}
              alt={slide.title}
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
            src={slide.image}
            alt={slide.title}
            fill
            className="object-contain"
          />
        </div>
        
        {/* Content below */}
        <div className="px-4 py-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {slide.title}
          </h2>
          <p className="text-gray-800 dark:text-gray-200 mb-6 leading-relaxed">
            {slide.description}
          </p>
          {slide.buttonText && slide.buttonLink && (
            <Link
              href={slide.buttonLink}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              {slide.buttonText}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
