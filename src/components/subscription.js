import React, { useRef, useState, useContext, useEffect } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//top artist section design - unused
function Subscription() {

  //Add scrolltrigger Functionality
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const triggerClass = element.querySelector(".fadeInUp-subscription");
    const anim = gsap.fromTo(triggerClass, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: triggerClass,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  return (
    <div id="subscription-section" className="subscription-section"  ref={ref}>
      <div className="subscription-section-content fadeInUp-subscription">
        <h5 className="subscription-title">SUPPORT OUR JOURNALISM</h5>
        <h1 className="subscription-copy">A subscription to The New York Times is critical inmaking such reporting possible. We hope you willstand with us in supporting independent journalism.</h1>
        <a className="subscription-btn button" href="https://www.nytimes.com/subscription" target="_blank">Subscribe</a>
      </div>
    </div>
  )
}

export default Subscription