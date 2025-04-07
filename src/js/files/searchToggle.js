export default function searchToggle() {
  const btnSearch = document.querySelector("#btn-search");
  const searchForm = document.querySelector("#search-form");

  document.body.addEventListener("click", () => searchForm.classList.remove("_open"));
  searchForm.addEventListener("click", (e) => e.stopPropagation());

  btnSearch.addEventListener("click", (e) => {
    e.stopPropagation();

    searchForm.classList.toggle("_open");
  });
}
