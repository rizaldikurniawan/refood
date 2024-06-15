Feature('Admin Dashboard');

Scenario('Mengalihkan ke login jika tidak terautentikasi', ({ I }) => {
  I.amOnPage('/#/admin-dashboard');
  I.seeInCurrentUrl('/#/login');
});

Scenario('Menampilkan dashboard admin setelah login', async ({ I }) => {
  I.amOnPage('/#/login');
  I.fillField('#username', 'admin');
  I.fillField('#password', 'admin123');
  I.click('Login');
  I.seeInCurrentUrl('/#/admin-dashboard');
  I.see('Admin Dashboard', 'h2.admin');
  I.seeElement('.list-group-item');
});

const { I } = inject();

async function loginAsAdmin() {
  I.amOnPage('/#/login');
  I.fillField('Username', 'admin');
  I.fillField('Password', 'admin123');
  I.click('Login');
  I.amOnPage('/#/admin-dashboard');
  I.waitForElement('#refoods-list', 10);
}

Scenario('Mengedit cara pengolahan', async () => {
  await loginAsAdmin();

  I.waitForElement('#cara-pengolahan-limbah-1 .edit-button', 10);
  I.click('#cara-pengolahan-limbah-1 .edit-button');
  I.waitForElement('.edit-form', 5);
  I.fillField('Edit Processing Method', 'Metode pengolahan diperbarui');
  I.click('.save-button');
  I.acceptPopup();
  I.waitForElement('#refoods-list', 10);
  within('.card-text', () => {
    I.see('Metode pengolahan diperbarui');
  });
});

Scenario('Menghapus cara pengolahan', async () => {
  await loginAsAdmin();

  I.waitForElement('#cara-pengolahan-limbah-1 .delete-button', 10);
  I.click('#cara-pengolahan-limbah-1 .delete-button');
  I.acceptPopup();
  I.waitForElement('#refoods-list', 10);
  within('.card-text', () => {
    I.dontSee('Metode pengolahan diperbarui');
  });
});
