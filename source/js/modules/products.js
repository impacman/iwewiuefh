import Swiper, {Navigation, EffectCoverflow, Lazy, Thumbs} from 'swiper';

export const products = () => {
  const settings = {};

  const productsSlider = new Swiper('[data-products-slider]', {
    modules: [Navigation, EffectCoverflow, Lazy, Thumbs],

    simulateTouch: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    watchOverflow: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 2,
    spaceBetween: 180,
    centeredSlides: true,
    initialSlide: 0,
    loop: true,
    speed: 500,

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      slideShadows: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        coverflowEffect: {
          depth: 0,
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 100,
        coverflowEffect: {
          depth: 200,
        },
      },
      992: {
        spaceBetween: 180,
        coverflowEffect: {
          depth: 300,
        },
      },
    },

    preloadImages: false,
    lazy: {
      loadOnTransitionStart: false,
      loadPrevNext: false,
    },
    watchSlidesProgress: true,

    thumbs: {
      swiper: {
        el: '[data-products-bullet]',
        slidesPerView: 10,
      },
    },
  });
};


