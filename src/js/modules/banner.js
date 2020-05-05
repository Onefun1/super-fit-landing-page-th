export default () => {
  $(document).ready(function () {
    var banner = $(".banner");
    banner.fadeOut();
    if ($(".hide1")) {
      let scrollBottom = $(window).scrollTop() + $(window).height();

      $(window).on("scroll", function () {
        if (
          $(window).scrollTop() > 300 &&
          $(window).scrollTop() < $(".hide1").offset().top + 100
        ) {
          banner.fadeIn();
        } else {
          banner.fadeOut();
        }
      });
    }
  });
};
