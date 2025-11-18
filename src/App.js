import React, { useState, useEffect } from 'react';
import './App.css';
import BirthdayMessage from './components/BirthdayMessage';
import Countdown from './components/Countdown';
import EmojiRain from './components/EmojiRain';

function App() {
  const checkIfBirthday = () => {    
    const now = new Date();
    return now.getMonth() === 2 && now.getDate() === 4;
  };

  const checkIfChristmas = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    
    // Christmas period: November 17th to January 7th
    // November (month 10) from day 17 onwards
    // December (month 11) all days
    // January (month 0) up to day 7
    return (
      (month === 10 && day >= 17) || // November 17-30
      month === 11 ||                 // All of December
      (month === 0 && day <= 7)       // January 1-7
    );
  };

  const [isBirthday, setIsBirthday] = useState(checkIfBirthday());
  const [isChristmas, setIsChristmas] = useState(checkIfChristmas());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      
      setIsBirthday(checkIfBirthday());
      setIsChristmas(checkIfChristmas());
      
      const birthday = new Date(now.getFullYear(), 2, 4);
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
    <div className={`app ${isChristmas ? 'christmas-theme' : ''}`}>
      <div className="content">
        <BirthdayMessage isBirthday={isBirthday} isChristmas={isChristmas} />
        <Countdown isBirthday={isBirthday} timeLeft={timeLeft} isChristmas={isChristmas} />
      </div>
      <EmojiRain isBirthday={isBirthday} isChristmas={isChristmas} />
    </div>
  );
}

export default App;
