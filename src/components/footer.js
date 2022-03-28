import React, { useState, useContext } from 'react' 

import footerLogo from '../assets/img/nyt_footer_logo.png'

import toggleIcon from '../assets/img/circle-plus-solid.svg'

//Footer Section
function Footer() {

  const [isAccordion1, setAccordion1] = useState(true);

  const toggleAccordion1 = () => {
    setAccordion1(!isAccordion1);
  };

  const [isAccordion2, setAccordion2] = useState(true);

  const toggleAccordion2 = () => {
    setAccordion2(!isAccordion2);
  };

  return (
    <div id="footer-section" className="footer-section">
      <div className="footer-section-content">
        <div className="footer-section-item footer-section-1">
          <img className="footer_logo" src={footerLogo} alt="Footer Logo " />
          <p>@2022</p>
        </div>
        <div className="footer-section-item footer-section-link-group">
          <h5 className="footer-section-title">About</h5>
          <a className="footer-section-link" href="#"><span>The New York Times Company</span></a>
          <a className="footer-section-link" href="#"><span>Privacy Policy</span></a>
          <a className="footer-section-link" href="#"><span>Terms of Sale</span></a>
        </div>
        <div className="footer-section-item footer-section-link-group">
          <h5 className="footer-section-title">Help</h5>
          <a className="footer-section-link" href="#"><span>Frequently Asked Questions</span></a>
          <a className="footer-section-link" href="#"><span>Contact Us</span></a>
          <a className="footer-section-link" href="#"><span>Feedback</span></a>
        </div>
        <div className="mobile-footer-section-item">
          <div className="accordion" onClick={toggleAccordion1}>
              <h5 className="footer-section-title">About</h5>
              <img className="toggle-icon" src={toggleIcon} alt="White logo" />
          </div>
          <div className={isAccordion1 ? 'panel': 'panel active'}>
            <a className="footer-section-link" href="#"><span>The New York Times Company</span></a>
            <a className="footer-section-link" href="#">Privacy Policy</a>
            <a className="footer-section-link" href="#">Terms of Sale</a>
          </div>

          <div className="accordion" onClick={toggleAccordion2}>
            <h5 className="footer-section-title">Help</h5>
            <img className="toggle-icon" src={toggleIcon} alt="White logo" />
          </div>
          <div className={isAccordion2 ? 'panel': 'panel active'}>
            <a className="footer-section-link" href="#">Frequently Asked Questions</a>
            <a className="footer-section-link" href="#">Contact Us</a>
            <a className="footer-section-link" href="#">Feedback</a>
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default Footer