import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import './App.css'
import Header from "./components/Header";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by checking for a username in localStorage
    const username = localStorage.getItem("username");
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Header setIsLoggedIn={setIsLoggedIn} />
          <Dashboard />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;