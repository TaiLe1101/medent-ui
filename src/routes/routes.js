import config from '~/configs';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Blogs from '~/pages/Blogs';
import Library from '~/pages/Library';
import Introduce from '~/pages/Introduce';
import NewsAndEvents from '~/pages/NewsAndEvents';
import Emax from '~/pages/Emax';
import SliderLayout from '~/layouts/SliderLayout';

const publicRouter = [
  {
    path: config.routes.home,
    component: Home,
    layout: SliderLayout,
  },
  {
    path: config.routes.product,
    component: Product,
  },
  {
    path: config.routes.blogs,
    component: Blogs,
  },
  {
    path: config.routes.library,
    component: Library,
  },
  {
    path: config.routes.contact,
    component: Library,
  },
  {
    path: config.routes.introduce,
    component: Introduce,
  },
  {
    path: config.routes.newsAndEvents,
    component: NewsAndEvents,
  },
  {
    path: config.routes.emax,
    component: Emax,
  },
];

const privateRouter = [];

export { publicRouter, privateRouter };
