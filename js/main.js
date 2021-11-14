// scroll link
$(function(){
    var headerHeight = 70;
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
});

// navbar
$(function() {
  $('.btn-gNav').on("click", function(){
    $(this).toggleClass('open');
    $('#gNav').toggleClass('open');
  });

});

$(function() {
  $('.gNav-menu li a').on("click", function(){
    $('.btn-gNav').removeClass('open');
    $('#gNav').removeClass('open');
  });
});