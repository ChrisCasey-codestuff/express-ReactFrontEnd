
import './App.css';
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Stocks from "./pages/Stocks";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
