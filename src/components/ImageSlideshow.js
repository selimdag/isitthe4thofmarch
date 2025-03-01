import React, { useState, useEffect, useRef } from 'react';

function ImageSlideshow({ images, interval = 5000, isActive = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Use refs to avoid dependencies that trigger useEffect reruns
  const imagesRef = useRef(images);
  const isActiveRef = useRef(isActive);
  const intervalRef = useRef(interval);
  
  // Update refs when props change
  useEffect(() => {
    imagesRef.current = images;
    isActiveRef.current = isActive;
    intervalRef.current = interval;
  }, [images, isActive, interval]);
  
  // Set up the timer just once on mount
  useEffect(() => {
    // Function to advance to next image
    const advanceSlide = () => {
      if (!isActiveRef.current || imagesRef.current.length <= 1) return;
      
      setCurrentIndex(prevIndex => {
        const newIndex = (prevIndex + 1) % imagesRef.current.length;
        return newIndex;
      });
    };
    
    // Set up the interval
    const timer = setInterval(advanceSlide, intervalRef.current);
    
    // Clean up on unmount
    return () => {
      clearInterval(timer);
    };
  }, []); // Empty dependency array - only run on mount/unmount

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