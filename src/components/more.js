import React, { useState, useContext } from 'react' 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//More Section
function More() {

   //Add scrolltrigger Functionality
   gsap.registerPlugin(ScrollTrigger);

   gsap.utils.toArray('.fadeIn3').forEach((box) => {
     const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
     ScrollTrigger.create({
       trigger: box,
       animation: anim,
       toggleActions: 'play none none none',
       once: true,
     });
   });

  return (
    <div id="more-section" className="more-section">
      <h1 className="more-section-title">More reporting</h1>
      <p className="more-section-copy">The Times is committed to telling stories that offer new ways of seeing the world.</p>

      <div className="more-grid fadeIn3">
        <a className="more-grid-item more-grid-left" href="https://www.nytimes.com/interactive/2018/obituaries/overlooked.html" target="_blank">
            <div className="more-grid-item-content">
              <h1 className="more-grid-title">Overlooked</h1>
              <p className="more-grid-copy">Profiling notable individuals who never received a Times obituary.</p>
              <div className="more-grid-link" >EXPLORE</div>
            </div>
        </a>
        <a className="more-grid-item more-grid-right" href="https://www.nytimes.com/interactive/2021/us/black-history-continued.html" target="_blank">
          <div className="more-grid-item-content">
            <h1 className="more-grid-title">Black History, Continued</h1>
            <p className="more-grid-copy">A groundbreaking series that explores the past, present, and future of Black America.</p>
            <div className="more-grid-link">LEARN MORE</div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default More