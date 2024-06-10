import RefoodsSource from '../../data/refood-source';
import UrlParser from '../../routes/url-parser';
import { createDetailPengolahan } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
     <div class="container-xl mx-auto p-4 container-detail">
        <img id="logo-detail" src="../public/Logo.png" class="rounded mx-auto d-block mb-5" alt="..." />

        <div class="list-pengolahan">
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
      // console.log(refoodsDetail);

      const listContainer = document.querySelector('.list-pengolahan');
      listContainer.innerHTML ='';

      refoodsDetail.forEach((item) => {
        listContainer.innerHTML += createDetailPengolahan(item);
      });
  },
};
 
export default Detail;