window.onload = function() {

function parallax() {
  var layer1 = document.getElementbyId('test');
  layer1.style.top = -(window.pageYOffset/ 4) + 'px';
  window.addEventListener("scroll", parallax, false);
}

};