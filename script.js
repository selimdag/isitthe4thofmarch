window.onload = function() {
    var messageElement = document.getElementById('message');
    var imageElement = document.getElementById('image');
    var daysLeftElement = document.getElementById('daysLeft');

    var today = new Date();
    var birthday = new Date(today.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

    if (today.getMonth() == birthday.getMonth() && today.getDate() == birthday.getDate()) {
        messageElement.textContent = "Yes, it's the 4th of March! 🎉🎂🎈";
        imageElement.src = 'happy_picture.jpg';
    } else {
        if (today > birthday) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        var oneDay = 1000 * 60 * 60 * 24;
        var daysLeft = Math.ceil((birthday.getTime() - today.getTime()) / oneDay);
        messageElement.textContent = "No, it's not the 4th of March 😞";
        daysLeftElement.textContent = "Only " + daysLeft + " days left!";
    }
}