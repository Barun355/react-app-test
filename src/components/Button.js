import './Button.css';

const Button = ({children}) => {

  const ripple = (event) => {
    const button = clickEvent.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${clickEvent.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${clickEvent.clientY - button.offsetTop - radius}px`;

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
