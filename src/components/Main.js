import Button from './Button';
import TextView from './TextView';
import Footer from './Footer';
import GridView from './GridView';
import GridItem from './GridItem';
import Link from './Link';
import Lottie from 'lottie-react';
import ProjectCard from './ProjectCard';

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
          <h1 style={{textAlign: center, fontFamily: 'Righteous'}}>Hello World</h1>
          <TextView>I'm Ishu Shreyas (He/him), a passionate learner on a journey to make life simple with softwares. Currently delving into the intricacies of C++ and React JS, I find joy in crafting digital solutions. On a parallel track, I learn Japanese, unlocking a world of culture and communication.</TextView>
        </GridItem>
      </GridView>
      <GridView name="Projects">
        <GridItem elevated>
          <ProjectCard title="Chat bot" hRef="https://ishushreyas.pythonanywhere.com/">It's a Chat bot assistant built on Flask framework using html, css, javascript, <Link hRef="https://python.org/">Python</Link> and uses Gemini 1.0 api for response.</ProjectCard>
        </GridItem>
        <GridItem elevated>
          <ProjectCard title="Quick Cloud Space" hRef="https://quickcloudspace.web.app/">It's a cloud storage written with html, css, js and uses <Link hRef="https://console.firebase.google.com/">firebase</Link> for authentication, database, storage, etc.</ProjectCard>
        </GridItem>
        <GridItem elevated>
          <ProjectCard title="TalkTale" hRef="https://talktale.web.app/">It's a web based chat app written with html, css, js and uses <Link hRef="https://console.firebase.google.com/">firebase</Link> for authentication, database, storage, etc.</ProjectCard>
        </GridItem>
        <GridItem elevated>
          <ProjectCard title="Chat with shreyas" hRef="https://chatwithshreyas.web.app/">It's a webpage written with html, css, js and uses <Link hRef="https://console.firebase.google.com/">firebase</Link> for authentication, database, storage, etc.</ProjectCard>
        </GridItem>
        <GridItem elevated>
          <TextView><strong>Code Editor</strong></TextView>
          <TextView>It's an <Link hRef="https://developers.android.com/">Android</Link> application written in java.</TextView>
          <Link hRef={video}>Preview</Link>
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
