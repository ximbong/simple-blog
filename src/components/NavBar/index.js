import React from "react";
import { Link } from "react-router-dom";

import MainIcon from "../../assets/main-icon.png";
import ProfilePic from "../../assets/profile-pic.png";

import "./index.css";

const NavBar = props => {
  const location = props.location.pathname;

  const LeftNavButton =
    location === "/simple-blog" ? (
      <Link to="/new">
        <button>New post</button>
      </Link>
    ) : (
      <Link to="/simple-blog">
        <button>Back to Home</button>
      </Link>
    );

  return (
    <nav>
      {LeftNavButton}
      <Link to="/simple-blog">
        <img src={MainIcon} alt="main-logo" className="main-logo" />
      </Link>
      <div className="avatar">
        <Link to="/profile">
          <img src={ProfilePic} alt="profile-pic" className="profile-img" />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
