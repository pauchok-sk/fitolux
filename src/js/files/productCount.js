export default function productCount() {
  const buttons = document.querySelectorAll(".product-card__btn-num");

  if (buttons.length) {
    buttons.forEach((btn) => {
      const currentInput = btn
        .closest(".product-card__form-number")
        .querySelector(".product-card__form-input");

      btn.addEventListener("click", () => {
        if (btn.classList.contains("_minus")) {
          if (currentInput.value > 1) currentInput.value = +currentInput.value - 1;
        } else {
          currentInput.value = +currentInput.value + 1;
        }
      });
    });
  }
}