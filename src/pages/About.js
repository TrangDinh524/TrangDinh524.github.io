import React from 'react';
import Footer from '../Footer/footer';
import Content from '../Content/content';
import './home.css';
function About() {
    return (
      <>
      <div className = 'About'>
        <section className='introduction'>
          <p className='about-me-title'>About me</p>
          <div class="profile__text">
            <p class="about-me-description">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
            <div class="btn-container">
              <button
                class="btn btn-color-2"
                onClick="window.open('./myResume.pdf')"
              >
                Download CV
              </button>
              <button class="btn btn-color-1">
                Contact Info
              </button>
            </div>
          </div> 
        </section>
        <section className='qualification'>
          <p className='about-me-title'>Qualification</p>
          {/* school/work */}

        </section>


      </div>
      </>
    );
  }
  

export default About;