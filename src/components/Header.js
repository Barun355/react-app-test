import './Header.css';
import Button from './Button';
import React, { useState, useEffect } from 'react';

function Header({ forMobile, forDesktop }){
  const [scrollYValue, setScrollYValue] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY || document.documentElement.scrollTop;
      setScrollYValue(scrollYValue);
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
    
  }, []);

  const handleClick = () => {
    window.open("mailto:ishushreyas@gmail.com");
  };
  
  return (
      <div className={`header ${ scrollYValue > 1  ? "scrolled" : ""}`}>
        <h1>{isMobile ? forMobile : forDesktop}</h1>
        <span>
          <Button clickAction={handleClick} positionFixed>
            Get in touch
          </Button>
        </span>
      </div>
  );
}

export default Header;
