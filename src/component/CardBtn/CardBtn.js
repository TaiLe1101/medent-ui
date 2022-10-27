import classNames from 'classnames/bind';
import { image5 } from '~/utils/images';
import styles from './CardBtn.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function CardBtn({ img, label, to }) {
  return (
    <div className={cx('wrapper')}>
      <img src={img} alt={label} />
      <Button to={to} className={cx('btn')}>
        {label}
      </Button>
    </div>
  );
}

export default CardBtn;
