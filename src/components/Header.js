import './Header.css';

function Header(props){
  return(
    <div className="header"><p>{props.name}</p><span><span className="material-symbols-rounded">account_circle</span></span></div>
  );
}

export default Header;
