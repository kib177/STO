// Инициализация Яндекс Карты
ymaps.ready(initMap);

function initMap() {
    var myMap = new ymaps.Map("map", {
        center: [53.7845, 27.6415],
        zoom: 16,
        controls: ['zoomControl', 'fullscreenControl']
    });
    
    var myPlacemark = new ymaps.Placemark([53.7845, 27.6415], {
        hintContent: 'Автокартель',
        balloonContent: '<strong>Автокартель</strong><br>аг. Гатово, ул. Фрунзе, 8<br>Тел: +375 33 913-14-30'
    }, {
        preset: 'islands#blueAutoIcon'
    });
    
    myMap.geoObjects.add(myPlacemark);
}
