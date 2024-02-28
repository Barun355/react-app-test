import './Button.css';

function Button(props){
  const buttonStyle = {
    position: relative,
    overflow: hidden,
    background-color: #3f51b5,
    color: white,
    padding: 10px 20px,
    border: none,
    border-radius: 5px,
    cursor: pointer,
  };

function ripple(){
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
  <button style={buttonStyle} onClick={ripple} className="button-class">{props.value}</button>
  );
}

export default Button;
