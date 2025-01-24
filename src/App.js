import logo from './logo.svg';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        vivek shukla

        <Data />
      </header>
    </div>
  );
}

export function Data() {
  return (
    <div className="app">
      this is my first react project.....
      <Home />
    </div>
  );
}

export default App;
