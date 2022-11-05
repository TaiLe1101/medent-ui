import classNames from 'classnames/bind';
import Search from '~/component/Search';
import styles from './Catalog.module.scss';
import Section1 from './components/Section1';

const cx = classNames.bind(styles);

function Catalog() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Search></Search>
        <Section1></Section1>
      </div>
    </div>
  );
}

export default Catalog;
