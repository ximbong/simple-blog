import React from "react";

import Post from "../Post";

import "./index.css";

const my_ID = 0; //hard coded ID to simulate profile view

const Profile = props => {
  const data = props.displayMyPost(my_ID);

  const PostList = Object.keys(data).map(key => {
    return <Post data={data[key]} key={key} />;
  });

  return <div className="my-posts">{PostList}</div>;
};

export default Profile;
