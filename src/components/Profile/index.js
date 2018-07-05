import React from "react";

import Img from "../../assets/featured-1.jpg";
import "./index.css";

const Profile = () => {
  return (
    <div className="my-posts">
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
  );
};

export default Profile;