import React from "react";
import { Link } from "react-router-dom";

import Img from "../../assets/featured-1.jpg";
import "./index.css";

const Post = props => {
  const { title, description, id } = props.data;

  return (
    <Link to={`/post/${id}`}>
      <div className="post">
        <div className="post-img">
          <img src={Img} alt="" />
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
