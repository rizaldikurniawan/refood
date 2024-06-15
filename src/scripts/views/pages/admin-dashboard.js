import RefoodsSource from '../../data/refood-source';
import createProcessingMethodCard from '../components/refood-item';

const AdminDashboard = {
  async render() {
    return `
      <div class="container mt-5">
        <h2 class="text-center admin">Admin Dashboard</h2>
        <div id="refoods-list" class="list-group"></div>
      </div>
    `;
  },

  async afterRender() {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== 'true') {
      window.location.hash = '#/login';
      return;
    }

    try {
      const refoods = await RefoodsSource.getAllRefoods();
      const refoodsList = document.getElementById('refoods-list');

      if (refoods.data.refoods.length === 0) {
        refoodsList.innerHTML = '<p>No refoods available.</p>';
      } else {
        refoods.data.refoods.forEach((refood) => {
          const refoodItem = document.createElement('div');
          refoodItem.classList.add('list-group-item', 'list-group-item-action');
          refoodItem.innerHTML = `
            <h5>${refood.jenis}</h5>
            <div id="cara-pengolahan-${refood.idLimbah}"></div>
          `;
          refoodsList.appendChild(refoodItem);

          const caraPengolahanContainer = document.getElementById(`cara-pengolahan-${refood.idLimbah}`);
          if (refood.caraPengolahan && refood.caraPengolahan.length > 0) {
            refood.caraPengolahan.forEach((method) => {
              caraPengolahanContainer.appendChild(createProcessingMethodCard(method, refood.idLimbah));
            });
          } else {
            caraPengolahanContainer.innerHTML = '<p>No processing methods available.</p>';
          }
        });
      }
    } catch (error) {
      console.error('Error fetching refoods:', error);
      alert('Failed to load refoods. Please try again later.');
    }
  },
};

export default AdminDashboard;
