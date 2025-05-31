import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function SearchBar({ filteredData, setFilteredData, setnewFData }) {
  const [search, setSearch] = useState("");
  
  // Add debounce or immediate search as needed
  useEffect(() => {
    if (!filteredData || !setnewFData) return;
    
    if (search.trim() === "") {
      setnewFData(filteredData);
      return;
    }

    const filteredResults = filteredData.filter((item) =>
      item.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setnewFData(filteredResults);
  }, [search, filteredData, setnewFData]);

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission behavior
    // The useEffect already handles the search, so this is just for the button click
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search restaurants..."
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
      />
      <button type="button" id="btn" onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

export default SearchBar;