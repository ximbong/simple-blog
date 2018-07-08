import React from "react";
import { Link } from "react-router-dom";

import importAll from "../../handler";
import category from "../../category";

import "./index.css";

const Post = props => {
  const {
    title,
    description,
    id,
    image_url,
    author_id,
    category: category_id
  } = props.data;
  const images = importAll(require.context("../../assets", false, /.jpeg/));

  const category_name = category[category_id];
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
            <div className="info">
              Author {author_id} in {category_name}
            </div>
            <div className="date">Jul 2</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
