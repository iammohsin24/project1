import './App.css';
import Hello from './Hello';

function App({name}) {
  return <div>
    Hello form {name}
    <br/>
    <Hello name={name}></Hello>
    <h3>The following is a random image</h3>
    <img src='https://source.unsplash.com/collection/190727/800x600' alt='cant load source imagery'></img>
  </div>
}

export default App;
