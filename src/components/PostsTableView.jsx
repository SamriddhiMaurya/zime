import React from "react";
import { Table, Pagination, Empty } from "antd";
import "./style.css"; 

const { Column } = Table;

const PostsTableView = ({
  filteredPosts,
  loading,
  currentPage,
  totalPosts,
  pageSize,
  handlePageChange,
}) => {
  return (
    <div>
      <Table
        dataSource={filteredPosts}
        loading={loading}
        pagination={false}
        rowKey={(record) => record.id}
        locale={{
          emptyText: <Empty description="No posts found" />,
        }}
      >
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Body" dataIndex="body" key="body" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags) => <span>{tags.join(", ")}</span>}
        />
      </Table>
      <Pagination
        style={{ marginTop: "16px", textAlign: "right" }}
        current={currentPage}
        total={totalPosts}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default PostsTableView;
