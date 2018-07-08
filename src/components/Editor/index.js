import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import importAll from "../../handler";
import * as types from "../../actions";
import category from "../../category";

import "./index.css";

class Editor extends Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id
      ? parseInt(props.match.params.id, 10)
      : this.props.id;

    const data = this.props.displayDataById && this.props.displayDataById(id);

    const title = data ? data.title : "";
    const description = data ? data.description : "";
    const content = data ? data.content : "";
    const category = data ? data.category : "future_human";
    const image_url = data ? data.image_url : "default-image.jpeg";

    this.state = {
      title,
      category,
      description,
      content,
      id,
      image_url,
      author_id: 0
    };
  }

  handle = (event, type) => {
    this.setState({
      [type]: event.target.value
    });
  };

  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({
          image_url: e.target.result
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  render() {
    const { title, description, content, id, image_url } = this.state;
    const { action, history } = this.props;

    const images = importAll(require.context("../../assets", false, /.jpeg/));

    const optionlist = Object.keys(category).map(e => {
      return (
        <option value={e} key={e}>
          {category[e]}
        </option>
      );
    });

    return (
      <div className="editor">
        <div className="inputs">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={e => this.handle(e, "title")}
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={e => this.handle(e, "description")}
            />
            <div className="select_image">
              <select
                value={this.state.category}
                onChange={e => this.handle(e, "category")}
              >
                {optionlist}
              </select>
              <input
                type="file"
                onChange={this.onImageChange}
                className="filetype"
                id="group_image"
              />
            </div>
          </div>
          <div className="image_previewer">
            <img id="target" src={images[image_url]} alt="" />
          </div>
        </div>
        <textarea
          name="name"
          placeholder="Content"
          value={content}
          onChange={e => this.handle(e, "content")}
        />
        <div className="buttons">
          <Link to={`/post/${id}`}>
            <button onClick={() => this.props[`${action}Data`](this.state, id)}>
              Save
            </button>
          </Link>
          <button onClick={history.goBack}>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addData: (data, id) =>
      dispatch({
        type: types.ADD_DATA,
        data,
        id
      }),
    editData: (data, id) =>
      dispatch({
        type: types.EDIT_DATA,
        data,
        id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
