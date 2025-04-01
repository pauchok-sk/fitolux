export default function removeWarn() {
  const btns = document.querySelectorAll(".warn__delete");

  if (btns.length) {
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const warn = btn.closest(".warn");
        warn.remove();
      });
    });
  }
}
