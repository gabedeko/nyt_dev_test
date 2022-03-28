import React, { useState, useContext } from 'react' 

import Recording from '../assets/audio/1619_NikoleHJones_LPEvergreen_211021.mp3'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//top artist section design - unused
function Audio() {

  //Add scrolltrigger Functionality
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.fadeIn4').forEach((box) => {
    const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  return (
    <div id="audio-section" className="audio-section">
      <div className="audio-section-text fadeIn4">
        <h1 className="audio-title">“If we can’t acknowledge the truth about the institution of slavery, then how do we go on to fix the legacy of it?”</h1>
        <h4 className="audio-person">Nikole Hannah-Jones</h4>
        <p className="audio-person-title">New York Times Magazine correspondent and creator of The 1619 Project</p>
      </div>
      

      <audio className="audio-controls" controlsList="nodownload" controls>
        <source src={Recording} type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default Audio