import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';
import swRegister from './utils/sw-register';

document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navbarSupportedContent'),
    content: document.querySelector('#mainContent')
  });

  const updateNavbar = () => {
    const token = localStorage.getItem('token');
    const userMenu = document.getElementById('userMenu');
    const navbarDropdown = document.getElementById('navbarDropdown');
    const loginMenuItem = document.getElementById('loginMenuItem');
    const logoutMenuItem = document.getElementById('logoutMenuItem');
  
    if (token) {
      const username = localStorage.getItem('username');
      navbarDropdown.innerText = username || 'User';
      loginMenuItem.classList.add('d-none');
      logoutMenuItem.classList.remove('d-none');
    } else {
      navbarDropdown.innerText = 'Log In';
      loginMenuItem.classList.remove('d-none');
      logoutMenuItem.classList.add('d-none');
    }
  };
  
  window.addEventListener('hashchange', () => {
    app.renderPage();
    updateNavbar();
  });
  
  window.addEventListener('load', () => {
    app.renderPage();
    updateNavbar();
    swRegister();
  });
  
  // Log out
  document.getElementById('logoutMenuItem').addEventListener('click', () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    updateNavbar();
    window.location.hash = '#/home';
  });

});
