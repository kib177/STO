document.addEventListener('DOMContentLoaded', function() {
    function isMobile() {
        return window.innerWidth <= 768;
    }

    const logo = document.querySelector('.logo');
    if (!logo) return;

    let lastState = false;   // true – логотип скрыт
    let ticking = false;

    function updateLogoState(forceHide) {
        const shouldHide = forceHide && isMobile();
        if (shouldHide === lastState) return; // состояние не изменилось

        if (shouldHide) {
            logo.classList.add('hide-on-scroll');
        } else {
            logo.classList.remove('hide-on-scroll');
        }
        lastState = shouldHide;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(function() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const shouldHide = scrollTop > 50;   // порог прокрутки
                updateLogoState(shouldHide);
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', function() {
        if (!isMobile()) {
            updateLogoState(false);
        } else {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            updateLogoState(scrollTop > 50);
        }
    });

    // Инициализация
    if (isMobile() && (window.pageYOffset || document.documentElement.scrollTop) > 50) {
        updateLogoState(true);
    } else {
        updateLogoState(false);
    }
});