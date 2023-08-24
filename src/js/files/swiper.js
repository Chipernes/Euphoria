window.addEventListener('load', () => {
    // Main swiper
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


// Arrival swiper
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

// Testimonials swiper
    const feedbackSwiper = new Swiper('.feedback__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,

        breakpoints: {
            950: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },

            650: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
        },

        // If we need pagination
        pagination: {
            el: '.feedback__swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
        },
    });

});
