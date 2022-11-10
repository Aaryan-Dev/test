import React from "react";
import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handlesubmit = () => {
    const payload = {
      name,
      email,
      password,
    };

    fetch("https://bmi-lw21.onrender.com/signup", {
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
        window.location = "https://profound-truffle-ebabc2.netlify.app/login";
      });
  };

  return (
    <div>
      signup
      <br />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handlesubmit}>Sign up</button>
    </div>
  );
}

export { Signup };
