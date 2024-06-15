import RefoodsSource from '../../data/refood-source';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div class="container-xl mx-auto p-4 container-detail">
        <div class="text-center mb-5">
          <div class="image-wrapper">
            <img id="waste-image" src="" class="waste-image rounded mx-auto d-block mb-3" alt="" />
          </div>
          <h1 id="waste-name" class="mt-3"></h1>
          <p id="waste-description" class="text-muted"></p>
        </div>
        <div class="list-pengolahan mb-5" id="cara-pengolahan-container"></div>
        <form id="add-processing-form" class="form">
          <div class="mt-3 mb-3">
            <label for="username" class="form-label h3">Contributor:</label>
            <input type="text" class="form-control" id="username" name="username" required>
          </div>
          <div class="mt-4 mb-3">
            <label for="cara-pengolahan" class="form-label h3">Menambahkan Cara Pengolahan:</label>
            <textarea class="form-control" id="cara-pengolahan" rows="3" name="cara-pengolahan"></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-dark btn-sm">Tambah</button>
          </div>
        </form>
      </div>
    `;
  },

  async afterRender() {
    try {
      const url = window.location.hash.slice(1);
      const idLimbah = url.split('/')[2];

      const refoodDetail = await RefoodsSource.getRefoodDetail(idLimbah);

      if (!refoodDetail || refoodDetail.status === 'fail') {
        throw new Error('Invalid refood detail data');
      }

      const { refood } = refoodDetail.data;
      document.title = `ReFood | ${refood.jenis}`;

      document.getElementById('waste-image').src = `${CONFIG.BASE_IMAGE_URL}${idLimbah}.webp`;
      document.getElementById('waste-image').alt = refood.jenis;
      document.getElementById('waste-name').textContent = refood.jenis;
      document.getElementById('waste-description').textContent = refood.deskripsi;

      const caraPengolahanContainer = document.getElementById('cara-pengolahan-container');
      caraPengolahanContainer.innerHTML = '';

      if (refood.caraPengolahan && refood.caraPengolahan.length > 0) {
        refood.caraPengolahan.forEach(method => {
          caraPengolahanContainer.appendChild(createProcessingMethodCard(method));
        });
      } else {
        caraPengolahanContainer.innerHTML = '<p>No processing methods available.</p>';
      }

      document.getElementById('add-processing-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const caraPengolahanText = document.getElementById('cara-pengolahan').value.trim();
        const username = document.getElementById('username').value.trim();

        if (!caraPengolahanText || !username) {
          alert('Please enter both processing method and username.');
          return;
        }

        try {
          const result = await RefoodsSource.addRefood(idLimbah, { teks: caraPengolahanText, username });

          if (result.status === 'success') {
            document.getElementById('cara-pengolahan').value = '';
            document.getElementById('username').value = '';
            caraPengolahanContainer.appendChild(createProcessingMethodCard({
              teks: caraPengolahanText,
              username,
              createdAt: new Date().toISOString(),
            }));
          } else {
            throw new Error('Failed to add processing method.');
          }
        } catch (error) {
          console.error('Error adding processing method:', error);
          alert('Failed to add processing method. Please try again later.');
        }
      });
    } catch (error) {
      console.error('Error fetching refood detail:', error);
      alert('Failed to load refood details. Please try again later.');
    }
  },
};

function createProcessingMethodCard(method) {
  const card = document.createElement('div');
  card.classList.add('card', 'text-bg-light', 'mb-3');
  card.innerHTML = `
    <div class="card-header">
      <h3>Cara Pengolahan:</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${method.teks}</p>
    </div>
    <div class="card-footer">
      <div class="username">Created by : ${method.username}</div>
      <div class="tanggal">${new Date(method.createdAt).toLocaleDateString()}</div>
    </div>
  `;
  return card;
}

export default Detail;
