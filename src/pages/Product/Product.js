import classNames from 'classnames/bind';
import NavCurrent from '~/component/NavCurrent';
import SectionProduct1 from './Components/SectionProduct1';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Sản phẩm</h1>
      <NavCurrent></NavCurrent>
      <SectionProduct1 title="Sản Phẩm"></SectionProduct1>
      <SectionProduct1 title="Labo"></SectionProduct1>
    </div>
  );
}

export default Product;
