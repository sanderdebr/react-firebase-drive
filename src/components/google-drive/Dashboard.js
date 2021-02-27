import AddFolderButton from "./AddFolderButton";
import { Container } from "react-bootstrap";
import Folder from "./Folder";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Navbar from "./Navbar";
import React from "react";
import { useFolder } from "../../hooks/useFolder";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}
