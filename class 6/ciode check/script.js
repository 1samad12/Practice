function updateTime() {
    const currentTimeElement = document.getElementById('current-time');
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString();

    currentTimeElement.textContent = `Current Time: ${formattedTime}`;
}

// Call updateTime every second to update the time
setInterval(updateTime, 1000);

// Initial call to display the time immediately
updateTime();
