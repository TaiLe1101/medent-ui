import classNames from 'classnames/bind';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, onClick, className }) {
  const classes = cx('btn', {
    [className]: className,
  });
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
