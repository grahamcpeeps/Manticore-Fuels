$(function(){
  new WOW().init();

  $(".nav-link").click(function(){
    $(".tab-pane").addClass("animated zoomIn delay-2s");

  });
});
