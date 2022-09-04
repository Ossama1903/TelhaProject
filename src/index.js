import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Dropdown from './components/Dropdown/Dropdown';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>



    
    <Navbar />
    <HeroSection />
    <Dropdown />
    

  </React.StrictMode>
);


