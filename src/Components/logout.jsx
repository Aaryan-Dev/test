import React from "react";

function Logout() {
  const logout = () => {
    localStorage.removeItem("token");

    window.location.href = "https://profound-truffle-ebabc2.netlify.app/";
  };

  return (
    <div>
      <button onClick={logout}>Log out</button>
    </div>
  );
}

export { Logout };
