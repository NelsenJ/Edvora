import React from 'react';
import '../index.css'
import logo from "../../public/img/logo.png"

const Footer = () => {
  return (
    <footer className='mt-5'>
      <div className="footer-top">
        <div className="footer-about">
          <div className="footer-logo">
            <img src={logo} alt="edvora logo"/>
            <h5>Edvora</h5>
          </div>
          <p>
            Edvora adalah platform nonprofit dengan misi memberikan edukasi yang  bermutu untuk siapapun, dimanapun.
          </p>
        </div>

        <div className="footer-section bantuan-panduan">
            <h5 className='footer-heading'>Bantuan & Panduany</h5>
            <a href="#" className="section-link">About Us</a>
            <a href="#" className="section-link">Kebijakan privasi</a>
            <a href="#" className="section-link">Bantuan</a>
            <a href="#" className="section-link">Karier</a>
        </div>
        <div className="footer-section products">
            <h5 className='footer-heading'>Products</h5>
            <a href="#" className="section-link">About Us</a>
            <a href="#" className="section-link">About Us</a>
            <a href="#" className="section-link">About Us</a>
            <a href="#" className="section-link">About Us</a>
        </div>
        <div className="footer-section products">
            <h5 className='footer-heading'>Social Media</h5>
            <a href="#" className="section-link"><i class='bx bxl-instagram' ></i>Instagram</a>
            <a href="#" className="section-link"> <i class='bx bxl-facebook'></i>Facebook</a>
            <a href="#" className="section-link"><i class='bx bxl-youtube' ></i> Youtube</a>
        </div>
      </div>

      <hr />
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Edvora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
