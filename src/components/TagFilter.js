// TagFilter.js
import React, { useState } from "react";
import { Select } from "antd";
import "./style.css";

const { Option } = Select;

const TagFilter = ({ onChange }) => {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleChange = (value) => {
    setSelectedTags(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="select-container">
      <Select
        mode="multiple"
        placeholder="Select tags"
        value={selectedTags}
        onChange={handleChange}
      >
        <Option value="technology">Technology</Option>
        <Option value="science">Science</Option>
        <Option value="art">Art</Option>
      </Select>
    </div>
  );
};

export default TagFilter;
