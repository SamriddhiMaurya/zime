// SearchInput.js
import React, { useState } from "react";
import { Input } from "antd";
import "./style.css";

const { Search } = Input;

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (value) => {
    setSearchText(value);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="search-input">
      <Search
        placeholder="Search posts"
        allowClear
        enterButton="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
