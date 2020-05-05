export default () => {
  $(".slider__container").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: $(".arrow-prev"),
    nextArrow: $(".arrow-next"),
    autoplay: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1219,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  });

  $(".slider__container").on("afterChange", function (
    event,
    slick,
    currentSlide
  ) {
    $(this)
      .find(".slick-slide.text-open")
      .not(".slick-active")
      .removeClass("text-open");
  });
  $(".js-show-comment").on("click", function () {
    let targetButton = this;

    targetButton.parentElement.classList.toggle("text-open");

    if (targetButton.parentElement.classList.contains("text-open")) {
      targetButton.innerText = "Вернуть";
    } else {
      targetButton.innerText = "Подробнее";
    }

    // $(".slide__text-more").find(".slick-slide.slick-active").height("auto");
    // $(".slide__text-more").find(".slick-list").height("auto");
  });
};