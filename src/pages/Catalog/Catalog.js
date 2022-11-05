import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import CardBtn from '~/component/CardBtn';
import Search from '~/component/Search';
import { image5 } from '~/utils/images';
import styles from './Catalog.module.scss';
import Section1 from './components/Section1';

const cx = classNames.bind(styles);

function Catalog() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Search></Search>
        <Section1></Section1>

        <h2 className={cx('title')}> Nha khoa</h2>
        <Row gutter={[32, 32]}>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
          <Col span={24} lg={{ span: 8 }}>
            <CardBtn label="Tài Lê" img={image5} secondary title="Dụng cụ nha khoa"></CardBtn>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Catalog;
