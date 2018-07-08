import React from "react";
import { connect } from "react-redux";

import Post from "../Post";

import "./index.css";

const Profile = ({ data }) => {
  const PostList = Object.keys(data).map(key => {
    return <Post data={data[key]} key={key} />;
  });

  return <div className="my-posts">{PostList}</div>;
};

const mapStateToProps = state => {
  return {
    data: state.data.all_posts
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
