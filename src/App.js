import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import SectionLine from "./components/SectionLine";
import Editor from "./components/Editor";
import Displayer from "./components/Displayer";
import Profile from "./components/Profile";
import Main from "./components/Main";

import "./App.css";

class App extends Component {
  displayData = id => {
    return this.props.data[id];
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" render={props => <NavBar {...props} />} />
          <Route path="/" exact={true} component={Main} />
          <Route path="/new" render={() => <SectionLine action="add" />} />
          <Route
            path="/new"
            render={props => <Editor action="add" {...props} />}
          />

          <Route
            path="/post/:id"
            render={() => <SectionLine action="view" />}
          />
          <Route
            path="/post/:id"
            render={props => (
              <Displayer displayData={this.displayData} {...props} />
            )}
          />

          <Route
            path="/edit/:id"
            render={() => <SectionLine action="edit" />}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <Editor displayData={this.displayData} action="edit" {...props} />
            )}
          />

          <Route
            path="/profile"
            render={() => <SectionLine action="view-list" />}
          />
          <Route path="/profile" component={Profile} />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
