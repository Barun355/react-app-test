import './Footer.css';

import Button from './Button';
import TextView from './TextView';
import EditText from './EditText';
import Icon from './Icon';

function Footer(props){
  return(
    <div className="footer">
    <TextView>Work with us</TextView>
      <div className="work-with-us">
        <EditText placeholderText="someone@gmail.com" />
        <Button>
          <Icon typeName="rounded">send</Icon>
        </Button>
      </div>
      <div className="bottom">
        <h1>ishushreyas</h1>
        <TextView>ありがとうございました | 2024</TextView>
        <Link hRef="https://chatwithshreyas.web.app/"><Icon typeName="rounded">feedback</Icon></Link>
      </div>
    </div>
  );
}

export default Footer;
