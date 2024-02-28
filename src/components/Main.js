import Button from './Button';

import ishushreyas from './ishushreyas.jpg';
import './Main.css';

function Main(props){
  return (
    <div className="main">
      <img src={ishushreyas} alt="ishushreyas" className="main-img"/>
      <Button value="View Profile" />
    </div>
  );
}

export default Main;
