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
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-products__reklam .slider-btn._prev",
        nextEl: ".s-products__reklam .slider-btn._next",
      },
    });
  }
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
      nextEl: ".s-rec__slider-btn"
    },
    breakpoints: {
      1680: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    },
    pagination: {
      el: ".s-rec__pagination",
      clickable: true
    }
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
      nextEl: ".s-rec__slider-btn"
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
        spaceBetween: 30,
      }
    },
    
  });
}