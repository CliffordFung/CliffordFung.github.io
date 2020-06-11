var topButton = document.getElementById("top-button");
var navBar = document.getElementById("navbar-container");
var navBarItems = document.getElementsByClassName("navbar-container-items");

window.onscroll = function() {onScroll()};

// water ripple effect
jQuery(document).ready(function(){
  try {
    $('.landing-page-container').ripples({
      dropRadius: 30,
      perturbance: 0.05,
      resolution: 720
    });
  }
  catch {
    // silently fail for devices that don't support this plugin
  }
});

// return to top of the page when top-button is clicked
function topOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// change navbar background and display button on scroll
function onScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      console.log(navBarItems);
      topButton.style.display = "block";
      navBar.style.backgroundColor = "white";
      navBar.style.boxShadow = "0 0 20px 0 #ccc";
      for (let i=0; i < navBarItems.length; i++) {
        navBarItems[i].style["color"] = "black";
      }
    } else {
      topButton.style.display = "none";
      navBar.style.backgroundColor = "transparent";
      navBar.style.boxShadow = "none";
      for (let i=0; i < navBarItems.length; i++) {
        navBarItems[i].style["color"] = "white";
      }
    }
  }

