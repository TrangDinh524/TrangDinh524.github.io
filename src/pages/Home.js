import React from 'react';
// import '../../App.css';
// import Cards from '../Cards';
import HeroSection from '../HeroSection/herosection';
import Footer from '../Footer/footer';
import Content from '../Content/content';

function Home() {
    return (
      <>
        <HeroSection />
        {/* <Cards /> */}
        <Content />
        <Footer /> 
      </>
    );
  }
  

export default Home;