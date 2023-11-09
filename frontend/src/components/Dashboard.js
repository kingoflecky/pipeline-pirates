import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Dashboard.css";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  const [submit, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Fetch data from the API
  // useEffect(() => {
  //   fetch("/v1/submit endpoint")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json);
  //       setFilteredData(json);
  //     });
  // }, []);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);

    // Update filteredData and display results only when the search button is clicked
    if (event.target.type === "submit") {
      axios.get("http://localhost:4000/v1/submit", {
        jiraTicket: event.target.value,
      });
    }
  };

  return (
    <div className="dashboard-page">
      <div className="search-bar">
        <ul className="dashboard-wrapper">SLOT</ul>
        <input
          type="text"
          placeholder="Enter Valid RFC"
          value={submit}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchChange}>submit</button>
      </div>

      {/* Display filtered list */}
      <ul className="dashboard-wrapper">
        {filteredData.map((post) => (
          <>
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
