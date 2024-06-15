Feature('Home Page');

Scenario('Menampilkan refood di halaman beranda', ({ I }) => {
  I.amOnPage('/');
  I.see('ReFood | Home', 'title');
  I.seeElement('.swiper-slide');
  I.seeElement('.refood-slide');
});
