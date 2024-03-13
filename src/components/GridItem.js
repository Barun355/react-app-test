import './GridItem.css';

import React, { useState, useEffect } from 'react';

function GridItem({elevated, children}){
  const [scrollXValue, setScrollXValue] = useState(0);
  const [scrollYValue, setScrollYValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollYValue = window.scrollY || document.documentElement.scrollTop;

      setScrollYValue(scrollYValue);
      const scrollXValue = window.scrollX || document.documentElement.scrollLeft;

      setScrollXValue(scrollXValue);
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ripple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple-class');

    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${scrollXValue + event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${scrollYValue + event.clientY - button.offsetTop - radius}px`;

    button.appendChild(circle);

    setTimeout(() => {
      button.removeChild(circle);
    }, 400);
  };
  
  return (
    <div className={`grid-item ${ elevated ? "elevated" : ""}`} onClick={ripple}>
      {children}
    </div>
  );
}

export default GridItem;
