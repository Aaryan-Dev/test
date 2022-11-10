import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Calculatebmi from "./Components/Calculatebmi";
import Logout from "./Components/Logout";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setAuth(false);
    } else {
      setAuth(true);
    }
  }, [setAuth]);
  return (
    <div className="App">
      <header className="App-header">
        {auth ? <Logout /> : <Navbar />}
        <br />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Calculatebmi />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
