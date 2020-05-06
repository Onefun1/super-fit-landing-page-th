export default () => {
  $(".customers__slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    prevArrow: `<svg class="customers__arrow-left" xmlns="http://www.w3.org/2000/svg" width="21.906" height="41.91" viewBox="0 0 21.906 41.91"><path id="Rounded_Rectangle_5_copy_5" data-name="Rounded Rectangle 5 copy 5" class="cls-1" d="M665.808,3856.9l-0.694-.71a0.494,0.494,0,0,0-.694,0l-20.228,20.46a0.5,0.5,0,0,0,0,.7l0.694,0.7a0.476,0.476,0,0,0,.694,0l20.228-20.45A0.5,0.5,0,0,0,665.808,3856.9Zm0,39.5-20.228-20.45a0.476,0.476,0,0,0-.694,0l-0.694.7a0.5,0.5,0,0,0,0,.7l20.228,20.46a0.494,0.494,0,0,0,.694,0l0.694-.71A0.5,0.5,0,0,0,665.808,3896.4Z" transform="translate(-644.063 -3856.06)"/></svg>`,
    nextArrow: `<svg class="customers__arrow-right" xmlns="http://www.w3.org/2000/svg" width="21.906" height="41.91" viewBox="0 0 21.906 41.91"><path id="Rounded_Rectangle_5_copy_5" data-name="Rounded Rectangle 5 copy 5" class="cls-1" d="M665.808,3856.9l-0.694-.71a0.494,0.494,0,0,0-.694,0l-20.228,20.46a0.5,0.5,0,0,0,0,.7l0.694,0.7a0.476,0.476,0,0,0,.694,0l20.228-20.45A0.5,0.5,0,0,0,665.808,3856.9Zm0,39.5-20.228-20.45a0.476,0.476,0,0,0-.694,0l-0.694.7a0.5,0.5,0,0,0,0,.7l20.228,20.46a0.494,0.494,0,0,0,.694,0l0.694-.71A0.5,0.5,0,0,0,665.808,3896.4Z" transform="translate(-644.063 -3856.06)"/></svg>
    `,
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
        breakpoint: 810,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
        },
      },
    ],
  });
};
