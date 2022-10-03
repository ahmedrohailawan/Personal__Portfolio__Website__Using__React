// holding ready function for 2.2 seconds
$.holdReady(true);
setTimeout(function () {
    $.holdReady(false);
}, 2200);

$(document).ready(function(){
    // loading animation
    $("#loading_start").css("display", "none");

    // typing animation 
    var typed = new Typed(".typing",{
      strings: ["Freelancer","Developer","Designer","Blogger","YouTuber"],
      typeSpeed: 100,
      backSpeed: 60,
      loop:true
    });

    // carousel animation
    $('.carousel').owlCarousel({
      margin :20, 
      loop:true,
      autoplayTime:2000,
      autoplayHoverPause:true,
      responsive: {
          0:{
              items :1,
              nav:false
          },
          600:{
              items :2,
              nav:false
          },
          1000:{
              items :3,
              nav:false
          }
      }
  });
});