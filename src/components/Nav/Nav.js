import React, { useState, useEffect } from 'react';
import './nav.css';
const Nav = () => {
  const [show, handleShow] = useState(false);

  const onTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onTransition);
    return () => window.removeEventListener('scroll', onTransition);
  }, []);

  return (
    <div className={`nav  ${show && 'nav__black'}`}>
      <div className='nav__content'>
        <img
          class='nav__logo'
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <img
          className='nav__avatar'
          src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Nav;
