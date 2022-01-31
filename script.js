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
    const wHeight = $(window).height();
    const scrollAmount = $(window).scrollTop();
    $('.scrollanime').each(function () {
      const targetPosition = $(this).offset().top;
      if (scrollAmount > targetPosition - wHeight + 100) {
        $(this).addClass("fadeInDown");
      }
    });
  });
});

