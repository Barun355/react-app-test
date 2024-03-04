import './Button.css';
import React, { useState, useEffect } from 'react';

const Button = ({positionFixed, clickAction, children}) => {
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
    const buttonClickAction = clickAction || console.log("Button clicked");
    const button = event.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    if(positionFixed){
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    } else {
      circle.style.left = `${scrollXValue + event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${scrollYValue + event.clientY - button.offsetTop - radius}px`;
    }

    button.appendChild(circle);

    setTimeout(() => {
      button.removeChild(circle);
      buttonClickAction();
    }, 400);
  };

  return (
    <button className="button-class" onClick={ripple}>
      {children}
    </button>
  );
}

export default Button;
