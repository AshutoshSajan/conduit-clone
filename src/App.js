import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Header from './Header';
import User from './User';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      	<Header />
      	<Router>
      		<Route exact path="/" component={Home} />
      		<Route path="/SignUp" component={SignUp} />
      		<Route path="/SignIn" component={SignIn} />
          <Route path="/User" component={User} />
      	</Router>
      </React.Fragment>
    );
  }
}

export default connect((state) => ({data: state})) (App);
