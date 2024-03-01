import './TextView.css';

function TextView({children}){
  return(
    <p className="textview-class">{children}</p>
  );
}

export default TextView;