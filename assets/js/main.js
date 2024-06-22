document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.slide-intro', {
        // spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var isPaused = false;
    var pauseButton = document.createElement('button');
    pauseButton.className = 'swiper-button-pause';
    pauseButton.textContent = 'Pause';
    document.querySelector('.slide-intro').appendChild(pauseButton);

    pauseButton.addEventListener('click', function () {
        if (isPaused) {
            swiper.autoplay.start();
            pauseButton.textContent = 'Pause';
        } else {
            swiper.autoplay.stop();
            pauseButton.textContent = 'Play';
        }
        isPaused = !isPaused;
    });

    var swiper = new Swiper('.slide-eft .swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
        },
    });
});
