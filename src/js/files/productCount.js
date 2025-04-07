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

  const buttonsMain = document.querySelectorAll(".s-product__btn-num");

  if (buttonsMain.length) {
    buttonsMain.forEach((btn) => {
      const currentInput = btn
        .closest(".s-product__form-number")
        .querySelector(".s-product__form-input");

      btn.addEventListener("click", () => {
        if (btn.classList.contains("_minus")) {
          if (currentInput.value > 1) currentInput.value = +currentInput.value - 1;
        } else {
          currentInput.value = +currentInput.value + 1;
        }
      });
    });
  }

  const buttonsOrder = document.querySelectorAll(".order-card__btn-num");

  if (buttonsOrder.length) {
    buttonsOrder.forEach((btn) => {
      const currentInput = btn
        .closest(".order-card__form-number")
        .querySelector(".order-card__form-input");

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