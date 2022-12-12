$(function () {
  $.scrollify({
     section: ".scrollify",
     setHeights: false,
     updateHash: false,
       });
}); // menu
 function openMenu(){document.getElementById('menuBar').style.height="100%";}function closeMenu(){document.getElementById('menuBar').style.height="0%";}// Smooth scroll
  $(function(){$('.menu-items a').on('click', function(){$('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top}, 1000); return false;});});
