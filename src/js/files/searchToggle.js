export default function searchToggle() {
  const btnSearch = document.querySelector("#btn-search");
  const searchForm = document.querySelector("#search-form");

  btnSearch.addEventListener("click", () =>
    searchForm.classList.toggle("_open")
  );
}
