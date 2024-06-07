export function createCard(item) {
  const card = document.createElement('div');
  card.className = 'swiper-slide refood-slide';
  
  card.innerHTML = `
    <div class="refood-slide-img">
      <img src="${item.picture}" alt="${item.jenis}">
    </div>
    <div class="refood-slide-content">
      <h2 class="food-type">${item.jenis}</h2>
    </div>
  `;
  
  return card;
}
