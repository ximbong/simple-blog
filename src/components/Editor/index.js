import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as types from "../../actions";

import "./index.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    const id = props.match
      ? parseInt(props.match.params.id, 10)
      : this.props.id;

    const data = this.props.displayData && this.props.displayData(id);

    const title = data ? data.title : "";
    const description = data ? data.description : "";
    const content = data ? data.content : "";
    const category = data ? data.category : "home";

    this.state = {
      title,
      category,
      description,
      content,
      id
    };
  }

  handle = (event, type) => {
    this.setState({
      [type]: event.target.value
    });
  };

  render() {
    const { title, description, category, content, id } = this.state;

    const action = this.props.action;

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
          </div>
          <select onClick={e => this.handle(e, "category")}>
            <option value="home">HOME</option>
            <option value="future_human">FUTURE HUMAN</option>
            <option value="mercedes">CULTURE</option>
            <option value="tech">TECH</option>
            <option value="entrepreneurship">ENTREPRENEURSHIP</option>
            <option value="politics">POLITICS</option>
            <option value="more">MORE</option>
          </select>
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
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
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

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
