const categoriesForMen = document.querySelector('#categoriesForMen');
const categoriesForWomen = document.querySelector('#categoriesForWomen');

getCategoriesForWomen();
getCategoriesForMen();

async function getCategoriesForMen(){
    const response = await fetch('./files/JSON/categoriesForMen.json');
    const categoriesArray = await response.json();
    renderCategories(categoriesArray, categoriesForMen, 'for-men');
}

async function getCategoriesForWomen(){
    const response = await fetch('./files/JSON/categoriesForWomen.json');
    const categoriesArray = await response.json();
    renderCategories(categoriesArray, categoriesForWomen, 'for-women');
}

function renderCategories(categoriesArray, sex, imgSrc) {
    categoriesArray.forEach((element) => {
       const categoriesBlockHTML =
           `
               <div class="categories-block">
                <a class="categories-block__link" href="#">
                  <img class="categories-block__image" src="img/home/${imgSrc}/${element.imageSrc}" alt="Offer">
                  <div class="categories-block__info">
                    <div class="categories-block__block-heading block-heading">
                      <h4 class="block-heading__title">${element.title}</h4>
                      <p class="block-heading__subtitle">${element.subTitle}</p>
                    </div>
                    <svg class="categories-block__arrow">
                      <use xlink:href="img/sprite.svg#arrow-right"></use>
                    </svg>
                  </div>
                </a>
              </div>
           `;

        sex.insertAdjacentHTML('beforeend', categoriesBlockHTML);
    });
}