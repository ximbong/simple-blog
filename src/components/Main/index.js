import React from "react";

import "./index.css";
import Img from "../../assets/featured-1.jpg";

const Main = () => {
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
        <div className="featured-cols big-size">
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
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
        <div className="featured-cols small-size">
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
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
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div className="title">The Gloves We'll Wear on Mars</div>
              <div className="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div className="info">Author name in Category name</div>
              <div className="date">Jul 2</div>
            </div>
          </div>
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div className="title">The Gloves We'll Wear on Mars</div>
              <div className="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div className="info">Author name in Category name</div>
              <div className="date">Jul 2</div>
            </div>
          </div>
        </div>
        <div className="featured-cols small-size">
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div className="title">The Gloves We'll Wear on Mars</div>
              <div className="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div className="info">Author name in Category name</div>
              <div className="date">Jul 2</div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-button">
        <a>See all featured</a>
      </div>
      <section>
        <div className="section-main">
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div>
                <div className="title">The Gloves We'll Wear on Mars</div>
                <div className="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div className="info">Author name in Category name</div>
                <div className="date">Jul 2</div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div>
                <div className="title">The Gloves We'll Wear on Mars</div>
                <div className="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div className="info">Author name in Category name</div>
                <div className="date">Jul 2</div>
              </div>
            </div>
          </div>
          <div className="post">
            <div className="post-img">
              <img src={Img} alt="" />
            </div>
            <div className="post-data">
              <div>
                <div className="title">The Gloves We'll Wear on Mars</div>
                <div className="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div className="info">Author name in Category name</div>
                <div className="date">Jul 2</div>
              </div>
            </div>
          </div>
        </div>
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

export default Main;
