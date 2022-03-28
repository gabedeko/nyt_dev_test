import React, { useState, useContext } from 'react' 

import footerLogo from '../assets/img/nyt_footer_logo.png'

//Footer Section
function Footer() {

  return (
    <div id="footer-section" className="footer-section">
      <div className="footer-section-content">
        <div className="footer-section-item footer-section-1">
          <img className="footer_logo" src={footerLogo} alt="Footer Logo " />
          <p>@2022</p>
        </div>
        <div className="footer-section-item">
          <h5 className="footer-section-title">About</h5>
          <a className="footer-section-link" href="#">The New York Times Company</a>
          <a className="footer-section-link" href="#">Privacy Policy</a>
          <a className="footer-section-link" href="#">Terms of Sale</a>
        </div>
        <div className="footer-section-item">
          <h5 className="footer-section-title">Help</h5>
          <a className="footer-section-link" href="#">Frequently Asked Questions</a>
          <a className="footer-section-link" href="#">Contact Us</a>
          <a className="footer-section-link" href="#">Feedback</a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer