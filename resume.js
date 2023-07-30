var layers = document.querySelectorAll(".left-layer");
for (const layer of layers) {
  //layer.classList.add("active");
setTimeout(() => {
  layer.classList.add("active");
}, 10);
};

// Get a reference to the div element
const disappearingDiv = document.getElementById('disappearingDiv');

// Function to hide the div after 1 second
function hideDiv() {
  disappearingDiv.classList.add('hidden');
}

// Call the hideDiv function after 1 second (1000 milliseconds)
setTimeout(hideDiv, 1800);
