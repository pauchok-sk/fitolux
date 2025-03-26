export default function dropdown() {
  const dropdownButtons = document.querySelectorAll(".dropdown__btn");

  if (dropdownButtons.length) {
    const dropdownBodys = document.querySelectorAll(".dropdown__body");

    dropdownBodys.forEach((b) =>
      b.addEventListener("click", (e) => {
        e.stopPropagation();
      })
    );

    dropdownButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const dropdown = btn.closest(".dropdown");

        if (dropdown.classList.contains("_open")) {
          handleClose(dropdown);
        } else {
          handleOpen(dropdown);
        }
      });
    });

    function handleOpen(dropdown) {
      dropdown.classList.add("_open");
      document.body.addEventListener("click", handleClose);
    }

    function handleClose(dropdown) {
      const isDOM = (obj) => obj instanceof Node;

      if (isDOM(dropdown)) {
        dropdown.classList.remove("_open");
      } else {
        const openDropdown = document.querySelector(".dropdown._open");
        openDropdown.classList.remove("_open");
      }

      document.body.removeEventListener("click", handleClose);
    }
  }
}
