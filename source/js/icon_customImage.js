ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.938635, 30.323118],
        zoom: 16,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(
      myMap.getCenter(),
      {
        hintContent: "Магазин Мишка",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "../img/map-pin.svg",
        // Размеры метки.
        iconImageSize: [67, 100],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-35, -100],
      }
    );

  myMap.geoObjects.add(myPlacemark);
});
