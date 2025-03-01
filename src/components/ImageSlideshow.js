import React, { useState, useEffect } from 'react';

// Create a slideshow component that rotates through images
function ImageSlideshow({ images, interval = 5000, isActive = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only run the slideshow if it's active and we have multiple images
    if (!isActive || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    // Clean up the interval when component unmounts
    return () => clearInterval(timer);
  }, [images, interval, isActive]);

  // If we have no images, return null
  if (images.length === 0) return null;

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slideshow image ${index + 1}`}
          className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
          style={{ 
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
    </div>
  );
}

export default ImageSlideshow;