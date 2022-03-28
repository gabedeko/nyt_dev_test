import React, { useState, useContext } from 'react' 

//More Section
function More() {

  return (
    <div id="more-section" className="more-section">
      <h1 className="more-section-title">More reporting</h1>
      <p className="more-section-copy">The Times is committed to telling stories that offer new ways of seeing the world.</p>

      <div className="more-grid">
        <div className="more-grid-item more-grid-left">
            <div className="more-grid-item-content">
            <h1 className="more-grid-title">Overlooked</h1>
            <p className="more-grid-copy">Profiling notable individuals who never received a Times obituary.</p>
            <a className="more-grid-link" href="">EXPLORE</a>
            </div>
        </div>
        <div className="more-grid-item more-grid-right">
          <div className="more-grid-item-content">
            <h1 className="more-grid-title">Black History, Continued</h1>
            <p className="more-grid-copy">A groundbreaking series that explores the past, present, and future of Black America.</p>
            <a className="more-grid-link" href="more-grid-link">LEARN MORE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More