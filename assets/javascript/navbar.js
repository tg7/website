$(document).ready(function() {

$(".button-collapse").sideNav();

// For Stick Footer
var mn = $('.main-nav');

$(window).scroll(function() {

  if ($(this).scrollTop() > 300) {
    mn.addClass('nav-scrolled');
    console.log('added fixed');
  } else {
    mn.removeClass('nav-scrolled');
    console.log('removed fixed');
  }

});
  
  //Enables Fullscreen Slider 
    $('.slider').slider({full_width: true});
   

  //Triggers Modal To Pop Up when clicked
    $('.modal-trigger').leanModal();
  });
