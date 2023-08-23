const mainSwiper = new Swiper('.main__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.main__swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.main__swiper-button-next',
        prevEl: '.main__swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },
});

const arrivalSwiper = new Swiper('.arrival__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
        nextEl: '.arrival__swiper-button-next',
        prevEl: '.arrival__swiper-button-prev',
    },

    // Adaptive slider
    breakpoints: {
        1150: {
            //spaceBetween: 20,
            slidesPerView: 4,
        },

        900: {
            slidesPerView: 3,
        },

        600: {
            slidesPerView: 2,
        },
    },

    autoplay: {
        delay: 3000,
    },
});
