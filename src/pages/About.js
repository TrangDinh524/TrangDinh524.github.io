import React from 'react';
import Footer from '../Footer/footer';
import Content from '../Content/content';
import './about.css';
function About() {
    return (
      <>
        <div class="profile_pic_container">
            <img src='/profile_image.jpg'
            style={{
                width: 400, // Adjust the size as needed
                height: 400,
                borderRadius: '50%', // This makes it a circle
                objectFit: 'cover', // Ensures the image fills the container without distortion
              }}
              />
        </div>
      <div class="profile__text">
        <p class="profile__text__p1">Hello, I'm</p>
        <h1 class="title">Trang</h1>
        <p class="profile__text__p2">Software Developer</p>
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
        {/* <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>*/}
      </div> 
        <Footer /> 
      </>
    );
  }
  

export default About;