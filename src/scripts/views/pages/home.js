import RefoodsSource from '../../data/refood-source';
import CONFIG from '../../globals/config';
import Swiper from 'swiper';

const Home = {
  async render() {
    return `
      <div class="jumbotron" id="jumbotron"></div>
      <div class="swiper refood-slider">
        <div class="swiper-wrapper" id="refood-cards"></div>
        <div class="refood-slider-control">
          <div class="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div class="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      const refoodsData = await RefoodsSource.getAllRefoods();
      console.log('API response:', refoodsData);

      if (!refoodsData || !refoodsData.data || !Array.isArray(refoodsData.data.refoods)) {
        throw new Error('Invalid data structure');
      }

      const refoods = refoodsData.data.refoods;
      const jumbotronContainer = document.getElementById('jumbotron');
      const refoodContainer = document.getElementById('refood-cards');

      const createCard = (item) => {
        const card = document.createElement('div');
        card.classList.add('refood-slide', 'swiper-slide');
        card.innerHTML = `
          <div class="refood-slide-img">
            <img src="${CONFIG.BASE_IMAGE_URL + item.idLimbah}.webp" alt="${item.jenis}">
          </div>
          <div class="refood-slide-content">
            <h2 class="food-type">${item.jenis}</h2>
          </div>
        `;
        return card;
      };

      const createJumbotron = (item) => {
        const jumbotron = document.createElement('div');
        jumbotron.classList.add('row', 'content-row');
        jumbotron.innerHTML = `
          <div class="col-md-6">
            <div class="image-wrapper">
              <img id="imageBanner" class="up-layar" src="${CONFIG.BASE_IMAGE_URL + item.idLimbah}.webp" alt="${item.jenis}" />
            </div>
          </div>
          <div class="col-md-2">
            <h1 id="judul">${item.jenis}</h1>
          </div>
          <div class="col-md-3 rounded" id="description">
            <h1 class="teks"><b>${item.jenis}</b></h1>
            <p class="teks">${item.deskripsi}</p>
            <a href="#/detail/${item.idLimbah}" class="btn btn-primary" id="cara-pengolahan">Cara Pengolahan</a>
          </div>
        `;
        return jumbotron;
      };
      

      const refoodSlider = new Swiper('.refood-slider', {
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        initialSlide: 2,
        on: {
          slideChange: function () {
            const activeIndex = this.realIndex;
            const activeItem = refoods[activeIndex];
            if (activeItem) {
              jumbotronContainer.innerHTML = '';
              const jumbotron = createJumbotron(activeItem);
              jumbotronContainer.appendChild(jumbotron);

              document.querySelectorAll('.refood-slide').forEach(card => {
                if (card.classList) {
                  card.classList.remove('clicked');
                }
              });

              const activeCard = refoodContainer.children[activeIndex];
              if (activeCard && activeCard.classList) {
                activeCard.classList.add('clicked');
              }
            }
          },
        },
      });

      refoods.forEach((item, index) => {
        const card = createCard(item);
        refoodContainer.appendChild(card);

        card.addEventListener('click', () => {
          jumbotronContainer.innerHTML = '';
          const jumbotron = createJumbotron(item);
          jumbotronContainer.appendChild(jumbotron);

          document.querySelectorAll('.refood-slide').forEach(card => {
            if (card.classList) {
              card.classList.remove('clicked');
            }
          });

          if (card.classList) {
            card.classList.add('clicked');
          }
          const slideIndex = Array.from(refoodContainer.children).indexOf(card);
          refoodSlider.slideTo(slideIndex);
        });

        if (index === 2) {
          const jumbotron = createJumbotron(item);
          jumbotronContainer.appendChild(jumbotron);
          if (card.classList) {
            card.classList.add('clicked');
          }
        }
      });

      const initialItem = refoods[2];
      if (initialItem) {
        jumbotronContainer.innerHTML = '';
        const jumbotron = createJumbotron(initialItem);
        jumbotronContainer.appendChild(jumbotron);
      }


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
};

export default Home;