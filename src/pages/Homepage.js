import React from 'react';
import Content from '../Content/content';
import './home.css';
function Homepage() {
    return (
      <>
        <div class="profile_pic_container">
            <img src='/profile_image.jpg'
            style={{
                width: 200, // Adjust the size as needed
                height: 200,
                float: 'right', 
                marginLeft: 'auto',
                borderRadius: '50%', // This makes it a circle
                objectFit: 'cover', // Ensures the image fills the container without distortion
              }}
              />
        </div>
    <div className="profile__text" style={{ textAlign: 'center' }}>
        <p class="profile__text__p1">Hello, I'm</p>
        <h1 class="title">Trang</h1>
        <p class="profile__text__p2">Software Developer</p>

      </div> 
      </>
    );
  }
  

export default Homepage;