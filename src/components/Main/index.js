import React from "react";

import "./index.css";
import Img1 from "../../assets/featured-1.jpg";
import Img2 from "../../assets/featured-2.jpeg";
import Img3 from "../../assets/featured-3.jpeg";
import Img4 from "../../assets/featured-4.jpeg";
import Img5 from "../../assets/featured-5.jpg";
import Img6 from "../../assets/featured-6.jpeg";
import Img7 from "../../assets/featured-7.jpeg";
import Img8 from "../../assets/featured-8.jpeg";
import Img9 from "../../assets/featured-9.jpeg";

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
              <img src={Img1} alt="" />
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
              <img src={Img2} alt="" />
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
              <img src={Img3} alt="" />
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
              <img src={Img4} alt="" />
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
              <img src={Img5} alt="" />
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
              <img src={Img6} alt="" />
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
              <img src={Img7} alt="" />
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
              <img src={Img6} alt="" />
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
              <img src={Img7} alt="" />
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
              <img src={Img8} alt="" />
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
