import React from "react";

import { Link } from "react-router-dom";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const Displayer = props => {
  const id = parseInt(props.match.params.id, 10);
  const data = props.displayData(id);

  return (
    <div className="displayer">
      <div className="post-header">
        <div>
          <div className="title">{data.title}</div>
          <div className="description">{data.description}</div>
        </div>
        <div className="header-icons">
          <div className="edit">
            <Link to={`/edit/${id}`}>
              <i className="fa fa-edit" />
            </Link>
          </div>
          <div className="delete">
            <i className="fa fa-trash" />
          </div>
        </div>
      </div>
      <div className="content">{data.content}</div>
    </div>
  );
};

export default Displayer;
