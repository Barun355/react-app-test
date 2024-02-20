import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App(){
  return(
    <div>
      <Header name="Shreyas" />
      <Main greet="Hello" />
      <Sidebar greet="Hi" />
    </div>
  );
}

export default App;
