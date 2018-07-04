import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import MainIcon from "../../assets/main-icon.png";
import ProfilePic from "../../assets/profile-pic.png";

import * as types from "../../actions";

import "./index.css";

const NavBar = props => {
  const location = props.location;

  const Button =
    location === "home" ? (
      <Link to="/new" onClick={() => props.updateLocation("new")}>
        <button>New post</button>
      </Link>
    ) : (
      <Link to="/" onClick={() => props.updateLocation("home")}>
        <button>Back to Home</button>
      </Link>
    );

  return (
    <nav>
      {Button}
      <img src={MainIcon} alt="main-logo" className="main-logo" />
      <div className="avatar">
        <img src={ProfilePic} alt="profile-pic" className="profile-img" />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocation: location =>
      dispatch({
        type: types.CHANGE_LOCATION,
        location
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
