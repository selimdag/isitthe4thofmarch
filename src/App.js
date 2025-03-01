import React, { useState, useEffect } from 'react';
import './App.css';
import BirthdayMessage from './components/BirthdayMessage';
import Countdown from './components/Countdown';
import EmojiRain from './components/EmojiRain';

function App() {
  // A single, consistent function to check birthday
  const checkIfBirthday = () => {    

    const now = new Date();
    return now.getMonth() === 2 && now.getDate() === 1; // March 4th (2 is March)
  };

  const [isBirthday, setIsBirthday] = useState(checkIfBirthday());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      // Use the same function for consistency
      setIsBirthday(checkIfBirthday());
      
      // Calculate countdown to March 4th (this still shows the countdown)
      const birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March
      if (now > birthday) {
        birthday.setFullYear(birthday.getFullYear() + 1);
      }

      const diff = birthday - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">
      <div className="content">
        <BirthdayMessage isBirthday={isBirthday} />
        <Countdown isBirthday={isBirthday} timeLeft={timeLeft} />
      </div>
      <EmojiRain isBirthday={isBirthday} />
    </div>
  );
}

export default App;