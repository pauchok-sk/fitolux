export default function sliders() {
  const introMainSlider = document.querySelector(".intro-main__slider");

  if (introMainSlider) {
    const images = document.querySelectorAll(".intro-main__slide-img");

    const slider = new Swiper(introMainSlider, {
      speed: 800,
      centeredSlides: true,
      effect: "fade",
      autoplay: {
        delay: 3500,
      },
      navigation: {
        nextEl: ".intro-main__slider-next",
      },
      pagination: {
        el: ".intro-main__slider-pagination",
        clickable: true,
      },
      on: {
        slideChange: ({ activeIndex }) => {
          images.forEach((i) => i.classList.remove("_active"));
          images[activeIndex].classList.add("_active");
        },
      },
    });
  }

  const introAdvSlider = document.querySelector(".intro__adv-slider");

  if (introAdvSlider && window.matchMedia("(max-width: 1365px)").matches) {
    const slider = new Swiper(introAdvSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 2500,
      },
    });
  }

  const productsSliders = document.querySelectorAll(".s-products__slider");

  if (
    productsSliders.length &&
    window.matchMedia("(max-width: 1365px)").matches
  ) {
    productsSliders.forEach((s) => {
      const slider = new Swiper(s, {
        speed: 700,
        slidesPerView: "auto",
        spaceBetween: 20,
        autoplay: {
          delay: 3500,
        },
      });
    });
  }

  const productsReklamSlider = document.querySelector(
    ".s-products__reklam-slider"
  );

  if (productsReklamSlider) {
    const slider = new Swiper(productsReklamSlider, {
      speed: 700,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-products__reklam .slider-btn._prev",
        nextEl: ".s-products__reklam .slider-btn._next",
      },
    });
  }

  const advSlider = document.querySelector(".s-adv__slider");

  if (advSlider && window.matchMedia("(max-width: 767px)").matches) {
    const slider = new Swiper(advSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
    });
  }

  const recSlider = document.querySelector(".s-rec__slider");

  if (recSlider) {
    const slider = new Swiper(recSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".s-rec__slider-btn",
      },
      breakpoints: {
        1680: {
          slidesPerView: 5,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      pagination: {
        el: ".s-rec__pagination",
        clickable: true,
      },
    });
  }

  const aboutAdvSlider = document.querySelector(".s-about__adv-slider");

  if (aboutAdvSlider && window.matchMedia("(max-width: 1365px)").matches) {
    const slider = new Swiper(aboutAdvSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".s-rec__slider-btn",
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 30,
        },
      },
    });
  }

  const blogSlider = document.querySelector(".s-blog__slider");

  if (blogSlider) {
    const slider = new Swiper(blogSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-blog .slider-btn._prev",
        nextEl: ".s-blog .slider-btn._next",
      },
      scrollbar: {
        el: ".s-blog .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });
  }

  const partnersSlider = document.querySelector(".s-partners__slider");

  if (partnersSlider) {
    const slider = new Swiper(partnersSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-partners .slider-btn._prev",
        nextEl: ".s-partners .slider-btn._next",
      },

      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    });
  }

  const archiveStockSlider = document.querySelector(".s-archive__stock-slider");

  if (archiveStockSlider) {
    const slider = new Swiper(archiveStockSlider, {
      speed: 700,
      spaceBetween: 15,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-archive__stocks .slider-btn._prev",
        nextEl: ".s-archive__stocks .slider-btn._next",
      },
    });
  }
  const contactsSlider = document.querySelector(".s-contacts__slider");

  if (contactsSlider && window.matchMedia("(max-width: 1365px)").matches) {
    const slider = new Swiper(contactsSlider, {
      speed: 700,
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
      },
    });
  }

  const thumbProductSlider = document.querySelector(".s-product__thumb-slider");

  if (thumbProductSlider) {
    const thumbSlider = new Swiper(thumbProductSlider, {
      speed: 700,
      spaceBetween: 10,
      slidesPerView: 4,
      navigation: {
        prevEl: ".s-product__thumb-gallery .slider-btn._prev",
        nextEl: ".s-product__thumb-gallery .slider-btn._next",
      },
      breakpoints: {
        1366: {
          direction: "vertical",
          spaceBetween: 20,
          slidesPerView: 4,
        },
        992: {
          direction: "vertical",
          spaceBetween: 20,
          slidesPerView: 3,
        },
        768: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      },
    });

    const productSlider = document.querySelector(".s-product__slider");

    const slider = new Swiper(productSlider, {
      speed: 700,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        prevEl: ".s-product__thumb-gallery .slider-btn._prev",
        nextEl: ".s-product__thumb-gallery .slider-btn._next",
      },
      thumbs: {
        swiper: thumbSlider,
      },
    });
  }

  const whereBuySlider = document.querySelector(".s-where-buy__slider");

  if (whereBuySlider) {
    const slider = new Swiper(whereBuySlider, {
      speed: 700,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 3000,
      },
      breakpoints: {
        1540: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        576: {
          spaceBetween: 30,
          slidesPerView: "auto",
        },
      },
    });
  }

  const reviewsSLider = document.querySelector(".s-reviews__slider");

  if (reviewsSLider) {
    const slider = new Swiper(reviewsSLider, {
      speed: 700,
      spaceBetween: 20,
      slidesPerView: "auto",
      autoplay: {
        delay: 2500,
      },
      navigation: {
        prevEl: ".s-reviews .slider-btn._prev",
        nextEl: ".s-reviews .slider-btn._next"
      },
      scrollbar: {
        el: ".s-reviews .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 30,
          slidesPerView: 3,
        },
        576: {
          spaceBetween: 20,
          slidesPerView: 2,
        }
      },
    });
  }
}
