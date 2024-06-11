import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import About from '../views/pages/about-us';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/about-us' : About,
  
};

export default routes;
