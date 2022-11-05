import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, onClick, className, to }) {
  const classes = cx('btn', {
    [className]: className,
  });
  return (
    <Link to={to || '#'} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default Button;
