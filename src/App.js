//import logo from './logo.svg';
//meat and bonds of react application
import Button from './components/Button';
import './App.css';
import Events from './components/Events';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>hello</h1> 
      {/* created components folder */}
      <Button /> 
      {/* from src - compoments events -> app.js -> index.js */}
      <Events />
    </div>
  );
}

export default App;
