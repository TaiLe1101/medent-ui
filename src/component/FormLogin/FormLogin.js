import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormLogin.module.scss';
import Button from '~/component/Button';
import { useState } from 'react';
import FormInput from '../FormInput';

const cx = classNames.bind(styles);

const FORM_INPUT_LIST = [
  {
    label: 'Email',
    desc: 'Email...',
    name: 'email',
    type: 'email',
    errorMessage: 'Vui lòng nhập gmail hợp lệ !',
    required: true,
    pattern: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  },
  {
    label: 'Password',
    desc: 'Password...',
    name: 'password',
    type: 'password',
    errorMessage: 'Vui lòng nhập mật khẩu hợp lệ !',
    required: true,
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,100}$`,
  },
];

function FormLogin() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  const handleOnChangeInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

    console.log('data ->', data);
  };

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Login Admin</h2>
      <form className={cx('form-login')} onSubmit={handleSubmit}>
        {FORM_INPUT_LIST.map((item, index) => {
          return (
            <FormInput
              label={item.label}
              desc={item.desc}
              errorMessage={item.errorMessage}
              name={item.name}
              onChange={handleOnChangeInput}
              type={item.type}
              pattern={item.pattern}
              required={item.required}
              key={index}
            ></FormInput>
          );
        })}
        <Button className={cx('btn-submit')}>Đăng nhập</Button>
      </form>
    </div>
  );
}

FormLogin.propTypes = {};
export default FormLogin;
