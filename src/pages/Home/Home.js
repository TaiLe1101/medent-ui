/* eslint-disable jsx-a11y/heading-has-content */
import classNames from 'classnames/bind';
import { Col, Row } from 'antd';
import Zoom from 'react-reveal/Zoom';

import Parameter from '~/component/Parameter';
import styles from './Home.module.scss';
import slotionImg from '~/assets/images/Solutions1.svg';
import customerImg from '~/assets/images/Customer1.svg';
import partnersImg from '~/assets/images/Partners1.svg';
import brandsItem from '~/assets/images/Brands1.svg';
import StepItem from '~/component/StepItem';
import { logo1, logo2, logo3 } from '~/utils/images';

const cx = classNames.bind(styles);

const PARAMETER_LIST = [
  {
    img: slotionImg,
    amount: 20,
    name: 'Giải pháp',
  },
  {
    img: customerImg,
    amount: 1200,
    name: 'Khách hàng',
  },
  {
    img: partnersImg,
    amount: 12,
    name: 'Đối tác',
  },
  {
    img: brandsItem,
    amount: 6025,
    name: 'Sản phẩm',
  },
];

const STEP_LIST = [
  {
    logo: logo1,
    title: 'Thu nhập & Chẩn đoán dữ liệu',
    description: 'Một phục hình được tạo ra dưới dạng hình ảnh 3D trên máy tính.',
  },
  {
    logo: logo2,
    title: 'Kế hoạch & Tư vấn',
    description: 'Sau khi tư vấn, một camera sẽ chụp lại khu vực cần xử lý',
  },
  {
    logo: logo3,
    title: 'Phục hình & Điều trị',
    description:
      'Sau đó, phục hình răng được tạo ra trên máy tính và sau đó được mài trực tiếp từ một phôi sứ. Chỉ một lúc sau, phục hình sứ đã hoàn thành được gắn lên bệnh nhân.',
  },
];

function Home() {
  return (
    <div className={cx('wrapper')}>
      <section className={cx('section-1')}>
        <Zoom>
          <Row gutter={[32, 32]}>
            {PARAMETER_LIST.map((item, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 6 }} md={{ span: 6 }}>
                  <Parameter amount={item.amount} name={item.name} img={item.img}></Parameter>
                </Col>
              );
            })}
          </Row>
        </Zoom>
      </section>
      <section className={cx('section-2')}>
        <h3 className={cx('title')}>Medent đem đến giải pháp tốt nhất "NHA KHOA 1 LẦN HẸN"</h3>
        {STEP_LIST.map((item, index) => {
          return (
            <Zoom>
              <StepItem key={index} logo={item.logo} title={item.title} description={item.description}></StepItem>
            </Zoom>
          );
        })}
      </section>
    </div>
  );
}

export default Home;
