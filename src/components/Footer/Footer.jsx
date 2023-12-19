import React from 'react';
import { Layout, Row, Col } from 'antd';
import './Footer.css'
import { Link } from 'react-router-dom';
const { Footer } = Layout;
import FooterLogo from '../../assets/images/navbar/LogoLight.svg'

const AppFooter = () => {
  return (
    <Footer className='footer ' >
        <div className="container">
      <Row justify="center">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <h2 className='footer__logo' >
            <img src={FooterLogo} alt="" />
          </h2>
          <p>
            EduAdd tizimida siz eng zamonaviy o'quvv kurlarini mutlaqo bepulga ,<br/> mustaqil ravishta o'rganishingiz mumkin bo'ladi. 
          </p>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <h3 className='footer__title' >Havolalar</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            {/* Add more links as needed */}
          </ul>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
          <h3 className='footer__title' >Bog'lanish</h3>
          <p>
            Manzil:<br />
            Samarqand, O'zbekiston<br />
            Email: info@eduadd.uz<br />
            Telefon: +998 (99) 123 1212
          </p>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <p style={{ textAlign: 'center', marginTop: '20px' }}>
            © {new Date().getFullYear()} <Link to={"https://anodra.uz"}>wwww.anodra.uz</Link>  . Barcha huquqlar himoyalangan.
          </p>
        </Col>
      </Row>
      </div>
    </Footer>
  );
};

export default AppFooter;
