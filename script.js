window.onload = function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');
    var emojiRainContainer = document.getElementById('emojiRain');

    function updateCountdown() {
        var now = new Date();
        var birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        if (now.getMonth() == 2 && now.getDate() == 4) {
            messageElement.textContent = "Yes, today is the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "";
            createEmojiRain(['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆']);
        } else if (now.getMonth() == 7 && now.getDate() == 3) {
            messageElement.textContent = "No, it's not the 4th of March yet. But it's 3rd August. Johanna is 11111 days old today!!! 🥳";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "";
            createEmojiRain(['🎊', '🎉', '🍸', '🍹', '🍾', '👯‍♀️', '🎂', '🥳', '🎆']);
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
            createEmojiRain(['🥺', '😔', '🙄', '😒', '😞']);
        }
    }

    function createEmojiRain(emojis) {
        var maxEmojis = 20; // Maximum number of emojis on screen at once
        var animationDuration = 8; // seconds
        var creationInterval = 400; // milliseconds

        function createEmoji() {
            if (emojiRainContainer.children.length >= maxEmojis) {
                return; // Don't create new emoji if we've reached the maximum
            }

            var emoji = document.createElement('span');
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.classList.add('emoji');

            var screenWidth = window.innerWidth;
            if (screenWidth <= 480) {
                emoji.style.fontSize = '24px';
            } else if (screenWidth <= 768) {
                emoji.style.fontSize = '36px';
            } else {
                emoji.style.fontSize = '48px';
            }

            emoji.style.left = Math.random() * 100 + 'vw';
            emoji.style.animationDuration = animationDuration + 's';
            emoji.style.top = -50 + 'px';

            emojiRainContainer.appendChild(emoji);

            emoji.addEventListener('animationend', function() {
                emoji.remove();
            });
        }

        // Clear any existing emojis
        emojiRainContainer.innerHTML = '';

        // Create initial set of emojis
        for (var i = 0; i < maxEmojis; i++) {
            setTimeout(createEmoji, i * (creationInterval / 2));
        }

        // Continuously create new emojis
        setInterval(createEmoji, creationInterval);
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}