$(function () {
  let win = $(".header").offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() >= win) {
      $(".header").addClass("nav");
      $(".main").css("margin-top", "300px");
      $(".click.open").toggleClass('op');
    } else {
      $(".header").removeClass("nav");
      $(".main").css("margin-top", "200px");
    }
  });

  $(".click").click(function () {
    $(".navbar").toggleClass("active");
  });

  $(window).scroll(function(){
    if($(this).scrollTop() >= ($(".blocks").offset().top-200)){
        $(".block").addClass("blog");
    }
    else{
        $(".block").removeClass("blog");
    }
  });
});
