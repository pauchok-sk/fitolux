export default function passwordBtn() {
  const buttons = document.querySelectorAll(".password-btn");

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const input = btn.nextElementSibling;

        if (!input) return;

        if (btn.classList.contains("_active")) {
          input.type = "password";
          btn.classList.remove("_active")
        } else {
          input.type = "text";
          btn.classList.add("_active")
        }
      })
    })
  }
}