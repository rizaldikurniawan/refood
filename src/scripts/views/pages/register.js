import RefoodsSource from '../../data/refood-source';

const Register = {
  async render() {
    return `
      <div class="container mt-5">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="card">
              <div class="card-header text-center">
                <h3>Register</h3>
              </div>
              <div class="card-body">
                <form id="register-form">
                  <div class="form-group">
                    <label class="teks" for="username">Username</label>
                    <input type="text" class="form-control" id="username" name="username" required>
                  </div>
                  <div class="form-group">
                    <label class="teks"  for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" required>
                  </div>
                  <div class="form-group">
                    <label class="teks" for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" required>
                  </div>
                  <div class="form-group">
                    <label class="teks" for="nama_lengkap">Full Name</label>
                    <input type="text" class="form-control" id="nama_lengkap" name="nama_lengkap" required>
                  </div>
                  <button type="submit" class="btn btn-primary btn-block">Register</button>
                </form>
              </div>
              <div class="card-footer text-center">
                <a href="#/login">Already have an account? Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const username = form.username.value;
      const email = form.email.value;
      const password = form.password.value;
      const nama_lengkap = form.nama_lengkap.value;
      const role = 'user';

      try {
        await RefoodsSource.register(username, password, nama_lengkap, email, role);
        alert('Registration successful! Please login.');
        window.location.hash = '#/login';
      } catch (error) {
        console.error('Error registering user:', error);
        alert('Failed to register. Please try again.');
      }
    });
  },
};

export default Register;
