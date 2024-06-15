Feature('Login');

Scenario('Menampilkan halaman login', ({ I }) => {
  I.amOnPage('/#/login');
  I.see('Admin Login', 'h2');
  I.seeElement('#login-form');
});

Scenario('Login dengan kredensial yang benar', async ({ I }) => {
  I.amOnPage('/#/login');
  I.fillField('#username', 'admin');
  I.fillField('#password', 'admin123');
  I.click('Login');
  I.seeInCurrentUrl('/#/admin-dashboard');
});

Scenario('Menampilkan kesalahan dengan kredensial yang salah', async ({ I }) => {
  I.amOnPage('/#/login');
  I.fillField('#username', 'admin');
  I.fillField('#password', 'salahpassword');
  I.click('Login');
  I.see('Invalid username or password', '#login-error');
});
