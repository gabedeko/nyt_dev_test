import React, { useState, useContext } from 'react' 

//Grid Section
function Grid() {

  return (
    <div id="grid-section" className="grid-section">
      <div className="grid grid-1">
        <div class="grid-1-left">
          <h1>The 1619 Project</h1>
          <p className="grid-1-left-copy">Published by The New York Times, the project demonstrates how slavery and its legacy have shaped modern America.</p>
          <a className="grid-item-link" href="#">Explore</a>
        </div>
        <div className="grid-1-right">
          <p className="grid-1-right-copy">A new book expands on the original reporting with new essays and poems that illuminate slavery's role in present-day America.</p>
          <a className="grid-item-link" href="#">Learn More</a>
        </div>
      </div>
      <div className="grid grid-2">
        <div className="grid-2-left">
          <p className="grid-2-left-copy">A five-part audio narrative series examines the impact of slavery.</p>
          <a className="grid-item-link" href="#">Learn More</a>
        </div>
        <div className="grid-2-right">
          <h1>A powerful vision</h1>
          <p className="grid-2-right-copy">The 1619 Project was inteded to consider the connection of America's past with its present.</p>
          <a className="grid-item-link" href="#">Learn More</a>
        </div>
      </div>
      <div className="grid grid-3">
        <div className="grid-3-1">
          <p className="grid-3-1-copy">A special curriculum gives students a fuller understanding of slavery.</p>
          <a className="grid-item-link" href="#">Explore</a>
        </div>
        <div className="grid-3-2">
          <p className="grid-3-2-copy">Show your support with special edition merchandise from our store.</p>
          <a className="grid-item-link" href="#">Shop</a>
        </div>
        <div className="grid-3-3">
          <p className="grid-3-3-copy">Honoring an important anniversary.</p>
          <a className="grid-item-link" href="#">Learn More</a>
        </div>
      </div>
    </div>
  )
}

export default Grid