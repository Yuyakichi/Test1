$(function () {
  $('.single-item').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    fade: true,
  });
});

$(function () {
  $(window).scroll(function () {
    $('.left-to-right').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  });
});

