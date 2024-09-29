import React from 'react';
import './App.css';
import Navbar from './NavBar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <>
      <Router>
        <Navbar />
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
