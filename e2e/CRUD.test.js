/* eslint-disable no-promise-executor-return */
Feature('CRUD');

Before(({ I }) => {
  I.amOnPage('/#/');
});

Scenario('menambahkan cara pengolahan', ({ I }) => {
  I.seeElement('#cara-pengolahan');

  I.click('a[id="cara-pengolahan"]');

  I.seeElement('#username');
  I.seeElement('#cara-pengolahan');

  I.fillField('#username', 'Rizal');
  I.fillField('#cara-pengolahan', 'mencoba testing');

  I.click('button[type="submit"]');
});

// Scenario('swiper ketika diklik maka banner mengikuti', async ({ I }) => {
//   const slideIndex = 1;

//   I.seeElement('.swiper-slide');

//   await I.click(`.swiper-slide:nth-child(${slideIndex + 1})`);

//   await new Promise((resolve) => setTimeout(resolve, 4000));

//   const foodTypeSelector = `.swiper-slide:nth-child(${slideIndex + 1}) .food-type`;
//   I.seeElement(foodTypeSelector);

//   const foodTypeText = await I.grabTextFrom(foodTypeSelector);

//   console.log(`Nilai teks dari .food-type setelah klik: '${foodTypeText}'`);
// });
