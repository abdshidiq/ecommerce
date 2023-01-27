// Select the body element
const body = document.querySelector('body');

// Create an array of colors to be used for the animation
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Initialize the index to 0
let index = 0;

// Create an interval that will change the background color every second
setInterval(() => {
    // Update the background color of the body using the current index
    body.style.backgroundColor = colors[index];

    // Increment the index
    index = (index + 1) % colors.length;
}, 1000);