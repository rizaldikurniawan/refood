import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import About from '../views/pages/about-us';
import Register from '../views/pages/register';
import Login from '../views/pages/login';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/about-us': About,
  '/register': Register,
  '/login': Login,
};

export default routes;
