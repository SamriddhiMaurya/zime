// DataFetcher.js
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.css";
const DataFetcher = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const skip = parseInt(queryParams.get("skip")) || 0;
  const limit = parseInt(queryParams.get("limit")) || 10;
  const tags = queryParams.getAll("tags");
  const search = queryParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/posts?skip=${skip}&limit=${limit}`
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [skip, limit]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.set("skip", skip);
    params.set("limit", limit);
    tags.forEach((tag) => params.append("tags", tag));
    if (search) params.set("search", search);
    navigate(`?${params.toString()}`);
  }, [navigate, skip, limit, tags, search]);

  return <>{children}</>;
};

export default DataFetcher;
