export default function moreText() {
  const buttons = document.querySelectorAll("[data-more-btn]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parent = btn.closest("[data-more]");
        const currentHidden = parent.querySelector("._hidden");

        currentHidden.classList.remove("_hidden");
        btn.remove();
      });
    });
  }
}
