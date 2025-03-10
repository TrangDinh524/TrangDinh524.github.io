import React from "react";
// import Content from '../Content/content';
import "../App.css";

function Homepage() {
  return (
    <>
      <div class="image-container">
        <img src="images/bg.jpg" alt="Night Sky" class="background-image" />
        <div class="text-overlay">
          {/* <i className="fa-solid fa-certificate icon-container">
            <div class="text-content"> */}
          <p>Hello, I'm</p>
          <h1>Trang</h1>
          <p>Software Developer</p>
        </div>
        {/* </i>
        </div> */}
      </div>
    </>
  );
}

export default Homepage;
