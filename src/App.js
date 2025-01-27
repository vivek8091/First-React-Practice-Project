import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";

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

       

        <BrowserRouter>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/About">About</Link>
          </li>
        </ul>
          <Routes>
            <Route path="/" element="{<Home />}" />
            <Route path="/About" element="{<About />}" />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
