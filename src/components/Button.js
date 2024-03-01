import './Button.css';

const Button = ({children}) => {

  const ripple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const diameter = Math.max(button.offsetWidth, button.offsetHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;

    button.appendChild(circle);

    setTimeout(() => {
      button.removeChild(circle);
    }, 400);
  };

  return (
    <button className="button-class" onClick={() => ripple(event)}>
      {children}
    </button>
  );
}

export default Button;
