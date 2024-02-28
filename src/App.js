import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';
import Sidebar from './components/Sidebar';

function App(){
  return(
    <div>
      <Header name="Shreyas" />
      <Main greet="Hello" />
      <Sidebar greet="Hi" />
      <Button value="Click me" />
    </div>
  );
}

export default App;
