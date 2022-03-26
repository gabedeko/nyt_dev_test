import React, { useState, useContext } from 'react' 

//Hero Section
function Hero() {

  return (
    <div id="hero-section" className="hero-section">
      <h1 className="hero-title">This is the Hero section</h1>
      <p className="">The New York Times covers the world in all its complexity, providing deeply reported journalism that examines the forces shaping our past, present and future. The 1619 Project exemplifies that rigor, exploring the foundational role that slavery has played in our nation.</p>
      <div className="header-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5Yw4qvw1b4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Hero