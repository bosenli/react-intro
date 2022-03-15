//starting here as react app: resource - https://scrimba.com/learn/learnreact
//import logo from './logo.svg';
//meat and bonds of react application
//app.js is the parent components and pass down components property to components 
import Button from './components/Button';
import './App.css';
import Events from './components/Events';
import Child from './components/Child';


function App() {
    const person = {
      firstName: "Lindsay",
      lastName: "Criswell",
      city: "NYC"
    }
    const quote='today is a good day for react'
  return (
  
    <div className="App">
      {/* <Child person={person}/> */}
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
      <Events title= "Bad bunny concert title1" />
      <Events title= "Bad bunny concert title2" />
      <Events title= "Bad bunny concert title3" />
      <Events title= "Bad bunny concert title4" />
      <Events title= "Bad bunny concert title5" />
      {/* <Events title= "Bad bunny concert title5" date = {11/12} /> javascript divid*/}
      {/* <Events title= "Bad bunny concert title5" date = "11/12" /> 11/12 string */}
      <Child person={person}/>

      <Child quote={ quote }/>
    </div>
   
  );
}

export default App;
