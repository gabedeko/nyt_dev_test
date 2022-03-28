import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import './App.css';

import Landing from './pages/landing'

//import { gsap } from 'gsap/dist/gsap.min.js';
//import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js';



function App() {


  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
