import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Header from './Header';
import User from './User';
import Post from './Post';
import './Loading.css';
// import { Store } from './Store';

// default login condition
// if(localStorage.jwt){
//   fetch('https://conduit.productionready.io/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({user: this.state}),
//   }).then(res => res.json()).then(data => {
//     // console.log(data.user);
//     localStorage.setItem("jwt", data.user.token)
//     var jwt = localStorage.jwt;
//     this.props.history.push("/");
// }


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
              <Route path="/Post" component={Post} />
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
