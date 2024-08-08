import React, { useEffect, useState } from 'react';

const Carousel = () => {
  const images = [
    'https://wallpapercave.com/wp/wp357124.jpg',
    'https://static.zara.net/assets/public/85a3/20f7/2d574615a4e2/baed10c18b3b/image-landscape-default-fill-6586beb2-63a2-42d7-88f5-f88f3b14c9fb-default_0/image-landscape-default-fill-6586beb2-63a2-42d7-88f5-f88f3b14c9fb-default_0.jpg?ts=1722420579114&w=1920',
    'https://i.pinimg.com/originals/68/6e/ec/686eec21f0403bccf070dbd72d5f696c.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const animationStyle = {
    animation: 'wave-animation 2s infinite',
  };

  const keyframes = `
    @keyframes wave-animation {
      0%, 100% {
        color: white;
      }
      50% {
        color: #B2456E;
      }
    }
  `;

  return (
    <div className="p-2 relative w-full lg:h-[90vh] h-[50vh] md:h-96 overflow-hidden">
      <style>{keyframes}</style>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="flex items-center justify-center h-full w-full bg-black bg-opacity-50">
            <h2 className="text-gray-400 font-bold text-xl md:text-6xl">
              <span style={animationStyle} className='lg:text-8xl text-xl'>ZOLA</span> YOUR FASHION STORE
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
