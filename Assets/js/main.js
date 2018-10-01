$(document).ready(function(){
  //init scrollspy
  $('.scrollspy').scrollSpy();

  //init parallax
  $('.parallax').parallax();

  //init tabs
  $('.tabs').tabs();

  //init dropdown
  $('.dropdown-trigger').dropdown();

  //init pushpin
  $('.pushpin').pushpin();

  $('#navbar').pushpin({
    top: $('#navbar').offset().top
  });


//card hover
$(function() {
  $('.card').hover(
      function() {
          $(this).find('> .card-image > img.activator').click();
      }, function() {
          $(this).find('> .card-reveal > .card-title').click();
      }
  );
});

})
