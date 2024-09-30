import React from 'react';
// import '../../App.css';
// import Cards from '../Cards';
import About from './About';
import Homepage from './Homepage';

import Footer from '../Footer/footer';
import Content from '../Content/content';

function Home() {
    return (
      <>
        {/* <Cards /> */}
        <Homepage />
        <About />
        <Content />
        <Footer /> 
      </>
    );
  }
  

export default Home;