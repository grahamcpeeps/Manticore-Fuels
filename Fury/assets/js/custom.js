$(function(){
  new WOW().init();

  $(".nav-link.p-4").on("click",function(){
    $(".tab-pane").addClass("animated zoomIn");

  });

  $(".wow.safety-section").each(function() {
  var wowHeight = $(this).height();
  $(this).attr("data-wow-offset", wowHeight);
});
});
