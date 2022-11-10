import config from '~/configs';
import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Blogs from '~/pages/Blogs';
import Library from '~/pages/Library';
import Introduce from '~/pages/Introduce';
import Emax from '~/pages/Emax';
import SliderLayout from '~/layouts/SliderLayout';
import Solution from '~/pages/Solution/Solution';
import { background3, background5 } from '~/utils/images';
import Catalog from '~/pages/Catalog';
import News from '~/pages/News';
import Education from '~/pages/Education';
import CatalogDetail from '~/pages/CatalogDetail';
import NotFound from '~/pages/NotFound';
import DentalEquipment from '~/pages/DentalEquipment';
import Clinical from '~/pages/Clinical';
import DentistryTools from '~/pages/DentistryTools';
import LaboTools from '~/pages/LaboTools';
import MaterialLabo from '~/pages/MaterialLabo';
import Orthodontic from '~/pages/Orthodontic';

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
    navCurrent: 'Thư Diện',
    backgroundImage: background5,
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
    path: config.routes.catalogDetail,
    component: CatalogDetail,
    navCurrent: 'Catalog Mới',
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
  },
  {
    path: config.routes.dentalEquipment,
    component: DentalEquipment,
    navCurrent: 'Thiết bị nha khoa',
    backgroundImage: background3,
  },
  {
    path: config.routes.clinical,
    component: Clinical,
    navCurrent: 'Lâm sàng',
    backgroundImage: background3,
  },
  {
    path: config.routes.dentistryTools,
    component: DentistryTools,
    navCurrent: 'Dụng cụ nha khoa',
    backgroundImage: background3,
  },
  {
    path: config.routes.laboTools,
    component: LaboTools,
    navCurrent: 'Thiết bị Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.materialLabo,
    component: MaterialLabo,
    navCurrent: 'Vật liệu Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.orthodontic,
    component: Orthodontic,
    navCurrent: 'Vật liệu Labo',
    backgroundImage: background3,
  },
  {
    path: config.routes.notFound,
    component: NotFound,
    layout: null,
  },
];

const privateRouter = [];

export { publicRouter, privateRouter };
