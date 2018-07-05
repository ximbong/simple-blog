import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const SectionLine = ({ action }) => {
  let title = "";

  switch (action) {
    case "add":
      title = "New Post";
      break;
    case "view-list":
      title = "My Posts";
      break;
    case "view":
      title = "My Post";
      break;
    default:
      title = "Edit Post";
  }

  return (
    <div className="section-line">
      <a className="section-title">{title}</a>
      {action === "view-list" && (
        <Link className="link-button" to="/new">
          <button>New post</button>
        </Link>
      )}
    </div>
  );
};

export default SectionLine;
