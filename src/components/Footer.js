import './Footer.css';

import Button from './Button';
import TextView from './TextView';
import EditText from './EditText';
import Icon from './Icon';

function Footer(props){
  return(
    <div className="footer">
      <div className="work-with-us">
        <TextView>Work with us</TextView>
        <EditText placeholderText="someone@gmail.com" />
        <Button>
          <Icon typeName="rounded">send</Icon>
        </Button>
      </div>
      <div className="bottom">
        <h1>ishushreyas</h1>
        <TextView>ありがとうございました | 2024</TextView>
        <Icon typeName="rounded">feedback</Icon>
      </div>
    </div>
  );
}

export default Footer;
