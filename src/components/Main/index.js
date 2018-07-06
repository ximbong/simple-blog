import React from "react";
import { connect } from "react-redux";
import Post from "../Post";

import "./index.css";

const Main = props => {
  const data = props.data;
  const PostList = Object.values(data).map((e, i) => {
    return <Post data={data[i]} key={i} />;
  });

  const FirstColumnPost = PostList[0];
  const SecondColumnPost = PostList.slice(1, 4);
  const ThirdColumnPost = PostList.slice(4, 7);

  return (
    <React.Fragment>
      <div className="categories">
        <div className="category-name active">Home</div>
        <div className="category-name ">Future human</div>
        <div className="category-name">Culture</div>
        <div className="category-name">Tech</div>
        <div className="category-name">Entrepreneurship</div>
        <div className="category-name">Politics</div>
        <div className="category-name">More</div>
      </div>
      <div className="featured">
        <div className="featured-cols big-size">{FirstColumnPost}</div>
        <div className="featured-cols small-size">{SecondColumnPost}</div>
        <div className="featured-cols small-size">{ThirdColumnPost}</div>
      </div>
      <div className="featured-button">
        <a>See all featured</a>
      </div>
      <section>
        <div className="section-main">{PostList}</div>
        <div className="section-side">
          <div className="popular-col">
            <div className="col-title title">Popular posts</div>
            <div className="col-details">
              <div className="post">
                <div className="ranking">01</div>
                <div className="post-data">
                  <div className="title">The Gloves We'll Wear on Mars</div>
                  <div className="description">
                    The ultimate evening routine for cutting stress, creating
                    momentum, and cultivating happiness
                  </div>
                  <div className="info">Author name in Category name</div>
                  <div className="date">Jul 2</div>
                </div>
              </div>
              <div className="post">
                <div className="ranking">02</div>
                <div className="post-data">
                  <div className="title">The Gloves We'll Wear on Mars</div>
                  <div className="description">
                    The ultimate evening routine for cutting stress, creating
                    momentum, and cultivating happiness
                  </div>
                  <div className="info">Author name in Category name</div>
                  <div className="date">Jul 2</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps, null)(Main);
