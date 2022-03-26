import React, { useState, useContext } from 'react' 

import logoWhite from '../assets/img/logo_white.png'

//Header Section
function Header() {

  return (
    <div id="header-section" className="header-section">
      <header class="header">
        <div class="header-details">
          <h1>NYT</h1>
          
        </div>
        
        <button class="button">Subscribe</button>
        <img src={logoWhite} alt="White logo" />
      </header>
    </div>
  )
}

export default Header