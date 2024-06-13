import RefoodsSource from '../../data/refood-source';

const Login = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header text-center">
                <h3>Login</h3>
              </div>
              <div class="card-body">
                <form id="login-form">
                  <div class="form-group">
                    <label class="teks" for="username">Username</label>
                    <input type="text" class="form-control" id="username" name="username" required>
                  </div>
                  <div class="form-group">
                    <label class="teks" for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
              </div>
              <div class="card-footer text-center">
                <a href="#/register">Don't have an account? Register</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = form.username.value;
      const password = form.password.value;

      try {
        const response = await RefoodsSource.login(username, password);
        localStorage.setItem('token', response.data.token);
        // localStorage.setItem('id_user', id_user);
        // localStorage.setItem('nama_lengkap', nama_lengkap);
        alert('Login successful!');
        window.location.hash = '#/home';
      } catch (error) {
        console.error('Error logging in:', error);
        alert('Failed to login. Please try again.');
      }
    });
  },
};

export default Login;
