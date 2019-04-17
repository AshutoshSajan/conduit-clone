import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Header from './Header';
import User from './User';
import './Loading.css';

class App extends Component {
  state = {
    class: ""
  }

  componentDidMount(){
    setTimeout(()=> this.setState({class: "network-error"}), 1000);
    setTimeout(()=> this.setState({class: ""}), 6000);
    setTimeout(()=> this.setState({error: "show-error"}), 6000);
  }

  render() {
    // console.log(this.state);
    return (
      <React.Fragment>
      {
        navigator.onLine ? 
        ( <>
            <Header />
            <Router>
              <Route exact path="/" component={Home} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/SignIn" component={SignIn} />
              <Route path="/User" component={User} />
            </Router>
          </>
        ): 
        <>
          <p className={`error ${this.state.class}`}>No internet connection</p>
          <p className={`error-text ${this.state.error}`}>
            Please check your network connection
          </p>
        </>      
      }
      </React.Fragment> 
    );
  }
}

export default connect((state) => ({data: state})) (App);
