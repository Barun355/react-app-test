import './GridItem.css';

function GridItem({elevated, children}){
  return (
    <div className=`grid-item ${ elevated ? "elevated" : ""}`>
      {children}
    </div>
  );
}

export default GridItem;
