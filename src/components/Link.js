import './Link.css';

function Link({hRef, inline, children}){
  return (
    <a href={hRef} className={`link ${ inline  ? "inline" : ""}`}>{children ? children : hRef}</a>
  );
}

export default Link;
