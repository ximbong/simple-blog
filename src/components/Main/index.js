import React from "react";

import "./index.css";
import Img from "../../assets/featured-1.jpg";

const Main = () => {
  return (
    <React.Fragment>
      <div class="categories">
        <div class="category-name active">Home</div>
        <div class="category-name ">Future human</div>
        <div class="category-name">Culture</div>
        <div class="category-name">Tech</div>
        <div class="category-name">Entrepreneurship</div>
        <div class="category-name">Politics</div>
        <div class="category-name">More</div>
      </div>
      <div class="featured">
        <div class="featured-cols big-size">
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div class="title">The Gloves We'll Wear on Mars</div>
              <div class="description">
                The ultimate evening routine for cutting stress, creating
                momentum, and cultivating happiness
              </div>
              <div class="info">Author name in Category name</div>
              <div class="date">Jul 2</div>
            </div>
          </div>
        </div>
        <div class="featured-cols small-size">
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div class="title">The Gloves We'll Wear on Mars</div>
              <div class="description">
                The ultimate evening routine for cutting stress, creating
                momentum, and cultivating happiness
              </div>
              <div class="info">Author name in Category name</div>
              <div class="date">Jul 2</div>
            </div>
          </div>
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div class="title">The Gloves We'll Wear on Mars</div>
              <div class="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div class="info">Author name in Category name</div>
              <div class="date">Jul 2</div>
            </div>
          </div>
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div class="title">The Gloves We'll Wear on Mars</div>
              <div class="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div class="info">Author name in Category name</div>
              <div class="date">Jul 2</div>
            </div>
          </div>
        </div>
        <div class="featured-cols small-size">
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div class="title">The Gloves We'll Wear on Mars</div>
              <div class="description">
                The design challenge that'll make or break survival on the Red
                Planet
              </div>
              <div class="info">Author name in Category name</div>
              <div class="date">Jul 2</div>
            </div>
          </div>
        </div>
      </div>
      <div class="featured-button">
        <a>See all featured</a>
      </div>
      <section>
        <div class="section-main">
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div>
                <div class="title">The Gloves We'll Wear on Mars</div>
                <div class="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div class="info">Author name in Category name</div>
                <div class="date">Jul 2</div>
              </div>
            </div>
          </div>
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div>
                <div class="title">The Gloves We'll Wear on Mars</div>
                <div class="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div class="info">Author name in Category name</div>
                <div class="date">Jul 2</div>
              </div>
            </div>
          </div>
          <div class="post">
            <div class="post-img">
              <img src={Img} alt="" />
            </div>
            <div class="post-data">
              <div>
                <div class="title">The Gloves We'll Wear on Mars</div>
                <div class="description">
                  The ultimate evening routine for cutting stress, creating
                  momentum, and cultivating happiness
                </div>
              </div>
              <div>
                <div class="info">Author name in Category name</div>
                <div class="date">Jul 2</div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-side">
          <div class="popular-col">
            <div class="col-title title">Popular posts</div>
            <div class="col-details">
              <div class="post">
                <div class="ranking">01</div>
                <div class="post-data">
                  <div class="title">The Gloves We'll Wear on Mars</div>
                  <div class="description">
                    The ultimate evening routine for cutting stress, creating
                    momentum, and cultivating happiness
                  </div>
                  <div class="info">Author name in Category name</div>
                  <div class="date">Jul 2</div>
                </div>
              </div>
              <div class="post">
                <div class="ranking">02</div>
                <div class="post-data">
                  <div class="title">The Gloves We'll Wear on Mars</div>
                  <div class="description">
                    The ultimate evening routine for cutting stress, creating
                    momentum, and cultivating happiness
                  </div>
                  <div class="info">Author name in Category name</div>
                  <div class="date">Jul 2</div>
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
