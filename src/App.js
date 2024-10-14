import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

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
  };

  return (
    <>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />*/}
          <Route path='/about' element={<About />} /> 
          <Route path='/project' element={<Project />} /> 
          <Route path='/contact' element={<Contact />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
