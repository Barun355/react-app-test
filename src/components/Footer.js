import './Footer.css';

import Button from './Button';
import TextView from './TextView';
import EditText from './EditText';

function Footer(props){
  return(
    <div className="footer">
      <div className="work-with-us">
        <TextView>Work with us</TextView><br />
        <EditText />
        <Button>Submit</Button>
      </div>
      <div className="bottom">
        <h1>ishushreyas</h1>
        <TextView>ありがとうございました | 2024</TextView>
        <span className="material-symbols-rounded">feedback</span>
      </div>
    </div>
  );
}

export default Footer;
