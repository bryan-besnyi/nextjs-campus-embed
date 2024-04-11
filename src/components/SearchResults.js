import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://site-index.smccd.edu/api/indexItems?search=${query}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setResults(data))
      .catch((error) => {
        console.error("Failed to fetch search results", error);
      });
  }, [query]);

  return (
    <div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
