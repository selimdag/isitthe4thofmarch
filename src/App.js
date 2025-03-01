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
      
      setIsBirthday(checkIfBirthday());
      
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