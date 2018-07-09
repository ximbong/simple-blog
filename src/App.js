import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import NavBar from "./components/NavBar";
import SectionLine from "./components/SectionLine";
import Editor from "./components/Editor";
import Displayer from "./components/Displayer";
import Profile from "./components/Profile";
import Main from "./components/Main";
import Category from "./components/Category";
import Featured from "./components/Featured";

import "./App.css";

class App extends Component {
  displayDataById = id => {
    return this.props.data[id];
  };

  displayDataByCategory = name => {
    return Object.values(this.props.data).filter(e => e.category === name);
  };

  displayMyPost = id => {
    return Object.values(this.props.data).filter(e => e.author_id === id);
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Route path="/" render={props => <NavBar {...props} />} />
          <Route
            path="/simple-blog"
            exact={true}
            render={() => (
              <Main
                featured_posts={this.props.featured_posts}
                all_posts={this.props.data}
              />
            )}
          />

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
              <Displayer displayDataById={this.displayDataById} {...props} />
            )}
          />

          <Route
            path="/edit/:id"
            render={() => <SectionLine action="edit" />}
          />
          <Route
            path="/edit/:id"
            render={props => (
              <Editor
                displayDataById={this.displayDataById}
                action="edit"
                {...props}
              />
            )}
          />

          <Route
            path="/profile"
            render={() => <SectionLine action="view_list" />}
          />
          <Route
            path="/profile"
            render={() => <Profile displayMyPost={this.displayMyPost} />}
          />

          <Route
            path="/category/:name"
            render={props => <SectionLine action="view_category" {...props} />}
          />
          <Route
            path="/category/:name"
            render={props => (
              <Category
                displayDataByCategory={this.displayDataByCategory}
                {...props}
              />
            )}
          />

          <Route
            path="/featured"
            render={() => <SectionLine action="view_featured" />}
          />
          <Route
            path="/featured"
            render={() => (
              <Featured featured_posts={this.props.featured_posts} />
            )}
          />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    featured_posts: state.data.featured_posts,
    data: state.data.all_posts
  };
};

export default connect(mapStateToProps, null)(App);
