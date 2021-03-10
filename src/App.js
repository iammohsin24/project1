import './App.css';
import Hello from './Hello';

function App({name}) {
  return <div>
    Hello form {name}
    <br/>
    <Hello name={name}></Hello>
    <h3>The following is a list</h3>
    <ol>This is a list
      <li>Item1</li>
      <li>Item2</li>
      <li>Item3</li>
    </ol>
  </div>
}

export default App;
