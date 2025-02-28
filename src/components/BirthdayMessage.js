// components/BirthdayMessage.js
import React from 'react';
import happyPicture from '../assets/happy_picture.jpeg';
import sadPicture from '../assets/sad_picture.jpeg';

function BirthdayMessage({ isBirthday }) {
  return (
    <div className="birthday-message">
      <h1>
        {isBirthday
          ? "Yes, today is the 4th of March! 🎉🎂🎈"
          : "No, it's not the 4th of March yet. 🙄"}
      </h1>
      <img 
        src={isBirthday ? happyPicture : sadPicture} 
        alt={isBirthday ? "Happy birthday!" : "Not yet"} 
        className="birthday-image"
      />
    </div>
  );
}

export default BirthdayMessage;