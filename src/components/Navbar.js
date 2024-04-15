import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(inputValue)}`);
  };

  return (
    <header id="az-index">
      <div className="row">
        <div className="col-md-12">
          <ul className="list-inline">
            <li>
              <Link to="/">All</Link>
            </li>
            <li>
              <Link to="/a">A</Link>
            </li>
            <li>
              <Link to="/b">B</Link>
            </li>
            <li>
              <Link to="/c">C</Link>
            </li>
            <li>
              <Link to="/d">D</Link>
            </li>
            <li>
              <Link to="/e">E</Link>
            </li>
            <li>
              <Link to="/f">F</Link>
            </li>
            <li>
              <Link to="/g">G</Link>
            </li>
            <li>
              <Link to="/h">H</Link>
            </li>
            <li>
              <Link to="/i">I</Link>
            </li>
            <li>
              <Link to="/j">J</Link>
            </li>
            <li>
              <Link to="/k">K</Link>
            </li>
            <li>
              <Link to="/l">L</Link>
            </li>
            <li>
              <Link to="/m">M</Link>
            </li>
            <li>
              <Link to="/n">N</Link>
            </li>
            <li>
              <Link to="/o">O</Link>
            </li>
            <li>
              <Link to="/p">P</Link>
            </li>
            <li>
              <Link to="/q">Q</Link>
            </li>
            <li>
              <Link to="/r">R</Link>
            </li>
            <li>
              <Link to="/s">S</Link>
            </li>
            <li>
              <Link to="/t">T</Link>
            </li>
            <li>
              <Link to="/u">U</Link>
            </li>
            <li>
              <Link to="/v">V</Link>
            </li>
            <li>
              <Link to="/w">W</Link>
            </li>
            <li>
              <Link to="/x">X</Link>
            </li>
            <li>
              <Link to="/y">Y</Link>
            </li>
            <li>
              <Link to="/z">Z</Link>
            </li>
          </ul>
          <form onSubmit={handleSearch} className="row">
            <div className="col-md-9">
              <input
                type="text"
                className="form-control"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search..."
              />
            </div>
            <div className="col-md-3">
              <button type="submit" className="btn btn-warning">
                Search A - Z Index
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
