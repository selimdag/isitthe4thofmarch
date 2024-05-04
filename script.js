window.onload = function() {
    var contentDiv = document.getElementById('content');
    var today = new Date();
    var birthday = new Date(today.getFullYear(), 2, 4); // Month is 0-indexed, so 2 is March

    if (today.getMonth() == birthday.getMonth() && today.getDate() == birthday.getDate()) {
        contentDiv.innerHTML = "<h1>Yes, it's the 4th of March! 🎉🎂🎈</h1><img src='happy_picture.jpg' alt='Happy Picture'>";
    } else {
        if (today > birthday) {
            birthday.setFullYear(birthday.getFullYear() + 1);
        }
        var oneDay = 1000 * 60 * 60 * 24;
        var daysLeft = Math.ceil((birthday.getTime() - today.getTime()) / oneDay);
        contentDiv.innerHTML = "<h1>No, it's not the 4th of March 😞</h1><p>Only " + daysLeft + " days left!</p>";
    }
}