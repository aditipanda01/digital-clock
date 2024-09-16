// Get the clock and button elements
const clockElement = document.getElementById('clock');
const toggleButton = document.getElementById('toggleFormat');

// Variable to keep track of the current time format (24-hour by default)
let is24HourFormat = true;

// Function to update the clock every second
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); // Get the current seconds

    if (!is24HourFormat) {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format, 12 is displayed as 12, not 0
        clockElement.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)} ${period}`;
    } else {
        clockElement.textContent = `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
    }
}

// Function to add a leading zero to single-digit numbers
function padTime(time) {
    return time.toString().padStart(2, '0');
}

// Toggle between 12-hour and 24-hour formats
toggleButton.addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    toggleButton.textContent = is24HourFormat ? 'Switch to 12-hour format' : 'Switch to 24-hour format';
});

// Update the clock every second
setInterval(updateClock, 1000);

// Call the updateClock function immediately to show the current time
updateClock();
