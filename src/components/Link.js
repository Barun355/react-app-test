import './Link.css';

function Link({hRef, children}){
  return (
    <a href={hRef} className="link">{children ? children : hRef}</a>
  );
}

export default Link;
