const About = {
  async render() {
    return `
        <div id="about">
        <article>
          <h1 class="judulInformasi">Apa itu Website Refood?</h1>
          <div class="informasi">
              <p>Website ReFood (Recycle Food) menyediakan informasi yang bermanfaat dan cukup lengkap mengenai cara mengolah dan mendaur ulang limbah makanan guna mengurangi pemborosan makanan.</p>
              <ul>
                <p><b>Fitur - fitur pada website:</b></p>
                <li>Mencari informasi tentang limbah makanan</li>
                <li>Menampilkan bagaimana cara mengolah limbah makanan</li>
                <li>Pengguna dapat menambahkan informasi baru tentang bagaimana cara mengolah limbah makanan</li>
              </ul>
          </div>
        </article>
        <article>
          <div class="informasi" >
          <h2>Tim Kami</h2>
          <div class="row">
            <div class="col-sm-4">
              <figure>
                <img id="rizky" src="/images/Rizal.png"  class="image-profil" alt="Foto profil Rizky Rizaldi Kurniawan" />
                <figcaption>
                  <p>Rizky Rizaldi Kurniawan</p>
                  <p>Universitas Negeri Malang</p>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-4">
              <figure>
                <img class="image-profil" src="/images/kelvin.jpg" alt="Foto profil Kelvin Jaya Pratama" />
                <figcaption>
                  <p>Kelvin Jaya Pratama</p>
                  <p>Universitas AMIKOM Yogyakarta</p>
                </figcaption>
              </figure>
            </div>
            <div class="col-sm-4">
              <figure>
                <img id="irfan" src="/images/kelvin.jpg" class="image-profil" alt="Foto profil Muhammad Irfan Abidin" />
                <figcaption>
                  <p>Muhammad Irfan Abidin</p>
                  <p>Universitas Muhammadiyah Surakarta</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        </article>
      </div>
      `;
  },

  async afterRender() {
    document.title = 'ReFood | About Us'; 
  },
};

export default About;
