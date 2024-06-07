import 'regenerator-runtime';

import { createCard } from './components/CardComponent';
import { createJumbotron } from './components/JumbotronComponent';
import '../styles/main.css';

document.addEventListener('DOMContentLoaded', () => {
  fetch('data/Data.json')
    .then(response => response.json())
    .then(data => {
      const refoodContainer = document.getElementById('refood-cards');
      const jumbotronContainer = document.getElementById('jumbotron');
      let refoodSlider;
      
      data.refood.forEach((item, index) => {
        const card = createCard(item);
        refoodContainer.appendChild(card);

        card.addEventListener('click', () => {
          jumbotronContainer.innerHTML = '';
          const jumbotron = createJumbotron(item);
          jumbotronContainer.appendChild(jumbotron);

          document.querySelectorAll('.refood-slide').forEach(card => {
            card.classList.remove('clicked');
          });

          card.classList.add('clicked');

          const slideIndex = Array.from(refoodContainer.children).indexOf(card);
          refoodSlider.slideTo(slideIndex);
        });

        if (index === 0) {
          const jumbotron = createJumbotron(item);
          jumbotronContainer.appendChild(jumbotron);
        }
      });

      refoodSlider = new Swiper('.refood-slider', {
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        on: {
          slideChange: function () {
            const activeIndex = this.realIndex;
            const activeItem = data.refood[activeIndex];
            jumbotronContainer.innerHTML = '';
            const jumbotron = createJumbotron(activeItem);
            jumbotronContainer.appendChild(jumbotron);

            document.querySelectorAll('.refood-slide').forEach(card => {
              card.classList.remove('clicked');
            });

            const activeCard = refoodContainer.children[activeIndex];
            activeCard.classList.add('clicked');
          },
        },
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
