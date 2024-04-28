import React from "react";
import { Select, Input } from "antd";
import './style.css'; 

const { Option } = Select;

const PostsFilter = ({
  selectedTags,
  searchQuery,
  handleTagsChange,
  handleSearchChange,
  posts,
}) => {
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)));

  return (
    <div style={{ marginBottom: "16px" }}>
      <Select
        mode="multiple"
        style={{ width: "200px" }}
        placeholder="Select tags"
        value={selectedTags}
        onChange={handleTagsChange}
        optionLabelProp="label"
      >
        {allTags.map((tag) => (
          <Option key={tag} value={tag} label={tag}>
            {tag}
          </Option>
        ))}
      </Select>
      <Input
        style={{ width: "200px", marginLeft: "16px" }}
        placeholder="Search posts"
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
      />
    </div>
  );
};

export default PostsFilter;
