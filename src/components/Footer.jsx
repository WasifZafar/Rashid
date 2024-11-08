import React from 'react';
 import './styles/Footer.css'; // Add CSS for custom styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} <span className='highlight-footer'>Wasif Zafar</span>. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
}

export default Footer;
