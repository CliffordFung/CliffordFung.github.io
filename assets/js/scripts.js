/* water ripple effect */
jQuery(document).ready(function () {
  $(".landing-page").ripples({
    dropRadius: 30,
    perturbance: 0.05,
    resolution: 720,
  });
});

const container = document.querySelector(".scroll-container");
const items = document.querySelector(".slides");
const child = document.querySelector(".right-column");

container.addEventListener("wheel", (event) => {
  event.preventDefault();
  const delta = event.deltaY;

  container.scrollBy({
    top: delta,
    behavior: "smooth",
  });
});

child.addEventListener("wheel", (event) => {
  event.stopPropagation();
});
