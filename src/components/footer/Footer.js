import React from 'react';
import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>Copyright &copy; 2023 by Ashente | All Right Reserved.</p>
      </div>
      <div className="footer__icon-top">
        <a href='#'>
          <i className="bx bx-up-arrow-alt"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer