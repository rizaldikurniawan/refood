import RefoodsSource from '../../data/refood-source';
import CONFIG from '../../globals/config';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
     <div class="container-xl mx-auto p-4 container-detail">
        <img id="logo-detail" src="../public/Logo.png" class="rounded mx-auto d-block mb-5" alt="..." />

        <div class="list-pengolahan">
          <div class="card text-bg-light mb-3">
            <div class="card-header"><h3>Cara Pengolahan:</h3></div>
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>

        <form>
          <div class="mt-4 mb-3 form">
            <label for="cara-pengolahan" class="form-label h3">Menambahkan Cara Pengolahan:</label>
            <textarea class="form-control" id="cara-pengolahan" rows="3" name="cara-pengolahan"></textarea>
          </div>

          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-dark btn-sm">Tambah</button>
          </div>
        </form>
      </div>
    `;
  },
 
  async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const refoodsDetail = await RefoodsSource.getRefoodDetail(url.id);
  },
};
 
export default Detail;