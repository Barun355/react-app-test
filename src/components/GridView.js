import './Grid.css';

function GridView({children}){
  return (
    <div className="container">
      {children}
    </div>
  );
}

export default GridView;
