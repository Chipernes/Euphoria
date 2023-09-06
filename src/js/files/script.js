// Burger
const burgerMenu = document.querySelector('.icon-menu');
const menuList = document.querySelector('.menu__list');
const bodyItem = document.querySelector('body');

if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('menu-open');
        menuList.classList.toggle('active');
        bodyItem.classList.toggle('menu-open');
    });
}

window.addEventListener('click', (event) => {
    const headerContainer= document.querySelector('.header__container');
    const withinBoundaries = event.composedPath().includes(headerContainer);

    // Close burger  if not within boundaries
    if (!withinBoundaries) {
        burgerMenu.classList.remove('menu-open');
        menuList.classList.remove('active');
    }
});

// Fixed header
const page = document.querySelector('.page');
const header = document.querySelector('.header');
page.style.marginTop = `${header.clientHeight}px`;
const mediaQueryFixedHeader = window.matchMedia('(max-width: 640px)')
mediaQueryFixedHeader.addEventListener('change', () => {
    page.style.marginTop = `${header.clientHeight}px`;
});

// Changing padding of header
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    const menuBody = document.querySelector('.menu__body');

    menuBody.style.padding = scrollPos >= header.offsetHeight ? '10px 0' : '30px 0';
});


// Long images fix
const mediaQueryGrayCard = window.matchMedia('(max-width: 400px)')
const cardZone = document.querySelectorAll('[data-long-image]');

if (cardZone) {
    window.addEventListener('load', () => {
        if (window.innerWidth > 400) {
            cardZone.forEach((element) => element.classList.add('card-zone_gray'));
        }
    });

    mediaQueryGrayCard.addEventListener('change', () => {
        cardZone.forEach((element) => element.classList.toggle('card-zone_gray'));
    });
}


// Painting the clothes heart
document.addEventListener('click', (event) => {
    const targetClothesHeart = event.target.closest('.clothes-block__heart');
    if (targetClothesHeart) {
        targetClothesHeart.style.fill = targetClothesHeart.style.fill === 'var(--white-color)' ? 'var(--red-color)' : 'var(--white-color)';
        targetClothesHeart.style.stroke = targetClothesHeart.style.stroke === 'var(--text-color)' ? 'var(--red-color)' : 'var(--text-color)';
    }
});


// Adding categories
window.addEventListener('load', () => {
    const forMenCategories = document.querySelectorAll('.for-men__categories-block');
    const categoriesBlockEmptyHTML =
        `
            <div class="for-men__categories-block categories-block">
            </div>
        `;
    for (let i = forMenCategories.length % 4; i < 4; i += 1) {
        forMenCategories[0].closest('.for-men__categories').insertAdjacentHTML('beforeend', categoriesBlockEmptyHTML);
    }
});

