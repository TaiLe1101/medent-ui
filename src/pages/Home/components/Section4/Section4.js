import classNames from 'classnames/bind';
import styles from './Section4.module.scss';

const cx = classNames.bind(styles);

function Section4() {
  return <section className={cx('wrapper')}>section4</section>;
}

export default Section4;
