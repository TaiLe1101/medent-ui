import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '~/configs';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
  return (
    <ul className={cx('wrapper')}>
      <li className={cx('item')}>
        <Link className={cx('link')} to={config.routes.product}>
          Sản phẩm
          <FontAwesomeIcon className={cx('icon')} icon={faCaretDown}></FontAwesomeIcon>
        </Link>
        <ul className={cx('sub-list')}>
          <li className={cx('sub-item')}>
            <Link className={cx('sub-link')} to="#">
              Nha Khoa
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Thiết bị nha khoa
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Lâm sàn
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Dụng cụ nha khoa
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Implant
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Labo
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Thiết bị Labo
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Vật liệu Labo
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className={cx('item')}>
        <Link to={config.routes.solution} className={cx('link')}>
          Giải pháp
          <FontAwesomeIcon className={cx('icon')} icon={faCaretDown}></FontAwesomeIcon>
        </Link>
        <ul className={cx('sub-list')}>
          <li className={cx('sub-item')}>
            <Link className={cx('sub-link')} to="#">
              CAD Cam
            </Link>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Chuẩn đoán hình ảnh
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Giải pháp chẩn đoán hình ảnh – Orthophos SL 3D
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  CHỤP PHIM CONEBEAM CT
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Điều trị nha chu
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  GIẢI PHÁP ĐIỀU TRỊ NHA CHU
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Giải pháp chỉnh nha
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  CS5
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Aligner Chewies
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  KÍNH LÚP NHA KHOA – GIẢI PHÁP BẢO VỆ CỘT SỐNG CHO NHA SĨ
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Hệ Thống Chỉnh Nha CS4
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Ống Bọc Lò Xo Dynaflex
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  GIẢI PHÁP CẢI TIẾN VƯỢT TRỘI CHO DÂY TMA
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Giải pháp cho labo
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link to="#" className={cx('sub-link-1')}>
                  Giải pháp thẩm mỹ tự nhiên như răng thật
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link className={cx('sub-link')} to="#">
              Giải pháp lâm sàn
            </Link>
          </li>
        </ul>
      </li>
      <li className={cx('item')}>
        <Link className={cx('link')}>Catalog</Link>
      </li>
      <li className={cx('item')}>
        <Link className={cx('link')}>Tin tức& Sự kiện</Link>
      </li>
      <li className={cx('item')}>
        <Link className={cx('link')}>Huấn luyện& Đào tạo</Link>
      </li>
    </ul>
  );
}

export default Navigation;
