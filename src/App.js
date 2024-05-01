import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import AllSites from "./components/AllSites";
import LetterSite from "./components/LetterSite";
import SearchResults from "./components/SearchResults";
import Navbar from "./components/Navbar";

const fetchSites = async () => {
  const campus = process.env.REACT_APP_CAMPUS_NAME;
  const response = await fetch(
    `https://site-index.smccd.edu/api/indexItems?campus=${encodeURI(campus)}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  const grouped = data.reduce((groups, site) => {
    const letter = site.title[0].toUpperCase();
    if (!groups[letter]) {
      groups[letter] = [];
    }
    groups[letter].push(site);
    return groups;
  }, {});
  return Object.entries(grouped); // convert the object into an array of arrays
};

const queryClient = new QueryClient();

const App = () => {
  const { data: allSites, isLoading, error } = useQuery("sites", fetchSites);

  if (error) {
    return <div>Error: {error.message}</div>;
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
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
