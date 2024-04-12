import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const LetterSite = () => {
  const { letter } = useParams();
  const [letterSites, setLetterSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://site-index.smccd.edu/api/indexItems?campus=Skyline%20College&letter=${letter}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLetterSites(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch sites", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, [letter]);

  function sanitizeUrl(url) {
    return DOMPurify.sanitize(url);
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (letterSites.length === 0) {
    return <p>No sites to display</p>;
  }

  return (
    <div>
      <h2>Sites for "{letter.toUpperCase()}"</h2>
      <ul>
        {letterSites.map((site, index) => (
          <li key={site.id || index}>
            <a
              href={sanitizeUrl(site.url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LetterSite;
