import React, { useState, useContext } from 'react' 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import videoPlaceholder from '../assets/img/nyt_video_placeholder.png'


//Hero Section
function Hero() {
  
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.fadeIn').forEach((box) => {
    const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: .3, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });
  
  gsap.utils.toArray('.fadeInDown').forEach((box) => {
    const anim = gsap.fromTo(box, {autoAlpha: 0, y: -100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });
  
  gsap.utils.toArray('.fadeInUp').forEach((box) => {
    const anim = gsap.fromTo(box, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: box,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  });

  return (
    <div id="hero-section" className="hero-section ">
      <h1 className="hero-title">The truth can change<br></br> how we see the world.</h1>
      <p className="hero-copy">The New York Times covers the world in all its complexity, providing deeply reported journalism that examines the forces shaping our past, present and future. The 1619 Project exemplifies that rigor, exploring the foundational role that slavery has played in our nation.</p>
      <div className="hero-video-section fadeInUp">
      
      <div  className={isActive ? 'fadeInUp video-placeholder': 'hide-video-placeholder video-placeholder'} onClick={toggleClass} alt="White logo" data-video="http://www.youtube.com/embed/zP_D_YKnwi0?autoplay=1" />
         <iframe className={isActive ? 'hide-hero-video': 'hero-video'} width="560" height="315" src="https://www.youtube.com/embed/5Yw4qvw1b4s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      </div>
    </div>
  )
}

export default Hero