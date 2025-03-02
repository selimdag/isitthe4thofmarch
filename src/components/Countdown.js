// components/Countdown.js
import React from 'react';

function Countdown({ isBirthday, timeLeft }) {
  const { days, hours, minutes, seconds } = timeLeft;
  
  return (
    <div className="countdown-container">
      <h2 className="countdown">
        {isBirthday
          ? "Happy birthday Johannaaaaaa! 🎉"
          : `But only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left!`}
      </h2>
      
      {isBirthday && (
        <h3 className="additional-birthday-message">
          And all the other nice people around the world, who have birthdays today! 🥳
        </h3>
      )}
    </div>
  );
}

export default Countdown;