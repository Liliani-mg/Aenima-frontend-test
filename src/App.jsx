import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ContainerLanding from "./components/ContainerLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ContainerLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
