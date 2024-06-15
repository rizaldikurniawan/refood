Feature('Detail Page');

Scenario('Menampilkan detail refood', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.swiper-slide-active', 10);
  I.click('.swiper-button-next');
  I.waitForElement('.swiper-slide-active', 10);
  I.click('.btn-primary');
  I.seeInCurrentUrl('/detail/');
  I.waitForElement('#waste-name', 10);
  I.seeInTitle('ReFood |');
  I.seeElement('#waste-name');
  I.seeElement('#waste-description');
  I.seeElement('.list-pengolahan');
  I.seeElement('form#add-processing-form');
});

Scenario('Menambahkan metode pengolahan baru', async ({ I }) => {
  I.amOnPage('/#/detail/limbah-1');
  I.fillField('#username', 'testuser');
  I.fillField('#cara-pengolahan', 'Metode pengolahan baru');
  I.click('Tambah');
  I.wait(3);
});
