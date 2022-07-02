import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Test from "./routes/Test";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Test" element={<Test />}>
        </Route>
        <Route path="/Detail" element={<Detail />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
