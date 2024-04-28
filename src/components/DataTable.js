// DataTable.js
import React from "react";
import { Table } from "antd";
import "./style.css";

const DataTable = ({ data }) => {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Body",
      dataIndex: "body",
      key: "body",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => tags.join(", "),
    },
  ];

  return (
    <div className="table-container">
      <Table
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default DataTable;
