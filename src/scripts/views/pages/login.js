const Login = {
  async render() {
    return `
      <div class="container mt-5">
        <h2 class="text-center">Admin Login</h2>
        <form id="login-form">
          <div class="mb-3">
            <label for="username" class="form-label">Username</label>
            <input type="text" class="form-control" id="username" placeholder="admin" required>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" placeholder="admin123" required>
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <div id="login-error" class="mt-3 text-danger"></div>
      </div>
    `;
  },

  async afterRender() {
    document.title = 'ReFood | Login';

    const form = document.getElementById('login-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        window.location.hash = '/admin-dashboard';
      } else {
        document.getElementById('login-error').innerText = 'Invalid username or password';
      }
    });
  },
};

export default Login;
