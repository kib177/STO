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

// Обработка формы записи
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `
        <div style="background: #27ae60; color: white; padding: 15px; border-radius: 4px;">
            <p>✓ Спасибо, ${name}! Мы свяжемся с вами в ближайшее время.</p>
            <p style="font-size:0.9rem;">Уведомление отправлено на ${email}</p>
        </div>
    `;
    
    // Очистка формы (опционально)
    // this.reset();
    
    // Здесь можно добавить реальную отправку данных через fetch
    console.log('Данные формы:', {
        name: name,
        phone: document.getElementById('phone').value,
        email: email,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        message: document.getElementById('message').value
    });
});

// Плавный скролл к якорям
document.querySelectorAll('nav a, .btn[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});