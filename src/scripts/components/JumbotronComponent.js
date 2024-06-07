export function createJumbotron(data) {
  const jumbotron = document.createElement('div');
  jumbotron.className = 'jumbotron-container';

  const { jenis, deskripsi, picture } = data;

  jumbotron.innerHTML = `
    <div class="row content-row">
      <div class="col-md-6">
        <div class="image-wrapper">
          <img id="imageBanner" class="up-layar" src="${picture}" alt="${jenis}" />
        </div>
      </div>
      <div class="col-md-2">
        <h1 id="judul">${jenis}</h1>
      </div>
      <div class="col-md-3 rounded card" id="description">
        <h1 class="teks">Deskripsi</h1>
        <h2 class="teks"><b>${jenis}</b></h2>
        <p class="teks">${deskripsi}</p>
        <a href="detail.html" class="btn btn-primary" id="cara-pengolahan">Cara Pengolahan</a>
      </div>
    </div>
  `;

  return jumbotron;
}
