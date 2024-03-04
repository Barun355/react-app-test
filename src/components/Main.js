import Button from './Button';
import TextView from './TextView';
import Footer from './Footer';
import GridView from './GridView';
import GridItem from './GridItem';
import Link from './Link';
import Lottie from 'lottie-react';

import cpp from './c-plus-plus.png';
import androidPng from './android.png';
import reactjs from './react.png';
import hiragana from './hiragana.json';
import programmer from './programming.json';
import video from './codeeditor.mp4';

import './Main.css';

function Main(props){
  return (
    <div className="main">
      <GridView>
        <GridItem>
          <Lottie
            animationData={programmer}
            loop={true}
            autoplay={true}
          />
        </GridItem>
        <GridItem>
          <TextView>Hello, I'm Ishu Shreyas(He/him), a passionate learner on a journey to make life simple with softwares. Currently delving into the intricacies of C++ and React JS, I find joy in crafting digital solutions. On a parallel track, I learn Japanese, unlocking a world of culture and communication.</TextView>
        </GridItem>
      </GridView>
      <GridView name="Projects">
        <GridItem elevated>
          <TextView>Chat bot</TextView>
          <Link hRef="https://ishushreyas.pythonanywhere.com/" />
        </GridItem>
        <GridItem elevated>
          <TextView>Quick Cloud Space</TextView>
          <Link hRef="https://quickcloudspace.web.app/" />
        </GridItem>
        <GridItem elevated>
          <TextView>TalkTale</TextView>
          <Link hRef="https://talktale.web.app/" />
        </GridItem>
        <GridItem elevated>
          <TextView>Code Editor</TextView>
          <Link hRef={video}>Android App</Link>
        </GridItem>
      </GridView>
      <GridView name="Interested in">
        <GridItem elevated>
          <img className="interestedImg" src={cpp} />
          <TextView>C++</TextView>
        </GridItem>
        <GridItem elevated>
          <img className="interestedImg" src={androidPng} />
          <TextView>Android</TextView>
        </GridItem>
        <GridItem elevated>
          <img className="interestedImg" src={reactjs} />
          <TextView>React Js</TextView>
        </GridItem>
        <GridItem elevated>
          <Lottie
            animationData={hiragana}
            loop={true}
            autoplay={true}
          />
          <TextView>Japanese</TextView>
        </GridItem>
      </GridView>
    </div>
  );
}

export default Main;
