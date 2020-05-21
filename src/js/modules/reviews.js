export default () => {
  // Firefox 1.0+
  let isFirefox = typeof InstallTrigger !== "undefined";
  // console.log("revirew", isFirefox);

  if (isFirefox) {
    let reviewsItemList = document.querySelectorAll(".reviews__item");

    for (let i = 0; i < reviewsItemList.length; i++) {
      reviewsItemList[i].classList.add("moz-fix");
    }
  }

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
        breakpoint: 769,
        settings: {
          dots: true,
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
    $(this).find(".slide__desc").mCustomScrollbar("destroy");
    $(this).find(".js-show-comment").text("Подробнее");
    $(".reviews").find(".slick-list").removeClass("slick-list-rise-height");
    $(".reviews__item").removeClass("text-open");
  });

  $(".js-show-comment").on("click", function () {
    let targetButton = this;
    let slideDesc = targetButton.parentElement.querySelector(".slide__desc");
    let slickList = $(".reviews").find(".slick-list");

    console.log($(this).prev());

    targetButton.parentElement.classList.toggle("text-open");

    if (targetButton.parentElement.classList.contains("text-open")) {
      slickList.addClass("slick-list-rise-height");
      $(this).prev().mCustomScrollbar({
        scrollInertia: 300,
      });

      targetButton.innerText = "Вернуть";
    } else {
      $(this).prev().mCustomScrollbar("destroy");
      slickList.removeClass("slick-list-rise-height");
      targetButton.innerText = "Подробнее";
    }

    // $(".slide__text-more").find(".slick-slide.slick-active").height("auto");
    // $(".slide__text-more").find(".slick-list").height("auto");
  });

  // $(".slick-arrow").on("click", function () {
  //   $(".reviews__item").removeClass("text-open");
  //   $(".slide__btn").innerText = "Подробнее";
  // });
};
