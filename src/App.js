import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  // this address can be changed to get any API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <h1>Dashboard</h1>

      {/* this list gets content from API */}
      <ul>
        {data.map((post) => (
          <>
          {/* change key to display desired data from api */}
            <h3 key={post.id}>{post.title}</h3>
            <p key={post.id}>{post.body}</p>
          </>
        ))}
      </ul>
    </div>
  );
};

export default App;
