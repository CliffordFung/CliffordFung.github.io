var topButton = document.getElementById("top-button");
var navBar = document.getElementById("navbar-container");
var navBarLi = document.getElementsByClassName("navbar-container-li");

window.onscroll = function() {onScroll()};

jQuery(document).ready(function(){
  $('.landing-page-container').ripples({

  });
});

// return to top of the page when top-button is clicked
function topOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// change navbar background and display button on scroll
function onScroll() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      console.log(navBarLi);
      topButton.style.display = "block";
      navBar.style.backgroundColor = "white";
      navBar.style.borderBottom = "none";
      for (let i=0; i < navBarLi.length; i++) {
        navBarLi[i].style["color"] = "black";
      }
    } else {
      topButton.style.display = "none";
      navBar.style.backgroundColor = "transparent";
      navBar.style.borderBottom = "1px solid rgba(0,0,0,.2)";
      for (let i=0; i < navBarLi.length; i++) {
        navBarLi[i].style["color"] = "white";
      }
    }
  }

