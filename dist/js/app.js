(() => {
    "use strict";
    function burger() {
        const burgerOpenBtn = document.querySelector("#burger-open");
        const burgerCloseBtn = document.querySelector("#burger-close");
        const burger = document.querySelector("#burger");
        if (burger) {
            burger.addEventListener("click", (e => e.stopPropagation()));
            burgerOpenBtn.addEventListener("click", (e => {
                e.stopPropagation();
                burgerOpen();
            }));
            burgerCloseBtn.addEventListener("click", (e => {
                e.stopPropagation();
                burgerClose();
            }));
            function burgerClose() {
                burger.classList.remove("_open");
                document.body.classList.remove("body-hidden");
                document.body.removeEventListener("click", burgerClose);
            }
            function burgerOpen() {
                burger.classList.add("_open");
                document.body.classList.add("body-hidden");
                document.body.addEventListener("click", burgerClose);
            }
            function updateHeightBurger() {
                burger.style.maxHeight = `${window.visualViewport.height}px`;
            }
            window.visualViewport.addEventListener("resize", updateHeightBurger);
            window.visualViewport.addEventListener("scroll", updateHeightBurger);
            updateHeightBurger();
        }
    }
    function dropdown() {
        const dropdownButtons = document.querySelectorAll(".dropdown__btn");
        if (dropdownButtons.length) {
            const dropdownBodys = document.querySelectorAll(".dropdown__body");
            dropdownBodys.forEach((b => b.addEventListener("click", (e => {
                e.stopPropagation();
            }))));
            dropdownButtons.forEach((btn => {
                btn.addEventListener("click", (e => {
                    e.stopPropagation();
                    const dropdown = btn.closest(".dropdown");
                    if (dropdown.classList.contains("_open")) handleClose(dropdown); else handleOpen(dropdown);
                }));
            }));
            function handleOpen(dropdown) {
                dropdown.classList.add("_open");
                document.body.addEventListener("click", handleClose);
            }
            function handleClose(dropdown) {
                const isDOM = obj => obj instanceof Node;
                if (isDOM(dropdown)) dropdown.classList.remove("_open"); else {
                    const openDropdown = document.querySelector(".dropdown._open");
                    openDropdown.classList.remove("_open");
                }
                document.body.removeEventListener("click", handleClose);
            }
        }
    }
    function productCount() {
        const buttons = document.querySelectorAll(".product-card__btn-num");
        if (buttons.length) buttons.forEach((btn => {
            const currentInput = btn.closest(".product-card__form-number").querySelector(".product-card__form-input");
            btn.addEventListener("click", (() => {
                if (btn.classList.contains("_minus")) {
                    if (currentInput.value > 1) currentInput.value = +currentInput.value - 1;
                } else currentInput.value = +currentInput.value + 1;
            }));
        }));
    }
    class Scrollable {
        constructor(selector, options) {
            let defaultOptions = {
                wheelScrolling: true
            };
            this.isGrab = false;
            this.container = document.querySelector(selector);
            this.options = Object.assign(defaultOptions, options);
            if (!this.container) return;
            this.container.classList.add("_scrollable");
            this.childrensSize = Array.from(this.container.children).reduce(((sum, item) => sum + item.clientWidth), 0);
            if (this.container.clientWidth < this.childrensSize) this.container.style = "cursor: grab";
            this.isDragging = false;
            this.startX = null;
            this.scrollLeft = null;
            this.events();
        }
        events() {
            if (this.container) {
                this.container.addEventListener("mousedown", (e => {
                    this.isDragging = true;
                    this.startX = e.pageX - this.container.offsetLeft;
                    this.scrollLeft = this.container.scrollLeft;
                }));
                this.container.addEventListener("mouseup", (e => {
                    this.isDragging = false;
                }));
                this.container.addEventListener("mousemove", (e => {
                    if (!this.isDragging) return;
                    const x = e.pageX - this.container.offsetLeft;
                    const walkX = (x - this.startX) * 1;
                    this.container.scrollLeft = this.scrollLeft - walkX;
                }));
                this.container.addEventListener("mouseleave", (e => {
                    if (this.isDragging) this.isDragging = false;
                }));
                if (this.options.wheelScrolling) this.container.addEventListener("mousewheel", (e => {
                    if (this.isGrab) e.preventDefault();
                    this.container.scrollLeft += e.deltaY;
                }));
            }
        }
    }
    function scrollables() {
        new Scrollable(".s-products__nav");
    }
    function searchToggle() {
        const btnSearch = document.querySelector("#btn-search");
        const searchForm = document.querySelector("#search-form");
        btnSearch.addEventListener("click", (() => searchForm.classList.toggle("_open")));
    }
    function sliders() {
        const introMainSlider = document.querySelector(".intro-main__slider");
        if (introMainSlider) {
            const images = document.querySelectorAll(".intro-main__slide-img");
            new Swiper(introMainSlider, {
                speed: 800,
                centeredSlides: true,
                effect: "fade",
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    nextEl: ".intro-main__slider-next"
                },
                pagination: {
                    el: ".intro-main__slider-pagination",
                    clickable: true
                },
                on: {
                    slideChange: ({activeIndex}) => {
                        images.forEach((i => i.classList.remove("_active")));
                        images[activeIndex].classList.add("_active");
                    }
                }
            });
        }
        const introAdvSlider = document.querySelector(".intro__adv-slider");
        if (introAdvSlider && window.matchMedia("(max-width: 1365px)").matches) {
            new Swiper(introAdvSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 2500
                }
            });
        }
        const productsSliders = document.querySelectorAll(".s-products__slider");
        if (productsSliders.length && window.matchMedia("(max-width: 1365px)").matches) productsSliders.forEach((s => {
            new Swiper(s, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                }
            });
        }));
        const productsReklamSlider = document.querySelector(".s-products__reklam-slider");
        if (productsReklamSlider) {
            new Swiper(productsReklamSlider, {
                speed: 700,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-products__reklam .slider-btn._prev",
                    nextEl: ".s-products__reklam .slider-btn._next"
                }
            });
        }
    }
    function tab() {
        const buttonsTab = document.querySelectorAll("[data-tab-btn]");
        if (buttonsTab.length) buttonsTab.forEach((btn => {
            const parent = btn.closest(".tab-container");
            const currentTabs = parent.querySelectorAll("[data-tab]");
            const currentButtons = parent.querySelectorAll("[data-tab-btn]");
            btn.addEventListener("click", (() => {
                const idTab = btn.dataset.tabBtn;
                const currentTab = parent.querySelector(`[data-tab="${idTab}"]`);
                currentTabs.forEach((t => t.classList.remove("_open")));
                currentButtons.forEach((b => b.classList.remove("_active")));
                currentTab.classList.add("_open");
                btn.classList.add("_active");
            }));
        }));
    }
    dropdown();
    burger();
    sliders();
    scrollables();
    productCount();
    tab();
    searchToggle();
})();