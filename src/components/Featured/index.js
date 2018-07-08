import React from "react";

import Post from "../Post";

const Featured = ({ featured_posts }) => {
  const PostList = Object.keys(featured_posts).map(key => {
    return <Post data={featured_posts[key]} key={key} />;
  });

  return <div className="my-posts">{PostList}</div>;
};

export default Featured;
