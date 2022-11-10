import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Calculatenmi() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState([{}]);

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      setAuth(false);
      alert("first Login or Signup");
    } else {
      setAuth(true);
    }
  }, [setAuth]);

  const add = (res) => {
    setBmi([...bmi, res]);
  };

  // bmi.forEach((el) => {
  //   alert(el.bmi);
  // });

  const handlesubmit = () => {
    const bmi = Number(weight) / Number(height * 0.3048) ** 2;
    const payload = {
      height,
      weight,
      bmi,
    };

    fetch("https://bmi-lw21.onrender.com/calculateBMI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) =>
        // add(res)
        alert(res.bmi)
      );
  };

  return (
    <div>
      Get your BMI
      <br />
      <input
        type="number"
        placeholder="height in meter(s)"
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="weight in feet(s)"
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <button disabled={!auth} onClick={handlesubmit}>
        Get BMI
      </button>
    </div>
  );
}

export default Calculatebmi;
