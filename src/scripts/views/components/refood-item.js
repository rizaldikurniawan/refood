import RefoodsSource from '../../data/refood-source';

function createProcessingMethodCard(method, idLimbah) {
  const card = document.createElement('div');
  card.classList.add('card', 'text-bg-light', 'mb-3');
  card.innerHTML = `
    <div class="card-header">
      <h3>Cara Pengolahan:</h3>
    </div>
    <div class="card-body">
      <p class="card-text">${method.teks}</p>
      <div class="card-footer">
        <div class="username">Username: ${method.username}</div>
        <div class="tanggal">Tanggal: ${new Date(method.createdAt).toLocaleDateString()}</div>
      </div>
      <button class="btn btn-warning btn-sm edit-button">Edit</button>
      <button class="btn btn-danger btn-sm delete-button">Delete</button>
    </div>
    <form class="edit-form" style="display: none;">
        <div class="mb-3">
          <label for="edit-text-${method.idPengolahan}" class="form-label">Edit Processing Method:</label>
          <textarea class="form-control" id="edit-text-${method.idPengolahan}" 
          rows="3" required>${method.teks}</textarea>
        </div>
        <button type="submit" class="btn btn-primary btn-sm save-button">Save</button>
        <button type="button" class="btn btn-secondary btn-sm cancel-button">Cancel</button>
      </form>
  `;

  const editButton = card.querySelector('.edit-button');
  const editForm = card.querySelector('.edit-form');
  const cancelButton = card.querySelector('.cancel-button');
  const cardText = card.querySelector('.card-text');
  const cardTanggal = card.querySelector('.tanggal');

  editButton.addEventListener('click', () => {
    editForm.style.display = 'block';
  });

  cancelButton.addEventListener('click', () => {
    editForm.style.display = 'none';
  });

  editForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const newText = document.getElementById(`edit-text-${method.idPengolahan}`).value.trim();
    if (newText) {
      const refoodData = { teks: newText, username: method.username };
      try {
        await RefoodsSource.editRefood(idLimbah, method.idPengolahan, refoodData);
        cardText.textContent = newText;
        cardTanggal.textContent = `Tanggal: ${new Date().toLocaleDateString()}`;
        editForm.style.display = 'none';
        alert('Processing method updated successfully.');
      } catch (error) {
        console.error('Error editing processing method:', error);
        alert('Failed to update processing method. Please try again later.');
      }
    } else {
      alert('Processing method text cannot be empty.');
    }
  });

  const deleteButton = card.querySelector('.delete-button');
  deleteButton.addEventListener('click', () => {
    const confirmDelete = confirm('Are you sure you want to delete this processing method?');
    if (confirmDelete) {
      RefoodsSource.deleteRefood(idLimbah, method.idPengolahan)
        .then(() => {
          alert('Processing method deleted successfully.');
          window.location.reload();
        })
        .catch(error => {
          console.error('Error deleting processing method:', error);
          alert('Failed to delete processing method. Please try again later.');
        });
    }
  });

  return card;
}

export default createProcessingMethodCard;
