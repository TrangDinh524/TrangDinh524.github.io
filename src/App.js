import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
// import BackgroundVideo from'./BgVid/bgvid'

function App() {
  const [theme, setTheme] = useState('dark');
  const videoRef = useRef(null);

  useEffect(() => {
    let choseTheme = localStorage.getItem('theme');
    console.log("Initial theme:", choseTheme);

    if (!choseTheme) {
      choseTheme = 'dark'; // Set a default theme if none is found
      localStorage.setItem('theme', choseTheme); // Store the default theme
    }
    setTheme(choseTheme);
    document.body.className = choseTheme; // Set initial theme class
    console.log("Chosen theme:", choseTheme);

  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme); // save the theme to localStorage
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video with the updated src
    }
  };

  return (
    <>
      <Router>
      <div className="app-container">
        <video ref={videoRef} autoPlay loop muted>
          <source 
            src={theme === 'dark' ? "dark-theme-vid.mp4" : "light-theme-vid.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />*/}
          <Route path='/about' element={<About />} /> 
          <Route path='/project' element={<Project />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
