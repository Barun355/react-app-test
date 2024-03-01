import Button from './Button';

import ishushreyas from './ishushreyas.jpg';
import './Main.css';

function Main(props){
  return (
    <div className="main">
      <img src={ishushreyas} alt="ishushreyas" className="main-img"/>
      <p>Ishu Shreyas</p>
      <Button>View Profile</Button>
    </div>
  );
}

export default Main;
