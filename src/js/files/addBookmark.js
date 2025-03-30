export default function addBookmark() {
  const btn = document.querySelector("#btn-bookmark");

  if (btn) {
    const url = window.location.href;
    const title = document.title;

    btn.addEventListener("click", () => {
      // Попытка скопировать ссылку в буфер
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(url)
          .then(() => {
            alert(
              "Ссылка скопирована! Нажмите CTRL+D (Windows) или ⌘+D (Mac), чтобы добавить в закладки."
            );
          })
          .catch(() => {
            manualBookmark(url, title);
          });
      } else {
        manualBookmark(url, title);
      }
    });
  }
}

// Метод для старых браузеров (IE, Edge Legacy)
function manualBookmark(url, title) {
  if (window.external && "AddFavorite" in window.external) {
    window.external.AddFavorite(url, title); // IE <11
  } else {
    alert(
      "Нажмите CTRL+D (Windows) или ⌘+D (Mac), чтобы добавить сайт в закладки."
    );
  }
}
