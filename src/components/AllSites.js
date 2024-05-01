import React from "react";

const AllSites = ({ sortedGroups }) => {
  return (
    <div>
      {sortedGroups.map(([letter, sites]) => (
        <section key={letter}>
          <h2>{letter}</h2>
          <ul>
            {sites.map((site) => (
              <li key={site.id}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  {site.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default AllSites;
