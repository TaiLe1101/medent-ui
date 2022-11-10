import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import FormLogin from '~/component/FormLogin';

const cx = classNames.bind(styles);

function Login() {
  return (
    <div className="container">
      <div className={cx('wrapper')}>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

Login.propTypes = {};
export default Login;
