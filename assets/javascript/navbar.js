$(document).ready(function() {


// $(".button-collapse").sideNav();

var mn = $('.nav-wrapper');

$(window).scroll(function() {
  if ($(this).scrollTop() > 300) {
    mn.addClass('nav-scrolled');
    console.log('added fixed');
  } else {
    mn.removeClass('nav-scrolled');
    console.log('removed fixed');

  }

});

});