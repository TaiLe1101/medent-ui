import classNames from 'classnames/bind';
import styles from './Education.module.scss';

const cx = classNames.bind(styles);

function Education() {
  return (
    <div className={cx('wrapper')}>
      <h1>Education page</h1>
    </div>
  );
}

export default Education;
