import classNames from 'classnames/bind';
import styles from './Section5.module.scss';

const cx = classNames.bind(styles);

function Section5() {
  return <section className={cx('wrapper')}>section5</section>;
}

export default Section5;
