import React from "react";
import { Link } from "react-router-dom";

import importAll from "../../handler";

import "./index.css";

const Post = props => {
  const { title, description, id, image_url } = props.data;
  const images = importAll(require.context("../../assets", false, /.jpeg/));

  return (
    <Link to={`/post/${id}`}>
      <div className="post">
        <div className="post-img">
          <img src={images[image_url]} alt="" />
        </div>
        <div className="post-data">
          <div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
          <div>
            <div className="info">Author name in Category name</div>
            <div className="date">Jul 2</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
