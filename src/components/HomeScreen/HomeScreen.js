import React from 'react';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import './HomeScreen.css';
const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />
      {/* row */}
    </div>
  );
};

export default HomeScreen;
