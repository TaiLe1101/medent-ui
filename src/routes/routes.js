import config from '~/configs';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Blogs from '~/pages/Blogs';
import Library from '~/pages/Library';
import Introduce from '~/pages/Introduce';
import NewsAndEvents from '~/pages/NewsAndEvents';
import Emax from '~/pages/Emax';
import SliderLayout from '~/layouts/SliderLayout';
import Solution from '~/pages/Solution/Solution';
import { background3 } from '~/utils/images';
import Catalog from '~/pages/Catalog';
import News from '~/pages/News';
import Education from '~/pages/Education';

const publicRouter = [
  {
    path: config.routes.home,
    component: Home,
    layout: SliderLayout,
  },
  {
    path: config.routes.product,
    component: Product,
    navCurrent: 'Sản phẩm',
  },
  {
    path: config.routes.blogs,
    component: Blogs,
    navCurrent: 'Blogs',
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
  {
    path: config.routes.solution,
    component: Solution,
    navCurrent: 'Giải pháp',
    backgroundImage: background3,
  },
  {
    path: config.routes.catalog,
    component: Catalog,
    navCurrent: 'Catalog',
    backgroundImage: background3,
  },
  {
    path: config.routes.news,
    component: News,
    navCurrent: 'Tin Tức& Sự kiện',
    backgroundImage: background3,
  },
  {
    path: config.routes.education,
    component: Education,
    navCurrent: 'Huấn luyện & Đào tạo',
    backgroundImage: background3,
  },
];

const privateRouter = [];

export { publicRouter, privateRouter };
