import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";

const LetterSite = () => {
  const { letter } = useParams();
  const [letterSites, setLetterSites] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:3000/api/indexItems?letter=${letter}&campus=Skyline%20College`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setLetterSites(data))
      .catch((error) => {
        console.error("Failed to fetch sites", error);
      });
  }, [letter]);

  function sanitizeUrl(url) {
    return DOMPurify.sanitize(url);
  }

  return (
    <div>
      <h2>Sites for "{letter.toUpperCase()}"</h2>
      <ul>
        {letterSites.map((site, index) => (
          <li key={index}>
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
