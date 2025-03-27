export default function tab() {
  const buttonsTab = document.querySelectorAll("[data-tab-btn]");

  if (buttonsTab.length) {
    buttonsTab.forEach((btn) => {
      const parent = btn.closest(".tab-container");
      const currentTabs = parent.querySelectorAll("[data-tab]");
      const currentButtons = parent.querySelectorAll("[data-tab-btn]");

      btn.addEventListener("click", () => {
        const idTab = btn.dataset.tabBtn;
        const currentTab = parent.querySelector(`[data-tab="${idTab}"]`);

        currentTabs.forEach((t) => t.classList.remove("_open"));
        currentButtons.forEach((b) => b.classList.remove("_active"));

        currentTab.classList.add("_open");
        btn.classList.add("_active");
      });
    });
  }
}
