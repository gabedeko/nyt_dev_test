import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';

import Landing from './pages/landing'

function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
