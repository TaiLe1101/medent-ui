import classNames from 'classnames/bind';
import styles from './NewsAndEvents.module.scss';

const cx = classNames.bind(styles);

function NewsAndEvents() {
  return (
    <div className={cx('wrapper')}>
      {' '}
      <h1>NewsAndEvents page</h1>
    </div>
  );
}

export default NewsAndEvents;
