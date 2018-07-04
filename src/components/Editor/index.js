import React, { Component } from "react";

import "./index.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "",
      content: ""
    };
  }

  handle = (event, type) => {
    this.setState({
      [type]: event.target.value
    });
  };

  render() {
    const { title, category, content } = this.state;

    console.log(this.state);

    return (
      <div className="editor">
        <div className="inputs">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => this.handle(e, "title")}
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={e => this.handle(e, "category")}
          />
        </div>
        <textarea
          name="name"
          placeholder="Content"
          value={content}
          onChange={e => this.handle(e, "content")}
        />
        <div className="buttons">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>
    );
  }
}

export default Editor;
