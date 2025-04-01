export default function map() {
  const contactsMap = document.querySelector("#map");

  if (contactsMap) {
    function init() {
      const center = JSON.parse(contactsMap.dataset.center);
      const zoom = Number(contactsMap.dataset.zoom);

      const map = new ymaps.Map("map", {
        center,
        zoom,
      });

      const placemark = new ymaps.Placemark(center, {}, {});

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
      map.behaviors.disable(["scrollZoom"]);
      map.geoObjects.add(placemark);
    }
    ymaps.ready(init);
  }
}
