import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from '../Button/button'


function Navbar({ toggleTheme, theme }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const navItems = [
    { to: '/', label: 'Home', className: 'nav-links' },
    { to: '/about', label: 'About', className: 'nav-links' },
    { to: '/portfolio', label: 'Portfolio', className: 'nav-links' },
    { to: '/contact', label: 'Contact', className: 'nav-links' },
    { to: '/sign-up', label: 'Sign Up', className: 'nav-links-mobile' },
  ];

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

//   useEffect(() => {
//     showButton();
//   }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Trang
            <i className="fa-regular fa-face-laugh-beam" style={{ marginLeft: '10px' }}></i>
            </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {navItems.map((item, index) => (
                <li key={index}>
                <Link to={item.to} className={item.className} onClick={closeMobileMenu}>
                    {item.label}
                </Link>
                </li>
            ))}
            </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
          <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'light' ? (
            <i className='fa-regular fa-moon' style={{ color: 'white' }}></i>
          ) : (
            <i className='fa-regular fa-sun'></i>
          )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
