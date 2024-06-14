import RefoodsSource from '../../data/refood-source';
import CONFIG from '../../globals/config';

const Detail = {
  async render() {
    return `
      <div class="container-xl mx-auto p-4 container-detail">
        <img id="logo-detail" src="/Logo.png" class="rounded mx-auto d-block mb-5" alt="Logo" />

        <div class="list-pengolahan" id="cara-pengolahan-container">
        </div>

        <form id="add-processing-form">
          <div class="mt-4 mb-3 form">
           <label for="Contributor" class="form-label h3">Contributor:</label>
           <input type="text" class="form-control" id="contributor" name="contributor" required>
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
      console.log('Refood detail:', refoodDetail);

      if (!refoodDetail || !refoodDetail.data || !refoodDetail.data.refood) {
        throw new Error('Invalid refood detail data');
      }

      const { jenis, deskripsi, picture, caraPengolahan } = refoodDetail.data.refood;
      const imageContainer = document.getElementById('logo-detail');
      imageContainer.src = `${CONFIG.BASE_IMAGE_URL}${picture}.webp`;

      const caraPengolahanContainer = document.getElementById('cara-pengolahan-container');
      if (caraPengolahan && caraPengolahan.length > 0) {
        caraPengolahan.forEach(method => {
          caraPengolahanContainer.appendChild(createProcessingMethodCard(method.teks, method.namaLengkap, method.createdAt));
        });
      } else {
        caraPengolahanContainer.innerHTML = '<p>No processing methods available.</p>';
      }

      const addProcessingForm = document.getElementById('add-processing-form');
      addProcessingForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const contributorInput = document.getElementById('contributor').value.trim();
        const caraPengolahanInput = document.getElementById('cara-pengolahan').value.trim();
        if (caraPengolahanInput) {
          try {
            await RefoodsSource.addRefood(idLimbah, { teks: caraPengolahanInput,
              namaLengkap: contributorInput,
             });
            caraPengolahanContainer.appendChild(createProcessingMethodCard(caraPengolahanInput, contributorInput, new Date().toISOString()));

            document.getElementById('contributor').value = ''; 
            document.getElementById('cara-pengolahan').value = ''; 
          } catch (error) {
            console.error('Error adding processing method:', error);
            alert('Failed to add processing method. Please try again.');
          }
        } else {
          alert('Please enter a processing method.');
        }
      });

    } catch (error) {
      console.error('Error fetching refood detail:', error);
      alert('Failed to load refood details. Please try again later.');
    }
  },
};

function createProcessingMethodCard(teks, namaLengkap, createdAt) {
  const card = document.createElement('div');
  card.classList.add('card', 'text-bg-light', 'mb-3');
  card.innerHTML = `
    <div class="card-header">
    <h3>Cara Pengolahan:</h3>
    Created by ${namaLengkap} at ${createdAt}</div>
    <div class="card-body">
      <p class="card-text">${teks}</p>
    </div>
  `;
  return card;
}

export default Detail;
