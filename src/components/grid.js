import React, { useState, useContext } from 'react' 

import Project from '../assets/img/1619_0.png'

//Grid Section
function Grid() {

  return (
    <div id="grid-section" className="grid-section">
      <div className="grid grid-1">
        <div class="grid-1-item grid-1-left">
          <img className="1619-logo" src={Project} alt="1619 Logo " />
          <p className="grid-1-left-copy">Published by The New York Times, the project demonstrates how slavery and its legacy have shaped modern America.</p>
          <a className="grid-item-link" href="#">Explore</a>
        </div>
        <div className="grid-1-item grid-1-right">
          <div className="grid-item-container">
            <p className="grid-1-right-copy">A new book expands on the original reporting with new essays and poems that illuminate slavery's role in present-day America.</p>
            <a className="grid-item-link" href="#">Learn More</a>
          </div>
        </div>
      </div>
      <div className="grid grid-2">
        <div className="grid-2-item grid-2-left">
          <div className="grid-item-container">
            <p className="grid-2-left-copy">A five-part audio narrative series examines the impact of slavery.</p>
            <a className="grid-item-link" href="#">Learn More</a>
          </div>
        </div>
        <div className="grid-2-item grid-2-right">
          <h1 className="grid-2-right-title">A powerful vision</h1>
          <p className="grid-2-right-copy">The 1619 Project was inteded to consider the connection of America's past with its present.</p>
          <a className="grid-item-link" href="#">Learn More</a>
        </div>
      </div>
      <div className="grid grid-3">
        <div className="grid-3-item grid-3-1">
          <div className="grid-item-container">
            <p className="grid-3-item-copy">A special curriculum gives students a fuller understanding of slavery.</p>
            <a className="grid-item-link" href="#">Explore</a>
          </div> 
        </div>
        <div className="grid-3-item grid-3-2">
            <div className="grid-item-container">
              <p className="grid-3-item-copy">Show your support with special edition merchandise from our store.</p>
              <a className="grid-item-link" href="#">Shop</a>
            </div>
        </div>
        <div className="grid-3-item grid-3-3">
            <div className="grid-item-container">
              <p className="grid-3-item-copy">Honoring an important anniversary.</p>
              <a className="grid-item-link" href="#">Learn More</a>
            </div>  
        </div>
      </div>
    </div>
  )
}

export default Grid