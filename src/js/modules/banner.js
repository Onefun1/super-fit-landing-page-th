export default () => {
  // $(document).ready(function () {
  //   var banner = $(".banner");
  //   banner.fadeOut();
  //   if ($(".hide1")) {
  //     let scrollBottom = $(window).scrollTop() + $(window).height();

  //     $(window).on("scroll", function () {
  //       if (
  //         $(window).scrollTop() > 300 &&
  //         $(window).scrollTop() < $(".hide1").offset().top + 100
  //       ) {
  //         banner.fadeIn();
  //       } else {
  //         banner.fadeOut();
  //       }
  //     });
  //   }
  // });
  //баннер в стилях желательно скрыть

  $(window).on("scroll resize", function () {
    hideBannerScroll(".x_order_form"); // сюда через кому дописываем классы блоков, которые должны скрыть баннер
  });

  function hideBannerScroll() {
    const e = $(".banner"),
      t = $(".main-banner"),
      i = $(window).scrollTop(),
      o = i + $(window).height(),
      r = $(window).width();
    let n = 0;
    for (let e = 0; e < arguments.length; e++)
      $(arguments[e]).each(function (e, t) {
        let a = $(t).offset().top,
          c = a + $(t).outerHeight(),
          s = $(t).offset().left,
          l = s + $(t).width();
        a <= o && c >= i && s <= r && l >= 0 && (n += 1);
      });
    i <= 100 || n > 0
      ? e.fadeOut()
      : e.fadeIn().css({
          bottom: t.outerHeight(),
        });
  }
};
