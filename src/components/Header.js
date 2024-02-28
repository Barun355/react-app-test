import './Header.css';

function Header(props){
  return(
    <div className="header"><h1>{props.name}</h1><span><span className="material-symbols-rounded">account_circle</span></span></div>
  );
}

export default Header;
