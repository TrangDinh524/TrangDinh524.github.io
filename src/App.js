import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const choseTheme = localStorage.getItem('theme');
    if (choseTheme) {
      setTheme(choseTheme);
      document.body.className = choseTheme; // set initial theme class
    }
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
