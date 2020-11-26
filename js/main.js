$(document).ready(function($) {
$(window).scroll(function(){
if ($(this).scrollTop() > 20) {
$('#navbar_top').addClass("fixed-top");
// add padding top to show content behind navbar
}else{
$('#navbar_top').removeClass("fixed-top");
}
});
$(".search-box") .click(function(event) {
$(".show-box") .toggle();
});
$('.lightbox').topbox();
//mixedactive
var mixer = mixitup('.work-items');
/*owl active*/
$('.owl-carousel.review').owlCarousel({
items:2,
loop:true,
margin:20,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
responsiveClass:true,
responsive:{
0:{
items:1,
nav:false
},
600:{
items:1,
nav:false
},
1000:{
items:2,
nav:false,
}
}
});
/* owlcarousel plugin for client logo */
$('.owl-carousel.client-logo').owlCarousel({
items:4,
loop:true,
margin:20,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
responsiveClass:true,
responsive:{
0:{
items:1,
nav:false
},
600:{
items:3,
nav:false
},
992:{
items:4,
nav:false,
}
}
});
// must be an array, could have only one element
let visibilityIds = ['#counters_1'];
// default counter class
let counterClass ='.counter';
// default animation speed
let defaultSpeed = 3000;
//scroll top
$(window).scroll(function () {
if ($(this).scrollTop() > 300) {
$('.scroll-top').fadeIn();
} else {
$('.scroll-top').fadeOut();
}
});
//smooth scroller
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});