import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllSites from "./components/AllSites";
import LetterSite from "./components/LetterSite";
import SearchResults from "./components/SearchResults";
import Navbar from "./components/Navbar";

const App = () => {
  const [allSites, setAllSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://site-index.smccd.edu/api/indexItems`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const grouped = data.reduce((groups, site) => {
          const letter = site.title[0].toUpperCase();
          if (!groups[letter]) {
            groups[letter] = [];
          }
          groups[letter].push(site);
          return groups;
        }, {});

        const sortedGroups = Object.entries(grouped).sort(
          ([letterA], [letterB]) => letterA.localeCompare(letterB)
        );

        setAllSites(sortedGroups);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch sites", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  // Render logic
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <Router basename="/search/zaindex">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<AllSites sortedGroups={allSites} />} />
          <Route path=":letter" element={<LetterSite />} />
          <Route path="search/:query" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
