import React, { useEffect } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import useSearch from "./hooks/useSearch";

function App() {
  const {
    items: sites,
    setItems: setSites,
    searchTerm,
    handleSearchChange,
  } = useSearch([]);

  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

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
  }, [setSites]);

  return (
    <div>
      <header>
        <nav style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <Link to="/all">All</Link>
          <Link to="/a">A</Link>
          <Link to="/b">B</Link>
          <Link to="/c">C</Link>
          <Link to="/d">D</Link>
          <Link to="/e">E</Link>
          <Link to="/f">F</Link>
          <Link to="/g">G</Link>
          <Link to="/h">H</Link>
          <Link to="/i">I</Link>
          <Link to="/j">J</Link>
          <Link to="/k">K</Link>
          <Link to="/l">L</Link>
          <Link to="/m">M</Link>
          <Link to="/n">N</Link>
          <Link to="/o">O</Link>
          <Link to="/p">P</Link>
          <Link to="/q">Q</Link>
          <Link to="/r">R</Link>
          <Link to="/s">S</Link>
          <Link to="/t">T</Link>
          <Link to="/u">U</Link>
          <Link to="/v">V</Link>
          <Link to="/w">W</Link>
          <Link to="/x">X</Link>
          <Link to="/y">Y</Link>
          <Link to="/z">Z</Link>
        </nav>
      </header>

      <main>
        <form onSubmit={handleSearchSubmit}>
          <input type="text" value={searchTerm} onChange={handleSearchChange} />
          <button type="submit">Search</button>
        </form>
        {searchTerm && (
          <ul>
            {sites.map((site, index) => (
              <li key={index}>
                <a href={site.url} target="_blank" rel="noopener noreferrer">
                  {site.title}
                </a>
              </li>
            ))}
          </ul>
        )}
        <Outlet />
      </main>
    </div>
  );
}

export default App;
