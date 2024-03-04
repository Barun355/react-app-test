import './Header.css';
import Button from './Button';

function Header(props){
  const handleClick = () => {
    window.open("mailto:ishushreyas@gmail.com");
  };
  
  return(
    <div className="header"><p>{props.name}</p><span><Button clickAction={handleClick} positionFixed>Get in touch</Button></span></div>
  );
}

export default Header;
