import './App.css';
import Hello from './Hello';

function App({name}) {
  return <div>
    Hello form {name}
    <br/>
    <Hello name={name}></Hello>
    <h3>The following is a list</h3>
    <img src='https://source.unsplash.com/collection/190727/1600x900' alt=''cant load source image></img>
    <ol>This is a list
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ol>
  </div>
}

export default App;
