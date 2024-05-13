window.onload = function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');
    var emojiRainContainer = document.getElementById('emojiRain');

    function updateCountdown() {
        var now = new Date();
        var birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        if (now.getMonth() == birthday.getMonth() && now.getDate() == birthday.getDate()) {
            messageElement.textContent = "Yes, today is the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpeg';
            daysLeftElement.textContent = "";
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
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update the countdown every 1 second

    // Create and animate emojis
    function createEmoji() {
        var emoji = document.createElement('span');
        emoji.textContent = '😞';
        emoji.classList.add('emoji');
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDelay = Math.random() * -20 + 's';
        emojiRainContainer.appendChild(emoji);

        setTimeout(function() {
            emoji.remove();
        }, 5000);
    }

    setInterval(createEmoji, 500);
}