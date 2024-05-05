window.onload = function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');

    function updateCountdown() {
        var now = new Date();
        var birthday = new Date(now.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

        if (now.getMonth() == birthday.getMonth() && now.getDate() == birthday.getDate()) {
            messageElement.textContent = "Yes, it's the 4th of March! 🎉🎂🎈";
            imageElement.src = 'happy_picture.jpg';
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

            daysLeftElement.textContent = "Only " + days + " days, " + hours + " hours, " + mins + " minutes, and " + secs + " seconds left!";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000); // Update the countdown every 1 second
}