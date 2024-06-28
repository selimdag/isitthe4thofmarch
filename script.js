window.onload = function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');
    var emojiRainContainer = document.getElementById('emojiRain');
    var maxEmojis = 100; // Limit the number of emojis
    var emojiCount = 0; // Track the current number of emojis

    function updateCountdown() {
        var now = new Date();
        var birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        // If today's date is past March 4th, set the birthday to next year's March 4th
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

        if (now.getMonth() == 2 && now.getDate() == 4) {
            messageElement.textContent = "Yes, today is the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "Happy birthday Johannaaaaaaaa!";
            createEmojiRain(['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆']);
        } else if (now.getMonth() == 7 && now.getDate() == 3) {
            messageElement.textContent = "No, it's not the 4th of March yet. But it's 3rd August. Johanna is 11111 days old today!!! 🥳";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "And only " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds left till 4th March!";
            createEmojiRain(['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆']);
        } else {
            messageElement.textContent = "No, it's not the 4th of March yet. 🙄";
            imageElement.src = 'sad_picture.jpeg';
            daysLeftElement.textContent = "But only " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds left!";
            createEmojiRain(['🥺', '😔', '🙄', '😒', '😞']);
        }
    }

    function createEmojiRain(emojis) {
        setInterval(function() {
            if (emojiCount >= maxEmojis) {
                return;
            }
            var emoji = emojis[Math.floor(Math.random() * emojis.length)];
            var left = Math.random() * 100;
            var animationDuration = 10 + Math.random() * 5; // Randomize duration between 10s and 15s
            var emojiElement = document.createElement('div');
            emojiElement.className = 'emoji';
            emojiElement.style.left = `${left}vw`;
            emojiElement.style.animationDuration = `${animationDuration}s`;
            emojiElement.textContent = emoji;
            emojiElement.addEventListener('animationend', function() {
                emojiElement.remove();
                emojiCount--;
            });
            emojiRainContainer.appendChild(emojiElement);
            emojiCount++;
        }, 200); // Adjust this interval for density of emojis
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}
