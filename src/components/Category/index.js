import React from "react";

import Post from "../Post";

const Category = props => {
  const name = props.match.params.name;
  const data = props.displayDataByCategory(name);

  const PostList = Object.keys(data).map(key => {
    return <Post data={data[key]} key={key} />;
  });

  return <div className="my-posts">{PostList}</div>;
};

export default Category;
