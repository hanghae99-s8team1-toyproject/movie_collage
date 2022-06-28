
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {console.log(process.env.PUBLIC_URL)}
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1>Hello, World!!</h1>
    //   </header>
    // </div>
  );
}

export default App;
