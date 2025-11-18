// components/Countdown.js
import React from 'react';

function Countdown({ isBirthday, timeLeft, isChristmas }) {
  const { days, hours, minutes, seconds } = timeLeft;
  
  // Determine the countdown text
  const getCountdownText = () => {
    if (isBirthday) {
      return "Happy birthday, Johannaaaaaa! 🎉";
    } else if (isChristmas) {
      return `And only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left to the 4th of March!`;
    } else {
      return `But only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left!`;
    }
  };
  
  return (
    <div className="countdown-container">
      <h2 className="countdown">
        {getCountdownText()}
      </h2>
      
      {isBirthday && (
        <h3 className="additional-birthday-message">
          And all the other nice people around the world whose birthday is today! 🥳
        </h3>
      )}
    </div>
  );
}

export default Countdown;