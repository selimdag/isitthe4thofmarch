// components/EmojiRain.js
import React, { useEffect, useRef } from 'react';

function EmojiRain({ isBirthday }) {
  const containerRef = useRef(null);
  const emojisRef = useRef([]);
  const maxEmojis = 100;
  
  const happyEmojis = ['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆'];
  const sadEmojis = ['🥺', '😔', '🙄', '😒', '😞'];
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const emojis = isBirthday ? happyEmojis : sadEmojis;
    
    const interval = setInterval(() => {
      // Remove excess emojis
      while (emojisRef.current.length > maxEmojis) {
        const oldEmojiElement = emojisRef.current.shift();
        if (oldEmojiElement && oldEmojiElement.parentNode) {
          oldEmojiElement.parentNode.removeChild(oldEmojiElement);
        }
      }
      
      // Add a new emoji if we're under the limit
      if (emojisRef.current.length < maxEmojis) {
        const emoji = emojis[Math.floor(Math.random() * emojis.length)];
        const emojiElement = document.createElement('div');
        emojiElement.className = 'emoji';
        emojiElement.style.left = `${Math.random() * 100}vw`;
        emojiElement.style.animationDuration = `${10 + Math.random() * 5}s`;
        emojiElement.textContent = emoji;
        
        // Remove emoji after animation
        emojiElement.addEventListener('animationend', () => {
          const index = emojisRef.current.indexOf(emojiElement);
          if (index !== -1) {
            emojisRef.current.splice(index, 1);
          }
          if (emojiElement.parentNode) {
            emojiElement.parentNode.removeChild(emojiElement);
          }
        });
        
        container.appendChild(emojiElement);
        emojisRef.current.push(emojiElement);
      }
    }, 200);
    
    return () => clearInterval(interval);
  }, [isBirthday]);
  
  return <div ref={containerRef} className="emoji-rain"></div>;
}

export default EmojiRain;