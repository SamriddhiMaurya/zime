import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import PostsTableView from "./PostsTableView";
import PostsFilter from "./PostsFilter";
import "./style.css"; 

const PostsTable = () => {
  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const pageSize = 10;
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const selectedTags = searchParams.get("tags")?.split(",") || [];
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const skip = (currentPage - 1) * pageSize;
        const response = await axios.get(
          `https://dummyjson.com/posts?skip=${skip}&limit=${pageSize}`
        );
        const { data, total } = response.data;
        setPosts(data || []); // Ensure data is not undefined
        setTotalPosts(total || 0); // Ensure total is not undefined
      } catch (error) {
        setError("Error fetching posts. Please try again later.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, location.search]);

  const handlePageChange = (page) => {
    setSearchParams({
      page: page.toString(),
      tags: selectedTags.join(","),
      search: searchQuery,
    });
  };

  const handleTagsChange = (tags) => {
    setSearchParams({ page: "1", tags: tags.join(","), search: searchQuery });
  };

  const handleSearchChange = (searchValue) => {
    setSearchParams({
      page: "1",
      tags: selectedTags.join(","),
      search: searchValue,
    });
  };

  const filteredPosts =
    posts.length > 0
      ? posts.filter(
          (post) =>
            (!selectedTags.length ||
              post.tags?.some((tag) => selectedTags.includes(tag))) && // Ensure tags is not undefined
            post.body.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div>
      <PostsFilter
        selectedTags={selectedTags}
        searchQuery={searchQuery}
        handleTagsChange={handleTagsChange}
        handleSearchChange={handleSearchChange}
        posts={posts} // Pass posts to the filter component if needed
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <PostsTableView
        filteredPosts={filteredPosts}
        loading={loading}
        currentPage={currentPage}
        totalPosts={totalPosts}
        pageSize={pageSize}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default PostsTable;
