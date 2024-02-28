import Header from './components/Header';
import Main from './components/Main';
import Button from './components/Button';

function App(){
  return(
    <div>
      <Header name="Shreyas" />
      <Main greet="Hello" />
      <Button value="View Profile" />
    </div>
  );
}

export default App;
