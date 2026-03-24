
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


 
