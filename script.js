document.addEventListener('DOMContentLoaded', function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');
    var emojiRainContainer = document.getElementById('emojiRain');
    var fireworksContainer = document.getElementById('fireworks');

    // Check if the containers exist before proceeding
    if (!emojiRainContainer || !fireworksContainer) {
        console.error('Error: Could not find emojiRainContainer or fireworksContainer elements.');
        return;
    }

    function updateCountdown() {
        var now = new Date();
        var birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        if (now.getMonth() == birthday.getMonth() && now.getDate() == birthday.getDate()) {
            messageElement.textContent = "Yes, today is the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "";
            emojiRainContainer.style.display = 'none'; // Hide raining emojis
            fireworksContainer.style.display = 'block'; // Show fireworks animation
            startFireworks(); // Start the fireworks animation
            stopEmojiRain(); // Stop the emoji rain
        } else {
            if (now > birthday) {
                birthday.setFullYear(birthday.getFullYear() + 1);
            }

            var diff = birthday - now;
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            diff -= days * (1000 * 60 * 60 * 24);
            var hours = Math.floor(diff / (1000 * 60 * 60));
            diff -= hours * (1000 * 60 * 60);
            var mins = Math.floor(diff / (1000 * 60));
            diff -= mins * (1000 * 60);
            var secs = Math.floor(diff / 1000);

            messageElement.textContent = "No, it's not the 4th of March yet 😞";
            imageElement.src = 'sad_picture.jpeg';
            daysLeftElement.textContent = "But only " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds left!";
            emojiRainContainer.style.display = 'block'; // Show raining emojis
            fireworksContainer.style.display = 'none'; // Hide fireworks animation
            stopFireworks(); // Stop the fireworks animation
            startEmojiRain(); // Start the emoji rain
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Emoji rain
    var emojiRainInterval;

    function startEmojiRain() {
        clearInterval(emojiRainInterval); // Clear any existing interval
        emojiRainInterval = setInterval(createEmoji, 500);
    }

    function stopEmojiRain() {
        clearInterval(emojiRainInterval);
    }

    function createEmoji() {
        var emoji = document.createElement('span');
        emoji.textContent = '😞';
        emoji.classList.add('emoji');

        // Adjust emoji font size based on screen width
        var screenWidth = window.innerWidth;
        if (screenWidth <= 480) {
            emoji.style.fontSize = '24px';
        } else if (screenWidth <= 768) {
            emoji.style.fontSize = '36px';
        } else {
            emoji.style.fontSize = '48px';
        }

        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDelay = Math.random() * -20 + 's';
        emojiRainContainer.appendChild(emoji);

        setTimeout(function() {
            emoji.remove();
        }, 5000);
    }

    // Fireworks animation
    function startFireworks() {
        stopEmojiRain(); // Stop the emoji rain
        for (let i = 0; i < 100; i++) {
            const firework = document.createElement('div');
            firework.classList.add('firework');
            firework.style.setProperty('--x', Math.random() * 100);
            firework.style.setProperty('--y', Math.random() * 100);
            fireworksContainer.appendChild(firework);
        }
    }

    function stopFireworks() {
        const fireworks = fireworksContainer.querySelectorAll('.firework');
        fireworks.forEach(firework => firework.remove());
    }
});