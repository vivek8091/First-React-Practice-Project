import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Header from "./Components/Header";


function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <About />
     <Footer />
    </div>
  );
}

export default App;
