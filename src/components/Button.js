import './Button.css';

function Button(props){

function ripple(e){
  const button = event.currentTarget;
  const circle = document.createElement('span');
  circle.classList.add('ripple');

  const diameter = Math.max(button.offsetWidth, button.offsetHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - button.offsetTop - radius}px`;

  button.appendChild(circle);

  setTimeout(() => {
    button.removeChild(circle);
  }, 400);
}
  
  return (
  <button onClick={ripple} className="button-class">{props.value}</button>
  );
}

export default Button;
