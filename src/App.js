
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";
import Result from "./routes/Result";

function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
