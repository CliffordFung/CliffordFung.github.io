/* water ripple effect */
jQuery(document).ready(function () {
  $(".landing-page").ripples({
    dropRadius: 30,
    perturbance: 0.05,
    resolution: 720,
  });
});

// Define the function to add event listeners
function addEventListeners() {
  container.addEventListener("wheel", handleContainerWheel);
  child.addEventListener("wheel", handleChildWheel);
}

// Define the function to remove event listeners
function removeEventListeners() {
  container.removeEventListener("wheel", handleContainerWheel);
  child.removeEventListener("wheel", handleChildWheel);
}

// Define the event handlers
function handleContainerWheel(event) {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: "smooth",
  });
}

function handleChildWheel(event) {
  event.stopPropagation();
}

// Initial setup
const container = document.querySelector(".scroll-container");
const child = document.querySelector(".right-column");

// Add event listeners initially
addEventListeners();

// Function to check viewport width and toggle event listeners
function toggleEventListeners() {
  if (window.innerWidth <= 1024 || window.innerHeight <= 730) {
    removeEventListeners();
  } else {
    addEventListeners();
  }
}

// Call toggleEventListeners initially
toggleEventListeners();

// Listen for resize events and toggle event listeners accordingly
window.addEventListener("resize", toggleEventListeners);
