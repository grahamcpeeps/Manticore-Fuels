$(function(){
  new WOW().init();

  $(".nav-link.p-4").on("click",function(){
    $(".tab-pane").addClass("animated zoomIn");

  });
});
