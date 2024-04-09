import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App";
import LetterSite from "./components/LetterSite";
import AllSites from "./components/AllSites";
import SearchResults from "./components/SearchResults";

const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="all" element={<AllSites />} />
          <Route path=":letter" element={<LetterSite />} />
          <Route path="/search/:query" element={<SearchResults />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
