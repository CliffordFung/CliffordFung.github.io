/* water ripple effect */
jQuery(document).ready(function(){
  $('.landing-page').ripples({
    dropRadius: 30,
    perturbance: 0.05,
    resolution: 720
  });
});

/* skill bars */
$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});