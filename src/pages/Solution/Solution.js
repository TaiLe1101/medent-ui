import classNames from 'classnames/bind';
import styles from './Solution.module.scss';

const cx = classNames.bind(styles);

function Solution() {
  return <div className={cx('wrapper')}>1</div>;
}

export default Solution;
