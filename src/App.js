import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup } from "./Components/Signup";
import { Login } from "./Components/Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
