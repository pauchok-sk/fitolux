export default function aboutCardOpen() {
  const buttons = document.querySelectorAll(".s-about__item-more");

  if (buttons.length) {
    buttons.forEach((btn) => {
      const currentBody = btn.closest(".s-about__item-body");
      const lineHeight = +window
        .getComputedStyle(currentBody)
        .lineHeight.slice(0, -2);
      const bodyHeight = currentBody.querySelector("p").clientHeight;
      const countLines = bodyHeight / lineHeight;
      if (countLines > 5) {
        currentBody.classList.add("_hide");
      } else {
        btn.remove();
      }

      btn.addEventListener("click", () => {
        currentBody.classList.remove("_hide");

        btn.remove();
      });
    });
  }
}
