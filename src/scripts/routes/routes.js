import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import About from '../views/pages/about-us';
import AdminDashboard from '../views/pages/admin-dashboard';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/about-us': About,
  '/admin-dashboard': AdminDashboard,
  '/login': Login,
};

export default routes;
