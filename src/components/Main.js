import Button from './Button';
import TextView from './TextView';

import ishushreyas from './ishushreyas.jpg';
import './Main.css';

function Main(props){
  return (
    <div className="main">
      <img src={ishushreyas} alt="ishushreyas" className="main-img"/>
      <TextView>Ishu Shreyas</TextView>
      <Button>View Profile</Button>
      <Footer />
    </div>
  );
}

export default Main;
