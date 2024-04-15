import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sanitize } from "../utils/sanitize";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const campus = process.env.REACT_APP_CAMPUS_NAME;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://site-index.smccd.edu/api/indexItems?campus=${encodeURI(
            campus
          )}&search=${encodeURI(query)}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error("Failed to fetch search results:", error);
        setError(error.message);
      }
    };

    // Call the fetchData function if 'query' is present
    if (query) {
      fetchData();
    } else {
      // If there's no query, we can reset the results
      setResults([]);
    }
  }, [query]);

  if (error) {
    return <div>Error fetching results: {error}</div>;
  }

  return (
    <div>
      {query ? (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              <a
                href={sanitize(result.url)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {sanitize(result.title)}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please enter a search term.</p>
      )}
    </div>
  );
};

export default SearchResults;
