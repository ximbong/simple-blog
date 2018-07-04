import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import SectionLine from "./components/SectionLine";
import Editor from "./components/Editor";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" component={NavBar} />
          <Route path="/new" render={() => <SectionLine />} />
          <Route path="/new" render={() => <Editor />} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
