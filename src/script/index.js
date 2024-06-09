document.addEventListener("DOMContentLoaded", function () {
  const baseUrl = "http://47.129.7.148:5000";

  const getRefood = () => {
    fetch(`${baseUrl}/refood`)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.error) {
          showMessageError(responseJson.message);
        } else {
<<<<<<< HEAD
          renderRefood(responseJson.data);
=======
          // renderRefood(responseJson.data);
>>>>>>> 0197241c166f82aee0b2156a78ca4657cfd26dd3
          console.log(responseJson.data);
        }
      })
      .catch((error) => {
        showMessageError(error.message);
      });
  };

  getRefood();
});
<<<<<<< HEAD

function renderRefood(refoods) {
  const carouselActiveContainer = document.querySelector(".carousel-item");
  carouselActiveContainer.innerHTML = "";

  const carouseRow = document.createElement("div");
  carouseRow.classList.add("row");

  refoods.forEach(refoods => {
    const carouselHTML = makeCarousel(refoods);
    carouseRow.appendChild(carouselHTML);
  });

  carouselActiveContainer.appendChild(carouseRow);


};


  function makeCarousel(refoods) {
  
    // Membuat HTML untuk elemen carousel
    const carouselHTML = `
      <div class="col-md-4 item">
        <img src="${baseUrl}/img/${refoods.gambar}" class="d-block w-100 gambar" alt="${refoods.jenis}">
        <div class="carousel-caption d-none d-md-block">
          <h5 class="judul-item">${refoods.jenis}</h5>
          <a href="detail.html" class="btn btn-primary" id="cara-pengolahan">Cara Pengolahan</a>
        </div>
      </div>
    `;
  
    return carouselHTML;
  };
=======
>>>>>>> 0197241c166f82aee0b2156a78ca4657cfd26dd3
