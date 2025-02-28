// components/Countdown.js
import React from 'react';

function Countdown({ isBirthday, timeLeft }) {
  const { days, hours, minutes, seconds } = timeLeft;
  
  return (
    <h2 className="countdown">
      {isBirthday
        ? "Happy birthday Johannaaaaaaaa!"
        : `But only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left!`}
    </h2>
  );
}

export default Countdown;