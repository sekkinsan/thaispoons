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

})