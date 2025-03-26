export default function burger() {
  const burgerOpenBtn = document.querySelector("#burger-open");
  const burgerCloseBtn = document.querySelector("#burger-close");
  const burger = document.querySelector("#burger");

  if (burger) {
    burger.addEventListener("click", (e) => e.stopPropagation());

    burgerOpenBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      burgerOpen();
    });
    burgerCloseBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      burgerClose();
    });

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
