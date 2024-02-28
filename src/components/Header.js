import './Header.css';

function Header(props){
  return(
    <div className="header"><h2>{props.name}</h2><span><span className="material-symbols-rounded">account_circle</span></span></div>
  );
}

export default Header;
