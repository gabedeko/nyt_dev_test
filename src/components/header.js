import React, { useState, useContext } from 'react' 

//import logoWhite from '../assets/img/logo_white.png'
import svgLogo from '../assets/img/nyt-logo.svg'

//Header Section
function Header() {

  return (
    <div id="header-section" className="header-section">
      <header className="header">
        <div className="header-logo">
          {/* <img className="logo" src={logoWhite} alt="White logo" /> */}
          <a href="https://www.nytimes.com/"><img className="logo svg-logo" src={svgLogo} alt="White logo" /></a>

        </div>
        
        <a className="nyt-header-btn btn" href="https://www.nytimes.com/subscription" target="_blank">SUBSCRIBE</a>
        
      </header>
    </div>
  )
}

export default Header