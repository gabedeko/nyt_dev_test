import React, { useRef, useState, useContext, useEffect } from 'react' 

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//import videoPlaceholder from '../assets/img/nyt_video_placeholder.png'


//Hero Section
function Hero() {

  //Add scrolltrigger Functionality
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const triggerClass = element.querySelector(".fadeInUp");
    const anim = gsap.fromTo(triggerClass, {autoAlpha: 0, y: 100}, {duration: .9, autoAlpha: 1, y: 0});
    ScrollTrigger.create({
      trigger: triggerClass,
      animation: anim,
      toggleActions: 'play none none none',
      once: true,
    });
  }, []);

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div ref={ref}>
      <div id="hero-section" className="hero-section fadeInUp" >
        <h1 className="hero-title">The truth can change<br></br> how we see the world.</h1>
        <p className="hero-copy ">The New York Times covers the world in all its complexity, providing deeply reported journalism that examines the forces shaping our past, present and future. The 1619 Project exemplifies that rigor, exploring the foundational role that slavery has played in our nation.</p>
        <div className="hero-video-section ">
        
        <div  className={isActive ? 'video-placeholder': 'hide-video-placeholder video-placeholder'} onClick={toggleClass} alt="White logo" data-video="http://www.youtube.com/embed/zP_D_YKnwi0?autoplay=1" />
          <iframe className={isActive ? 'hide-hero-video': 'hero-video'} width="560" height="315" src="https://www.youtube.com/embed/5Yw4qvw1b4s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
        </div>
      </div>
    </div>
    
  )
}

export default Hero