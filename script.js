window.onload = function() {
    const messageElement = document.getElementById('message');
    const imageElement = document.getElementById('image');
    const daysLeftElement = document.getElementById('daysLeft');
    const emojiRainContainer = document.getElementById('emojiRain');
    const maxEmojis = 100; // Limit the number of emojis on screen
    const emojiElements = []; // Track emojis on screen

    function updateCountdown() {
        const now = new Date();
        const birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        // If today's date is past March 4th, set the birthday to next year's March 4th
        if (now > birthday) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }

        const diff = birthday - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);

        if (now.getMonth() === 2 && now.getDate() === 4) {
            messageElement.textContent = "Yes, today is the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "Happy birthday Johannaaaaaaaa!";
            startEmojiRain(['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆']);
        } else {
            messageElement.textContent = "No, it's not the 4th of March yet. 🙄";
            imageElement.src = 'sad_picture.jpeg';
            daysLeftElement.textContent = `But only ${days} days, ${hours} hours, ${mins} minutes, and ${secs} seconds left!`;
            startEmojiRain(['🥺', '😔', '🙄', '😒', '😞']);
        }
    }

    function startEmojiRain(emojis) {
        setInterval(() => {
            // Remove excess emojis
            while (emojiElements.length > maxEmojis) {
                const oldEmoji = emojiElements.shift();
                oldEmoji.remove();
            }

            // Add a new emoji
            if (emojiElements.length < maxEmojis) {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                const emojiElement = document.createElement('div');
                emojiElement.className = 'emoji';
                emojiElement.style.left = `${Math.random() * 100}vw`;
                emojiElement.style.animationDuration = `${10 + Math.random() * 5}s`;
                emojiElement.textContent = emoji;

                // Remove emoji after animation
                emojiElement.addEventListener('animationend', () => {
                    const index = emojiElements.indexOf(emojiElement);
                    if (index !== -1) {
                        emojiElements.splice(index, 1);
                    }
                    emojiElement.remove();
                });

                emojiRainContainer.appendChild(emojiElement);
                emojiElements.push(emojiElement);
            }
        }, 200); // Add emojis at a constant rate
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update countdown every second
};
