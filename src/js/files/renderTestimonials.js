const testimonials = document.querySelector('#testimonials');

getTestimonials();

async function getTestimonials(){
    const response = await fetch('./files/JSON/testimonials.json');
    const testimonialsArray = await response.json();
    renderTestimonials(testimonialsArray, testimonials,);
}

function renderTestimonials(testimonialsArray, block) {
    testimonialsArray.forEach((element) => {
        const testimonialsBlockHTML =
            `              
              <div class="feedback__swiper-slide swiper-slide">
                <div class="testimonial">
                  <div class="testimonial__info">
                    <img src="img/home/feedback/${element.photoSrc}" alt="User photo" class="testimonial__photo">
                    <div data-stars-counter="${element.stars}" class="testimonial__stars">
                          <svg>
                            <use xlink:href="img/sprite.svg#star-filled"></use>
                          </svg>
                          <svg>
                            <use xlink:href="img/sprite.svg#star-filled"></use>
                          </svg>
                          <svg>
                            <use xlink:href="img/sprite.svg#star-filled"></use>
                          </svg>
                          <svg>
                            <use xlink:href="img/sprite.svg#star-filled"></use>
                          </svg>
                          <svg>
                            <use xlink:href="img/sprite.svg#star-filled"></use>
                          </svg>
                        </div>
                  </div>
                  <div class="testimonial__block-heading block-heading">
                    <h4 class="block-heading__title">${element.name}</h4>
                    <p class="block-heading__text">${element.text}</p>
                  </div>
                </div>
              </div>
           `;

        block.insertAdjacentHTML('beforeend', testimonialsBlockHTML);
    });
}