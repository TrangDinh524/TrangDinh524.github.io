import React from 'react';
import './footer.css';
import { Button } from '../Button/button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Interested in my profile? Don't hesitate to drop me a message via:
        </p>
        <ul className='contact-list'>
            <li>Phone: (+65) 9056 7614</li>
            <li>Email: <a href="mailto:dinhtrang.5204@gmail.com">dinhtrang.5204@gmail.com</a></li>
        </ul>
        </section>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                Trang
                <i className="fa-regular fa-face-laugh-beam" style={{ marginLeft: '10px' }} />
              </Link>
            </div>
            <small class='website-rights'>Trang © 2024</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link email'
                to='/'
                target='_blank'
                aria-label='Email'
              >
                <i class='fa-solid fa-envelope' />
                {/* fa-solid fa-envelope */}
              </Link>
              <Link
                class='social-icon-link twitter'
                to='https://www.linkedin.com/in/trang-dinh-quynh/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <i class='fab fa-linkedin' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default Footer;