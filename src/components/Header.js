import './Header.css';
import Button from './Button';
import React, { useState, useEffect } from 'react';

function Header(props){
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY || document.documentElement.scrollTop;
      setScrollYValue(scrollYValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
  }, []);

  const handleClick = () => {
    window.open("mailto:ishushreyas@gmail.com");
  };
  
  return(
    <>
      (scrollYValue > 150) ? <div className="header-open"><p>{props.name}</p><span><Button clickAction={handleClick} positionFixed>Get in touch</Button></span></div> : <div className="header"><p>{props.name}</p><span><Button clickAction={handleClick} positionFixed>Get in touch</Button></span></div>;
    </>
  );
}

export default Header;
