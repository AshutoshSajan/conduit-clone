import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, withRouter, Switch } from "react-router-dom";

import './Loading.css';
import Home from './Home';
import SignIn from './SignIn'
import SignUp from './SignUp'
import Header from './Header';
import User from './User';
import Post from './Post';
import NewPost from './NewPost';
import Settings from './Settings';
import Profile from './Profile';
import { store } from './Store';

export function chekckUser(){
  if(localStorage.jwt){
    const {jwt} = localStorage;
    fetch('https://conduit.productionready.io/api/user',{
    headers: {
      "Content-Type": "application/json",
      "authorization": `Token ${jwt}`
    }}).then(res => res.json()).then(data => {
      store.dispatch({type: 'ADD_USER_INFO', payload: data.user});
      userProfile(data.user.username);
    })
  }
}

function userProfile (name){
  console.log(name, "name");

  Promise.all([
    fetch(`https://conduit.productionready.io/api/articles?author=${name}&limit=5&offset=0`),
    fetch(`https://conduit.productionready.io/api/profiles/${name}`),
    fetch(`https://conduit.productionready.io/api/articles?favorited=${name}&limit=5&offset=0`)
  ])
  .then(res => {
    res.map(v => {
      console.log(v, "val");
      return v.json();
    });
  })
  .then(data => {
    console.log(data)
  });

  fetch(`https://conduit.productionready.io/api/articles?author=${name}&limit=5&offset=0`).then(res => res.json()).then(articles => {
      store.dispatch({type:"MY_ARTICLES", articles: articles})
    });
  fetch(`https://conduit.productionready.io/api/profiles/${name}`).then(res => res.json()).then(user => {
      store.dispatch({type:"MY_PROFILE", user: user});
  });
  fetch(`https://conduit.productionready.io/api/articles?favorited=${name}&limit=5&offset=0`).then(res => res.json()).then(favArticles => {
    console.log(favArticles, "in app");
      store.dispatch({
        type: "MY_FAVORITE_ARTICLES",
        articles: favArticles,
      })}
    )
}
chekckUser();


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
    // console.log(this.state, "app state");
    return (
      <React.Fragment>
        {
          navigator.onLine ? 
            <div>
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/SignUp" component={SignUp} />
                <Route path="/SignIn" component={SignIn} />
                <Route path="/User" component={User} />
                <Route path="/Post" component={Post} />
                <Route path="/NewPost" component={NewPost} />
                <Route path="/Settings" component={Settings} />
                <Route path="/Profile" component={Profile} />  
              </Switch>
            </div>
            : 
            <div>
              <p className={`error ${this.state.class}`}>No internet connection</p>
              <p className={`error-text ${this.state.error}`}>
                Please check your network connection
              </p>
            </div>      
        }
      </React.Fragment> 
    );
  }
}

export default withRouter(connect((state) => ({data: state})) (App));
