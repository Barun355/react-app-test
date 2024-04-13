import './style/Grid.css';

function GridView({name, children}){
  return (
    <div>
      <h2 className="grid-name">{name}</h2>
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default GridView;
