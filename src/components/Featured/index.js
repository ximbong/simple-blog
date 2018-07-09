import React from "react";

import Post from "../Post";

const Featured = ({ featured_posts }) => {
  const PostList = featured_posts.map(e => {
    return <Post data={e} key={e.id} />;
  });

  return <div className="my-posts">{PostList}</div>;
};

export default Featured;
