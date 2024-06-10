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
      console.log('API response:', refoodsData); // Log the API response

      if (!refoodsData || !refoodsData.data || !Array.isArray(refoodsData.data.refoods)) {
        throw new Error('Invalid data structure');
      }

      const refoods = refoodsData.data.refoods;
      const jumbotronContainer = document.getElementById('jumbotron');
      const refoodContainer = document.getElementById('refood-cards');

      const createCard = (item) => {
        const card = document.createElement('div');
        card.classList.add('refood-slide');
        card.innerHTML = `
          <div class="refood-slide-img">
            <img src="${CONFIG.BASE_IMAGE_URL + item.idLimbah}.png" alt="${item.jenis}">
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
              <img id="imageBanner" class="up-layar" src="${CONFIG.BASE_IMAGE_URL + item.idLimbah}.png" alt="${item.jenis}" />
            </div>
          </div>
          <div class="col-md-2">
            <h1 id="judul">${item.jenis}</h1>
          </div>
          <div class="col-md-3 rounded" id="description">
            <h1 class="teks"><b>${item.jenis}</b></h1>
            <p class="teks">${item.deskripsi}</p>
            <a href="/detail.html?id=${item.idLimbah}" class="btn btn-primary" id="cara-pengolahan">Cara Pengolahan</a>
          </div>
        `;
        return jumbotron;
      };

      // Mendapatkan indeks item yang akan ditampilkan pertama kali
      const initialSlideIndex = refoods.findIndex(item => item.idLimbah === refoods[0].idLimbah);

      // Inisialisasi Swiper instance hanya dengan item yang ditampilkan
      let refoodSlider = new Swiper('.refood-slider', {
        effect: 'slide',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto-fit',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        initialSlide: initialSlideIndex, // Mengatur indeks item yang akan ditampilkan pertama kali
        on: {
          slideChange: function () {
            const activeIndex = this.realIndex;
            const activeItem = refoods[activeIndex];
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

      refoods.forEach((item, index) => {
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
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
    }
  },
};

export default Home;