$(document).ready(function() {

$(".button-collapse").sideNav();

// For Stick Footer
var mn = $('.main-nav');
var top = $('.top');

//Changes Color Of Footer

// $(window).scroll(function() {

//   if ($(this).scroll() > 617) {
//     mn.addClass('nav-scrolled', 'transColor');

//     console.log('added new-color');
//   } else {
//     mn.removeClass('nav-scrolled');
//     console.log('removed new-color');
//   }

// });
  
  //Enables Fullscreen Slider 
    $('.slider').slider({full_width: true});
   

  //Triggers Modal To Pop Up when clicked
    $('.modal-trigger').leanModal();
  });
