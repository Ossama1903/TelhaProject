import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import SearchArea from './components/SearchArea/SearchArea';
import ServiceSection from './components/ServiceSection/ServiceSection';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <Navbar />
    <HeroSection />
    <SearchArea />
    <ServiceSection />

  </React.StrictMode>
);


