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
      <a>{title}</a>
      {action === "view-list" && (
        <Link to="/new">
          <button>Make a new post</button>
        </Link>
      )}
    </div>
  );
};

export default SectionLine;
