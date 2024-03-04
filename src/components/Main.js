import Button from './Button';
import TextView from './TextView';
import Footer from './Footer';
import GridView from './GridView';
import GridItem from './GridItem';
import Link from './Link';

import video from './codeeditor.mp4';
import './Main.css';

function Main(props){
  return (
    <div className="main">
      <GridView>
        <GridItem>
          <TextView>Hello, I'm Ishu Shreyas(He/him), a passionate learner on a journey to make life simple with softwares. Currently delving into the intricacies of C++ and React JS, I find joy in crafting digital solutions. On a parallel track, I learn Japanese, unlocking a world of culture and communication.</TextView>
        </GridItem>
      </GridView>
      <GridView name="Projects">
        <GridItem>
          <TextView>Chat bot</TextView>
          <Link hRef="https://ishushreyas.pythonanywhere.com/" />
        </GridItem>
        <GridItem>
          <TextView>Quick Cloud Space</TextView>
          <Link hRef="https://quickcloudspace.web.app/" />
        </GridItem>
        <GridItem>
          <TextView>TalkTale</TextView>
          <Link hRef="https://talktale.web.app/" />
        </GridItem>
        <GridItem>
          <TextView>Code Editor</TextView>
          <video height="440" controls>
            <source src={video} />
          </video>
        </GridItem>
      </GridView>
    </div>
  );
}

export default Main;
