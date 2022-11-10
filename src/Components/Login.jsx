import React from "react";
import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = () => {
    const payload = {
      email,
      password,
    };

    fetch("https://bmi-lw21.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.msg.split(" ")[1]);
        window.location = "https://profound-truffle-ebabc2.netlify.app//";
      });
  };

  return (
    <div>
      Login
      <br />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handlesubmit}>Login</button>
    </div>
  );
}

export { Login };
