import React from 'react';
import ImageSlideshow from './ImageSlideshow';
import sadPicture from '../assets/sad_picture.jpeg';

// Import all your happy images
import happyPicture1 from '../assets/happy_picture1.jpeg';
import happyPicture2 from '../assets/happy_picture2.jpeg';
import happyPicture3 from '../assets/happy_picture3.jpeg';
import happyPicture4 from '../assets/happy_picture4.jpeg';
import happyPicture5 from '../assets/happy_picture5.jpeg';
import happyPicture6 from '../assets/happy_picture6.jpeg';
import happyPicture7 from '../assets/happy_picture7.jpeg';
import happyPicture8 from '../assets/happy_picture8.jpeg';
import happyPicture9 from '../assets/happy_picture9.jpeg';
import happyPicture10 from '../assets/happy_picture10.jpeg';
import happyPicture11 from '../assets/happy_picture11.jpeg';
import happyPicture12 from '../assets/happy_picture12.jpeg';
import happyPicture13 from '../assets/happy_picture13.jpeg';
import happyPicture14 from '../assets/happy_picture14.jpeg';
import happyPicture15 from '../assets/happy_picture15.jpeg';
import happyPicture16 from '../assets/happy_picture16.jpeg';
import happyPicture17 from '../assets/happy_picture17.jpeg';
import happyPicture18 from '../assets/happy_picture18.jpeg';

function BirthdayMessage({ isBirthday }) {
  // Array of happy images for the slideshow
  const happyImages = [
    happyPicture1,
    happyPicture2,
    happyPicture3,
    happyPicture4,
    happyPicture5,
    happyPicture6,
    happyPicture7,
    happyPicture8,
    happyPicture9,
    happyPicture10,
    happyPicture11,
    happyPicture12,
    happyPicture13,
    happyPicture14,
    happyPicture15,
    happyPicture16,
    happyPicture17,
    happyPicture18
  ];

  return (
    <div className="birthday-message">
      <h1>
        {isBirthday
          ? "Yes, today is the 4th of March! 🎉🎂🎈"
          : "No, it's not the 4th of March yet. 🙄"}
      </h1>
      
      {isBirthday ? (
        <ImageSlideshow 
          images={happyImages} 
          interval={5000} 
          isActive={true} 
        />
      ) : (
        <img 
          src={sadPicture} 
          alt="Not yet" 
          className="birthday-image"
        />
      )}
    </div>
  );
}

export default BirthdayMessage;