const clothesLimelights = document.querySelector('#limelights');

getClothes();

async function getClothes(){
    const response = await fetch('./files/JSON/clothes.json');
    const clothesArray = await response.json();
    renderCategories(clothesArray, clothesLimelights,);
}

function renderCategories(clothesArray, block) {
    clothesArray.forEach((element) => {
        const clothesBlockHTML =
            `              
              <div class="clothes-block">
                <svg data-clothes-heart class="clothes-block__heart" style="fill: var(--white-color); stroke: var(--text-color);">
                  <use xlink:href="img/sprite.svg#heart-product"></use>
                </svg>
                <a class="clothes-block__link" href="#">
                  <img class="clothes-block__image" src="img/home/limelights/${element.imageSrc}" alt="Offer">
                  <div class="clothes-block__info">
                    <div class="clothes-block__block-heading block-heading">
                      <h4 class="block-heading__title">${element.title}</h4>
                      <p class="block-heading__subtitle">${element.subTitle}</p>
                    </div>
                    <div class="clothes-block__price">
                      <p>${element.price}</p>
                    </div>
                  </div>
                </a>
              </div>
           `;

        block.insertAdjacentHTML('beforeend', clothesBlockHTML);
    });
}