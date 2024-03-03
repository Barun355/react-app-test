import './Button.css';
import React, { useState, useEffect } from 'react';

const Button = ({children}) => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY || document.documentElement.scrollTop;

      setScrollValue(scrollValue);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const ripple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${scrollValue + event.clientY - button.offsetTop - radius}px`;

    button.appendChild(circle);

    setTimeout(() => {
      button.removeChild(circle);
    }, 400);
  };

  return (
    <button className="button-class" onClick={ripple}>
      {children}
    </button>
  );
}

export default Button;
