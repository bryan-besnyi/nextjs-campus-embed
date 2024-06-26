// Home.js
import React, { useEffect, useState } from "react";
import AllSites from "./AllSites";

const Home = () => {
  const [sortedGroups, setSortedGroups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const campus = process.env.REACT_APP_CAMPUS_NAME;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://site-index.smccd.edu/api/indexItems?campus=${encodeURI(campus)}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const grouped = data.reduce((acc, site) => {
          const letter = site.title[0].toUpperCase();
          if (!acc[letter]) {
            acc[letter] = [];
          }
          acc[letter].push(site);
          return acc;
        }, {});
        const sorted = Object.entries(grouped).sort(([letterA], [letterB]) =>
          letterA.localeCompare(letterB)
        );
        setSortedGroups(sorted);
      })
      .catch((error) => {
        console.error("Failed to fetch sites:", error);
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <AllSites sortedGroups={sortedGroups} />;
};

export default Home;
