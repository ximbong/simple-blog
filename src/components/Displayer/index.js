import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as types from "../../actions";
import importAll from "../../handler";

import "font-awesome/css/font-awesome.min.css";
import "./index.css";

const Displayer = props => {
  const id = parseInt(props.match.params.id, 10);
  const { title, description, image_url, content } = props.displayDataById(id);

  const images = importAll(require.context("../../assets", false, /.jpeg/));
  return (
    <div className="displayer">
      <div className="post-header">
        <div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
        </div>
        <div className="header-icons">
          <div className="edit">
            <Link to={`/edit/${id}`}>
              <i className="fa fa-edit" />
            </Link>
          </div>
          <div className="delete">
            <Link to={`/profile`}>
              <i className="fa fa-trash" onClick={() => props.deleteData(id)} />
            </Link>
          </div>
        </div>
      </div>
      <div className="post-img">
        <img src={images[image_url]} />
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteData: id =>
      dispatch({
        type: types.DELETE_DATA,
        id
      })
  };
};

export default connect(null, mapDispatchToProps)(Displayer);
