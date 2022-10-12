import classNames from 'classnames/bind';
import styles from './Section3.module.scss';

const cx = classNames.bind(styles);

function Section3() {
  return <section className={cx('wrapper')}>section3</section>;
}

export default Section3;
