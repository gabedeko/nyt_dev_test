import React, { useState, useContext } from 'react' 

import logoWhite from '../assets/img/logo_white.png'

//Header Section
function Header() {

  return (
    <div id="header-section" className="header-section">
      <header className="header">
        <div className="header-logo">
          <img className="logo" src={logoWhite} alt="White logo" />
          
        </div>
        
        <button className="button">Subscribe</button>
        
      </header>
    </div>
  )
}

export default Header