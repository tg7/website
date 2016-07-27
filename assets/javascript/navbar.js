$(document).ready(function() {

$(".button-collapse").sideNav();

// For Stick Footer
var mn = $('.main-nav');
var top = $('.top');

// $(window).scroll(function() {

//   if ($(this).scrollTop() > 300) {
//     mn.addClass('nav-scrolled');
//     top.hide();
//     console.log('added fixed');
//   } else {
//     mn.removeClass('nav-scrolled');
//     top.show();
//     console.log('removed fixed');
//   }

// });
  
  //Enables Fullscreen Slider 
    $('.slider').slider({full_width: true});
   

  //Triggers Modal To Pop Up when clicked
    $('.modal-trigger').leanModal();
  });
