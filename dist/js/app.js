(() => {
    "use strict";
    function aboutCardOpen() {
        const buttons = document.querySelectorAll(".s-about__item-more");
        if (buttons.length) buttons.forEach((btn => {
            const currentBody = btn.closest(".s-about__item-body");
            const lineHeight = +window.getComputedStyle(currentBody).lineHeight.slice(0, -2);
            const bodyHeight = currentBody.querySelector("p").clientHeight;
            const countLines = bodyHeight / lineHeight;
            if (countLines > 5) currentBody.classList.add("_hide"); else btn.remove();
            btn.addEventListener("click", (() => {
                currentBody.classList.remove("_hide");
                btn.remove();
            }));
        }));
    }
    function addBookmark() {
        const btn = document.querySelector("#btn-bookmark");
        if (btn) {
            const url = window.location.href;
            const title = document.title;
            btn.addEventListener("click", (() => {
                if (navigator.clipboard) navigator.clipboard.writeText(url).then((() => {
                    alert("Ссылка скопирована! Нажмите CTRL+D (Windows) или ⌘+D (Mac), чтобы добавить в закладки.");
                })).catch((() => {
                    manualBookmark(url, title);
                })); else manualBookmark(url, title);
            }));
        }
    }
    function manualBookmark(url, title) {
        if (window.external && "AddFavorite" in window.external) window.external.AddFavorite(url, title); else alert("Нажмите CTRL+D (Windows) или ⌘+D (Mac), чтобы добавить сайт в закладки.");
    }
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
    function inputmask() {
        const inputsTel = document.querySelectorAll('input[type="tel"]');
        const imTel = new Inputmask("+7 (999) 999 99-99");
        imTel.mask(inputsTel);
    }
    function map() {
        const contactsMap = document.querySelector("#map");
        if (contactsMap) {
            function init() {
                const center = JSON.parse(contactsMap.dataset.center);
                const zoom = Number(contactsMap.dataset.zoom);
                const map = new ymaps.Map("map", {
                    center,
                    zoom
                });
                const placemark = new ymaps.Placemark(center, {}, {});
                map.controls.remove("geolocationControl");
                map.controls.remove("searchControl");
                map.controls.remove("trafficControl");
                map.controls.remove("typeSelector");
                map.controls.remove("fullscreenControl");
                map.controls.remove("zoomControl");
                map.controls.remove("rulerControl");
                map.behaviors.disable([ "scrollZoom" ]);
                map.geoObjects.add(placemark);
            }
            ymaps.ready(init);
        }
    }
    function mediaAdaptive() {
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
    }
    function moreText() {
        const buttons = document.querySelectorAll("[data-more-btn]");
        if (buttons.length) buttons.forEach((btn => {
            btn.addEventListener("click", (() => {
                const parent = btn.closest("[data-more]");
                const currentHidden = parent.querySelector("._hidden");
                currentHidden.classList.remove("_hidden");
                btn.remove();
            }));
        }));
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
        const buttonsMain = document.querySelectorAll(".s-product__btn-num");
        if (buttonsMain.length) buttonsMain.forEach((btn => {
            const currentInput = btn.closest(".s-product__form-number").querySelector(".s-product__form-input");
            btn.addEventListener("click", (() => {
                if (btn.classList.contains("_minus")) {
                    if (currentInput.value > 1) currentInput.value = +currentInput.value - 1;
                } else currentInput.value = +currentInput.value + 1;
            }));
        }));
    }
    function removeWarn() {
        const btns = document.querySelectorAll(".warn__delete");
        if (btns.length) btns.forEach((btn => {
            btn.addEventListener("click", (() => {
                const warn = btn.closest(".warn");
                warn.remove();
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
        if (window.matchMedia("(max-width: 1365px)").matches) {
            new Scrollable("#archive-nav");
            new Scrollable("#about-product-nav");
        }
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
                spaceBetween: 15,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-products__reklam .slider-btn._prev",
                    nextEl: ".s-products__reklam .slider-btn._next"
                }
            });
        }
        const advSlider = document.querySelector(".s-adv__slider");
        if (advSlider && window.matchMedia("(max-width: 767px)").matches) {
            new Swiper(advSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                }
            });
        }
        const recSlider = document.querySelector(".s-rec__slider");
        if (recSlider) {
            new Swiper(recSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 30,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    nextEl: ".s-rec__slider-btn"
                },
                breakpoints: {
                    1680: {
                        slidesPerView: 5,
                        spaceBetween: 40
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40
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
            new Swiper(aboutAdvSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    nextEl: ".s-rec__slider-btn"
                },
                breakpoints: {
                    768: {
                        slidesPerView: "auto",
                        spaceBetween: 30
                    }
                }
            });
        }
        const blogSlider = document.querySelector(".s-blog__slider");
        if (blogSlider) {
            new Swiper(blogSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3500
                },
                navigation: {
                    prevEl: ".s-blog .slider-btn._prev",
                    nextEl: ".s-blog .slider-btn._next"
                },
                scrollbar: {
                    el: ".s-blog .slider-scrollbar",
                    draggable: true
                },
                breakpoints: {
                    1540: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }
            });
        }
        const partnersSlider = document.querySelector(".s-partners__slider");
        if (partnersSlider) {
            new Swiper(partnersSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 30,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-partners .slider-btn._prev",
                    nextEl: ".s-partners .slider-btn._next"
                },
                breakpoints: {
                    1540: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }
            });
        }
        const archiveStockSlider = document.querySelector(".s-archive__stock-slider");
        if (archiveStockSlider) {
            new Swiper(archiveStockSlider, {
                speed: 700,
                spaceBetween: 15,
                autoplay: {
                    delay: 3e3
                },
                navigation: {
                    prevEl: ".s-archive__stocks .slider-btn._prev",
                    nextEl: ".s-archive__stocks .slider-btn._next"
                }
            });
        }
        const contactsSlider = document.querySelector(".s-contacts__slider");
        if (contactsSlider && window.matchMedia("(max-width: 1365px)").matches) {
            new Swiper(contactsSlider, {
                speed: 700,
                slidesPerView: "auto",
                spaceBetween: 20,
                autoplay: {
                    delay: 3e3
                }
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
                    nextEl: ".s-product__thumb-gallery .slider-btn._next"
                },
                breakpoints: {
                    1366: {
                        direction: "vertical",
                        spaceBetween: 20,
                        slidesPerView: 4
                    },
                    992: {
                        direction: "vertical",
                        spaceBetween: 20,
                        slidesPerView: 3
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 4
                    }
                }
            });
            const productSlider = document.querySelector(".s-product__slider");
            new Swiper(productSlider, {
                speed: 700,
                spaceBetween: 20,
                slidesPerView: 1,
                navigation: {
                    prevEl: ".s-product__thumb-gallery .slider-btn._prev",
                    nextEl: ".s-product__thumb-gallery .slider-btn._next"
                },
                thumbs: {
                    swiper: thumbSlider
                }
            });
        }
        const whereBuySlider = document.querySelector(".s-where-buy__slider");
        if (whereBuySlider) {
            new Swiper(whereBuySlider, {
                speed: 700,
                spaceBetween: 20,
                slidesPerView: "auto",
                breakpoints: {
                    1540: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    },
                    576: {
                        spaceBetween: 30,
                        slidesPerView: "auto"
                    }
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
    Fancybox.bind("[data-fancybox]", {
        closeButton: false
    });
    dropdown();
    burger();
    sliders();
    scrollables();
    productCount();
    tab();
    searchToggle();
    aboutCardOpen();
    inputmask();
    addBookmark();
    mediaAdaptive();
    map();
    removeWarn();
    moreText();
    Shareon.init();
})();