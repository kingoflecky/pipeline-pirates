import React, { useState, useEffect } from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);

  // this address can be changed to get any API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="dashboard-page">
      {/* this list gets content from API */}
      <ul className="dashboard-wrapper">
        {data.map((post) => (
          <>
            {/* change key to display desired data from api */}
            <div className="response-wrapper">
              <h3 key={post.id}>{post.title}</h3>
              <p key={post.id}>{post.body}</p>
            </div>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
