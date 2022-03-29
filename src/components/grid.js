import React, { useRef, useState, useContext, useEffect } from 'react' 

import Project from '../assets/img/1619_0.png'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Grid Section
function Grid() {

  //Add scrolltrigger Functionality
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const triggerClass = element.querySelector(".fadeInUp-grid-1");
    const anim = gsap.fromTo(triggerClass, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: triggerClass,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);
  useEffect(() => {
    const element = ref.current;
    const triggerClass = element.querySelector(".fadeInUp-grid-2");
    const anim = gsap.fromTo(triggerClass, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: triggerClass,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);
  useEffect(() => {
    const element = ref.current;
    const triggerClass = element.querySelector(".fadeInUp-grid-3");
    const anim = gsap.fromTo(triggerClass, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: triggerClass,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  return (
    <div ref={ref}>
      <div id="grid-section" className="grid-section">
        <div className="grid grid-1 fadeIn2 fadeInUp-grid-1"> 
          <a className="grid-1-item grid-1-left" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
            <img className="1619-logo grid-img" src={Project} alt="1619 Logo " />
            <p className="grid-1-left-copy">Published by The New York Times, the project demonstrates how slavery and its legacy have shaped modern America.</p>
            <div className="grid-item-link" href="#">Explore</div>
            <div className="grid-filter"></div>
          </a>
          <a className="grid-1-item grid-1-right" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
            <div className="grid-item-container">
              <p className="grid-1-right-copy">A new book expands on the original reporting with new essays and poems that illuminate slavery's role in present-day America.</p>
              <div className="grid-item-link" href="#">Learn More</div>
            </div>
          </a>
        </div>
        <div className="grid grid-2 fadeIn2 fadeInUp-grid-2">
          <a className="grid-2-item grid-2-left" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
            <div className="grid-item-container">
              <p className="grid-2-left-copy">A five-part audio narrative series examines the impact of slavery.</p>
              <div className="grid-item-link" href="#">Learn More</div>
            </div>
          </a>
          <a className="grid-2-item grid-2-right" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
            <h1 className="grid-2-right-title">A powerful vision</h1>
            <p className="grid-2-right-copy">The 1619 Project was inteded to consider the connection of America's past with its present.</p>
            <div className="grid-item-link" href="#">Learn More</div>
          </a>
        </div>
        <div className="grid grid-3 fadeInUp-grid-2">
          <a className="grid-3-item grid-3-1" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
            <div className="grid-item-container">
              <p className="grid-3-item-copy">A special curriculum gives students a fuller understanding of slavery.</p>
              <div className="grid-item-link" href="#">Explore</div>
            </div> 
          </a>
          <a className="grid-3-item grid-3-2" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
              <div className="grid-item-container">
                <p className="grid-3-item-copy">Show your support with special edition merchandise from our store.</p>
                <div className="grid-item-link" href="#">Shop</div>
              </div>
          </a>
          <a className="grid-3-item grid-3-3" href="https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html?" target="_blank">
              <div className="grid-item-container">
                <p className="grid-3-item-copy">Honoring an important anniversary.</p>
                <div className="grid-item-link" href="#">Learn More</div>
              </div>  
          </a>
        </div>
      </div>
    </div>
  )
}

export default Grid