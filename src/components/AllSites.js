import React, { useState, useEffect } from "react";

const AllSites = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/api/indexItems`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setSites(data))
      .catch((error) => {
        console.error("Failed to fetch sites", error);
      });
  }, []);

  return (
    <div>
      <h2>All Sites</h2>
      <ul>
        {sites.map((site, index) => (
          <li key={index}>
            <a href={site.url} target="_blank" rel="noopener noreferrer">
              {site.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllSites;
