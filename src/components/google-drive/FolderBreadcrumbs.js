import { Breadcrumb } from "react-bootstrap";
import React from "react";

export default function FolderBreadcrumbs({ currentFolder }) {
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white p-0" }}
    >
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
