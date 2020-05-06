import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logotype-container">
        <h1>Pokémon Cards</h1>
        <img
          src="https://image.flaticon.com/icons/svg/528/528098.svg"
          alt="site logo"
        />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="name of the card..."
          className="search-input"
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
    </div>
  );
}
