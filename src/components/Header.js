import './Header.css';

function Header(props){
  return(
    <div className="header"><span>{props.name}</span><span><span className="material-symbols-rounded">account_circle</span></span></div>
  );
}

export default Header;
